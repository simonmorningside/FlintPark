
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function LifeEvents() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ urls: []});


  useEffect(() => {
    // Replace with your actual API URL
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/pdf")
      .then((response) => response.json())
      .then((json) => {
        console.log("Received Data:", json); // Logs data to the console
        setData(json); // Store the data in state if needed
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Logs any errors
      });
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
{/* Pastors Section */}

<section className="founders-section">
          <h2 className="founders-header-text">Rev. Wade Hampton McKinney</h2>
          <div>
            <iframe src={data.urls[0]} width="100%" height="800px" title="Life Events"></iframe>
          </div>
        </section>
      </>
  );
}
