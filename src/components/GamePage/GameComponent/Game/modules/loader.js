function loader(app) {
  app.loader
    .add('trashSprites', `${process.env.PUBLIC_URL}/game/trash/spritesheet.json`)
    .add('containersSprites', `${process.env.PUBLIC_URL}/game/containers/containers.json`)
}

export default loader;