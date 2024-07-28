import dotChange, { imageChange, toppingsChange, priceChange } from './imageFunctions.js';
import showMenu, { showAbout } from './menu.js';
import showFav, { addFav } from './favorites.js';
import showCart, { addItem, removeItems, setupSizeListeners } from './cart.js';

// Extra window elements wont pop up when reload page
document.getElementById('favorites').style.display = 'none';
document.getElementById('dropdown').style.display = 'none';
document.getElementById('about').style.display = 'none';
document.getElementById('cart').style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
  // Menu
  showMenu();

  // About
  showAbout();

  // Favorites
  showFav();

  // Add your favorite pizza
  addFav();

  // Show shopping cart
  showCart();

  // Adding items to the cart
  addItem();

  // Removes items from the cart
  removeItems();

  // Selects correct pizza size
  setupSizeListeners();

  // Shows only the current chosen pizzas dot
  dotChange();

  // Changes image when clicked
  imageChange();

  // Changes toppings info for current pizza
  toppingsChange();

  // Change pizza price depending on the size
  priceChange();
});
