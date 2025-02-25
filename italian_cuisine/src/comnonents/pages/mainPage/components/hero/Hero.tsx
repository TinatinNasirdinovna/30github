import React from "react";
import s from "./Hero.module.scss";
import Button from "@/ui/button/Button";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import right from "@/assets/right-hero.png";
import left from "@/assets/left-hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id={s.hero}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.topLine}></div>
          <div className={s.centerLine}></div>
          <div className={s.heroContent}>
            <div className={s.hero}>
              <div className={s.delicious}>
                <Image src={right} alt="img" />
                <h2>Delicious</h2>
                <Image src={left} alt="img" />
              </div>
              <h1>Italian Cuisine</h1>
              <p>
                Classic steak & delicious with delightfully unexpenced twists.
                The Restaurant`s sunny decor was inspired by the diners
              </p>
              <Button>Reserve Your Table</Button>
            </div>
            <div className={s.headerBottom}>
              <div className={s.bottom}>
                <h4>Location</h4>
                <hr />
                <FaLocationDot />
                <a href="#">Rua da moeda 1g,1200-275,Portugal</a>
              </div>
              <div className={s.bottom}>
                <h4>Hotline</h4>
                <hr />
                <BsFillTelephoneFill />
                <a href="#">+771219900</a>
              </div>
            </div>
          </div>
          <div className={s.bottomLine}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
