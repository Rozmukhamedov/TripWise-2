import React from "react";
import classes from "./style.module.css";

function Main() {
  return (
    <div
      className={`${classes.main} w-full h-screen flex items-start justify-center relative`}
    >
      <div className={`${classes.texts} mt-60 text-center`}>
        <h1>
          ИНДИВИДУАЛЬНЫЕ ТУРЫ <br />В БОЛГАРИЮ <br />
          <span>ОТ 19 500 РУБЛЕЙ ЗА 11 НОЧЕЙ</span>
        </h1>
        <h3>
          ПОЛУЧИТЕ КОМПЛЕКСНОЕ НАСЛАЖДЕНИЕ - ОТ ПЕСЧАНЫХ ПЛЯЖЕЙ <br />
          ДО ВЫСОКОГОРНЫХ ЗАСНЕЖЕННЫХ ПИКОВ!
        </h3>
        <button type="button">Подобрать тур</button>
      </div>
    </div>
  );
}

export default Main;
