import React from "react";
import s from "./Footer.module.scss";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id={s.footer}>
      <div className="container">
        <div className={s.footer}>
          <div className={s.footer_main}>
            <h2>Restaurant</h2>
            <nav className={s.desktop_nav}>
              <a href="#">Interior</a>
              <a href="#">About Us</a>
              <a href="#">Menu</a>
              <a href="#">Contacts</a>
            </nav>
            <div className={s.footer_contact}>
              <a href="#" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <hr />
          <p>© 2023 Motion Study LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
