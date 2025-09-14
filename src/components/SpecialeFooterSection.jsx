import {
  faApple,
  faFacebook,
  faFacebookF,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkItem from "./LinkItem";

const SpecialeFooterSection = () => {
  return (
    <div className="f_section">
      <div className="min_section">
        <h3 className="f_s_title">Our Mobile App</h3>
        <div className="mobile_budgets">
          <LinkItem path={""}>
            <div className="mobile_budge">
              <FontAwesomeIcon icon={faApple} size="2x" />
              <div className="mobile_budge_text">
                <span>Download on the</span>
                <h4>App Store</h4>
              </div>
            </div>
          </LinkItem>

          <LinkItem path={""}>
            <div className="mobile_budge">
              <FontAwesomeIcon icon={faGooglePlay} size="2x" />
              <div className="mobile_budge_text">
                <span>Get it on</span>
                <h4>Google Play</h4>
              </div>
            </div>
          </LinkItem>
        </div>
      </div>
      <div className="min_section">
        <h3 className="f_s_title">Connect with Us</h3>
        <div className="social_links">
          <LinkItem path={""}>
            <FontAwesomeIcon icon={faFacebookF} size="xl" />
          </LinkItem>

          <LinkItem path={""}>
            <FontAwesomeIcon icon={faTwitter} size="xl" />{" "}
          </LinkItem>
          <LinkItem path={""}>
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </LinkItem>
          <LinkItem path={""}>
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </LinkItem>
        </div>
      </div>
    </div>
  );
};

export default SpecialeFooterSection;
