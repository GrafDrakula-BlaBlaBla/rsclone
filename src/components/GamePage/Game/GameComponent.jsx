import React, { useRef, useState } from 'react';
import styles from './_GameComponent.module.scss'
import Game from './Game';

const GameComponent = () => {
  const gameWrapper = useRef(null);
  const gameContainer = useRef(null);
  // const [ gameInit, setGameInit ] = useState(false);

  function changeScreenMode() {
    gameWrapper.current.classList.toggle( styles.full_screen );

    if(game) {
      game.resizeWindow();
      game.render();
    }
  }

  function initGame() {
    game = new Game(gameContainer.current, gameWrapper.current);
    game.init();
  }

  let game = null;

  return (
    <div ref={ gameWrapper } className={ styles.game_wrapper }>
      <button className={ styles.full_screen_btn } onClick={ changeScreenMode }></button>
      <button className={ styles.start_btn } onClick={ (event) => {
        event.target.style.display = 'none';
        initGame();
      }}>Начать игру</button>
      <canvas ref={ gameContainer } className={ styles.game_container }></canvas>
    </div>
  );
}

export default GameComponent;