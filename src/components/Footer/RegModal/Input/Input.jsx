import React from "react";
import { observer } from "mobx-react";

const Input = observer(({ user }) => {
  const {
    email,
    password,
    userName,
    isDirty,
    isValid,
    inputs,
    getInputValue,
    validateForm,
    showError,
  } = user;

  // eslint-disable-next-line array-callback-return
  return inputs.map((input, i) => {
    for (const key in input) {
      return (
        <React.Fragment key={`${i}1`}>
          <span className={`${input.type} hide`} data-type={`${input.type}`}>
            {`Error message`}
          </span>
          <input
            onChange={(event) => {
              getInputValue(event.target.value, input.type);
            }}
            // eslint-disable-next-line no-loop-func
            onBlur={(event) => {
              validateForm(
                input.type,
                event.target,
                event.target.value,
                input.validations,
              );
              showError(input.type);
            }}
            value={
              input.type === "email"
                ? email
                : input.type === "password"
                ? password
                : input.type === "text"
                ? userName
                : null
            }
            className={`reg-folder email-folder`}
            type={`${input.type}`}
            placeholder={`${input.placeholder}`}
          />
        </React.Fragment>
      );
    }
  });
});
export default Input;
