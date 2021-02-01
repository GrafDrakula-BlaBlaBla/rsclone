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
    const levelOneBtn = new Button({
      label: "Уровень 1",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2 - 120,
      fontSize: 20,
      onTap: () => this.game.sceneSwitcher('levelOne', [1])
    });
    const levelTwoBtn = new Button({
      label: "Уровень 2",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2 - 60,
      fontSize: 20,
      onTap: () => this.game.sceneSwitcher('levelOne', [2])
    });
    const levelThreeBtn = new Button({
      label: "Уровень 3",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2,
      fontSize: 20,
      onTap: () => this.game.sceneSwitcher('levelOne', [3])
    });
    const levelFourBtn = new Button({
      label: "Уровень 4",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2 + 60,
      fontSize: 20,
      onTap: () => this.game.sceneSwitcher('levelOne', [4])
    });
    const rulesBtn = new Button({
      label: "Привила",
      width: 200,
      height: 50,
      x: this.app.view.offsetWidth / 2,
      y: this.app.view.offsetHeight / 2 + 120,
      fontSize: 20,
      onTap: () => this.game.setIsGameRules(true)
    });

    this.addChild(levelOneBtn, levelTwoBtn,
      levelThreeBtn, levelFourBtn, rulesBtn);
    this.app.stage.addChild(this);
  }
}