const carousel = document.querySelector('.grid-carousel');
const slides = carousel.querySelectorAll('.grid-carousel__item');
const leftButton = carousel.querySelector('.js-left');
const rightButton = carousel.querySelector('.js-right');

const getOrder = (elem) => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;
  const order = parseInt(orderValue);
  return order;
}

const FeaturedItem = elem => {
  if (order == 3) {
    elem.classList.add('featured');
  } else {
    elem.classList.remove('featured');
  }
}

const moveRight = _ => {
  slides.forEach(function(slide) {
    order = getOrder(slide);

    if (order < slides.length) {
      slide.style.order = order += 1;
    } else {
      slide.style.order = 1;
    }

    FeaturedItem(slide);

  });
}

const moveLeft = _ => {
  slides.forEach(function(slide) {
    order = getOrder(slide);

    if (order > 1) {
      slide.style.order = order -= 1;
    } else {
      slide.style.order = 5;
    }

    FeaturedItem(slide);
  });
}

rightButton.addEventListener('click', _ => {
  moveRight();
})

leftButton.addEventListener('click', _ => {
  moveLeft();
})
