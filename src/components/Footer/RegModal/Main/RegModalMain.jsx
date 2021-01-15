import React, { useState } from "react";

import Social from "./SocialIcons/Social";
import Form from "./Form/Form";
// import Button from "../../../Button/Button";

import { registration } from "../../../../actions/users";
import { authentication } from "../../../../actions/users";

const RegModalMain = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="reg-modal__main">
      <div className="main-top">
        <span className="reg-modal__title">Регистрация</span>
      </div>
      <div className="main-center">
        <Social />
        <Form />
        <button
          onClick={() => authentication(email, password)}
          className="reg-modal__btn"
          action="Войти"
        >
          Войти
        </button>
        <button
          onClick={() => registration(email, password)}
          className="reg-modal__btn"
          action="Регистрация"
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default RegModalMain;
