import HeroImages from "../assets/group-image.svg";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={HeroImages} className="hero-image" />
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <h5>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </h5>
      </div>
    </div>
  );
}
