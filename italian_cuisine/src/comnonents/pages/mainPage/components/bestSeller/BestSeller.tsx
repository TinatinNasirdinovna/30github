import React from "react";
import s from "./BestSeller.module.scss";

const BestSeller = () => {
  return (
    <section id={s.seller}>
      <div className="container">
        <div className={s.bestSeller}></div>
      </div>
    </section>
  );
};

export default BestSeller;
