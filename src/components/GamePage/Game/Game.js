import backgroundImg from '../../../modules/assets/game/background.jpg';
import batteryImg from './images/battery.svg';
import trashContainerImg from './images/trashContainer.svg';

class Game {
  constructor(gameContainer, gameWrapper) {
    this.ctx = gameContainer.getContext('2d');
    this.gameWrapper = gameWrapper;
    this.isGameLoaded = false;
    this.isGameRendered = false;
    this.gameScale = null;
    this.background = {
      imageSrc: backgroundImg,
      image: null,
    };
    this.gameItems = {
      trashContainer: {
        props: [0.6, 0.8, 90, 90],
        imageSrc: trashContainerImg,
        image: null,
        x: null,
        y: null,
        width: null,
        height: null
      },
      battery: {
        props: [0, 0, 50, 50],
        imageSrc: batteryImg,
        image: null,
        x: null,
        y: null,
        width: null,
        height: null
      },
    };
    this.draggableItem = null;
  }

  init() {
    this.lodeGame();
  }

  lodeGame() {
    // loading text
    this.ctx.font = "30px Arial";
    const loadingTxt = 'Loading...';
    this.ctx.fillText(
      loadingTxt,
      Math.trunc(this.ctx.canvas.width / 2) - Math.trunc(this.ctx.measureText(loadingTxt).width / 2),
      Math.trunc(this.ctx.canvas.height / 2) + 20
    );

    const totalImages = Object.keys(this.gameItems).length + 1;
    let uploadedImages = 0;

    function onloadCallback() {
      uploadedImages++;

      if(uploadedImages === totalImages) {
        this.beforeLodeGame();
      }
    }

    this.background.image = new Image();
    this.background.image.src = this.background.imageSrc;
    this.background.image.onload = onloadCallback.bind(this);

    for (const key in this.gameItems) {
      this.gameItems[key].image = new Image();
      this.gameItems[key].image.src = this.gameItems[key].imageSrc;
      this.gameItems[key].image.onload = onloadCallback.bind(this);
    }

    this.isGameLoaded = true;
  }

  beforeLodeGame() {
    this.resizeWindow();
    this.render();
    window.onresize = () => {
      this.resizeWindow();
      this.render();
    }

    this.ctx.canvas.onmousedown = this.mouseDown.bind(this);
    this.ctx.canvas.onmouseup = this.mouseUp.bind(this);
    this.ctx.canvas.onmousemove = this.mouseMove.bind(this);
  }

  resizeWindow() {
    this.ctx.canvas.height = this.gameWrapper.clientHeight;
    this.ctx.canvas.width = this.gameWrapper.clientWidth;

    this.gameScale = Math.max(
      this.ctx.canvas.width / 1000, this.ctx.canvas.height / 1000
    );
  }

  render() {
    for (const key in this.gameItems) {
      this.gameItems[key].x = this.ctx.canvas.width * this.gameItems[key].props[0];
      this.gameItems[key].y = this.ctx.canvas.height * this.gameItems[key].props[1];
      this.gameItems[key].width = this.gameItems[key].props[2] * this.gameScale;
      this.gameItems[key].height = this.gameItems[key].props[3] * this.gameScale;
    }

    this.isGameRendered = true;
    this.draw();
  }

  draw() {
    const background = this.background.image;
    const backgroundScale = Math.max(
      this.ctx.canvas.width / background.width, this.ctx.canvas.height / background.height
    );
    this.ctx.drawImage(
      background,
      0,
      0,
      background.width * backgroundScale,
      background.height * backgroundScale
    );

    for(const key in this.gameItems) {
      this.ctx.drawImage(
        this.gameItems[key].image, // image
        this.gameItems[key].x,     // position x
        this.gameItems[key].y,     // position y
        this.gameItems[key].width, // width
        this.gameItems[key].height // height
      );
    }
  }

  mouseDown(event) {
    event.preventDefault();
    event.stopPropagation();

    const mouseX = event.layerX;
    const mouseY = event.layerY;
    const currentItem = this.checkPosition(mouseX, mouseY);

    if (currentItem) {
      this.draggableItem = currentItem;
      this.ctx.canvas.style = 'cursor: grabbing;';
    }
  }

  mouseUp(event) {
    event.preventDefault();
    event.stopPropagation();

    if(this.draggableItem) {
      this.ctx.canvas.style = 'cursor: grab;';
      this.draggableItem = null;
    }
  }

  mouseMove(event) {
    event.preventDefault();
    event.stopPropagation();

    const mouseX = event.layerX;
    const mouseY = event.layerY;
    const currentItem = this.checkPosition(mouseX, mouseY);

    if (currentItem && !this.draggableItem) {
      this.ctx.canvas.style = 'cursor: grab;';
    } else if (!this.draggableItem){
      this.ctx.canvas.style = '';
    }

    if (this.draggableItem){
      this.gameItems[this.draggableItem].x = mouseX - Math.trunc(this.gameItems[this.draggableItem].width / 2);
      this.gameItems[this.draggableItem].y = mouseY - Math.trunc(this.gameItems[this.draggableItem].height / 2);
      this.draw();
    }
  }

  checkPosition(x, y) {
    if(x >= this.gameItems.battery.x
      && x <= this.gameItems.battery.x + this.gameItems.battery.width
      && y >= this.gameItems.battery.y
      && y <= this.gameItems.battery.y + this.gameItems.battery.height) {
      return 'battery';
    }
    return false;
  }
}

export default Game;