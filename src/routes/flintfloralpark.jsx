import { Form } from "react-router-dom";

const FlintPark = ({ directory }) => {
  const [data, setData] = useState({ images: [], subdirectories: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Flask backend
    fetch(`/api/directory/${directory}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);  // Set the data from the response
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [directory]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Directory: {directory}</h2>

      {/* Display subdirectories */}
      {data.subdirectories.length > 0 && (
        <div>
          <h3>Subdirectories</h3>
          <ul>
            {data.subdirectories.map((subdir, index) => (
              <li key={index}>{subdir}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display images */}
      {data.images.length > 0 && (
        <div>
          <h3>Images</h3>
          <div>
            {data.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlintPark;
