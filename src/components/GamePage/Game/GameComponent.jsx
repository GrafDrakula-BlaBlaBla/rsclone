import React, { useRef } from 'react';
import styles from './_GameComponent.module.scss'
import Game from './Game';

const GameComponent = () => {
  const gameWrapper = useRef(null);
  const gameContainer = useRef(null);

  function changeScreenMode() {
    gameWrapper.current.classList.toggle( styles.full_screen );
  }

  function startGame(event) {
    const game = new Game(gameContainer.current, gameWrapper.current);

    event.target.style.display = 'none';

    game.init();
  }

  return (
    <div ref={ gameWrapper } className={ styles.game_wrapper }>
      <button className={ styles.full_screen_btn } onClick={ changeScreenMode }></button>
      <button className={ styles.start_btn } onClick={ startGame }>Начать игру</button>
      <canvas ref={ gameContainer } className={ styles.game_container }></canvas>
    </div>
  );
}

export default GameComponent;