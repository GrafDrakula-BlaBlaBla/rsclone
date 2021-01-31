function CheckItem(item) {
  const game = global.game;
  const containers = game.currentScene.containers;
  for (const key in containers) {
    const container = containers[key];
    if (item.x >= container.x - (container.width / 2)
      && item.x <= container.x + (container.width / 2)
      && item.y >= container.y - (container.height / 2)
      && item.y <= container.y + (container.height / 2)) {
      if (container.type === item.type) {
        game.currentScene.itemPlaced.call(game.currentScene, item);

        container.y -= 10;
        
        setTimeout(() => {
          container.y += 10;
        }, 100);
      } else {
        container.rotation = 0.2;
        setTimeout(() => {
          container.rotation = -0.2;
          setTimeout(() => {
            container.rotation = 0;
          }, 80);
        }, 80);
      }
    }
  }
}

function dragging(item) {
  item
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

  function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.8;
    this.dragging = true;
  }

  function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;

    CheckItem(this);
  }

  function onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }
}

export default dragging;