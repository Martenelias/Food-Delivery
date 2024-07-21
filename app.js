document.addEventListener('DOMContentLoaded', () => {
  const names = document.querySelectorAll('.pizzas .names div');
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.pointerEvents = 'none'; // To prevent interference with events

  let currentActiveDot = document.querySelector('.pizzas .names .seven');

  currentActiveDot.appendChild(dot);

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
});
