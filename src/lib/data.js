import batmanvictory from "../audio/batman_win.mp3";
import spongeBobVictoy from "../audio/sponge_win.mp3";
import pixarVictory from "../audio/pixar_win.mp3";
import marioVictory from "../audio/mario_victory.mp3";

//Build the Mario card deck
export const buildMarioArray = () => {
  let marioArray = [];
  for (let i = 1; i < 14; i++) {
    marioArray.push({
      number: i,
      image: require("../img/mariobros/" + i + ".png"),
      frontImage: require("../img/mariobros/card.png"),
      background: require("../img/mariobros/background.png"),
      victoryImage: require("../img/mariobros/victory.png"),
      victoryMusic: marioVictory,
    });
  }

  return marioArray;
};

//Build the Pixar card deck
const buildPixarArray = () => {
  let pixarArray = [];
  for (let i = 1; i < 14; i++) {
    pixarArray.push({
      number: i,
      image: require("../img/pixar/" + i + ".png"),
      frontImage: require("../img/pixar/card.png"),
      background: require("../img/pixar/background.png"),
      victoryImage: require("../img/pixar/victory.png"),
      victoryMusic: pixarVictory,
    });
  }

  return pixarArray;
};

//Build the Sponge bob card deck
const buildSpongeBobArray = () => {
  let pixarArray = [];
  for (let i = 1; i < 14; i++) {
    pixarArray.push({
      number: i,
      image: require("../img/sponge/" + i + ".png"),
      frontImage: require("../img/sponge/card.png"),
      background: require("../img/sponge/background.jpg"),
      victoryImage: require("../img/sponge/victory.png"),
      victoryMusic: spongeBobVictoy,
    });
  }

  return pixarArray;
};

//Build the Batman card deck
const buildBatmanArray = () => {
  let pixarArray = [];
  for (let i = 1; i < 14; i++) {
    pixarArray.push({
      number: i,
      image: require("../img/batman/" + i + ".png"),
      frontImage: require("../img/batman/card.png"),
      background: require("../img/batman/background.png"),
      victoryImage: require("../img/batman/victory.png"),
      victoryMusic: batmanvictory,
    });
  }

  return pixarArray;
};

//Exports
export const pixarCardsArray = buildPixarArray();
export const batmanCardsArray = buildBatmanArray();
export const marioCardsArray = buildMarioArray();
export const spongeCardsArray = buildSpongeBobArray();
