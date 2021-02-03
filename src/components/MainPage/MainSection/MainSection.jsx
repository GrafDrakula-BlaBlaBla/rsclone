import React from "react";
import { Link } from "react-router-dom";
import styles from "./_MainSection.module.scss";
import SectionWrapper from "../../SectionWrapper/SectionWrapper";

export default function MainSection() {
  return (
    <SectionWrapper>
      <div className={styles.main}>
        <p className={styles.title}>
          <span style={{ color: "#5C9F61" }}>Эко</span>активисты
        </p>
        <p className={styles.text}>Поддержи экодвижение в Беларуси</p>
        <Link to="/registration">
          <button className="green_btn">Присоедениться</button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
