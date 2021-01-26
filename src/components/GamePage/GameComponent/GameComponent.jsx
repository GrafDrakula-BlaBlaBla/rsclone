import React, { useRef } from 'react';
import styles from './_GameComponent.module.scss'
import Game from './Game/Game';

const GameComponent = () => {
  const gameWrapper = useRef(null);
  let game = null;

  function changeScreenMode() {
    gameWrapper.current.classList.toggle( styles.full_screen );
    if (game !== null) {
      game.resizeView();
    }
  }

  function initGame() {
    game = new Game(gameWrapper.current);
    game.init()
  }

  return (
    <div ref={ gameWrapper } className={ styles.game_wrapper}>
      <button className={ styles.full_screen_btn } onClick={ changeScreenMode }></button>
      <button className={ styles.start_btn } onClick={ (event) => {
        event.target.style.display = 'none';
        initGame();
      }}>Начать игру</button>
    </div>
  );
}

export default GameComponent;