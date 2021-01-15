import React from "react";

import "./_Button.scss";

const Button = (props) => {
  const { className, action } = props;

  return <button className={className}>{action}</button>;
};

export default Button;
