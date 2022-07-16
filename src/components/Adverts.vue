<template>
  <section class="trend-adverts column-center">
    <div class="container">
      <div class="row">
        <div v-for="data in store.tempPost" :key="data.id" class="col-md-6 col-xl-3 col-lg-6 " >
         
            <div class="adv-cart relative">
            <div class="adv-img">
              
               <Splide :options="{autoplay:true, rewind: true }">
    <SplideSlide :v-for="(advert_img, index) in data.images">
       
                <img :src="advert_img" alt="">
     
    </SplideSlide>
  
  </Splide>
              <p class="adv-price"> {{data.price}} </p>
              <div @click="deneme" class="trend-tag absolute" v-if="data.trend=='TREMD'" style="padding:2px 5px;">
              {{data.trend}}
            </div>
            </div>

            <div class="adv-details">
              <div class="adv-info">
                <h1 class="adv-info-title">{{data.title}} </h1>
                <div class="adv-info-locations flex-start">
                 <img src="../assets/images/icons8-location-bu.png" alt="">
                 <p class="icon-info">{{data.location}}</p>
                </div>
              </div>
              <div class="adv-icons">
                <div class="row">
                  <div class="col-4">
                    <div class="adv-icon-box">
                      <img class="icon-img" src="../assets/images/room.png" alt="">
                      <p class="icon-info">
                        {{data.oda}}
                      </p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="adv-icon-box">
                       <img class="icon-img" src="../assets/images/bath.png" alt="">
                      <p class="icon-info">
                        {{data.bathrooms}}
                      </p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="adv-icon-box">
                       <img class="icon-img" src="../assets/images/icons8-surface.png" alt="">
                      <p class="icon-info">
                        {{data.m2}}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
           
             <router-link :to="`/advert/${data.id}`" @click="scrollToTop">
   <div class="adv-button">
           
              <button >{{ $t("card.button") }}</button>
              
            </div>
             </router-link>
      
            
          </div>
          
          
        </div>
      </div>
    
    </div>

  </section>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
 fa
} from "@fortawesome/free-solid-svg-icons";
import TrendAdvs from '../views/TrendAdvs.vue';
import advert_data from "../advert.json"

import { store } from "../store"

export default {
    data() {
      return{
        store
    }
    },

    components: {
    Splide,
    SplideSlide,
    FontAwesomeIcon,
    TrendAdvs
   
  },
  props: [
  ],
  mounted(){
          
        
            console.log(store);
         
  }, 
  methods: {
scrollToTop() {
    window.scrollTo(0,0);
  }
    }
  

}
</script>

<style  scoped>
.trend-adverts{
  padding: 1rem 0 10rem 0;
  background: #f0f2f5;
}
.adv-cart{
  background: white;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  transform: scale(1);
  transition: all 0.2s;
  margin-bottom: 40px;
  
}
.trend-tag{
right: 10px;
    background: #e4584b;
    font-size: 10px;
    color: white;
    position: absolute;
    top: 10px;
    /* left: 55px; */
    line-height: 24px;
    font-size: 11px;
    font-weight: 600;
    font-style: normal;
    width: 60px;
    text-align: center;
    border-radius: 4px;
    font-family: 'Rubik';
    transition: all 0.4s;
    
  }
.adv-cart:hover .trend-tag{
  top: 0px;
  transition: all 0.4s;
}
.adv-cart:hover{
   transform: scale(1.01);
   transition: all 0.2s;
}
.adv-info{
  padding: 20px 0 30px 0;
}
.adv-img{
  position: relative;
   box-shadow: rgb(0 0 0 / 15%) 0px 15px 25px, rgb(0 0 0 / 5%) 0px 5px 10px;
  }
.adv-img img{
  height: 250px;
      object-fit: cover;
    /* box-shadow: rgb(0 0 0 / 45%) 0px 25px 20px -20px; */
    box-shadow: rgb(0 0 0 / 15%) 0px 15px 25px, rgb(0 0 0 / 5%) 0px 5px 10px;
}
.adv-price{
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background: #488FB1;
  color: white;
  font-size: 12px;
  border-radius: 4px;
   font-family: 'Rubik';
       font-weight: 600;
    font-style: normal;
}
.adv-info-title{
  font-size: 16px;
  color:black;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-weight: 600;
    overflow: hidden;

}
.adv-info-locations{
  padding-top: 5px;
}
.adv-info-locations img{
  width:10px;
}
.adv-icon-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .icon-info{
    font-size: 12px;
        color: #000000ad;
        padding-left: 3px;
  }
.icon-img{
  width: 25px;
}
.adv-button{
  padding-top: 30px;
  }
.adv-button button{
 width:100%;
 height: 40px;
 border: none;
 outline: none;
 /* From https://css.glass */
background: rgba(120, 36, 219, 1);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(120, 36, 219, 0.3);
 color: white;
 border-radius: 4px;
 transition: all .2s;
}
.adv-button button:hover{
  background-color:darkviolet;
  transition: all .2s;
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
}
  @media (device-height: 720px) and (device-width: 540px)
and (-webkit-min-device-pixel-ratio: 2) {
.adv-img img{
        width: 100% !important;
        object-fit: cover;

  }
      .adv-info-title{
      font-size:20px;
    }
    .adv-button button{
      font-size: 20px;
    }
    .icon-info{
      font-size:16px;
    }
    .adv-info-locations img {
     width: 16px;
}
}
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
 .adv-button button{
     font-size: 15px;
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

</style>


