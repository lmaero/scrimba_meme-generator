import { useEffect, useState } from "react";
import "./Meme.css";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: "https://i.imgflip.com/1bgw.jpg",
    imgName: "Futurama Fry",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setAllMemes(response.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function generateRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getMemeImage(event) {
    event.preventDefault();

    const randomNumber = generateRandomNumber(allMemes);
    const { url, name } = allMemes[randomNumber];

    setMeme((prevState) => {
      return { ...prevState, imgUrl: url, imgName: name };
    });
  }

  return (
    <main className="main">
      <form className="form" action="">
        <input
          className="form__input"
          type="text"
          name="topText"
          placeholder="Insert text..."
          onChange={handleChange}
          value={meme.topText}
        />

        <input
          className="form__input"
          type="text"
          name="bottomText"
          placeholder="Insert text..."
          onChange={handleChange}
          value={meme.bottomText}
        />

        <button onClick={getMemeImage} className="form__button" type="submit">
          Generate a new meme image
        </button>
      </form>

      <div className="img__container">
        <img className="main__img" src={meme.imgUrl} alt={meme.imgName} />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
