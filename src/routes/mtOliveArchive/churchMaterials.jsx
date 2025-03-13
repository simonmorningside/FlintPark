
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../styles/index.css';
import '../../fillerstylepageuntilwearesorted.css';
import '../mtOliveArchive/mtOliveArchive.css';
import '../../mtolivearchive.css';

export default function ChurchMaterials() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [pastors, setPastors] = useState({ images: [], videos: [] });
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 4;
  const selectedImageIndices = [4, 32, 10, 20, 7, 13, 17, 9, 5, 8, 9];

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Media Data:', data);
        setMedia(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  useEffect(() => {
    const fetchPastors = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/pastors');
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Pastors Data:', data);
        setPastors({ images: selectedImageIndices.map(index => data.images[index]).filter(Boolean) });
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastors();
  }, []);

  const handleNext = () => {
    if (startIndex + imagesPerPage < pastors.images.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - imagesPerPage >= 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
{/* Pastors Section */}

<section className="founders-section">
        <div className="founders-header">
          <h2 className="founders-header-text">Rev. Wade Hampton McKinney</h2>
        </div>
        <div className="founders-images-div" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={pastors.images[0]} alt="Rev. Wade Hampton McKinney" className="founders-image" />
          </div>
          <div>
            <p className="pastor-page-text">
            Wade McKinney (1892-1963) was born in Cleveland, Ga., to Wade and Mary Brown McKinney. He attended Atlanta Baptist College Academy, Morehouse College, and Colgate Rochester Theological Seminary and served in the U.S. Army in World War I. He came to Mt Olive in 1923 and lived at 1617 Harrison St. until moving to the parsonage at 1608 Park St. In 1924 he married Annie Ruth Berry (1900-1966), from Birmingham, Alabama. Ruth Berry McKinney had been educated at Spelman College and Columbia University. 

By the time he began in 1923, the mass migration to Flint had begun and the church was ramping up to meet the needs of recent migrants in the city. In June 1924 a singing group known as “The Ford Eight” visited Flint and performed at Mt Olive. The entrance fee was 25 cents. In 1925 the NAACP met at Mt Olive. In November of that same year a week-long series of evangelical events was held at Mt Olive with a visiting preacher from Connecticut. Miss Dorothy Green sang “ Steal Away to Jesus” and Mrs. Ruth McKinney sang “Stand By Me.”

During McKinney’s ministry, the church grew from less than 70 members to over 300. He established a church administrative structure, missionary society, a chapter of the Baptist Young People’s Union, the Ada Berry Bible class (named after his mother in law), Women's Day, a Senior Usher Board, a choir, a deacon board, and the trustee board. Rev. McKinney attended the Michigan-Ontario Baptist convention in Windsor in 1925 and read the convention reports for his evening sermon. In 1925 the membership was estimated at 200 (with 75 owning or purchasing their homes) when Rev. R.L. Bradby from Detroit’s Second Baptist and president of the Michigan-Ontario Baptist Convention launched a building fund for Mt Olive. The American Baptist Home Mission Society engaged an architect, but no building occurred until 1956. In 1926 services featured both a senior and a junior choir and performed songs such as Harry Burleigh’s “Deep River,” Felix Mendelsson’s “Oh Rest in the Lord,” and Holton's “The Chimes of the Holy Night.”

The McKinney family moved to Cleveland in 1928 to lead the large but divided Antioch Church where they became religious and community leaders who fought for civil rights. Rev. Wade Hampton McKinney is featured in the Morehouse College International Hall of Honor and his family papers and photos are on file at Cleveland Public LIbrary. 


(photo: Morehouse College International Hall of Honor portrait)

            </p>
          </div>
        </section>
      </>
  );
}
