<template>
  <transition name="slide" type="animation">
    <div class="blog-window" v-show="show & showCancel">
      <button
        class="btn btn-light"
        @click="showCancel = !showCancel"
        style="float: right"
      >
        X
      </button>
      <a href="/blog">
        <img class="w-100" src="../assets/images/blog.jpeg" alt="" />
      </a>
      <p class="blog-window-title">{{$t("blog-window.info-1")}}</p>
      <a
        href="/blog"
        class="btn btn-block p-2 shadow rounded-pill"
        style="
          display: flex;
          justify-content: center;
          color: white;
          background: linear-gradient(38deg, #ff6000, #ff7a50);
        "
        >{{$t("blog-window.button-1")}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BlogWindow",
  data() {
    return {
      show: false,
      showCancel: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      setTimeout(() => (this.show = true), 2000);
    },
  },
};
</script>

<style scoped>
.blog-window {
  transition: box-shadow 0.3s;
  width: 300px;
  height: 340px;
  padding: 10px;
  margin: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0 0 10px rgba(33, 33, 33, 0.2);
  position: fixed;
  top: 20%;
  right: 0px;
  z-index: 3;
}
.blog-window:hover {
  box-shadow: 0 0 30px rgba(33, 33, 33, 0.2);
}
.blog-window-title {
  margin: 5px;
  text-align: center;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 2s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(50px);
  }
}
</style>
