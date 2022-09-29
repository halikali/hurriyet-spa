import { FC } from "react";

import style from "styles/components/shared/Seperator/Seperator.module.css";

const Seperator: FC = () => {
  return (
    <div className={style.seperator}>
      <h5 className={style.title}>Gözden kaçmasın</h5>
      <h6 className={style.subtitle}>hurriyetekstra</h6>
    </div>
  );
};

export default Seperator;
