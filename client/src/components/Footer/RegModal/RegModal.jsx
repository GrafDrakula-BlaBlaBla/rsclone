import React, { useState, useEffect } from "react";
import "./_RegModal.scss";
import { NavLink, useLocation } from "react-router-dom";

import RegModalMain from "./Main/RegModalMain";

const RegModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locationPathname = useLocation().pathname;
  useEffect(() => {
    locationPathname === '/registration' ? setIsOpen(true) : setIsOpen(false);
  }, [locationPathname]);

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

      {isOpen && 
        <div className="reg-modal" onClick={(e) => clickModal(e)}>
          <RegModalMain />
        </div>
      }
    </React.Fragment>
  );
};

export default RegModal;
