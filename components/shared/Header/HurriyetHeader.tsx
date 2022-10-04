import { FC, useState } from "react";
import Link from "next/link";

import NavLinks from "mocks/HurriyetHeaderLinks.json";
import assets from "assets";
import style from "styles/components/shared/Header/HurriyetHeader.module.css";
import Image from "next/image";
import HurriyetHamburgerMenu from "../HamburgerMenu/HurriyetHamburgerMenu";

const HurriyetHeader: FC = () => {
  const { links } = NavLinks;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const isMenuOpen = (status: boolean): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.header}>
      <HurriyetHamburgerMenu isMenuOpen={isMenuOpen} menuOpenity={menuOpen} />
      <div className={style.brandLogoWrapper}>
        <Image
          src={assets.icons.hamburgerOpen.default.src}
          alt="hürriyet menü icon"
          className={style.menuLogo}
          width={"29"}
          height={"29"}
          priority
          decoding="async"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <Link href={"/"} title={"www.hurriyet.com.tr"}>
          <a className={style.brandLogo}>
            <Image
              src={assets.logos.whiteLogo.default.src}
              alt="hürriyet.com.tr"
              width={"100"}
              height={"29"}
              priority
              decoding="async"
            />
          </a>
        </Link>
      </div>
      <nav className={style.nav}>
        <ul className={style.navList}>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Image
        className={style.searchIcon}
        src={assets.icons.searchIcon.default.src}
        alt="hürriyet arama icon"
        width={"29"}
        height={"29"}
        priority
        decoding="async"
      />
    </header>
  );
};

export default HurriyetHeader;
