import React from "react";
import styles from "./_Header.module.scss";

import NavBar from "./NavBar/NavBar";

function change() {
  document.getElementById(styles.header).classList.toggle(styles.open);
}

<<<<<<< HEAD
document.addEventListener("click", (e) => {
  if (!document.getElementById(styles.header).contains(e.target)) {
    document.getElementById(styles.header).classList.remove(styles.open);
=======
document.addEventListener('click', (e) => {
  console.log(styles.header)
  if(!document.getElementById( styles.header ).contains(e.target)) {
    document.getElementById( styles.header ).classList.remove( styles.open );
>>>>>>> 3da79264440e61bf85cf5e855577bb6367b45345
  }
});

export default function Header() {
  return (
    <div id={styles.header}>
      <button className={styles.burger_btn} onClick={change} />
      <div className={styles.menu}>
        <ul className={styles.menu_list}>
          <NavBar change={change} />
        </ul>
      </div>
      <button className={styles.lang_btn}>ru</button>
    </div>
  );
}
