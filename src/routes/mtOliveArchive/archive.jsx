import { useEffect, useState, useRef, useCallback } from "react";
import "../../styles/index.css";
import "../../fillerstylepageuntilwearesorted.css";
import "../mtOliveArchive/mtOliveArchive.css";
import "../../mtolivearchive.css";

function debounce(func, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function Archive() {
  const [loading, setLoading] = useState(true);
  const [pdfsWithMetadata, setPdfsWithMetadata] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [previewData, setPreviewData] = useState(null);

  const containerRef = useRef(null);            // Scroll container
  const gridContainerRef = useRef(null);        // Grid container (content that grows)
  const [visibleCount, setVisibleCount] = useState(50);
  const batchSize = 25;

  useEffect(() => {
    const controller = new AbortController();
    const decoder = new TextDecoder();

    const fetchAndStream = async (url) => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
          credentials: "include",
        });

        if (!response.ok) throw new Error(`Failed to fetch: ${url}`);

        const reader = response.body.getReader();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop();

          for (let line of lines) {
            if (line.trim()) {
              try {
                const parsed = JSON.parse(line);
                setPdfsWithMetadata((prev) => [...prev, parsed]);
              } catch (e) {
                console.warn("Invalid JSON line:", line);
              }
            }
          }
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    const loadAll = async () => {
      setLoading(true);
      await Promise.all([
        fetchAndStream("https://floral-park-webserver-861401374674.us-central1.run.app/api/church_events_metadata"),
        fetchAndStream("https://floral-park-webserver-861401374674.us-central1.run.app/api/choir"),
        fetchAndStream("https://floral-park-webserver-861401374674.us-central1.run.app/api/pdf"),
      ]);
      setLoading(false);
    };

    loadAll();
    return () => controller.abort();
  }, []);

  const filteredItems = pdfsWithMetadata.filter((pdf) => {
    const titleMatch = pdf.metadata?.Title?.toLowerCase().includes(searchQuery.toLowerCase());
    const subject = pdf.metadata?.Subject || "";
    const subjectMatch = !subjectFilter || subject.toLowerCase().includes(subjectFilter.toLowerCase());
    return titleMatch && subjectMatch;
  });

  const handleScroll = useCallback(
    debounce(() => {
      const container = containerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 300;

      if (nearBottom) {
        setVisibleCount((prev) => {
          const next = prev + batchSize;
          if (next < pdfsWithMetadata.length) {
            setTimeout(() => handleScroll(), 100);
          }
          return next;
        });
      }
    }, 200),
    [pdfsWithMetadata.length, batchSize]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Backup effect: if new content rendered and user is already at bottom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 10 && visibleCount < pdfsWithMetadata.length) {
      setVisibleCount((prev) => prev + batchSize);
    }
  }, [filteredItems.length, visibleCount, pdfsWithMetadata.length]);

  // ResizeObserver for grid growth
  useEffect(() => {
    const gridEl = gridContainerRef.current;
    const containerEl = containerRef.current;
    if (!gridEl || !containerEl) return;

    const observer = new ResizeObserver(() => {
      const { scrollTop, scrollHeight, clientHeight } = containerEl;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      if (atBottom && visibleCount < pdfsWithMetadata.length) {
        setVisibleCount((prev) => prev + batchSize);
      }
    });

    observer.observe(gridEl);
    return () => observer.disconnect();
  }, [pdfsWithMetadata.length, visibleCount]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(50);
  };

  const filteredVisible = filteredItems.slice(0, visibleCount);

  return (
    <section className="archive-container" ref={containerRef} style={{ height: "80vh", overflowY: "scroll" }}>
      <h2>Church Events PDFs</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search PDFs by Title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-container">
        <label htmlFor="subjectFilter">Filter by Subject:</label>
        <select
          id="subjectFilter"
          value={subjectFilter}
          onChange={(e) => {
            setSubjectFilter(e.target.value);
            setVisibleCount(50);
          }}
          className="subject-dropdown"
        >
          <option value="">All Subjects</option>
          <option value="Anniversary">Anniversary</option>
          <option value="newsletter">Newsletter</option>
          <option value="The Olive Branch">The Olive Branch</option>
          <option value="Pastor">Pastor</option>
          <option value="Bulletin">Bulletin</option>
          <option value="Mount Olive">Mount Olive</option>
          <option value="Obituary">Obituary</option>
          <option value="Womens Day">Womens Day</option>
          <option value="Baptist">Baptist</option>
          <option value="Graduation">Graduation</option>
          <option value="Birthday">Birthday</option>
        </select>
      </div>

      {error && <div>Error: {error}</div>}
      {!loading && filteredVisible.length === 0 && <p>No matching PDFs found</p>}

      <div className="grid-container" ref={gridContainerRef}>
        {(loading && pdfsWithMetadata.length === 0
          ? Array.from({ length: 25 })
          : filteredVisible
        ).map((pdf, index) =>
          pdf ? (
            <div className="grid-item" key={index}>
              <button
                onClick={() => setPreviewData({ metadata: pdf.metadata, url: pdf.url })}
                className="pdf-link-button"
              >
                {pdf.metadata?.Title || pdf.name}
              </button>
            </div>
          ) : (
            <div className="grid-item skeleton" key={`skeleton-${index}`}></div>
          )
        )}
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading more items...</p>}

      {previewData && (
        <div className="pdf-preview-overlay" onClick={() => setPreviewData(null)}>
          <div className="pdf-preview-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{previewData.metadata.Title}</h3>
            <p><strong>Identifier:</strong> {previewData.metadata.Identifier}</p>
            <p><strong>Subject:</strong> {previewData.metadata.Subject}</p>
            <a
              href={previewData.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "1rem", fontWeight: "bold", color: "#0077cc" }}
            >
              View Full PDF
            </a>
            <br />
            <button onClick={() => setPreviewData(null)} style={{ marginTop: "1rem" }}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
