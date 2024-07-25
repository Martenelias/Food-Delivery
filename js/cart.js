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

const addItem = () => {
  cartAddIcon.addEventListener('click', () => {
    const getName = document.querySelector('.name-size-price h2').textContent;
    const price = document.getElementById('currentPrice').textContent;
    document.getElementById('cart-item-cost').textContent = price;
    console.log(document.getElementById('cart-item-cost').textContent);
    document.getElementById('cart-pizza-name').textContent = getName;
  });
};

export default showCart;
export { addItem };
