import * as PIXI from 'pixi.js';
import { dragging  } from '../modules/imports';
import Button from '../components/Button';
import TrashItem from '../components/TrashItem';

import containersList from '../containersList.json';
import itemsList from '../itemsList.json';

export default class LevelOne extends PIXI.Container {
  constructor(items) {
    super();
    this.items = items;
    this.game = global.game;
    this.app = this.game.app;
    this.score = 0;
    this.scoreText = null;
    this.containers = {};
    this.trashCounter = 0;
    this.level = 'init';
  }

  start() {
    this.level = 'started';

    const viewWidth = (this.app.renderer.width / this.app.renderer.resolution);
    const viewHeight = (this.app.renderer.height / this.app.renderer.resolution);
    const background = PIXI.Sprite.from('levelBackground');
    console.log(viewHeight)
    if (viewWidth > viewHeight) {
      background.scale.x = viewWidth / 3400;
    } else {
      background.scale.x = viewHeight / 2800;
    }
    background.scale.y = background.scale.x;
    background.anchor.set(0.5, 1);
    background.x = this.app.view.clientWidth / 2;
    background.y = this.app.view.offsetHeight;

    const menuBtn = new Button({
      label:'Меню',
      fontSize: 16,
      width: 140,
      height: 40,
      x: this.app.view.offsetWidth - 78,
      y: 28,
      onTap: () => {
        if (this.level !== 'end') this.game.sceneSwitcher('menu');
      }
    });

    this.scoreText = new PIXI.Text('Score 0', {
      fontFamily: 'Georgia',
      letterSpacing: 1,
      fill: 0xffffff,
      strokeThickness: 3
    });
    this.scoreText.x = 10;
    this.scoreText.y = 10;

    this.addChild(background, menuBtn, this.scoreText);

    for (const key in containersList) {
      const item = new PIXI.Sprite.from(containersList[key].image);
      item.scale.set(0.38);
      item.x = (Math.trunc(this.app.view.offsetWidth / 3) * containersList[key].position)
      / 2 + (Math.trunc(this.app.view.offsetWidth / 3) / 2);
      item.y = this.app.view.offsetHeight - (item.height / 2) - 50;
      item.type = containersList[key].type;
      this.containers[key] = item;
      this.addChild(this.containers[key]);
    }

    for (let i = 1; i <= this.items; i++) {
      for (const key in itemsList) {
        const item = new TrashItem(itemsList[key].image);
        item.scale.set(itemsList[key].scale + 0.01);
        item.x = Math.floor(Math.random() * (this.app.view.offsetWidth - 60)) + 30;
        item.y = Math.floor(Math.random() * (this.app.view.offsetHeight - 550)) + 380;
        item.type = itemsList[key].type;
        item.interactive = true;
        dragging(item);
        
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
    this.level = 'end';

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