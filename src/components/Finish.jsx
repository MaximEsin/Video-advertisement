import React from "react";
import styles from "./Finish.module.scss";

const Finish = ({ active }) => {
  return (
    <div className={active ? styles.finish : styles.finish_off}>
      <p className={styles.finish__heading}>ЗАЯВКА ПРИНЯТА</p>
      <p className={styles.finish__description}>
        Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.{" "}
      </p>
    </div>
  );
};

export default Finish;
