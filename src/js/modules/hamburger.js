export const menu = (open,close,list) => {
  open.addEventListener('click', function(){
    list.classList.add("js-open");
    open.classList.add("js-open");
    console.log(list);
  });
  close.addEventListener('click', function(){
    list.classList.remove("js-open");
    open.classList.remove("js-open");
  });
}

export const switchByWidth = (list,btn) => {
      list.classList.remove("js-open");
      btn.classList.remove("js-open");
  }