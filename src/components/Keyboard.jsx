import React, { useEffect, useState } from "react";
import styles from "./Keyboard.module.scss";
import Button from "./Button";
import check from "../images/check.svg";
import { useSelector } from "react-redux";

const Keyboard = ({ setFinishActive }) => {
  const [agreed, setAgreed] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const { number } = useSelector((state) => state.dataReducer);
  const toggleAgreed = () => {
    setAgreed(agreed ? !agreed : true);
  };
  const index = number.findIndex((x) => x === "_");

  useEffect(() => {
    if (agreed && index === -1) {
      setButtonActive(true);
    }
    if (!agreed || index !== -1) {
      setButtonActive(false);
    }
  }, [agreed, number]);

  useEffect(() => {
    const handleButtonClick = (evt) => {
      if (evt.key === "Enter" && buttonActive) {
        setFinishActive(true);
        return;
      }
    };
    document.addEventListener("keydown", handleButtonClick);
  }, [buttonActive]);

  return (
    <div className={styles.keyboard}>
      <p className={styles.keyboard__heading}>
        Введите ваш номер мобильного телефона
      </p>
      <p className={styles.keyboard__phoneNumber}>
        +7({number[0]}
        {number[1]}
        {number[2]}){number[3]}
        {number[4]}
        {number[5]}-{number[6]}
        {number[7]}-{number[8]}
        {number[9]}
      </p>
      <p className={styles.keyboard__subtext}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className={styles.keyboard__board}>
        <Button text="1" value="1" />
        <Button text="2" value="2" />
        <Button text="3" value="3" />
        <Button text="4" value="4" />
        <Button text="5" value="5" />
        <Button text="6" value="6" />
        <Button text="7" value="7" />
        <Button text="8" value="8" />
        <Button text="9" value="9" />
        <Button text="Стереть" size="large" value="Del" />
        <Button text="0" value="0" />
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
      <button
        className={
          buttonActive
            ? styles.keyboard__submitButton_active
            : styles.keyboard__submitButton
        }
        onClick={() =>
          buttonActive ? setFinishActive(true) : setFinishActive(false)
        }
      >
        Подтвердить номер
      </button>
    </div>
  );
};

export default Keyboard;
