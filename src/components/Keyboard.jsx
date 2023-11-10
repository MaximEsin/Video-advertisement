import React, { useEffect, useState } from "react";
import styles from "./Keyboard.module.scss";
import Button from "./Button";
import check from "../images/check.svg";
import { useSelector } from "react-redux";
import { addNumber } from "../services/actions";
import { useDispatch } from "react-redux";

const Keyboard = ({ setFinishActive, finishActive }) => {
  const dispatch = useDispatch();
  const [agreed, setAgreed] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const { number, focus } = useSelector((state) => state.dataReducer);
  const toggleAgreed = () => {
    setAgreed(agreed ? !agreed : true);
  };
  const index = number.findIndex((x) => x === "_");

  useEffect(() => {
    document.getElementById("11").focus();
  }, [focus]);

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

      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach((item) => {
        if (evt.key === item) {
          dispatch(addNumber(item));
        }
      });

      if (evt.key === "Backspace") {
        dispatch(addNumber("Del"));
      }
    };

    document.addEventListener("keydown", handleButtonClick);
  }, [buttonActive]);

  return (
    <div className={styles.keyboard}>
      <div
        className={
          finishActive
            ? styles.keyboard__contaier_off
            : styles.keyboard__container
        }
      >
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
          <Button text="1" value="1" id="11" />
          <Button text="2" value="2" id="12" />
          <Button text="3" value="3" id="13" />
          <Button text="4" value="4" id="21" />
          <Button text="5" value="5" id="22" />
          <Button text="6" value="6" id="23" />
          <Button text="7" value="7" id="31" />
          <Button text="8" value="8" id="32" />
          <Button text="9" value="9" id="33" />
          <Button text="Стереть" size="large" value="Del" active="no" id="40" />
          <Button text="0" value="0" active="no" id="0" />
        </div>
        <div className={styles.keyboard__agreeContainer}>
          <img
            src={check}
            alt="Знак подтверждения"
            className={
              agreed ? styles.keyboard__tick : styles.keyboard__tickDisabled
            }
          />
          <button
            id="50"
            className={styles.keyboard__button}
            onClick={toggleAgreed}
          />
          <p className={styles.keyboard__agreeText}>
            Согласие на обработку персональных данных
          </p>
        </div>
        <button
          id="60"
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
    </div>
  );
};

export default Keyboard;
