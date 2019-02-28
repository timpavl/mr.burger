/*--- СЛАЙДЕР ---*/
const leftArrow = document.querySelector('.left-arrow__button');
const rightArrow = document.querySelector('.right-arrow__button');
const burgersList = document.querySelector('.burgers__list');
const burgersItem = burgersList.firstElementChild;

const minRight = 0;
const itemsCount = burgersList.children.length;
let step = parseInt(getComputedStyle(burgersItem).width);
let maxRight = step * (itemsCount - 1);

let currentRight = 0;

window.onresize = () => {
  step = parseInt(getComputedStyle(burgersItem).width);
  maxRight = step * (itemsCount - 1);
  currentRight = 0;
  burgersList.style.right = `${currentRight}px`;
};


rightArrow.addEventListener('click', () => {
  if (currentRight < maxRight) {
    currentRight += step;
  } else {
    currentRight = 0;
  }

  burgersList.style.right = `${currentRight}px`;
});

leftArrow.addEventListener('click', () => {
  if (currentRight > minRight) {
    currentRight -= step;
  } else {
    currentRight = maxRight;
  }

  burgersList.style.right = `${currentRight}px`;
});

/*--- TEAM ---*/

// инициализация констант
const teamItems = document.querySelectorAll('.team__li');
const teamBtns = document.querySelectorAll('.team__li-button');

// добавить кнопку слушателя для кнопки
Array.from(teamBtns).forEach(btn => {
  btn.addEventListener('click', e => {
    if (e.target.parentElement.classList.contains("team__li_active")) {
      closeTeamContent();
    } else {
      closeTeamContent();
      openTeamContent(e);
    }
  });
});

// функция открытия содержимого команды
function openTeamContent(e) {
  const item = e.target.parentElement;
  item.classList.add("team__li_active");

  const contentWrapper = e.target.nextElementSibling;
  const content = contentWrapper.querySelector('.team__li-content');
  const contentHeight = content.getBoundingClientRect().height;

  contentWrapper.style.height = `${contentHeight}px`;
}

// функция закрытия содержимого команды
function closeTeamContent() {
  Array.from(teamItems).forEach(item => {
    item.classList.remove("team__li_active");
    const contentWrapper = item.querySelector(".team__li-content");
    contentWrapper.style.height = 0;
  });
}