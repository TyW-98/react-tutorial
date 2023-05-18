import SwimmerImage from "../assets/swimmer-image.svg";
import StarIcon from "../assets/star-icon.svg";

export default function ExperienceCard() {
  return (
    <div className="individual-card">
      <div className="card-image-container">
        <img src={SwimmerImage} className="card-image" />
        <div className="soldout-box">SOLD OUT</div>
      </div>
      <div>
        <div>
          <div className="rating-container">
            <img src={StarIcon} className="star-icon" />
            <span>5.0</span>
            <span>(6)</span>
            <span className="dot">.</span>
            <span>USA</span>
          </div>
          <p className="activity">Swimming Lessons with Katie Zaferes</p>
          <p className="pricing">
            <strong>From $316</strong>/person
          </p>
        </div>
      </div>
    </div>
  );
}
