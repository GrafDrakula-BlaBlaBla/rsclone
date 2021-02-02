import React from "react";
import styles from "./_Footer.module.scss";
import RegModal from "./RegModal/RegModal";
import image from "../../modules/assets/user.svg"
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";


const Footer = inject( "store" ) (observer( ({store}) => {

  return (

    <div className={styles.footer}>
      {  store.User.statusApp ?
        <RegModal /> : <Link to="/profile"><button className={styles.ButtonIconUser}><img src={ image } className={styles.iconUser} alt="icon-user"/></button></Link>
      }
      <button className={styles.github_btn} />
    </div>
  );

}))




export default Footer;
