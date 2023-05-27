import locationIcon from "../assets/location-icon.png";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-image-container">
          <img src={props.items.image} className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-details">
            <img src={locationIcon} className="location-icon" />
            <span>{props.items.country.toUpperCase()}</span>
            <a href={props.items.googleMapsUrl} className="map-link">
              View on Google Maps
            </a>
          </div>
          <div className="card-description">
            <h2>{props.items.title}</h2>
            <h5>
              {props.items.startDate} - {props.items.endDate}
            </h5>
            <p>{props.items.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
