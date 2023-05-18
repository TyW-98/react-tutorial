import ProfilePicture from "../assets/profile_picture.svg";
import EmailIcon from "../assets/mail-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";

export default function Info() {
  return (
    <div className="info-container">
      <img src={ProfilePicture} className="profile-picture" />
      <h3>Laura Smith</h3>
      <h4>Full Stack Developer</h4>
      <small className="website-info">Laura Smith website</small>
      <div className="info-btns">
        <button className="email-btn">
          <div>
            <img src={EmailIcon} />
            <p>Email</p>
          </div>
        </button>
        <button className="linkedin-btn">
          <div>
            <img src={LinkedinIcon} />
            <p>Linkedin</p>
          </div>
        </button>
      </div>
    </div>
  );
}
