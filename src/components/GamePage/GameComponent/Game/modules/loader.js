import { Howl } from 'howler';
import buttonImg from '../../../../../modules/assets/game/green_button.png';
import backgroundImg from '../../../../../modules/assets/game/background.jpg';
 
function loader() {
  const game = global.game;

  game.app.loader
    .add('trashSprites', `${process.env.PUBLIC_URL}/game/trash/trash.json`)
    .add('containersSprites', `${process.env.PUBLIC_URL}/game/containers/containers.json`)
    .add('button', buttonImg)
    .add('levelBackground', backgroundImg)

  game.sounds.victory = new Howl({
    src: [`${process.env.PUBLIC_URL}/game/game-victory.mp3`]
  });
}

export default loader;