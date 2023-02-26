import "../scss/style.scss";
import { pageScroll } from "./modules/scroll.js";
import { menu, switchByWidth } from "./modules/hamburger.js";

const pageTopBtn = document.querySelector(".p-footer__btn");
const openListBtn = document.querySelector(".p-header__open--btn");
const closeListBtn = document.querySelector(".p-header__close--btn");
const menuList = document.querySelector(".p-header__nav");
const mediaQueryList = window.matchMedia("(min-width: 1050px)");

window.addEventListener("DOMContentLoaded", function () {
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

  // const aaa = document.querySelectorAll(".p-production__area--title");
  // aaa.forEach(el => {
  //   console.log(el.childElementCount);
  //   //console.log(el.children[0]);
  // });

  // const a = document.querySelector("#aaa");
  // console.log(a);
  // console.log(a.childElementCount);
  // let bbb = 0;
  // for(let i =  0;i < a.childElementCount; i++) {
  //   //console.log(a.children[i].clientHeight);
  //   bbb = bbb + a.children[i].clientHeight;
  // }
  // //console.log(a.clientHeight);
  // //console.log(bbb);
  // //console.log(a.parentElement);

  const productionTitle = document.querySelectorAll(
    ".p-production__area--title"
  );
  //let innerHeight = 0;
    productionTitle.forEach((el) => {
      let innerHeight = 0;
      let count = el.childElementCount;
      for (let i = 0; i < count; i++) {
        innerHeight = innerHeight + el.children[i].clientHeight;
      }
      if (innerHeight != el.clientHeight) {
        console.log(innerHeight);
        el.parentElement.style.gridTemplateRows = innerHeight + "px";
      }
    });
});
