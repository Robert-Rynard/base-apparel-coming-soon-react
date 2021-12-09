import React from "react";
import arrowIcon from "../images/icon-arrow.svg";
import s from "./EmailInput.module.css";

const EmailInput = () => {
  return (
    <div className={s.input}>
      <input type="email" name="email" placeholder="Email Address" id="" />
      <button type="submit">
        <img src={arrowIcon} alt="arrow icon" />
      </button>
    </div>
  );
};

export default EmailInput;
