import React from "react";
import { inject } from "mobx-react";

import Form from "./Form/Form";
import Button from "../Button/Button";

const RegModalMain = inject("store")(({ store }) => {

  return (
    <div className="reg-modal__main">
        <div className="main-center">
          <div className="warning-message">{store.Registration.errorEmailSendButton}</div>
          <div className="warning-message">{store.Registration.errorNameSendButton}</div>
          <div className="warning-message">{store.Registration.errorPasswordSendButton}</div>
        <Form />
        <Button
          onClick={ () =>
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
