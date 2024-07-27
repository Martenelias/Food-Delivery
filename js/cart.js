const cart = document.getElementById('cart');
const shopCart = document.getElementById('shopping-cart');
const cartAddIcon = document.getElementById('cart-shop-icon');

const showCart = () => {
  cart.style.marginRight = '-1000px';
  const close = document.getElementById('closeCart');
  close.style.cursor = 'pointer';
  const getCart = document.getElementById('getCart');

  getCart.addEventListener('click', () => {
    document.getElementById('dropdown').style.display = 'none';
    cart.style.display = 'flex';
    cart.style.marginRight = '0';
  });

  shopCart.addEventListener('click', () => {
    cart.style.display = 'flex';
    cart.style.marginRight = '0';
  });

  close.addEventListener('click', () => {
    cart.style.marginRight = '-1000px';
  });
};

const removeItems = () => {
  const removeCartItemsButtons = document.getElementsByClassName('del');
  for (let i = 0; i < removeCartItemsButtons.length; i += 1) {
    const button = removeCartItemsButtons[i];
    button.addEventListener('click', (event) => {
      const buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
    });
  }
};

const addItem = () => {
  cartAddIcon.addEventListener('click', () => {
    const getName = document.querySelector('.name-size-price h2').textContent;
    const price = document.getElementById('currentPrice').textContent;
    let getSize = '';

    if (price === 10) {
      getSize = 'S';
    } else if (price === 15) {
      getSize = 'M';
    } else {
      getSize = 'L';
    }

    const cartItemsContainer = document.querySelector('.cart-items');
    const newItem = document.createElement('div');
    newItem.classList.add('cart-items-detail');
    newItem.innerHTML = `
      <div class="details-container">
          <div class="details-box">
            <p id="cart-pizza-name">${getName}</p>
            <p id="getSize">${getSize}</p>
          </div>
          <div class="details-box">
            <button id="plus" class="plus">+</button>
            <p id="cart-item-num">1</p>
            <button id="min" class="minus">-</button>
          </div>
        </div>
        <p>€<span id="cart-item-cost">${price}</span></p>
        <button id="del" class="del"><i class="fa-solid fa-trash"></i></button>
      </div>  
    `;
    cartItemsContainer.appendChild(newItem);
    removeItems();
  });
};

export default showCart;
export { addItem, removeItems };
