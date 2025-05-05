import { useEffect, useState, useRef, useCallback } from "react";
import "../../styles/index.css";
import "../../fillerstylepageuntilwearesorted.css";
import "../mtOliveArchive/mtOliveArchive.css";
import "../../mtolivearchive.css";

export default function Archive() {
  const [loading, setLoading] = useState(true);
  const [pdfsWithMetadata, setPdfsWithMetadata] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  const containerRef = useRef(null);
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
          buffer = lines.pop(); // carry over last partial line

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

  // Filtered items based on search and subject
  const filteredItems = pdfsWithMetadata.filter((pdf) => {
    const titleMatch = pdf.metadata?.Title.toLowerCase().includes(searchQuery.toLowerCase());
    const subject = pdf.metadata?.Subject || "";
    const subjectMatch = !subjectFilter || subject.toLowerCase().includes(subjectFilter.toLowerCase());
    return titleMatch && subjectMatch;
  });

  // Infinite scroll logic
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    if (scrollTop + clientHeight >= scrollHeight - 300) {
      setVisibleCount((prev) => Math.min(prev + batchSize, filteredItems.length));
    }
  }, [filteredItems.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(50); // reset scroll on new query
  };

  return (
    <section className="archive-container" ref={containerRef} style={{ height: "80vh", overflowY: "scroll" }}>
      <h2>Church Events PDFs</h2>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search PDFs by Title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Subject Dropdown */}
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

      {/* Error Message */}
      {error && <div>Error: {error}</div>}

      {/* No Matches */}
      {!loading && filteredItems.length === 0 && <p>No matching PDFs found</p>}

      {/* Grid of PDFs */}
      <div className="grid-container">
        {(loading && pdfsWithMetadata.length === 0
          ? Array.from({ length: 25 })
          : filteredItems.slice(0, visibleCount)
        ).map((pdf, index) =>
          pdf ? (
            <div className="grid-item" key={index}>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link-button"
              >
                {pdf.metadata?.Title || pdf.name}
              </a>
            </div>
          ) : (
            <div className="grid-item skeleton" key={`skeleton-${index}`}></div>
          )
        )}
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading more items...</p>}
    </section>
  );
}
