import React, { useState } from "react";

import Input from "../../Input/Input";

import "./_Form.scss";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="reg-modal__folders">
      <Input
        value={email}
        setValue={setEmail}
        className="reg-folder email-folder"
        type="email"
        placeholder="E-Mail"
      />
      <Input
        value={name}
        setValue={setName}
        className="reg-folder name-folder"
        type="text"
        placeholder="Имя"
      />
      <Input
        value={password}
        setValue={setPassword}
        className="reg-folder pass-folder"
        type="password"
        placeholder="Пароль"
      />
    </div>
  );
};

export default Form;
