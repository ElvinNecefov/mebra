 // Index page js...
 var swiper_home = new Swiper(".slide-content-home", {
  slidesPerView: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next-home",
    prevEl: ".swiper-button-prev-home",
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 1,
    },
  },
  
});


var swiper = new Swiper(".slide-content-categories", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
   
  },
  
});


  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 4,
      },
    },
    
  });



  var swiper = new Swiper(".slide-content-item", {
    slidesPerView: 1,
    fade: 'true',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-item",
      prevEl: ".swiper-button-prev-item",
    },
 });



// Vip page js...
 var swiper_vip = new Swiper(".slide-content-vip", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
  
});



// Premium page js...
var swiper_premium = new Swiper(".slide-content-premium", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
  
});



// End page js...
var swiper_end = new Swiper(".slide-content-end", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
  
});



// Index page js...
const hamburger = document.querySelector(".bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileOverlay = document.querySelector(".header-overlay");
const closeMenu = document.querySelector(".close-menu");


hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileOverlay.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


const loginBut = document.querySelector(".login-mobile");
const mobileLogin = document.querySelector(".mobile-login");
const loginOverlay = document.querySelector(".login-overlay");
const closeLogin = document.querySelector(".close-login");


loginBut.addEventListener("click", () => {
  mobileLogin.classList.toggle("active");
});

loginOverlay.addEventListener("click", () => {
  mobileLogin.classList.toggle("active");
});

closeLogin.addEventListener("click", () => {
  mobileLogin.classList.toggle("active");
});


const searchBut = document.querySelector('.search');
const searchForm = document.querySelector('.search-form');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

searchBut.addEventListener("click", function() {
  searchBut.classList.toggle('active');
  searchForm.classList.toggle('block');
  nav.classList.toggle('none');
  logo.classList.toggle('none');
})











