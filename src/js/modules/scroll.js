export const pageScroll = btn => {
  btn.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });
}