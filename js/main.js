"use strict";
// start scroll-up ------------
let scroll = document.querySelector(".scroll-up");
window.addEventListener(`scroll`, () => {
  if (this.scrollY >= 200) {
    scroll.classList.add("show-up");
  } else {
    scroll.classList.remove("show-up");
  }
});

// start footer_icon -------------
let footerIcon = document.querySelectorAll(".footer-icon li a");
footerIcon.forEach((li) => {
  li.addEventListener(`click`, () => {
    document.querySelector(".footer-icon a.active").classList.remove("active");
    li.classList.add("active");
  });
});

// start offcanvas ----------------

let scorllIcrement = document.querySelector(".increment-body");
let fixed = document.querySelector(".add-check");
let fixedproduct = document.querySelector(".add-product");

scorllIcrement.addEventListener(`scroll`, function () {
  if (this.scrollTop > 100) {
    fixed.classList.add("scroll-offcanvas");
  } else {
    fixed.classList.remove("scroll-offcanvas");
  }
});

// End offcanvas ----------------

// start carousel ------------
$(`document`).ready(() => {
  $(".carousel-card .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    autoplay: true,
    nav: false,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        nav: true,
        items: 8,
      },
    },
  });
});
