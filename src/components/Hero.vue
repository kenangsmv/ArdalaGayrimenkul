<template>
  <section class="home center" id="home">
    <div class="home-background center">
      <div class="container" style="position: relative">
      <div class="home__container section">
        <div class="home__data">
          <h1 class="home__title">ARDALA GAYRIMENKUL</h1>
          <h2 class="home__subtitle">
            {{ $t("intro.quota") }}
          </h2>
          <a   @click="openLink">
            <button class="katil_button" @click="control = !control">
            {{ $t("intro.button") }}</button> 
</a>
        </div>
      </div>
    
    </div>
    </div>
    <div class="home-img">
      <img src="../assets/images/intro-home.jpg" alt="">
    </div>
    
    <div class="scroll-arrow">
      <font-awesome-icon :icon="arrow" class="icons arrow-icon" />
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLocationArrow,
  faTag,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Hero",
  data() {
    return {
      location: faLocationArrow,
      tag: faTag,
      arrow: faAngleDoubleDown,
       control: false,
      text: null,
    };
  },
  components: {
    FontAwesomeIcon,
  },
   props: {
    phoneNumber: {
      type: String,
      default: "+905337630002",
    },
  },
  methods: {
    openLink() {
      let url = "https://web.whatsapp.com/send";
      if (
        /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        url = "whatsapp://send";
      }
      const all = url + "?phone=" + this.phoneNumber + `&text=${this.text}`;
      window.open(all, "_blank");
    },
  },
};
</script>

<style scoped>
.home-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
.home-img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  }
.home {
  height: 100vh;
  
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.home-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000061;
  z-index: 99;
}
.scroll-arrow {
  position: absolute;
  bottom: 76px;
  animation-name: arrow-animate;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
.arrow-icon {
  color: #ffffff8f !important;
  font-size: 5rem;
}
@keyframes arrow-animate {
  0% {
    bottom: 76px;
  }
  50% {
    bottom: 86px;
  }
  100% {
    bottom: 76px;
  }
}
.trending-add {
  width: 80%;
  position: absolute;
  left: 16%;
  margin-left: -50px;
  top: 122%;
  margin-top: -50px;
  border-radius: 10px;
  padding: 10px;
  z-index: 999999;
}
.trending-add:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: -22;
  border-radius: 10px;
}
.trending-add p,
h1 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.trending-add img {
  border-radius: 10px;
}
.adv-button {
  background-color: rgb(120, 36, 219);
  border: none;
  padding: 10px;
  border-radius: 25px;
  color: white;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  color: white;
  margin-bottom: var(--mb-1);
  font-weight: var(--font-semi-bold);
  outline: none;
}
.add-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.location {
  font-size: 21px;
  color: #302e2e;
}
.icons {
  color: #302e2e;
}
.adv-details {
  padding: 40px 0;
}
.logo-size {
  position: relative;
  width: 50px;
}
.add-text,
.add-price {
  color: #302e2e;
}
.add-text {
  font-size: 34px;
  font-weight: var(--font-semi-bold);
}
.add-price {
  font-size: 18px;
}
.price-container {
  width: 95vw;
  position: relative;
  left: 1.5vw;
  top: 25vh;
  overflow: hidden;
}

.price-box {
  display: sticky;
  position: relative;
  width: auto;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 27rem;
  animation: scrolling 30s linear infinite;
}
.katil_button {
  display: inline-block;
  background-position: center;
  padding: 0.75rem 1rem;
  transition: 0.3s;
  background: rgb(48 46 46 / 62%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(48, 46, 46, 0.3);
  color: white;
}
@keyframes scrolling {
  from {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -moz-transform: translateX(120%);
    -webkit-transform: translateX(120%);
    transform: translateX(120%);
  }
}

.negative-price {
  color: red;
}
.positive-price {
  color: green;
}

.currency-id {
  font-size: 2rem;
  color: rgb(255, 255, 255);
  font-family: "Montserrat";
}
.price-styling {
  color: rgb(255, 255, 255);
  font-size: 2rem;
  z-index: 2;
  font-family: "Montserrat";
}

.box-styling {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}

.inner-box-styling {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0rem;
}

.change-styling {
  font-size: 2rem;
  z-index: 2;
  font-family: "Montserrat";
}

.home__data {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.home__title {
  display: flex;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 75px;
  color: white;
  margin-bottom: var(--mb-1);
  font-weight: var(--font-semi-bold);
}

.home__subtitle {
  display: flex;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: var(--h1-font-size);
  color: white;
  margin-bottom: var(--mb-4);
}

.home__img {
  width: 450px;
  justify-self: center;
}
/* For Desktop View */
@media screen and (min-width: 1024px) {
}
/* For Tablet View */
@media screen and (min-device-width: 768px)
and (max-device-width: 1024px) {
  .ara {
  justify-content: flex-start;
  
}
.home__title{
    font-size: 65px;
    text-align: center;
  }
  .home__subtitle{
        font-size: 20px;
    text-align: center;
  }
}
 
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
  .search-btn{
      width: 100%;
  }
  .home__title{
    font-size: 39px;
    text-align: center;
  }
  .home__subtitle{
        font-size: 20px;
    text-align: center;
  }
  .katil_button{
        font-size: 13px;
  }
}
 @media (device-height: 720px) and (device-width: 540px)
and (-webkit-min-device-pixel-ratio: 2) {
       .home__title{
    font-size: 60px;
    text-align: center;
  }
  .katil_button{
        font-size: 13px;
  }
}
/* For Mobile Landscape View */
@media screen and (max-device-width: 640px)
and (orientation: landscape) {
  
}
 
/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-device-width: 640px) {
  
}
 
/* For iPhone 4 Portrait or Landscape View */
@media screen and (min-device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
  
}
 
/* For iPhone 5 Portrait or Landscape View */
@media (device-height: 568px) and (device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
  
}
 
/* For iPhone 6 and 6 plus Portrait or Landscape View */
@media (min-device-height: 667px) and (min-device-width: 375px)
and (-webkit-min-device-pixel-ratio: 3) {
  
}
@media screen and (min-width: 500px) and (max-width:800px){
.home__title{
    font-size: 56px;
    text-align: center;
}
.home__subtitle{
    font-size: 20px;
    text-align: center;
}
.katil_button{
    font-size: 13px;
}
}
@media screen and (min-width: 800px) {
.home__title{
    
    text-align: center;
}

}
</style>