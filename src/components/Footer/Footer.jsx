import React from "react";
import { Switch, Router } from "react-router-dom";
import "./_Footer.scss";
import RegModal from "../RegModal/RegModal";

export default function Footer() {
  return (
    <div className="footer">
      <RegModal />
      {/* <RegModal /> */}
      <Switch>
        <Router path="/login" components={RegModal} />
      </Switch>
      <button className="github-btn" />
    </div>
  );
}
