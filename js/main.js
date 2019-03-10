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

$(document).ready(function () { 

  $('.team__li-button').on('click', function (a) {
    a.preventDefault(); //Отмена действия браузера

    var elem = $(a.target),
      item = elem.closest('.team__li'), //Строка содержащая выражение селектора для проверки совпадения элементов.
      items = item.siblings(); //Строка, содержащая выражение селектора для сопоставления элементов.
      /*Описание siblings: Осуществляет поиск элементов, являющихся соседними для выбранных элементов (под соседними понимаются элементы, которые имеют общего родителя). При этом, сами выбранные элементы в результат не включаются.*/
    if (!item.hasClass('team-active')) { //присвоение класса 
      items.removeClass('team-active');
      item.addClass('team-active');
    } else {
      item.removeClass('team-active');
    }
  });

});
//Меню-Аккордеон 
$(document).ready(function () {

  $('.menu__tint').on('click', function (a) {
    a.preventDefault();

    var elem = $(a.target),
      item = elem.closest('.menu__li'),
      items = item.siblings();

    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');
    } else {
      item.removeClass('active');
    }
  });

});
//бургер меню
$(document).ready(function () {

  $('.hamburger-menu').on('click', function (a) {
    a.preventDefault();

    var elem = $(a.target),
      item = elem.closest('.popup-menu'),
      items = item.siblings();

    if (!item.hasClass('popup-menu_active')) {
      items.removeClass('popup-menu_active');
      item.addClass('popup-menu_active');
    } else {
      item.removeClass('popup-menu_active');
    }
  });

});
