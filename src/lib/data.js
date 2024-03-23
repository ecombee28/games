//Build the Mario card deck
export const buildMarioArray = () => {
  let marioArray = [];
  for (let i = 1; i < 14; i++) {
    marioArray.push({
      number: i,
      image: require("../img/mariobros/" + i + ".png"),
      frontImage: require("../img/mariobros/card.png"),
      background: require("../img/mariobros/background.png"),
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
    });
  }

  return pixarArray;
};

//Exports
export const pixarCardsArray = buildPixarArray();
export const batmanCardsArray = buildBatmanArray();
export const marioCardsArray = buildMarioArray();
export const spongeCardsArray = buildSpongeBobArray();
