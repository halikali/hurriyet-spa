import { FC } from "react";

import MenuItems from "mocks/HurriyetHamburgerMenu.json";
import style from "styles/components/shared/HamburgerMenu/HurriyetHamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import assets from "assets";

type HurriyetHamburgerMenuType = {
  isMenuOpen: Function;
  menuOpenity: boolean;
};

const HurriyetHamburgerMenu: FC<HurriyetHamburgerMenuType> = ({
  isMenuOpen,
  menuOpenity,
}) => {
  const { pages } = MenuItems;
  const isActive = menuOpenity;

  const subMenuClickHandler = (e: any) => {
    e.preventDefault();
    const parent = e!.target!,
      child = e?.target?.children[0],
      subList = e!.target!.nextElementSibling;

    if (child) {
      switch (child?.innerText) {
        case "+":
          child!.innerText = "-";
          parent!.classList!.add(style.textActive);
          subList!.classList!.add(style.subListActive);
          break;
        case "-":
          child!.innerText = "+";
          parent!.classList!.remove(style.textActive);
          subList!.classList!.remove(style.subListActive);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={[style.main, isActive && style.menuOpen].join(" ")}>
      <div className={style.hamburgerHeader}>
        <Image
          src={assets.icons.searchIconBlack}
          width={22}
          height={22}
          className={style.icon}
          alt="search icon"
          title="search icon"
        />
        <Link href={"/"} title="www.hurriyet.com.tr">
          <a className={style.logo}>
            <Image
              src={assets.logos.redLogo.default}
              width={120}
              height={35}
              decoding="async"
              loading="lazy"
              title="www.hurriyet.com.tr"
              alt="www.hurriyet.com.tr"
            />
          </a>
        </Link>
        <Image
          src={assets.icons.hamburgerClose.default.src}
          width={20}
          height={20}
          onClick={() => {
            isMenuOpen(false);
          }}
          className={style.icon}
          alt="close icon"
          title="close icon"
        />
      </div>
      <nav>
        <ul className={style.mainList}>
          {pages.map((item) => (
            <li
              key={item.page + item.href}
              className={style.mainListItem}
              onClick={(e: any) =>
                !item.href && item.subCategories && subMenuClickHandler(e)
              }
            >
              {!item.subCategories && (
                <Link href={item.href} title={item.page}>
                  <a className={style.title}> {item.page} </a>
                </Link>
              )}

              {item.subCategories && (
                <>
                  <p className={style.title}>
                    <span className={style.listSymbol}>+</span> {item.page}
                  </p>
                  <ul className={style.subList}>
                    {item.subCategories?.map((subCategory) => (
                      <li
                        className={style.subListItem}
                        key={subCategory.href + subCategory.name}
                      >
                        <Link href={subCategory.href}>
                          <a className={style.subTitle}> {subCategory.name} </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HurriyetHamburgerMenu;
