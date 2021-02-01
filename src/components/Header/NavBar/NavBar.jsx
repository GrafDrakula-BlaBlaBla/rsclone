import React from "react";
import { Link } from "react-router-dom";

import styles from ".././_Header.module.scss";

const items = [
  { nameRoute: "Главная", route: "/" },
  { nameRoute: "Карта мероприятий", route: "/initiatives" },
  { nameRoute: "Создать мероприятие", route: "/createEvent" },
  { nameRoute: "Игра", route: "/game" },
];

const NavBar = ({ change }) => {
  const navbarList = items.map((el, i) => (
    <Link key={`${i + i}`} to={`${el.route}`} className={styles.link}>
      <li className={styles.menu_item} onClick={change}>
        {el.nameRoute}
      </li>
    </Link>
  ));

  return navbarList;
};

export default NavBar;
