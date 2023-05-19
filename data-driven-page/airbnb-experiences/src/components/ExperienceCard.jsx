import StarIcon from "../assets/star-icon.svg";

export default function ExperienceCard(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country.toLowerCase() === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="individual-card">
      <div className="card-image-container">
        <img src={props.activityImage} className="card-image" />
        {badgeText && <span className="soldout-box">{badgeText}</span>}
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
