import { Howl } from 'howler';
import buttonImg from '../../../../../modules/assets/game/green_button.png';
 
function loader() {
  const game = global.game;

  game.app.loader
    .add('trashSprites', `${process.env.PUBLIC_URL}/game/trash/spritesheet.json`)
    .add('containersSprites', `${process.env.PUBLIC_URL}/game/containers/containers.json`)
    .add('button', buttonImg);

  game.sounds.victory = new Howl({
    src: [`${process.env.PUBLIC_URL}/game/game-victory.mp3`]
  });
}

export default loader;