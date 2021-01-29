import React from "react";

import "./_Button.scss";

const Button = (props) => {
  const { onClick, className, label } = props;

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
