import React from "react";
import { Link } from "react-router-dom";

import "./_Button.scss";

const Button = (props) => {
  const { onClick, className, label } = props;

  return (
    <Link to="/profile">
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
