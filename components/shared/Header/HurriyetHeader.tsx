import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import assets from "assets";
import NavLinks from "mocks/HurriyetHeaderLinks.json";
import HurriyetHamburgerMenu from "../HamburgerMenu/HurriyetHamburgerMenu";
import style from "styles/components/shared/Header/HurriyetHeader.module.css";

const HurriyetHeader: FC = () => {
  const { links } = NavLinks;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchbarOpen, setSearchbarOpen] = useState<boolean>(false);
  const router = useRouter();

  const isMenuOpen = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      router.push(`/haberleri/${event.currentTarget.value}`);
      event.currentTarget.value = "";
    }
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
        onClick={() => {
          setSearchbarOpen(!searchbarOpen);
        }}
      />

      <input
        type="text"
        placeholder="Yeni bir arama yapın"
        className={[style.searchbar, searchbarOpen && style.active].join(" ")}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleKeyDown(e);
        }}
      />
    </header>
  );
};

export default HurriyetHeader;
