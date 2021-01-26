import * as PIXI from 'pixi.js';
import { loader, dragging } from './modules/imports';

import containersList from './containersList.json';
import itemsList from './itemsList.json';

class Game {
  constructor(gameWrapper) {
    this.app = new PIXI.Application({
      width: gameWrapper.clientWidth,
      height: gameWrapper.clientHeight,
      autoResize: true,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio,
      antialias: true,
    });
    this.score = 0;
    this.scoreText = null;
    this.containers = {};
    this.trashCounter = 0;

    window.game = this;

    gameWrapper.appendChild( this.app.view );

    this.resizeView();

    window.addEventListener('resize', this.resizeView.bind(this));
    this.app.stop();
  }

  init() {
    loader(this.app);
    this.app.loader.load(this.render.bind(this));
  }

  resizeView() {
    const parent = this.app.view.parentNode;
    this.app.renderer.resize(parent.clientWidth, parent.clientHeight);
  }

  render() {
    this.scoreText = new PIXI.Text('Score 0', {
      fontFamily: 'Georgia',
      letterSpacing: 1
    });
    this.scoreText.x = 10;
    this.scoreText.y = 10;
    this.app.stage.addChild(this.scoreText);

    for (const key in containersList) {
      const item = new PIXI.Sprite.from(containersList[key].image);
      item.anchor.set(0.5);
      item.width = containersList[key].width;
      item.height = containersList[key].height;
      item.x = (Math.trunc(this.app.view.offsetWidth / 3) * containersList[key].position)
      / 2 + (Math.trunc(this.app.view.offsetWidth / 3) / 2);
      item.y = this.app.view.offsetHeight - item.height;
      item.type = containersList[key].type;
      
      this.containers[key] = item;
      this.app.stage.addChild(this.containers[key]);
    }

    let itemsCount = 0;
    for (let i = 0; i <= 3; i++) {
      for (const key in itemsList) {
        const item = new PIXI.Sprite.from(itemsList[key].image);
        item.anchor.set(0.5);
        item.width = 30;
        item.height = 30;

        item.x = Math.floor(Math.random() * (this.app.view.offsetWidth - 180)) + 80;
        item.y = Math.floor(Math.random() * (this.app.view.offsetHeight - 580)) + 380;
        item.type = itemsList[key].type;

        if (itemsList[key].dragging) {
          item.interactive = true;
          dragging(item);
        }
        
        this.trashCounter += 1;
        this.app.stage.addChild(item);
      }
    }
    this.app.start();
  }

  itemPlaced(item) {
    this.score++;
    this.scoreText.text = 'Score ' + this.score;
    this.app.stage.removeChild(item);
    this.trashCounter -= 1;

    if (this.trashCounter === 0) {
      const victoryText = new PIXI.Text('Victory!!!', {
        fill: 0x2ecc71,
        fontFamily: 'Georgia',
        fontSize: 50,
        letterSpacing: 3,
        strokeThickness: 3
      });
      victoryText.anchor.set(0.5);
      victoryText.x = this.app.view.offsetWidth / 2;
      victoryText.y = this.app.view.offsetHeight / 2;
      this.app.stage.addChild(victoryText);
    }
  }
}

export default Game;