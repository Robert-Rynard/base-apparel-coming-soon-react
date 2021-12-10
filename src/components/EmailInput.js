import React, { useState } from "react";

import arrowIcon from "../images/icon-arrow.svg";
import cn from "classnames";
import s from "./EmailInput.module.css";

const EmailInput = () => {
  const [input, setInput] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const inputHandler = ({ target: { value } }) => {
    setInput(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsInputValid(/\S+@\S+\.\S+/.test(event.target[0].value));
  };

  return (
    <div className={cn(s.input, { [s.invalid]: !isInputValid })}>
      <form onSubmit={submitHandler} action="">
        <input
          type="text"
          onChange={inputHandler}
          name="email"
          placeholder="Email Address"
          id=""
          value={input}
        />
        <button type="submit">
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </form>
    </div>
  );
};

export default EmailInput;
