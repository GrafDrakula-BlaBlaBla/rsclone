import backgroundImg from '../../../modules/assets/game/background.jpg';
class Game {
  constructor(gameContainer, gameWrapper) {
    this.ctx = gameContainer.getContext('2d');
    this.gameWrapper = gameWrapper;
  }

  init() {
    this.gameWrapper.style.backgroundImg = backgroundImg;
  }
}

export default Game;