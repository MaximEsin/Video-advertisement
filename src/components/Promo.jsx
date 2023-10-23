import React from "react";
import styles from "./Promo.module.scss";
import qr from "../images/qr-code.png";
import Keyboard from "./Keyboard";

const Promo = ({ active, setActive }) => {
  return (
    <section className={active ? styles.promo : styles.promo__closed}>
      <Keyboard />
      <div className={styles.promo__container}>
        <button
          className={styles.promo__button}
          onClick={() => setActive(false)}
        />
        <div className={styles.promo__QRcontainer}>
          <p className={styles.promo__QRtext}>
            Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </p>
          <img src={qr} alt="QR code" className={styles.promo__qr} />
        </div>
      </div>
    </section>
  );
};

export default Promo;
