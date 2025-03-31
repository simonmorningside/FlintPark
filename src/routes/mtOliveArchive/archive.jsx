import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/index.css";
import "../../fillerstylepageuntilwearesorted.css";
import "../mtOliveArchive/mtOliveArchive.css";
import "../../mtolivearchive.css";

export default function Archive() {
  const [loading, setLoading] = useState(true);
  const [pdfs, setPdfs] = useState({ jpeg: [], pdf: [] });
  const [choirPdfs, setChoirPdfs] = useState([]);
  const [churchEventPdfs, setChurchEventPdfs] = useState([]); // New state for church events PDFs
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25; // 5 x 5 grid per page

  // Search state
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  // Fetch PDFs, Choir data, and Church Events data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pdfResponse, choirResponse, churchEventResponse] = await Promise.all([
          fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/pdf"),
          fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/choir"),
          fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/church_events")
        ]);

        // Check for errors in responses
        if (!pdfResponse.ok || !choirResponse.ok || !churchEventResponse.ok) {
          throw new Error("One or more API calls failed");
        }

        // Parse all responses
        const pdfData = await pdfResponse.json();
        const choirData = await choirResponse.json();
        const churchEventData = await churchEventResponse.json();

        // Combine the PDF and JPEG data
        setPdfs(pdfData);
        setChoirPdfs(choirData.pdf);
        setChurchEventPdfs(churchEventData.pdfs); // Store church event PDFs
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter PDFs based on search query
  const filteredItems = churchEventPdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic after filtering
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page after search
  };

  return (
    <>
      <section className="archive-container">
        <h2>Church Events PDFs</h2>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search PDFs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Render Filtered Church Events PDFs */}
        {currentItems.length > 0 ? (
          <div className="grid-container">
            {currentItems.map((pdf, index) => (
              <div className="grid-item" key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {pdf.name}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No matching PDFs found</p>
        )}

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1} className="nav-btn">
            <ChevronLeft size={20} />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages || totalPages === 0} className="nav-btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
