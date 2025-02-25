"use client";
import React, { useState } from "react";
import s from "./Header.module.scss";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import menu from "@/assets/menu-header.png";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id={s.header}>
      <div className="container">
        <div className={s.header}>
          <h2>Restaurant</h2>
          <span className={s.menu} onClick={toggleMobileMenu}>
            <Image src={menu} alt="menu icon" width={34} height={34} />
          </span>
          <nav className={s.desktopNav}>
            <a href="#">Interior</a>
            <a href="#">About Us</a>
            <a href="#">Menu</a>
            <a href="#">Contacts</a>
            <div className={s.header_search}>
              <IoSearch />
              <form>
                <input type="text" placeholder="Search" />
              </form>
            </div>
            <select>
              <option value="EN">En</option>
              <option value="RU">Ru</option>
              <option value="KG">Kg</option>
            </select>
          </nav>
          <div className={`${s.mobileNav} ${isMobileMenuOpen ? s.open : ""}`}>
            <div className={s.mobileNavHeader}>
              <h2>Restaurant</h2>
              <span className={s.closeBtn} onClick={toggleMobileMenu}>
                <IoMdClose size={24} />
              </span>
            </div>
            <div className={s.mobileNavLinks}>
              <a href="#">Interior</a>
              <a href="#">About Us</a>
              <a href="#">Menu</a>
              <a href="#">Contacts</a>
              <div className={s.langOptions}>
                <span className={s.active}>EN</span>
                <span>RU</span>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className={s.overlay} onClick={toggleMobileMenu}></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
