import React from "react";
import { inject } from "mobx-react";

import Social from "./SocialIcons/Social";
import Form from "./Form/Form";
import Button from "../../../Button/Button";

const RegModalMain = inject("storeRegistarion")(({ storeRegistarion }) => {
  return (
    <div className="reg-modal__main">
      <div className="main-top">
        <span className="reg-modal__title">Регистрация</span>
      </div>
      <div className="main-center">
        <Social />
        <Form />
        <Button
          onClick={() =>
            storeRegistarion.auth(
              storeRegistarion.email,
              storeRegistarion.password,
            )
          }
          className="reg-modal__btn"
          label="Войти"
        />
        <Button
          onClick={() =>
            storeRegistarion.signup(
              storeRegistarion.email,
              storeRegistarion.password,
            )
          }
          className="reg-modal__btn"
          label="Регистрация"
        />
      </div>
    </div>
  );
});

export default RegModalMain;
