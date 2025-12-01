// Navigation Declaration

let nav = document.querySelector(".nav");
let hamburger = document.querySelector(".hamburger");
let hamburger1 = document.querySelector(".hamburger > div:first-child");
let hamburger2 = document.querySelector(".hamburger > div:nth-child(2)");
let hamburger3 = document.querySelector(".hamburger > div:last-child");

// Search Bar Declaretion

let search_icon = document.querySelector("i.search_icon");
let mobile_search_container = document.querySelector(
  ".mobile_search_container"
);

// User Account Declaretion

let account_container = document.querySelector(".account_container");
let user_account = document.querySelector(".user_account");
let login = document.querySelector(".user_account .login");
let sign_up = document.querySelector(".user_account .sign_up");
let create_account = document.querySelector(
  ".new_customer .create_account_now"
);
let login_account = document.querySelector(".new_customer .login_account_now");

// Main Declaration

let main_body = document.querySelector(".main_body");

// Quick Links Declaration

let quick_link_about_us = document.querySelector(".quick_links .about_us");
let quick_about_head = document.querySelector(".quick_links .about_us_head");
let quick_about_body = document.querySelector(".quick_links .about_us_body");
let quick_about_plus = document.querySelector(".quick_links .about_us_plus");

let quick_link_offices = document.querySelector(".quick_links .offices");
let quick_offices_head = document.querySelector(".quick_links .offices_head");
let quick_offices_body = document.querySelector(".quick_links .offices_body");
let quick_offices_plus = document.querySelector(".quick_links .offices_plus");

let quick_link_main_menu = document.querySelector(".quick_links .main_menu");
let quick_main_menu_head = document.querySelector(
  ".quick_links .main_menu_head"
);
let quick_main_menu_body = document.querySelector(
  ".quick_links .main_menu_body"
);
let quick_main_menu_plus = document.querySelector(
  ".quick_links .main_menu_plus"
);

// All Interactivity Begins

// Navigation Action
hamburger.addEventListener("click", () => {
  if (nav.style.left === "0%") {
    // Close The Nav Bar

    document.body.classList.remove("no-scroll");
    nav.style.left = "-100%";

    hamburger1.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger1.style.transition = "0.2s";
    hamburger1.style.width = "30px";

    hamburger2.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger2.style.transition = "0.2s";

    hamburger3.style.transform = "rotate(0deg) translate(0px, 0px)";
    hamburger3.style.transition = "0.2s";
    hamburger3.style.width = "30px";
  } else {
    // Open The Nav Bar
    document.body.classList.add("no-scroll");
    nav.style.left = "0%";
    mobile_search_container.style.display = "none";
    main_body.style.marginTop = "80px";

    hamburger1.style.transform = "rotate(225deg) translate(-7px, -10px)";
    hamburger1.style.transition = "0.2s";
    hamburger1.style.width = "14px";

    hamburger2.style.transform = "rotate(180deg) translateX(0px)";
    hamburger2.style.transition = "0.2s";

    hamburger3.style.transform = "rotate(135deg) translate(-7px, 11px)";
    hamburger3.style.transition = "0.2s";
    hamburger3.style.width = "15px";

    user_account.style.transform = "scale(0)";
    user_account.style.visibility = "hidden";
    user_account.style.transition = "0.2s";
  }
});

// Search Bar Action

search_icon.addEventListener("click", () => {
  if (mobile_search_container.style.display === "block") {
    // Hide Mobile Search Bar

    mobile_search_container.style.display = "none";
    main_body.style.marginTop = "80px";
  } else {
    // Reveal Mobile Search Bar

    if (window.innerWidth < 700) {
      main_body.style.marginTop = "150px";
    }
    document.body.classList.remove("no-scroll");
    mobile_search_container.style.display = "block";
    mobile_search_container.style.top = "80px";
    nav.style.left = "-100%";

    user_account.style.visibility = "hidden";
    user_account.style.transform = "scale(0)";

    hamburger1.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger1.style.transition = "0.2s";
    hamburger1.style.width = "30px";

    hamburger2.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger2.style.transition = "0.2s";

    hamburger3.style.transform = "rotate(0deg) translate(0px, 0px)";
    hamburger3.style.transition = "0.2s";
    hamburger3.style.width = "30px";
  }

  if (window.innerWidth >= 700) {
    mobile_search_container.style.display = "none";
    hamburger2.style.transform = "rotate(0deg) translate(0px, 0px)";
  }

  if (window.innerWidth >= 1000) {
    nav.style.left = "0%";
  }
});

// User Account Action

account_container.addEventListener("click", () => {
  if (user_account.style.visibility === "visible") {
    // Hide Form

    document.body.classList.remove("no-scroll");
    user_account.style.visibility = "hidden";
    user_account.style.transform = "scale(0)";
  } else {
    // Reveal Form

    if (window.innerWidth >= 1000) {
      nav.style.left = "0%";
      document.body.classList.remove("no-scroll");
    } else {
      nav.style.left = "-100%";
      document.body.classList.add("no-scroll");
    }
    user_account.style.visibility = "visible";
    user_account.style.transform = "scale(1)";

    hamburger1.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger1.style.transition = "0.2s";
    hamburger1.style.width = "30px";

    hamburger2.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger2.style.transition = "0.2s";

    hamburger3.style.transform = "rotate(0deg) translate(0px, 0px)";
    hamburger3.style.transition = "0.2s";
    hamburger3.style.width = "30px";
  }
});

create_account.addEventListener("click", () => {
  login.style.left = "-100%";
  login.style.transition = "0.2s";
  sign_up.style.left = "0%";
  sign_up.style.transition = "0.2s";
});

login_account.addEventListener("click", () => {
  login.style.left = "0%";
  login.style.transition = "0.2s";
  sign_up.style.left = "100%";
  sign_up.style.transition = "0.2s";
});

// OEM Testimonial Section Begins

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Get swiper container element
const swiperEl = document.querySelector(".mySwiper");

// Pause autoplay on hover
swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

// Resume autoplay when hover ends
swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});

// OEM Testimonial Section Ends

// Quick Links Action

// Quick Links for About Us
quick_about_head.addEventListener("click", () => {
  if (quick_about_body.style.maxHeight === "500px") {
    if (window.innerWidth < 700) {
      // Close the  body

      quick_about_body.style.maxHeight = "0px";
      quick_about_plus.classList.remove("open");
      quick_link_about_us.classList.remove("open");
    }
  } else {
    // Open the body

    quick_about_body.style.maxHeight = "500px";
    quick_about_plus.classList.add("open");
    quick_link_about_us.classList.add("open");

    if (window.innerWidth < 700) {
      // Close Offices body

      quick_offices_body.style.maxHeight = "0px";
      quick_offices_plus.classList.remove("open");
      quick_link_offices.classList.remove("open");
      quick_offices_body.style.transition = "0.5s";

      // Close Main_Menu body

      quick_main_menu_body.style.maxHeight = "0px";
      quick_main_menu_plus.classList.remove("open");
      quick_link_main_menu.classList.remove("open");
      quick_main_menu_body.style.transition = "0.5s";
    }
  }
});

// Quick Links for Offices

quick_offices_head.addEventListener("click", () => {
  if (quick_offices_body.style.maxHeight === "500px") {
    if (window.innerWidth < 700) {
      // Close the quick link body

      quick_offices_body.style.maxHeight = "0px";
      quick_offices_plus.classList.remove("open");
      quick_link_offices.classList.remove("open");
      quick_offices_body.style.transition = "0.5s";
    }
  } else {
    // Open the quick link body

    quick_offices_body.style.maxHeight = "500px";
    quick_offices_plus.classList.add("open");
    quick_link_offices.classList.add("open");

    if (window.innerWidth < 700) {
      // Close About_us body

      quick_about_body.style.maxHeight = "0px";
      quick_about_plus.classList.remove("open");
      quick_link_about_us.classList.remove("open");
      quick_about_body.style.transition = "0.5s";

      // Close Main_Menu body

      quick_main_menu_body.style.maxHeight = "0px";
      quick_main_menu_plus.classList.remove("open");
      quick_link_main_menu.classList.remove("open");
      quick_main_menu_body.style.transition = "0.5s";
    }
  }
});

// Quick Links for Main Menu

quick_main_menu_head.addEventListener("click", () => {
  if (quick_main_menu_body.style.maxHeight === "500px") {
    if (window.innerWidth < 700) {
      // Close the quick link body

      quick_main_menu_body.style.maxHeight = "0px";
      quick_main_menu_plus.classList.remove("open");
      quick_link_main_menu.classList.remove("open");
      quick_main_menu_body.style.transition = "0.5s";
    }
  } else {
    // Open the quick link body

    quick_main_menu_body.style.maxHeight = "500px";
    quick_main_menu_plus.classList.add("open");
    quick_link_main_menu.classList.add("open");

    if (window.innerWidth < 700) {
      // Close About_Us body

      quick_about_body.style.maxHeight = "0px";
      quick_about_plus.classList.remove("open");
      quick_link_about_us.classList.remove("open");
      quick_about_body.style.transition = "0.5s";

      // Close Offices body

      quick_offices_body.style.maxHeight = "0px";
      quick_offices_plus.classList.remove("open");
      quick_link_offices.classList.remove("open");
      quick_offices_body.style.transition = "0.5s";
    }
  }
});
