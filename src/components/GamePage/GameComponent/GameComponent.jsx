import React, { useRef, useState } from 'react';
import styles from './_GameComponent.module.scss'
import GameRulesModal from './GameRulesModal/GameRulesModal';
import Game from './Game/Game';

const GameComponent = () => {
  const gameWrapper = useRef(null);
  const [gameRulesOpen, setGameRulesOpen] = useState(false);

  function initGame() {
    setGameRulesOpen(true);
    const game = new Game(gameWrapper.current);
    game.init();
  }

  return (
    <div ref={ gameWrapper } className={ styles.game_wrapper}>
      { gameRulesOpen && <GameRulesModal setGameRulesOpen={ setGameRulesOpen }/>}
      <button className={ styles.start_btn } onClick={ (event) => {
        event.target.style.display = 'none';
        initGame();
      }}>Начать игру</button>
    </div>
  );
}

export default GameComponent;