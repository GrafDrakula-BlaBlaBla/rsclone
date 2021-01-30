import React from 'react';
import styles from './_GamePage.module.scss'
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import GameComponent from './GameComponent/GameComponent';

const GamePage = () => {
  return (
    <SectionWrapper>
      <div className={ styles.container }>
        <GameComponent />
      </div>
    </SectionWrapper>
  );
}

export default GamePage;