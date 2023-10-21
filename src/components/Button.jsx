import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, size }) => {
  return (
    <button className={size ? styles.button__large : styles.button}>
      {text}
    </button>
  );
};

export default Button;
