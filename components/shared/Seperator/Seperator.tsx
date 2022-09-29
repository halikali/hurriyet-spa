import Link from "next/link";
import { FC } from "react";

import style from "styles/components/shared/Seperator/Seperator.module.css";

const Seperator: FC = () => {
  return (
    <div className={style.seperator}>
      <h3 className={style.title}>Gözden kaçmasın</h3>
      <Link href={"/"}>
        <a className={style.subtitle}>hurriyetekstra</a>
      </Link>
    </div>
  );
};

export default Seperator;
