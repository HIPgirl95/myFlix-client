import React, { useRef, useState } from "react";
import { getImages, uploadImages } from "../../api";

export const Suggestions = () => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const storedToken = localStorage.getItem("token");

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = fileInputRef.current.files[0];
    if (!file) return;

    formData.append("image", file);

    try {
      const response = await uploadImages(formData, storedToken);

      if (response.ok) {
        console.log("Image uploaded!");
        handleRetrieveImages();
      } else {
        console.error("Upload Failed");
      }
    } catch (error) {
      console.error("Upload error: ", error);
    }
  };

  const handleRetrieveImages = async () => {
    try {
      const response = await getImages(storedToken);
      const files = await response.json();

      if (!Array.isArray(files)) {
        throw new Error("Invalid Response Format");
      }
      setImages(files);
    } catch (error) {
      console.error("error retrieving images: ", error);
    }
  };

  return (
    <div>
      <h6>
        If you want a movie to be added to the database, upload a movie poster
        (image file). <br />
        The image name should be the movie title.
      </h6>
      <form onSubmit={handleUpload}>
        <input type="file" name="image" ref={fileInputRef} />
        <button type="submit">Upload</button>
      </form>

      <button onClick={handleRetrieveImages}>Show Posters</button>

      <div id="gallery">
        {images.map((img, index) => (
          <img
            key={img.key || index}
            src={img.url} // Use your S3 bucket path here
            alt={img.key || `image-${index}`}
            style={{ maxWidth: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};
