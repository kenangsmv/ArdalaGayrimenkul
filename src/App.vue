<template>
  <section :class="darkTheme">
    <a
      @click="showscrolltop"
      href="#"
      class="scrolltop scroll-top"
      id="scroll-top"
    >
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
    <Header :darkTheme="darkTheme" @toggle="toggle" />
    <router-view :darkTheme="darkTheme" @toggle="toggle"></router-view>
    <Widget phoneNumber="+905337630002" />
    <Footer :darkTheme="darkTheme" @toggle="toggle" />
    <Stickybar />
  </section>
</template>

<script>
//import './assets/js/main.js'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Stickybar from "./components/Stickybar.vue";
import Widget from "./components/Widget.vue";
export default {
  name: "App",
  data() {
    return {
      darkTheme: localStorage.getItem(this.darkTheme),
    };
  },
  components: { Header, Footer, Stickybar, Widget },
  methods: {
    showscrolltop() {
      function scrollTop() {
        const scrollTop = document.getElementById("scroll-top");
        if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
        else scrollTop.classList.remove("scroll-top");
      }
      window.addEventListener("scroll", scrollTop);
    },
    toggle() {
      if (this.darkTheme === "dark-theme") {
        this.darkTheme = "";
        document.body.classList.remove("dark-theme");
      } else {
        this.darkTheme = "dark-theme";
        document.body.classList.add("dark-theme");
      }
    },
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.2.1.slim.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
    if (localStorage.darkTheme) {
      this.darkTheme = localStorage.darkTheme;
      document.body.classList.add("dark-theme");
    }
  },
  watch: {
    darkTheme(darky) {
      localStorage.darkTheme = darky;
    },
  },
};
</script>

<style>
@import "assets/styles/main.css";
</style>
