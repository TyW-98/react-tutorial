import { useState } from "react";
import data from "../data";

export default function Form(props) {
  const [imageData, setImageData] = useState(data);

  const [image, setImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * data.data.memes.length);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setImage((prevImage) => {
      console.log(prevImage);
      return {
        ...prevImage,
        randomImage: data.data.memes[getRandomNumber()].url,
      };
    });
  }

  function handleTextInput(event) {
    const { name, value } = event.target;
    setImage((prevImage) => {
      return {
        ...prevImage,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form-container">
        <form className="form-main" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Top Text"
            value={image.topText}
            name="topText"
            onChange={handleTextInput}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            value={image.bottomText}
            name="bottomText"
            onChange={handleTextInput}
          />
          <button type="submit" className="submit-btn">
            Get a new Image 🖼
          </button>
        </form>
      </div>
      <div className="image-text-container">
        <img src={image.randomImage} className="meme-image" />
        <h2 className="image-top-text">{image.topText}</h2>
        <h2 className="image-bottom-text">{image.bottomText}</h2>
      </div>
    </main>
  );
}
