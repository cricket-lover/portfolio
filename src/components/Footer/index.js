import facebook from "../../facebook.svg";
import instagram from "../../instagram.svg";
import linkedin from "../../linkedin.svg";
import "./footer.css";

export const Footer = function ({ name }) {
  return (
    <footer>
      <div className="footer">
        <div className="social-handles">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedin} alt="linkedin" className="social-icon" />
          </a>
        </div>
        <div className="copyright-text">{`Developed by ${name} © 2022.`}</div>
      </div>
    </footer>
  );
};
