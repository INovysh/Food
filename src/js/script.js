window.addEventListener("DOMContentLoaded", function () {
  let asideClose = document.querySelector(".aside__close");
  let headerNav = document.querySelector(".header__nav");

  asideClose.addEventListener("click", function () {
    let aside = document.querySelector(".aside");
    aside.style.display = "none";
  });

  headerNav.addEventListener("click", function (event) {
    let headerSubtitle = document.querySelectorAll(".header__subtitle");
    let headerInfo = document.querySelectorAll(".header__info");

    if (event.target && event.target.classList.contains("header__subtitle")) {
      for (let i = 0; i < headerSubtitle.length; i++) {
        if (event.target == headerSubtitle[i]) {
          headerInfo[i].classList.toggle("header__info_show");
        }
      }
    }
  });

  let pageUp = document.querySelector(".pageUp");
  window.addEventListener("scroll", function () {
    let scrollH = window.pageYOffset;
    let w = document.documentElement.clientWidth;
    if (scrollH > 900 && w > 576) {
      pageUp.style.display = "block";
    } else {
      pageUp.style.display = "none";
    }
  });

  if (document.documentElement.clientWidth < "577") {
    let footerWrapper = document.querySelector(".footer__wrapper");
    let footerTitle = document.querySelectorAll(".footer__title");
    let footerInfo = document.querySelectorAll(".footer__info");

    for (let i = 0; i < footerInfo.length; i++) {
      footerInfo[i].classList.add("hidden");
    }
    footerWrapper.addEventListener("click", function (event) {
      if (event.target && event.target.classList.contains("footer__title")) {
        for (let i = 0; i < footerTitle.length; i++) {
          if (event.target == footerTitle[i]) {
            footerInfo[i].classList.toggle("hidden");
          }
        }
      }
    });
  }
});
