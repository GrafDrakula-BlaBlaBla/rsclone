import React from 'react';
import './_Header.scss';

function change() {
  document.getElementById("header").classList.toggle("open");
}

export default function Header() {
  return (
    <div id="header">
      <button className="menu-burger-btn" onClick={ change }/>
      <div className="header-menu">
        <ul className="menu-list">
          <li className="menu-item" onClick={ () => {}}>Main</li>
          <li className="menu-item" onClick={ () => {}}>Main</li>
          <li className="menu-item" onClick={ () => {}}>Main</li>
          <li className="menu-item" onClick={ () => {}}>Main</li>
          <li className="menu-item" onClick={ () => {}}>Main</li>
        </ul>
      </div>
      <button className="change-lang-btn">ru</button>
    </div>
  );
}