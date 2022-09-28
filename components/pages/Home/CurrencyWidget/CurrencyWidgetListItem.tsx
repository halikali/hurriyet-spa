import { FC } from "react";

import style from "styles/components/pages/Home/CurrencyWidget.module.css";

const CurrencyWidgetListItem: FC = () => {
  return (
    <li className={style.listItem}>
      <span className={style.currencyName}>dolar</span>
      <div className={style.priceWrapper}>
        <p className={style.price}>18,5247</p>
        <span className={style.rateOfChange}>0,41%</span>
      </div>
      <span className={style.time}>23:37</span>
    </li>
  );
};

export default CurrencyWidgetListItem;
