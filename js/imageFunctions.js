const names = document.querySelectorAll('.pizzas .names div');
const dot = document.createElement('div');
dot.classList.add('dot');
dot.style.pointerEvents = 'none';

const image = document.getElementsByTagName('img')[0];

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
    });
  });
};

const toppingsChange = () => {
  names.forEach((name) => {
    name.addEventListener('click', () => {
      const toppingsText = name.getAttribute('data-topping');
      const toppings = document.getElementById('toppings');
      toppings.innerHTML = toppingsText;
      console.log(toppingsText);
    });
  });
};

export default dotChange;
export { imageChange, toppingsChange };
