import React from "react";
import styles from "./Banner.module.scss";
import qr from "../images/qr-code.png";
import { setFocus } from "../services/actions";
import { useDispatch } from "react-redux";

const Banner = ({ active, setActive, setPromoActive }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    setActive(false);
    setPromoActive(true);
    dispatch(setFocus());
  };
  return (
    <section className={active ? styles.banner : styles.banner__closed}>
      <p className={styles.banner__heading}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </p>
      <img src={qr} alt="QR-code" className={styles.banner__qr} />
      <p className={styles.banner__subtext}>Сканируйте QR-код или нажмите ОК</p>
      <button className={styles.banner__button} onClick={handleButtonClick}>
        ОК
      </button>
    </section>
  );
};

export default Banner;
