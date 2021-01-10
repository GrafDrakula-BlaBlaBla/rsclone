import React from 'react';
import './_Footer.scss';
import RegModal from '../RegModal/RegModal';

export default function Footer() {
  return(
    <div className="footer">
      <RegModal />
      <button className="github-btn" />
    </div>
  );
}