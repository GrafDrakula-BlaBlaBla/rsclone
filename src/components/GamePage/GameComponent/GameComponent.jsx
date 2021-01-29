import React, { useRef, useState } from 'react';
import styles from './_GameComponent.module.scss'
import GameRulesModal from './GameRulesModal/GameRulesModal';
import WelcomeGameModal from './WelcomeGameModal/WelcomeGameModal';
import Game from './Game/Game';
import playBtnIcon from '../../../modules/assets/game/play-button.svg';

const GameComponent = () => {
  const gameWrapper = useRef(null);
  const [gameStatus, setGameStatus] = useState('off');
  const [isWelcomeModal, setIsWelcomeModal] = useState(false);
  const [isGameRules, setIsGameRules] = useState(false);

  function play() {
    setGameStatus('stated');
    setIsWelcomeModal(true);
    const game = new Game(gameWrapper.current);
    game.init();
  }

  return (
    <div ref={ gameWrapper } className={ styles.game_wrapper}>
      { gameStatus === 'off'
      &&
      <button className={ styles.start_btn } onClick={ play }>
        <img src={ playBtnIcon } alt="play"/>
      </button> }

      { isWelcomeModal && <WelcomeGameModal setIsWelcomeModal={ setIsWelcomeModal }/>}

      { isGameRules && <GameRulesModal setIsGameRules={ setIsGameRules }/>}
    </div>
  );
}

export default GameComponent;