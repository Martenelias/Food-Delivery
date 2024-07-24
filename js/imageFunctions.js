const names = document.querySelectorAll('.pizzas .names div');
const dot = document.createElement('div');
dot.classList.add('dot');
dot.style.pointerEvents = 'none';

const image = document.getElementsByTagName('img')[0];
const currentPizzaNameElement = document.querySelector('.name-size-price h2');
const toppingsElement = document.getElementById('toppings');

let currentActiveDot = document.querySelector('.pizzas .names .seven');
currentActiveDot.appendChild(dot);

const dotChange = () => {
  names.forEach((name) => {
    name.addEventListener('mouseover', () => {
      name.appendChild(dot);
    });

    name.addEventListener('click', () => {
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
    });
  });
};

const imageChange = () => {
  names.forEach((name) => {
    name.addEventListener('click', () => {
      const imageName = `${name.id}.png`;
      image.src = `../images/${imageName}`;
      console.log(image.src);
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
      console.log(toppingsText);
    });
  });
};

export default dotChange;
export { imageChange, toppingsChange };
