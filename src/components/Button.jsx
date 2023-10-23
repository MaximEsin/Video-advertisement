import React from "react";
import styles from "./Button.module.scss";
import { useDispatch } from "react-redux";
import { addNumber } from "../services/actions";

const Button = ({ text, size, value }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addNumber(value))}
      className={size ? styles.button__large : styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
