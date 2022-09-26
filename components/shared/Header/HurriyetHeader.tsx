import Link from "next/link";

import NavLinks from "../../../mocks/HurriyetHeaderLinks.json";
import assets from "../../../assets";
import style from "../../../styles/components/shared/Header/HurriyetHeader.module.css";

const HurriyetHeader = () => {
  const { links } = NavLinks;
 
  return (
    <header className={style.header}>
      <div className={style.brandLogoWrapper}>
        <img src={assets.icons.hamburgerOpen.default.src} alt="hürriyet menü icon" className={style.menuLogo} width={"160"} height={"90"}/>
        <img src={assets.logos.whiteLogo.default.src} alt="hürriyet.com.tr" className={style.brandLogo} width={"160"} height={"90"} />
      </div>
      <nav className={style.nav}>
        <ul className={style.navList}>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={"/"}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <img className={style.searchIcon} src={assets.icons.searchIcon.default.src} alt="hürriyet arama icon" width={"160"} height={"90"}/>
    </header>
  );
};

export default HurriyetHeader;
