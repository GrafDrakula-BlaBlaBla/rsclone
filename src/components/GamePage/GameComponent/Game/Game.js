import * as PIXI from 'pixi.js';
import { loader } from './modules/imports';

import Menu from './scenes/Menu';
import LevelOne from './scenes/LevelOne';

class Game {
  constructor(gameWrapper, setIsGameRules) {
    window.game = this;
    this.app = new PIXI.Application({
      width: gameWrapper.clientWidth,
      height: gameWrapper.clientHeight,
      autoResize: true,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio,
      antialias: true,
    });
    this.sounds = {};
    this.scenes = {
      menu: Menu,
      levelOne: LevelOne,
    };
    this.currentScene = new this.scenes.menu();

    this.setIsGameRules = setIsGameRules;
    gameWrapper.appendChild( this.app.view );
    this.resizeView();
    window.addEventListener('resize', this.resizeView.bind(this));
  }

  init() {
    loader();
    this.app.loader.load( this.currentScene.start );
  }

  resizeView() {
    const parent = this.app.view.parentNode;
    this.app.renderer.resize(parent.clientWidth, parent.clientHeight);
  }

  sceneSwitcher(sceneName, props) {
    this.app.stage.removeChildren();
    this.currentScene = new this.scenes[sceneName](props && props);
    this.currentScene.start();
  }
}

export default Game;