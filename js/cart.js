const cart = document.getElementById('cart');
const shopCart = document.getElementById('shopping-cart');
const cartAddIcon = document.getElementById('cart-shop-icon');
let selectedSize = '';

// Manage visibility of the shopping cart menu
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

// Updates the number of itmes in the cart
const updateItemsLength = () => {
  const cartItems = document.querySelector('.cart-items');
  const itemsLength = cartItems ? cartItems.getElementsByClassName('cart-items-detail').length : 0;
  document.getElementById('items-length').textContent = itemsLength;
};

// Updates and calculates the total price of the items in the cart
const updateCartTotal = () => {
  let total = 0;
  const cartItems = document.querySelector('.cart-items');
  const cartRows = cartItems ? cartItems.getElementsByClassName('cart-items-detail') : [];

  for (let i = 0; i < cartRows.length; i += 1) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.querySelector('.cart-price');
    const price = parseFloat(priceElement.textContent);

    total += price;
  }

  document.getElementById('total-cost').textContent = total.toFixed(2);
  updateItemsLength();
};

// Removes single items from the cart list
const removeItems = () => {
  const removeCartItemsButtons = document.getElementsByClassName('del');
  for (let i = 0; i < removeCartItemsButtons.length; i += 1) {
    const button = removeCartItemsButtons[i];
    button.addEventListener('click', (event) => {
      const buttonClicked = event.target.closest('.cart-items-detail');
      buttonClicked.remove();
      updateCartTotal();
    });
  }
  const purhcaseBtn = document.querySelector('.purchase');
  if (purhcaseBtn) {
    purhcaseBtn.addEventListener('click', () => {
      const cartItemsContainer = document.querySelector('.cart-items');
      while (cartItemsContainer.firstChild) {
        cartItemsContainer.removeChild(cartItemsContainer.firstChild);
        alert('Thank you for your order, your order will be delivered to you shortly! Enjoy!');
      }
      updateCartTotal();
    });
  }
};

// Updates quantity and the cost of a single item
const updateItemQuantity = (item, delta) => {
  const itemNumElement = item.querySelector('#cart-item-num');
  const itemCostElement = item.querySelector('#cart-item-cost');
  const pricePerItem = parseFloat(itemCostElement.getAttribute('data-price-per-item'));
  const currentNum = parseInt(itemNumElement.textContent, 10);
  const newNum = currentNum + delta;

  if (newNum > 0) {
    itemNumElement.textContent = newNum;
    const newCost = (pricePerItem * newNum).toFixed(2);
    itemCostElement.textContent = newCost;
  } else if (newNum === 0) {
    item.remove();
  }
  updateCartTotal();
};

// Adds a item in the cart with all details
const addItem = () => {
  cartAddIcon.addEventListener('click', () => {
    const getNameElement = document.querySelector('.name-size-price h2');
    const priceElement = document.getElementById('currentPrice');
    if (!getNameElement || !priceElement) return;

    const getName = getNameElement.textContent;
    const price = parseFloat(priceElement.textContent);
    const cartItemsContainer = document.querySelector('.cart-items');

    const existingItem = Array.from(cartItemsContainer.children).find((item) => {
      const itemName = item.querySelector('#cart-pizza-name').textContent;
      const itemSize = item.querySelector('#getSize').textContent;
      return itemName === getName && itemSize === selectedSize;
    });

    if (existingItem) {
      updateItemQuantity(existingItem, 1);
    } else {
      const newItem = document.createElement('div');
      newItem.classList.add('cart-items-detail');
      newItem.innerHTML = `
        <div class="details-container">
          <div class="details-box">
            <p id="cart-pizza-name">${getName}</p>
            <p id="getSize">${selectedSize}</p>
          </div>
          <div class="details-box">
            <button id="plus" class="plus" type="button">+</button>
            <p id="cart-item-num">1</p>
            <button id="min" class="minus" type="button">-</button>
          </div>
        </div>
        <p>€<span id="cart-item-cost" class="cart-price" data-price-per-item="${price.toFixed(2)}">${price.toFixed(2)}</span></p>
        <button id="del" class="del" type="button"><i class="fa-solid fa-trash"></i></button>
      `;
      cartItemsContainer.appendChild(newItem);
      removeItems();

      const plusButton = newItem.querySelector('.plus');
      const minusButton = newItem.querySelector('.minus');
      plusButton.addEventListener('click', () => {
        updateItemQuantity(newItem, 1);
      });
      minusButton.addEventListener('click', () => {
        updateItemQuantity(newItem, -1);
      });
    }
    updateCartTotal();
  });
};

const setupSizeListener = (element) => {
  element.addEventListener('click', (event) => {
    selectedSize = event.target.textContent;
  });
};

const setupSizeListeners = () => {
  const sizeElements = document.getElementsByClassName('size-sml');
  for (let i = 0; i < sizeElements.length; i += 1) {
    setupSizeListener(sizeElements[i]);
  }
};

export default showCart;
export { addItem, removeItems, setupSizeListeners };
