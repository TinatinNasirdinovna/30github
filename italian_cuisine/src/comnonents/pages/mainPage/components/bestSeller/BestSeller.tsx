"use client";
import React, { useState } from "react";
import s from "./BestSellers.module.scss";
import Image from "next/image";
import leftIcon from "@/assets/img/hero-start.svg";
// import { DATA } from "@/constants/data";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const BestSellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    // if (isAnimating) return;
    // setIsAnimating(true);
    // setTimeout(() => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % DATA.length);
    //   setIsAnimating(false);
    // }, 500);
  };

  const handlePrev = () => {
    // if (isAnimating) return;
    // setIsAnimating(true);
    // setTimeout(() => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === 0 ? DATA.length - 1 : prevIndex - 1
    //   );
    //   setIsAnimating(false);
    // }, 500);
  };

  // const visibleItems = [
  //   DATA[currentIndex],
  //   DATA[(currentIndex + 1) % DATA.length],
  // ];

  return (
    <section id={s.bestSellers}>
      <div className="container2">
        <div className={s.bestSellers}>
          <div className={s.text}>
            <div className={s.title}>
              <Image src={leftIcon} alt="Decorative Left Icon" />
              <h2>Best Sellers</h2>
            </div>
            <h2>
              You Only Reserve <br />
              Exception
            </h2>
            <p>
              Each location has a menu that’s curated just for them. See what’s
              new at your Cafesio and you’ll find Cafesio Covent Garden moments.
            </p>
          </div>
          <div className={`${s.slider} ${isAnimating ? s.animating : ""}`}>
            <button className={s.arrowLeft} onClick={handlePrev}>
              <RxDoubleArrowLeft />
            </button>
            <div className={s.imgWrapper}>
              {[].map((item, id) => (
                <div key={id} className={s.img}>
                  <Image src={""} alt={`Best Seller ${id}`} priority />
                </div>
              ))}
            </div>
            <button className={s.arrowRight} onClick={handleNext}>
              <RxDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
