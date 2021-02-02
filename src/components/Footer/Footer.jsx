import React from "react";
import styles from "./_Footer.module.scss";
import RegModal from "./RegModal/RegModal";
import image from "../../modules/assets/user.svg"
import { Link } from "react-router-dom";

export default function Footer() {


  return (
    <div className={styles.footer}>

      {
        (localStorage.getItem('ecologyBY') === null) ? 
        <RegModal /> : <Link to="/profile"><button className={styles.ButtonIconUser}><img src={ image } className={styles.iconUser} alt="icon-user"/></button></Link>
      }

      <button className={styles.github_btn} />
    </div>
  );
}
