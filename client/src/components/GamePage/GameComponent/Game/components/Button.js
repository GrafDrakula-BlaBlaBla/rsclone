import * as PIXI from 'pixi.js';

export default class Button extends PIXI.NineSlicePlane {
  constructor (settings) {
    const texture = PIXI.Texture.from('button');
    const notScalableArea = 20;
    super(texture, notScalableArea, notScalableArea, notScalableArea, notScalableArea);

    this.settings = {
      width: 200,
      height: 100,
      x: 0,
      y: 0,

      fontSize: 35,
      label: 'Button',
      stroke: '#333',
      strokeThickness: 3,
      tint: 0xFFFFFF,

      overTint: 0xDDDDDD,
      activeTint: 0xAAAAAA,

      overStroke: '#444',
      activeStroke: '#222'
    }

    this.isOver = false;
    this.isActive = false;
    this.interactive = true;
    this.buttonMode = true;

    this.onTap = this.onTap.bind(this);
    this.onOver = this.onOver.bind(this);
    this.onOut = this.onOut.bind(this);
    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);

    this.on('pointertap', this.onTap);
    this.on('pointerover', this.onOver);
    this.on('pointerout', this.onOut);
    this.on('pointerdown', this.onDown);
    this.on('pointerup', this.onUp);
    this.on('pointerupoutside', this.onUp);

    this.label = new PIXI.Text('');
    this.label.anchor.set(0.5);
    this.addChild(this.label);

    this.update(settings);
  }

  onTap() {
    if (this.settings.onTap) this.settings.onTap();
  }

  onOver() {
    this.isOver = true;
    this.update();
  }

  onOut() {
    this.isOver = false;
    this.update();
  }

  onDown() {
    this.isActive = true;
    this.update();
  }

  onUp() {
    this.isActive = false;
    this.update();
  }

  update(settings) {
    this.settings = {
      ...this.settings,
      ...settings,
    }

    let stroke = this.settings.stroke;
    if (this.isActive === true) {
      this.tint = this.settings.activeTint;
      stroke = this.settings.activeStroke;
    } else if (this.isOver === true) {
      this.tint = this.settings.overTint;
      stroke = this.settings.overStroke;
    } else {
      this.tint = this.settings.tint;
    }


    this.label.text = this.settings.label;
    this.label.style = {
      fontFamily: 'Georgia',
      fontSize: this.settings.fontSize + 'px',
      fill: '#ffffff',
      stroke: stroke,
      strokeThickness: this.settings.strokeThickness,
    }

    this.onResize();
  }
  onResize() {
    this.width = this.settings.width;
    this.height = this.settings.height;
    this.x = this.settings.x;
    this.y =this.settings.y;

    this.label.x = this.width * 0.5;
    this.label.y = this.height * 0.5;

    this.pivot.set(this.width * 0.5, this.height * 0.5);
  }
}
