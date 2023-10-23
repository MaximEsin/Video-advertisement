import React from "react";
import styles from "./Button.module.scss";
import { useDispatch } from "react-redux";
import { addNumber } from "../services/actions";

const Button = ({ text, size, value, index }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addNumber(value, index))}
      className={size ? styles.button__large : styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
