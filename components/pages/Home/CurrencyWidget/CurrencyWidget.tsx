import { FC } from "react";

import style from "styles/components/pages/Home/CurrencyWidget.module.css";
import CurrencyWidgetListItem from "./CurrencyWidgetListItem";

const CurrencyWidget: FC = () => {
  return (
    <ul className={style.currencyWidget}>
      <CurrencyWidgetListItem/>
      <CurrencyWidgetListItem/>
      <CurrencyWidgetListItem/>
      <CurrencyWidgetListItem/>
    </ul>
  );
};

export default CurrencyWidget;
