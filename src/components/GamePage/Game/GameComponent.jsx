import React, { useRef } from 'react';
import styles from './_GameComponent.module.scss'
import Game from './Game';

const GameComponent = () => {
  const gameWrapper = useRef(null);
  const canvas = useRef(null);

  function changeScreenMode() {
    console.log(gameWrapper)
    gameWrapper.current.classList.toggle( styles.full_screen );
  }

  function startGame(event) {
    event.target.style.display = 'none';
    const game = new Game();

    game.start();

    
  }

  return (
    <div ref={ gameWrapper } className={ styles.game_wrapper }>
      <button className={ styles.full_screen_btn } onClick={ changeScreenMode }></button>
      <button className={ styles.start_btn } onClick={ startGame }>Начать игру</button>
      <canvas className={ styles.game_window }></canvas>
    </div>
  );
}

export default GameComponent;