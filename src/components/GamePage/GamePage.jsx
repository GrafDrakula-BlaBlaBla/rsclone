import React from 'react';
import styles from './_GamePage.module.scss'
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import GameComponent from './Game/GameComponent';

const GamePage = () => {
  return (
    <SectionWrapper>
      <div className={ styles.container }>
        <div className={ styles.left_section }>
          <p>Правила</p>
        </div>
        <div className={ styles.right_section }>
          <GameComponent />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default GamePage;