import React from 'react';
import './_Header.scss';
import { Link } from "react-router-dom";

function change() {
  document.getElementById("header").classList.toggle("open");
}

document.addEventListener('click', (e) => {
  if(!document.getElementById('header').contains(e.target)) {
    document.getElementById("header").classList.remove("open");
  }
})

export default function Header() {
  return (
    <div id="header">
      <button className="menu-burger-btn" onClick={ change }/>
      <div className="header-menu">
          <ul className="menu-list">
            <li className="menu-item" ><Link className="item-link" to="/">Main</Link></li>
            <li className="menu-item" ><Link className="item-link" to="/profile"><span>Профиль</span></Link></li>
            <li className="menu-item" ><Link className="item-link" to="/initiatives">Инициативы</Link></li>
            {/* <li className="menu-item" ><Link className="item-link" to="/"></Link></li>
            <li className="menu-item" ><Link className="item-link" to="/"></Link></li>
            <li className="menu-item" ><Link className="item-link" to="/"></Link></li> */}
            <li className="menu-item" onClick={ change }><Link className="item-link" to="/create"><span>Создание инициативы</span></Link></li>
          </ul>
      </div>
      <button className="change-lang-btn">ru</button>
    </div>
  );
}
