import React from "react";
import { inject } from "mobx-react";

import Form from "./Form/Form";
import Button from "../../../Button/Button";

const RegModalMain = inject("store")(({ store }) => {
  return (
    <div className="reg-modal__main">
        <div className="main-center">

        <Form />
        <Button
          onClick={() =>
            store.Registration.auth(
              store.Registration.email,
              store.Registration.password,
            )
          }
          className="reg-modal__btn"
          label="Войти"
        />
        <Button
          onClick={() =>
            store.Registration.signup(
              store.Registration.email,
              store.Registration.userName,
              store.Registration.password,
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
