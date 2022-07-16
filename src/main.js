import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./i18n";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { firestorePlugin } from "vuefire"


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import store from "./store/index"

library.add(faUserSecret)


import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { createWebHistory, createRouter } from "vue-router";


import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Mission from "./views/Mission.vue";
import Cookie from "./views/Cookie.vue";
import Apartment from "./views/Apartment.vue";
import Sales from "./views/NavMenuPages/IndustriesPages/Sales.vue";
import Rentals from "./views/NavMenuPages/IndustriesPages/Rental.vue";
import AdvertPage from "./views/NavMenuPages/IndustriesPages/AdvertPage.vue";

import MeetRoom from "./components/meetingRoom.vue";
import Form from "./views/Form.vue";


global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/mission", name: "Mission", component: Mission },

  { path: "/cookie", name: "Cookie", component: Cookie },
  { path: "/meetroom/:id", name: "meetroom", component: MeetRoom },
  { path: "/form", name: "Form", component: Form },

  { path: "/apartment", name: "Apartment", component: Apartment },
  {path:"/sales", name:"Sales", component: Sales},
  {path:"/rentals", name:"Rentals", component: Rentals},
  {path:"/advert/:id", name:"AdvertPage", component: AdvertPage},

];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  i18n.locale = language;
  next();
});

//this helps to dropdown menu open
$(document).ready(function () {
  // Show hide popover
  $(".dropdown").click(function () {
    $(this).find(".dropdown-menu").slideToggle("fast");
  });
});
$(document).on("click", function (event) {
  var $trigger = $(".dropdown");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $(".dropdown-menu").slideUp("fast");
  }
});
jQuery("document").ready(function ($) {
  var nav = $('#header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  });
});

createApp(App).use(store).use(i18n).use(router).use( VueSplide ).use(firestorePlugin).use(LottieAnimation).mount("#app");
