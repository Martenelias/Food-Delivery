const showFav = () => {
  const favorites = document.getElementById('favorites');
  const menu = document.getElementById('heart');
  const close = document.getElementById('closeFav');
  const getFavorites = document.getElementById('getFavorites');

  favorites.style.marginRight = '-1000px'; // Initially hide the favorites
  close.style.cursor = 'pointer';

  getFavorites.addEventListener('click', () => {
    document.getElementById('dropdown').style.display = 'none';
    favorites.style.display = 'flex';
    favorites.style.marginRight = '0';
  });

  // Show favorites on menu icon click
  menu.addEventListener('click', () => {
    favorites.style.display = 'flex';
    favorites.style.marginRight = '0';
  });

  // Hide favorites on close button click
  close.addEventListener('click', () => {
    favorites.style.marginRight = '-1000px';
  });
};

const addFav = () => {
  const save = document.getElementById('save-fav');
  const favPizza = document.querySelector('.fav-pizza p');

  save.addEventListener('click', () => {
    const currentPizzaName = document.querySelector('.name-size-price h2').textContent;

    if (favPizza.textContent && favPizza.textContent !== currentPizzaName) {
      favPizza.textContent = '';
    }

    favPizza.textContent = currentPizzaName;
  });
};

export default showFav;
export { addFav };
