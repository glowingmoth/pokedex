// The first element in the array is always the top colour on types that are split horizontally
// A pokemon can have more than 1 type, some have 2

import { color } from "@mui/system";

export default function findColour(name) {
  // this is an array or 1 or 2 strings
  let colour = [];
  let text = '';
  // types.forEach((type) => {
    switch (name) {
      case "grass": // Text - black
        colour.push("#9bcc50");
        text = 'black'
        break;
      case "poison":
        colour.push("#b97fc9");
        break;
      case "fire":
        colour.push("#fd7d24");
        break;
      case "bug":
        colour.push("#729f3f");
        break;
      case "water":
        colour.push("#4592c3");
        break;
      case "normal":  // Text - black
        colour.push("#a4acaf");
        text = 'black'
        break;
      case "electric":  // Text - black
        colour.push("#eed535");
        text = 'black'
        break;
      case "fairy": // Text - black
        colour.push("#fdb9e9");
        text = 'black'
        break;
      case "fighting":
        colour.push("#d56723");
        break;
      case "psychic":
        colour.push("#f366b9");
        break;
      case "rock":
        colour.push("#a38c21");
        break;
      case "steel": // Text - black
        colour.push("#9eb7b8");
        text = 'black'
        break;
      case "ice":   // Text - black
        colour.push("#51c4e7");
        text = 'black'
        break;
      case "ghost":
        colour.push("#7b62a3");
        break;
      case "flying":  // Text - black
        colour.push("#3dc7ef", "#bdb9b8");
        text = 'black'
        break;
      case "ground":  // Text - black
        colour.push("#f7de3f", "#ab9842");
        text = 'black'
        break;
      case "dragon":
        colour.push("#53a4cf", "#f16e57");
        break;
      case "dark":
        colour.push("#707070")
        break;
      case "undefined":
        break;
      default:
    }
  // });

  if (colour.length > 1) {
    return {
      background: `linear-gradient(${colour[0]} 50%, ${colour[1]} 50%)`, color: `${text}`
    };
  }
  return { background: `linear-gradient(${colour[0]} 50%, ${colour[0]} 50%)`, color: `${text}` };
}
