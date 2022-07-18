<template>
  <header class="l-header scroll-header center" id="header">
    <div class="container space-between">
      <nav class="site-navbar">
        <div class="site-logo">
          <a href="/" class="nav__logo nav__img">
            <img src="../assets/images/ardala-logo-.png" alt="" />
          </a>
        </div>

        <SearchBox :search="store.search" />

        <ul class="navbar-menu">
          <li class="navbar-item">
            <a href="/sales">{{ $t("nav.menu_1") }}</a>
          </li>
          <li class="navbar-item"><a href="/rentals">{{ $t("nav.menu_2") }}</a></li>
          <li class="navbar-item"><a href="/contact">{{ $t("nav.menu_3") }}</a></li>
          <li class="navbar-item"><a href="/mission">{{ $t("nav.menu_4") }}</a></li>

        </ul>

        <div class="language">
          <ul @click="menusecim" class="nav__list">
            <li class="nav__item">
              <div class="dropdown header__actions">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ $i18n.locale.toUpperCase() }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button
                    class="locale-changer-buttons"
                    v-for="entry in languages"
                    :key="entry.title"
                    v-on:click="changeLanguage(entry.language)"
                  >
                    <p style="font-size: 11px">{{ entry.flag }}</p>
                  </button>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </nav>
      <div class="hambuger">
       
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
     
        <label htmlFor="nav-toggle" className="nav-toggle-label">
              <span></span>
              <span></span>
              <span></span>
            </label>
     
      <div class="responsive-navbar center">
       
      <ul class="responsive-navbar-menu">
        <li class="responsive-navbar-item">
          <a href="/sales">{{ $t("nav.menu_1") }}</a>
        </li>
        <li class="responsive-navbar-item"><a href="/rentals">{{ $t("nav.menu_2") }}</a></li>
        <li class="responsive-navbar-item"><a href="/contact">{{ $t("nav.menu_3") }}</a></li>
        <li class="responsive-navbar-item"><a href="/mission">{{ $t("nav.menu_4") }}</a></li>

        <li>   <div class="language">
          <ul @click="menusecim" class="nav__list">
            <li class="nav__item">
              <div class="dropdown header__actions">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ $i18n.locale.toUpperCase() }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button
                    class="locale-changer-buttons"
                    v-for="entry in languages"
                    :key="entry.title"
                    v-on:click="changeLanguage(entry.language)"
                  >
                    <p style="font-size: 11px">{{ entry.flag }}</p>
                  </button>
                </div>
              </div>
            </li>
            
          </ul>
        </div></li>
      </ul>
    </div>
    </div>
    </div>
    
    
  </header>
</template>

<script>
import Toggle from "./Toggle.vue";
import { setCookie } from "../assets/js/cookie-functions.js";
import Login from "./Login.vue";
import SearchBox from "../components/SearchBox.vue";
import advert_data from "../advert.json";
import Adverts from "../components/Adverts.vue";
import { store } from "../store";

export default {
  name: "Header",
  props: ["darkTheme"],
  data() {
    return {
      store,
      posts: advert_data["post"],
      languages: [
        { flag: "TR", language: "tr", title: "Turkish" },
        { flag: "EN", language: "en", title: "English" },
        { flag: "RU", language: "ru", title: "Russian" },
        { flag: "ARA", language: "ara", title: "German" },
        
      ],
    };
  },
  components: { SearchBox, Adverts },

  methods: {
    changeLanguage(lang) {
      this.$root.$i18n.locale = lang;
      setCookie("language", lang, 365);
    },
    menuac() {
      const nav = document.getElementById("nav-menu");
      nav.classList.toggle("show-menu");
    },
    menusecim() {
      const navLink = document.querySelectorAll(".nav-item");
      function linkAction() {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
      }
      navLink.forEach((n) => n.addEventListener("click", linkAction));
    },
  },
};
</script>

<style scoped >
.nav-toggle {
            display: none;
          }
          .nav-toggle-label {
            margin: 0;
            z-index: 9999999999999999;
          }
          .nav-toggle-label span {
            width: 25px;
            height: 3px;
            background-color: white;
            display: block;
            margin-bottom: 5px;
            border-radius: 5px;
            transition: all 0.3s;
          }
          .nav-toggle-label span:nth-child(2) {
            width: 15px;
            margin-left: 10px;
          }
          .nav-toggle:checked ~.responsive-navbar {
            height: 100vh;
            transition: all 0.5s;
          }

          .nav-toggle:checked + .nav-toggle-label span:nth-child(2) {
            opacity: 0;
            transition: all 0.3s;
          }
          .nav-toggle:checked + .nav-toggle-label span:nth-child(1) {
            transform: translate(0px, 9px) rotate(45deg);
            transition: all 0.3s;
          }
          .nav-toggle:checked + .nav-toggle-label span:nth-child(3) {
            transform: translate(0px, -7px) rotate(-45deg);
            transition: all 0.3s;
          }
           
.hambuger{
  display: none;
  }
.responsive-navbar {
  display: none;
}
/* For Desktop View */
@media screen and (min-width: 1024px) {
}
/* For Tablet View */
@media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
 .navbar-menu {
    display: none;
  }
  .responsive-navbar {
    display: flex;
    position: absolute;
    height: 0;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
     transition:all 0.3s;

  }
  .responsive-navbar-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .responsive-navbar-item {
    margin: 0;
  }
  .responsive-navbar-item a {
    color: white;
    font-size: 32px;
  }
  .hambuger {
   display: flex;
    
    }
    
    .bread{
       display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    z-index: 999;
    }
    input::placeholder{
          font-size: 19px;
    }
}
 @media (device-height: 720px) and (device-width: 540px)
and (-webkit-min-device-pixel-ratio: 2) {
  .navbar-menu {
    display: none;
  }
  .responsive-navbar {
    display: flex;
    position: absolute;
    height: 0;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
     transition:all 0.3s;

  }
  .responsive-navbar-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .responsive-navbar-item {
    margin: 0;
  }
  .responsive-navbar-item a {
    color: white;
    font-size: 32px;
  }
  .hambuger {
   display: flex;
    
    }
    
    .bread{
       display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    z-index: 999;
    }
    input::placeholder{
          font-size: 19px;
    }
}
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px) and (orientation: portrait) {
  .navbar-menu {
    display: none;
  }
  .responsive-navbar {
    display: flex;
    position: absolute;
    height: 0;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
     transition:all 0.3s;

  }
  .responsive-navbar-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .responsive-navbar-item {
    margin: 0;
  }
  .responsive-navbar-item a {
    color: white;
    font-size: 32px;
  }
  .hambuger {
   display: flex;
    
    }
    .bread{
       display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    z-index: 999;
    }
  
}

@media screen and (min-width: 500px) and (max-width:1340px){
 .navbar-menu {
    display: none;
  }
  .responsive-navbar {
    display: flex;
    position: absolute;
    height: 0;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
     transition:all 0.3s;

  }
  .responsive-navbar-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .responsive-navbar-item {
    margin: 0;
  }
  .responsive-navbar-item a {
    color: white;
    font-size: 32px;
  }
  .hambuger {
   display: flex;
    
    }
    
    .bread{
       display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    z-index: 999;
    }
    input::placeholder{
          font-size: 19px;
    }
    .language{
      opacity: 0;
    }

}
/* For Mobile Landscape View */
@media screen and (max-device-width: 640px) and (orientation: landscape) {
}

/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-device-width: 640px) {
}

/* For iPhone 4 Portrait or Landscape View */
@media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
}

/* For iPhone 5 Portrait or Landscape View */
@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
}

/* For iPhone 6 and 6 plus Portrait or Landscape View */
@media (min-device-height: 667px) and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
}
.Lang-button {
  background-color: #464444;
  border-radius: 34px;
  background: linear-gradient(145deg, #4b4949, #3f3d3d);
  box-shadow: 20px 20px 60px #3c3a3a, -20px -20px 60px #514e4e;
}
.site-logo {
  width: 150px;
}
.site-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.navbar-menu {
  list-style: none;
  margin: 0;
  transition: 0.5s;
}
.navbar-item {
  display: inline-block;
  margin-right: 18px;
  position: relative;
}

.navbar-item a {
  color: white;
  font-size: 20px;
}

.bizim-dropdown {
  height: 0;
  width: 260px;
  position: absolute;
  background: linear-gradient(145deg, #232121, #2a2828);
  list-style: none;
  top: 66px;
  transition: all 0.5s;
  padding: 0;
  overflow: hidden;
}
.navbar-item:before {
  content: "";
  width: 0;
  height: 2px;
  background: white;
  transition: 0.5s;
  position: absolute;
  top: 32px;
  left: 1px;
}
.navbar-item:hover:before {
  width: 100%;
  transition: 0.5s;
}
.navbar-item:hover .bizim-dropdown {
  transition: 0.5s;
  height: 160px;
}
.bizim-drp-items {
  padding: 10px;
}
html,
body {
  height: 100%;
  margin: 0;
}
body {
  background: #913d88;
  font: 13px monospace;
  color: #ffffff;
}
p {
  margin-top: 30px;
}
.cntr {
  display: table;
  width: 100%;
  height: 100%;
}
.cntr .cntr-innr {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.search {
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0px 8px 7px 0px;
  padding: 7px 9px 0px 9px;
  border: 3px solid #ffffff;
  border-radius: 25px;
  transition: all 200ms ease;
  cursor: text;
}
.search:after {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  right: -5px;
  top: 21px;
  background: #ffffff;
  border-radius: 3px;
  transform: rotate(-45deg);
  transition: all 200ms ease;
}
.search.active,
.search:hover {
  width: 200px;
  margin-right: 0px;
}
.search.active:after,
.search:hover:after {
  height: 0px;
}
.search input {
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 15px;
  color: white;
  background: transparent;
}
input:focus {
  border: none;
  color: #ffffffa6;
  outline: none;
}
.a {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
}

.request_button {
  position: relative;
  width: 170px;
  height: 50px;
  border: 1px solid white;
  border-radius: 0.25rem;
}
.request_button a {
  color: #ffffff;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.request_button::before {
  content: "Request A Demo";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #ffffff;
  color: #ef500a;
  top: -5px;
  right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: all 0.4s;
}
.request_button:hover::before {
  cursor: pointer;
  top: 0;
  right: 0;
}
.locale-changer-buttons {
  background-color: transparent;
  border: none;
  display: block;
  text-align: center;
  margin-left: 15px;
}
.dropdown-menu {
  background-color: white;
  min-width: 60px;
}
.dropdown-menu p:hover {
  color: #ff7a50;
}
.dropdown-toggle {
  background: var(--text-color);
  color: var(--text-color);
  -webkit-background-clip: text;
  font-size: 0.9rem;
  border-color: var(--text-color);
}
.dropdown-toggle:hover {
  background: linear-gradient(38deg, #fe5ab0, #ff7a50);
  -webkit-text-fill-color: white;
  border: 1p white;
}
.header__actions {
  display: block;
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background: #302e2e73;

  height: 100px;
}
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__link_th,
.nav__logo,
.nav__toggle {
  color: var(--first-color);
  font-weight: var(--font-medium);
}

.nav__alt-link {
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 98%;
  margin-top: 3px;
  margin-bottom: 3px;
  padding: 5px 0;
}
.nav__alt-link:hover {
  background-color: #f3eded;
}
.nav__img {
  width: 70px;
}

.nav__link {
  transition: 0.3s;
  color: var(--text-color);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 27px;
}

.nav__link:hover,
.nav__alt-link:hover {
  color: var(--second-color);
}

.nav__toggle {
  font-size: 1.3rem;
  cursor: pointer;
}

ul.menu__open > li > a {
  display: block;
  padding: 0 15px;
  line-height: 50px;
}
</style>
