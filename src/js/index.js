import '../scss/style.scss';

const pageTopBtn = document.querySelector(".p-footer__btn");

pageTopBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
});