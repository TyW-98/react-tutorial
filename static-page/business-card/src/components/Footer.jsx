import TwitterIcon from "../assets/twitter-icon.svg";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import GithubIcon from "../assets/github-icon.svg";

export default function Footer() {
  return (
    <div className="card-footer-container">
      <img src={TwitterIcon} />
      <img src={FacebookIcon} />
      <img src={InstagramIcon} />
      <img src={GithubIcon} />
    </div>
  );
}
