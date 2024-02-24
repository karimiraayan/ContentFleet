import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_IMAGE_API_URL;
const screenWidth = window.innerWidth;

function GenerateCols(numberOfCols, images) {
  const cols = [];
  for (let i = 0; i < numberOfCols; i++) {
    cols[i] = (
      <div className="gallery-col" key={i}>
        {images.map((image, index) => {
          if (index % numberOfCols === i) {
            return (
              <div className="gallery-item" key={image.id}>
                <img src={image.urls.small} alt={image.alt_description} />
              </div>
            );
          }
        })}
      </div>
    );
  }
  return cols;
}

export default function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <main id="gallery">
      <h1>Gallery</h1>
      <div className="gallery-container">
        {screenWidth < 768
          ? GenerateCols(2, images)
          : screenWidth < 1024
          ? GenerateCols(3, images)
          : GenerateCols(4, images)}
      </div>
    </main>
  );
}
