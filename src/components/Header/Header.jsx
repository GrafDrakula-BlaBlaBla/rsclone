import React from 'react';
import './_Header.scss';
import { Link } from "react-router-dom";

function change() {
  document.getElementById("header").classList.toggle("open");
}

export default function Header() {
  return (
    <div id="header">
      <button className="menu-burger-btn" onClick={ change }/>
      <div className="header-menu">
          <ul className="menu-list">
            <li className="menu-item" ><Link className="item-link" to="/">Main</Link></li>
            <li className="menu-item" ><Link className="item-link" to="/profile"><span>Профель</span></Link></li>
            {/* <li className="menu-item" ><Link className="item-link" to="/"></Link></li>
            <li className="menu-item" ><Link className="item-link" to="/"></Link></li>
            <li className="menu-item" ><Link className="item-link" to="/"></Link></li> */}
          </ul>
      </div>
      <button className="change-lang-btn">ru</button>
    </div>
  );
}