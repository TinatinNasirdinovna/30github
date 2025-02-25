import React, { FC, ReactNode } from "react";
import s from "./Button.module.scss";
import { FaArrowRight } from "react-icons/fa";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <div className={s.button}>
      <hr className={s.top} />
      <button onClick={onClick}>
        {children}
        <FaArrowRight />
      </button>
      <hr className={s.bottom} />
    </div>
  );
};

export default Button;
