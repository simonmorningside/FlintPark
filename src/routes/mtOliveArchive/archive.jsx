import { useEffect, useState, useRef, useCallback } from "react";
import "../mtOliveArchive/archive.css";

export default function Archive() {
  const [loading, setLoading] = useState(true);
  const [pdfsWithMetadata, setPdfsWithMetadata] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [previewData, setPreviewData] = useState(null);

  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(75);
  const batchSize = 25;

  useEffect(() => {
    const controller = new AbortController();
    const decoder = new TextDecoder();

    const fetchAndStream = async (url, cacheKey) => {
      const cachedEntry = sessionStorage.getItem(cacheKey);

      const getStartOfCurrentHour = () => {
        const now = new Date();
        now.setMinutes(0, 0, 0);
        return now.getTime();
      };

      const getStartOfNextHour = () => {
        const now = new Date();
        now.setHours(now.getHours() + 1, 0, 0, 0);
        return now.getTime();
      };

      const currentHourStart = getStartOfCurrentHour();
      const nextHourStart = getStartOfNextHour();

      if (cachedEntry) {
        try {
          const { timestamp, data } = JSON.parse(cachedEntry);
          const timestampDate = new Date(timestamp);
          const resetTime = new Date(nextHourStart);

          if (timestamp >= currentHourStart) {
            console.log(`✅ Using cached data for ${cacheKey}:`, data.length, "items");
            console.log(`🕒 Cached at: ${timestampDate.toLocaleTimeString()}, expires at: ${resetTime.toLocaleTimeString()}`);
            setPdfsWithMetadata((prev) => [...prev, ...data]);
            return;
          } else {
            console.log(`⏳ Cache expired for ${cacheKey} (cached at ${timestampDate.toLocaleTimeString()}, now ${new Date().toLocaleTimeString()})`);
            sessionStorage.removeItem(cacheKey);
          }
        } catch (e) {
          console.warn(`⚠️ Failed to parse cached data for ${cacheKey}:`, e);
          sessionStorage.removeItem(cacheKey);
        }
      }

      console.log(`⬇️ Fetching fresh data for ${cacheKey} from`, url);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
          credentials: "include",
        });

        if (!response.ok) throw new Error(`Failed to fetch: ${url}`);

        const reader = response.body.getReader();
        let buffer = "";
        const parsedItems = [];

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
                parsedItems.push(parsed);
                setPdfsWithMetadata((prev) => [...prev, parsed]);
              } catch (e) {
                console.warn("❌ Invalid JSON line (skipping):", line);
              }
            }
          }
        }

        const timestamp = Date.now();
        const resetTime = new Date(getStartOfNextHour());
        sessionStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp, data: parsedItems })
        );
        console.log(`✅ Cached ${parsedItems.length} items under ${cacheKey}`);
        console.log(`🕒 Cached at: ${new Date(timestamp).toLocaleTimeString()}, expires at: ${resetTime.toLocaleTimeString()}`);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(`🚨 Error during fetch for ${cacheKey}:`, err);
          setError(err.message);
          setLoading(false);
        }
      }
    };

    const loadAll = async () => {
      setLoading(true);
      await Promise.all([
        fetchAndStream(
          "https://floral-park-webserver-861401374674.us-central1.run.app/api/archive_full",
          "cache_archive"
        )
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

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
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

  useEffect(() => {
    handleScroll();
  }, [visibleCount, filteredItems.length, handleScroll]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(75);
  };

  return (
    <div className="archive-wrapper">
      <section
        className="archive-container"
        ref={containerRef}
        style={{ height: "80vh", overflowY: "scroll" }}
      >
        <h2>Church Events PDFs</h2>

        <div className="filer-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search PDFs by Title..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-container">
          <label htmlFor="subjectFilter" className="filter-label">Filter by Subject:</label>
          <select
            id="subjectFilter"
            value={subjectFilter}
            onChange={(e) => {
              setSubjectFilter(e.target.value);
              setVisibleCount(75);
            }}
            className="subject-dropdown"
          >
            <option value="">All Subjects</option>
            <option value="Birthdays">Birthdays</option>
            <option value="Life Events">Life Events</option>
            <option value="Graduations">Graduations</option>
            <option value="Correspondence">Correspondence</option>
            <option value="Funeral Programs">Celebration of Life</option>
            <option value="Obituaries">Obituaries</option>
            <option value="Photographs">Photographs</option>
            <option value="Choir Records">Choir Records</option>
            <option value="Pastors">Pastors</option>
            <option value="Summer Enrichment Program">Summer Program</option>
            <option value="Church Materials">Church Materials</option>
            <option value="Bulletins">Bulletins</option>
            <option value="Womens Day">Womens Day</option>
            <option value="Church Anniversaries">Church Anniversaries</option>
            <option value="Programs">Programs</option>
            <option value="Flyers">Flyers</option>
            <option value="Newsletters">Newsletters</option>
            <option value="The Olive Branch">The Olive Branch</option>
            <option value="Anniversaries">Anniversaries</option>
            <option value="Newspapers">Newspapers</option>
            <option value="Memos">Memos</option>
            <option value="Histories">Histories</option>
            <option value="Retirement">Retirement</option>
          </select>
        </div>

        {error && <div>Error: {error}</div>}
        {!loading && filteredItems.length === 0 && <p>No matching PDFs found</p>}

        <div className="grid-container">
          {(loading && pdfsWithMetadata.length === 0
            ? Array.from({ length: 25 })
            : filteredItems.slice(0, visibleCount)
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
    </div>
  );
}
