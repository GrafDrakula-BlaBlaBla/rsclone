import React from 'react';
import styles from './_Header.module.scss';
import { Link } from "react-router-dom";

function change() {
  document.getElementById( styles.header ).classList.toggle( styles.open );
}

document.addEventListener('click', (e) => {
  if(!document.getElementById( styles.header ).contains(e.target)) {
    document.getElementById( styles.header ).classList.remove( styles.open );
  }
})

export default function Header() {
  return (
    <div id={ styles.header }>
      <button className={ styles.burger_btn } onClick={ change }/>
      <div className={ styles.menu }>
          <ul className={ styles.menu_list }>
            <li className={ styles.menu_item } onClick={ change }><Link className={ styles.link } to="/">Main</Link></li>
            <li className={ styles.menu_item } onClick={ change }><Link className={ styles.link } to="/create"><span>Создание инициативы</span></Link></li>
            <li className={ styles.menu_item } onClick={ change }><Link className={ styles.link } to="/event"><span>Инициатива</span></Link></li>
            <li className={ styles.menu_item } onClick={ change }><Link className={ styles.link } to="/profile"><span>Профиль</span></Link></li>
              <li className={ styles.menu_item } onClick={ change }><Link className={ styles.link } to="/initiatives"><span>Инициативы</span></Link></li>
          </ul>
      </div>
      <button className={ styles.lang_btn }>ru</button>
    </div>
  );
}
