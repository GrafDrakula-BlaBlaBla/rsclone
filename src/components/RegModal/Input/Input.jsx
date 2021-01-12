import React from "react";

const Input = (props) => {
  const { value, setValue, className, type, placeholder } = props;

  return (
    <input
      onChange={(event) => setValue(event.target.value)}
      value={value}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
