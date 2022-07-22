import "./Header.css";
import trollFace from "../assets/troll-face.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="A famous troll face of a meme" />
      <h2 className="header__title">Meme Generator</h2>
      <p className="header__project">React Course - Project 3</p>
    </header>
  );
}
