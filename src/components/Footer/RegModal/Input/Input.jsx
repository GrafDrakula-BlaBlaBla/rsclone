import React from "react";
import { observer } from "mobx-react";

const Input = observer(({ user }) => {
  return Object.entries(user).map((el, i) => {
    return (
      <input
        key={i + 3}
        onChange={(event) => user.getInputValue(event.target.value, el[0])}
        value={el[1]}
        className={`reg-folder email-folder`}
        type={`${el[0]}`}
        placeholder={`${el[0]}`}
      />
    );
  });
});

export default Input;
