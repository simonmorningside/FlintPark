import { useState, useEffect } from 'react';
import '../App.css';
import '../index.css';


export default function Home() {
  //const [count, setCount] = useState(0)
  const [maps, setMaps] = useState([]);
  useEffect(() => {
    fetch("https://floral-park-webserver-861401374674.us-central1.run.app/api/maps")
      .then((response) => response.json())
      .then((data) => {
        setMaps(data.maps);  // Set directories data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page">
      {/* Left Section for Text and Heading */}
      <div className="content">
        <h1 className="textAlignLeft">Flint Floral Neighborhood</h1>
        <p className="textAlignLeft">
          Welcome to the Flint Floral Neighborhood. Explore the map on the right
          to learn more about the vibrant community of Flint Floral Park, Michigan 
          and the history it holds.
          <br></br><br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, ante 
          in fermentum imperdiet, eros ex egestas nisi, ac fermentum purus magna at 
          magna. Nam fermentum rutrum turpis ac molestie. Phasellus ac velit at elit 
          lobortis tempor sed non est. In vitae enim eu ipsum tincidunt placerat quis 
          quis mauris. Ut non suscipit massa.
          <br></br><br></br>
          Cras ut nulla ut massa egestas molestie 
          consequat id est. Nunc commodo hendrerit nisl, quis maximus diam consectetur 
          at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
          ac turpis egestas. Aliquam facilisis volutpat nulla, a vehicula urna imperdiet ac. 
          Nam interdum arcu eget lorem suscipit pellentesque. Sed gravida leo et posuere 
          gravida. Donec sit amet tellus vitae erat feugiat imperdiet. Praesent pulvinar 
          magna imperdiet, iaculis sem sed, feugiat erat. Sed quis ante at tellus faucibus 
          sagittis sed ac lorem. Pellentesque purus neque, vulputate vel diam eget, tempor 
          imperdiet nibh
        </p>
      </div>
   

      {/* Right Section for Map */}
      <div className="front-map">
      <img
              src={maps[2]?.url}
              alt={`Placeholder for map`}
              className="front-column-image"
      />
      </div>
    </div>
  );
}
