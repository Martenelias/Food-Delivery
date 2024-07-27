const names = document.querySelectorAll('.pizzas .names div');
const dot = document.createElement('div');
dot.classList.add('dot');
dot.style.pointerEvents = 'none';

const image = document.getElementsByTagName('img')[0];
const currentPizzaNameElement = document.querySelector('.name-size-price h2');
const toppingsElement = document.getElementById('toppings');
const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');
const currentPrice = document.getElementById('currentPrice');

let currentActiveDot = document.querySelector('.pizzas .names .seven');
currentActiveDot.appendChild(dot);

const dotChange = () => {
  names.forEach((name) => {
    name.addEventListener('mouseover', () => {
      if (window.innerWidth > 480) {
        name.appendChild(dot);
      }
    });

    name.addEventListener('click', () => {
      if (window.innerWidth > 480) {
        if (currentActiveDot) {
          const currentDot = currentActiveDot.querySelector('.dot');
          if (currentDot) {
            currentDot.style.display = 'none';
          }
        }
        const clickedDot = name.querySelector('.dot');
        if (clickedDot) {
          clickedDot.style.display = 'flex';
        }
        currentActiveDot = name;
      }
    });
  });
};

const imageChange = () => {
  names.forEach((name) => {
    name.addEventListener('click', () => {
      const imageName = `${name.id}.png`;
      image.src = `../images/${imageName}`;
      const currentActivePizza = name.querySelector('span').textContent;
      currentPizzaNameElement.textContent = currentActivePizza;
    });
  });
};

const toppingsChange = () => {
  names.forEach((name) => {
    name.addEventListener('click', () => {
      const toppingsText = name.getAttribute('data-topping');
      toppingsElement.innerHTML = toppingsText;
    });
  });
};

const priceChange = () => {
  small.addEventListener('click', () => {
    currentPrice.textContent = '10';
  });
  medium.addEventListener('click', () => {
    currentPrice.textContent = '15';
  });
  large.addEventListener('click', () => {
    currentPrice.textContent = '20';
  });
};

export default dotChange;
export { imageChange, toppingsChange, priceChange };
