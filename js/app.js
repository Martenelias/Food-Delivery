import dotChange, { imageChange, toppingsChange, priceChange } from './imageFunctions.js';
import showMenu, { showAbout } from './menu.js';
import showFav, { addFav } from './favorites.js';

document.getElementById('favorites').style.display = 'none';
document.getElementById('dropdown').style.display = 'none';
document.getElementById('about').style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
  // Menu
  showMenu();

  // About
  showAbout();

  // Favorites
  showFav();

  // Add your favorite pizza
  addFav();

  // shows only the current chosen pizzas dot
  dotChange();

  // Changes image when clicked
  imageChange();

  // Changes toppings info for current pizza
  toppingsChange();

  // Change pizza price depending on the size
  priceChange();
});
