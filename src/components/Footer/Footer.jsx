import Email from "../../assets/icons/gmail.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Logo from "../../assets/logus.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="mailto:gimnasiaartisticabuchardo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Email} alt="" />
          </a>
          <a
            href="https://www.instagram.com/buchardogimnasiaartistica/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://wa.me/5491169753021"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" className="blur-logo" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
