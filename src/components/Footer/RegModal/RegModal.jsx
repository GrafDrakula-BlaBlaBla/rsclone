import React, { useState } from "react";
import "./_RegModal.scss";
import { NavLink, Route, Switch } from "react-router-dom";

import RegModalMain from "./Main/RegModalMain";

const RegModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickModal = (e) => {
    if (e.target.className === "reg-modal") {
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      <NavLink to="/registration">
        <div className="reg-btn" onClick={() => setIsOpen(!isOpen)}></div>
      </NavLink>

      {isOpen && (
        <div className="reg-modal" onClick={(e) => clickModal(e)}>
          <Route path="/registration" component={RegModalMain} />
        </div>
      )}
    </React.Fragment>
  );
};

export default RegModal;
