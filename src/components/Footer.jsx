import { FaInstagram, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-content">

        <div className="footer-left">
          <h2 className="footer-logo">ShopiFY</h2>
          <p className="footer-tagline">
            Modern API-driven product catalog experience.
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-icon"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-icon"><FaFacebookF /></a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="footer-icon"><FaWhatsapp /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-icon"><FaGithub /></a>
          <a href="mailto:yourmail@gmail.com" className="footer-icon"><MdEmail /></a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopiFY. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;