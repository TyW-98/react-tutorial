import { useState } from "react";
import data from "../data";

export default function Form(props) {
  const [imgUrl, setImgUrl] = useState("");

  function getRandomNumber() {
    return Math.floor(Math.random() * data.data.memes.length);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setImgUrl(() => {
      return data.data.memes[getRandomNumber()].url;
    });
  }

  return (
    <main>
      <div className="form-container">
        <form className="form-main">
          <input type="text" />
          <input type="text" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Get a new Image 🖼
          </button>
        </form>
      </div>
      <div>
        <img src={imgUrl} className="meme-image" />
      </div>
    </main>
  );
}
