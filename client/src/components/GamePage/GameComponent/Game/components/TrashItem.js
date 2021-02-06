import * as PIXI from 'pixi.js';

export default class TrashItem extends PIXI.Sprite {
  constructor(imageName) {
    super(PIXI.Texture.from(imageName));
    this.game = global.game;
    this.app = this.game.app;
  }
}