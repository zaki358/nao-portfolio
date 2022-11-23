import '../scss/style.scss';
import { pageScroll } from './modules/scroll.js';
import { menu, switchByWidth } from './modules/hamburger.js';

const pageTopBtn = document.querySelector(".p-footer__btn");
const openListBtn = document.querySelector(".p-header__open--btn");
const closeListBtn = document.querySelector(".p-header__close--btn");
const menuList = document.querySelector(".p-header__nav");
const mediaQueryList = window.matchMedia('(min-width: 1050px)');

window.addEventListener('DOMContentLoaded', function () {
  pageScroll(pageTopBtn);

  menu(openListBtn, closeListBtn, menuList);

  const breakPointFunction = (breakPoint) => {
    if (breakPoint.matches) {
      if (menuList.classList.contains("js-open") === true) {
        switchByWidth(menuList, openListBtn);
      }
    }
  };
  mediaQueryList.addEventListener("change", breakPointFunction);
  //初期化
  breakPointFunction(mediaQueryList);
});

