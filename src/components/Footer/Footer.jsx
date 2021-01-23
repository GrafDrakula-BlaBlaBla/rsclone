import React from "react";
import styles from "./_Footer.module.scss";
import RegModal from "./RegModal/RegModal";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <RegModal />
      <button className={styles.github_btn} />
    </div>
  );
}
