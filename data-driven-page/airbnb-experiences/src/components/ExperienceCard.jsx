import StarIcon from "../assets/star-icon.svg";

export default function ExperienceCard(props) {
  return (
    <div className="individual-card">
      <div className="card-image-container">
        <img src={props.activityImage} className="card-image" />
        <span className="soldout-box">SOLD OUT</span>
      </div>
      <div>
        <div>
          <div className="rating-container">
            <img src={StarIcon} className="star-icon" />
            <span>{props.rating}</span>
            <span>({props.reviewCount})</span>
            <span>•</span>
            <span>{props.country}</span>
          </div>
          <p className="activity">{props.title}</p>
          <p className="pricing">
            <strong>From ${props.price}</strong> /person
          </p>
        </div>
      </div>
    </div>
  );
}
