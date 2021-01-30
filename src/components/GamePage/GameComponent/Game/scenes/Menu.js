import * as PIXI from 'pixi.js';
import Button from '../components/Button';

export default class Menu extends PIXI.Container {
  constructor(sceneSwitcher) {
    super();

    this.sceneSwitcher = sceneSwitcher;
    this.game = global.game;
    this.app = this.game.app;
  }

  start = () => {
    const playBtn = new Button({
      label: "Играть",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2 - 30,
      fontSize: 20,
      onTap: () => this.game.sceneSwitcher('levelOne')
    });
    const rulesBtn = new Button({
      label: "Привила",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2 + 30,
      fontSize: 20,
      onTap: () => this.game.setIsGameRules(true)
    });

    this.addChild(playBtn, rulesBtn);
    this.app.stage.addChild(this);
  }
}