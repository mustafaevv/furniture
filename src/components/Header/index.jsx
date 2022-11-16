import React from "react";

import links from "../../router";
import Container from "../../layout/Container";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes['header__position']}></div>
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
    </header>
  );
};

export default Header;
