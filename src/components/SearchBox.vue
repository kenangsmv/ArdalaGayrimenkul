<template>
     <div class="search-box">
      <img src="../assets/images/search.png" alt="" @click="deneme">
      <input id="myInput" class="search-input" type="text" placeholder="Search" v-model="term" @keypress.enter="store.search(term)" >
    </div>
</template>

<script>
  import {store} from "../store"

export default {
    data(){
         return{
             term:"",
             store
         }
    },
  props: [
      "search"
  ],
  methods:{
      deneme(){
           console.log(this.term);
      }
    },
 
}
</script>

<style scoped >
.search-box{
    position: relative;
    width: 350px;
    position: relative;
    width: 350px;
    border-radius: 50px;
    background: #00000061;
 }
 .search-box img{
       width: 7%;
    margin: 0;
 }
 .search-input{
  width: 90%;
    border-radius: 21px;
    padding: 5px 7px;
   background: transparent;
    border: none;
    outline: none;
    color:white;
 }
 ::placeholder{
   color:#ffffffa6;
 }
 
/* For Desktop View */
@media screen and (min-width: 1024px) {
}
/* For Tablet View */
@media screen and (min-device-width: 768px)
and (max-device-width: 1024px) {
  
}
 
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
.search-box{
  display: none;
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