import React, { useState } from "react";
import styles from "./Keyboard.module.scss";
import Button from "./Button";
import check from "../images/check.svg";

const Keyboard = () => {
  const [phoneNumber, setPhoneNumber] = useState([
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
  ]);
  const [agreed, setAgreed] = useState(false);
  const toggleAgreed = () => {
    setAgreed(agreed ? !agreed : true);
  };
  return (
    <div className={styles.keyboard}>
      <p className={styles.keyboard__heading}>
        Введите ваш номер мобильного телефона
      </p>
      <p className={styles.keyboard__phoneNumber}>
        +7({phoneNumber[0]} {phoneNumber[1]} {phoneNumber[2]}){phoneNumber[3]}{" "}
        {phoneNumber[4]} {phoneNumber[5]}-{phoneNumber[6]} {phoneNumber[7]}-
        {phoneNumber[8]} {phoneNumber[9]}
      </p>
      <p className={styles.keyboard__subtext}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className={styles.keyboard__board}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="Стереть" size="large" />
        <Button text="0" />
      </div>
      <div className={styles.keyboard__agreeContainer}>
        <img
          src={check}
          alt="Знак подтверждения"
          className={
            agreed ? styles.keyboard__tick : styles.keyboard__tickDisabled
          }
        />
        <button className={styles.keyboard__button} onClick={toggleAgreed} />
        <p className={styles.keyboard__agreeText}>
          Согласие на обработку персональных данных
        </p>
      </div>
      <button className={styles.keyboard__submitButton}>
        Подтвердить номер
      </button>
    </div>
  );
};

export default Keyboard;
