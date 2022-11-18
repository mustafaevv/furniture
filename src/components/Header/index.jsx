import React from "react";

import links from "../../router";
import Container from "../../layout/Container";

import classes from "./Header.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import icons from "./headerITems";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes["header__position"]}></div>
      <Container className={classes["header__container"]}>
        <a className={classes["header__logo"]} href="/">
          mebel
        </a>
        <ul className={classes["header__list"]}>
          {links.map(({ name, link }) => (
            <li>
              <a className={classes["header__link"]} href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className={classes['header__content']}>
        <h1 className={classes['header__title']}>Shopping with us is easy and convenient</h1>
        <p className={classes['header__text']}>
          As is commonly believed, those seeking to displace traditional
          production, nanotechnologies can be verified in a timely manner.
        </p>
        <button className={classes['header__button']}>
          Full view <HiOutlineArrowNarrowRight />
        </button>
        <ul className={classes['header__iconsList']}>
          {icons.map(({ icon, link }, i) => (
            <li key={i}>
              <a className={classes['header__icon']} href={link}>{icon}</a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
