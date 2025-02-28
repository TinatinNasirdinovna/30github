import React from "react";
import s from "./AboutUs.module.scss";
import Image from "next/image";
import left from "@/assets/img/hero-start.svg";
import img1 from "@/assets/img/aboutUs1.svg";
import img2 from "@/assets/img/aboutUs2.svg";

const AboutUs = () => {
  return (
    <section id={s.aboutUs}>
      <div className="container2">
        <div className={s.aboutUs}>
          <div className={s.title}>
            <Image src={left} alt="img" />
            <h3>About Us</h3>
          </div>
          <div className={s.text}>
            <h2>
              A Journey Throught <br /> Cafesio Flavors
            </h2>
            <p>
              Try dishes that will open up new tastes for you and delight your
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
          </div>
          <div className={s.imgs}>
            <Image src={img1} alt="img" />
            <Image src={img2} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
