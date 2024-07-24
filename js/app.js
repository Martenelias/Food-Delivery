import dotChange, { imageChange, toppingsChange } from './imageFunctions.js';
import showMenu from './menu.js';
import showFav from './favorites.js';

document.addEventListener('DOMContentLoaded', () => {
  // Menu
  showMenu();

  // Favorites
  showFav();

  // shows only the current chosen pizzas dot.
  dotChange();

  // Changes image when clicked
  imageChange();

  // Changes toppings info for current pizza
  toppingsChange();
});
