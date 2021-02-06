import React from "react";
import styles from "./_Footer.module.scss";
import RegModal from "./RegModal/RegModal";
import image from "../../modules/assets/user.svg"
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";


const Footer = inject( "store" ) (observer( ({store}) => {
  return (

    <div className={styles.footer}>
         { store.Registration.statusApp ?
           <Link to="/profile">
              <button className={styles.ButtonIconUser}><img src={ image } className={styles.iconUser} alt="icon-user"/></button>
          </Link> :
          <RegModal /> }
      <div className={styles.ButtonLinkUser}>
        <a href="https://github.com/GrafDrakula-BlaBlaBla"> <button className={styles.github_btn} /></a>
        <a href="https://github.com/koverchik"> <button className={styles.github_btn} /> </a>
        <a href="https://github.com/AlexLevw"><button className={styles.github_btn} /> </a>
      </div>
    </div>
  );

}))

export default Footer;
