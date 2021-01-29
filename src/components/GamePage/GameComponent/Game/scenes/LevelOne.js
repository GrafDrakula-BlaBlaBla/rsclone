import * as PIXI from 'pixi.js';
import { dragging  } from '../modules/imports';
import Button from '../components/Button';

import containersList from '../containersList.json';
import itemsList from '../itemsList.json';

export default class LevelOne extends PIXI.Container {
  constructor() {
    super();

    this.game = global.game;
    this.app = this.game.app;
    this.score = 0;
    this.scoreText = null;
    this.containers = {};
    this.trashCounter = 0;
  }

  start() {
    this.scoreText = new PIXI.Text('Score 0', {
      fontFamily: 'Georgia',
      letterSpacing: 1
    });
    this.scoreText.x = 10;
    this.scoreText.y = 10;
    this.addChild(this.scoreText);

    const menuBtn = new Button({
      label:'Выйти в меню',
      fontSize: 16,
      width: 140,
      height: 40,
      x: this.app.view.offsetWidth - 78,
      y: (this.height / 2) + 10,
      onTap: () => this.game.sceneSwitcher('menu')
    });
    this.addChild(menuBtn);

    for (const key in containersList) {
      const item = new PIXI.Sprite.from(containersList[key].image);
      item.scale.set(0.35);
      item.x = (Math.trunc(this.app.view.offsetWidth / 3) * containersList[key].position)
      / 2 + (Math.trunc(this.app.view.offsetWidth / 3) / 2);
      item.y = this.app.view.offsetHeight - (item.height / 2) - 10;
      item.type = containersList[key].type;
      this.containers[key] = item;
      this.addChild(this.containers[key]);
    }

    for (let i = 0; i <= 3; i++) {
      for (const key in itemsList) {
        const item = new PIXI.Sprite.from(itemsList[key].image);
        item.width = 30;
        item.height = 30;
        item.x = Math.floor(Math.random() * (this.app.view.offsetWidth - 180)) + 90;
        item.y = Math.floor(Math.random() * (this.app.view.offsetHeight - 550)) + 380;
        item.type = itemsList[key].type;

        if (itemsList[key].dragging) {
          item.interactive = true;
          dragging(item);
        }
        
        this.trashCounter += 1;
        this.addChild(item);
      }
    }

    this.app.stage.addChild(this);
  }

  itemPlaced(item) {
    this.score++;
    this.scoreText.text = 'Score ' + this.score;
    this.removeChild(item);
    this.trashCounter -= 1;

    if (this.trashCounter === 0) {
      this.levelEnd();
    }
  }

  levelEnd() {
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
    this.addChild(victoryText);
    this.game.sounds.victory.play();
    setTimeout(() => {
      this.game.sceneSwitcher('menu');
    }, 3000);
}
} 