const cart = document.getElementById('cart');
const shopCart = document.getElementById('shopping-cart');
const getName = document.getElementById('name-size-price h2').textContent;
const price = document.getElementById('currentPrice').textContent;
const pizzaName = document.getElementById('cart-pizza-name').textContent;
const count = document.getElementById('cart-item-num').textContent;
const plus = document.getElementById('plus');
const min = document.getElementById('min');
const itemCost = document.getElementById('cart-item-cost').textContent;
const del = document.getElementById('del');

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

};

export default showCart;
export { addItem };
