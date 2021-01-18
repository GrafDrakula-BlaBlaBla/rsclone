import * as PIXI from 'pixi.js';
import backgroundImg from '../../../modules/assets/game/background.jpg';
class Game {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
  }

  start() {
    const app = new PIXI.Application();
    this.gameContainer.appendChild(app.view);

    PIXI.utils.sayHello()


    // const background = new Image();
    // background.src = backgroundImg;
    // background.onload = () => {
    //   this.ctx.drawImage(background, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // }
    // this.ctx.fillStyle = 'rgb(200, 0, 0)';
    // this.ctx.fillRect(10, 10, 50, 50);
  }
}

export default Game;