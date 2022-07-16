<template>
   <div class="row">
        <div v-for="advert of advert_db" class="col-3" :key="advert.id">
         
            <div class="adv-cart relative">
            <div class="adv-img">
              <!-- <img src="../assets/images/EV.jpg" alt=""> -->
               <Splide :options="{autoplay:true, rewind: true }">
    <SplideSlide v-for="(advert_img, index) in advert.images">
       
                <img :src="advert_img" alt="">
     
    </SplideSlide>
  
  </Splide>
              <p class="adv-price"> 400.000 TL </p>
              <div class="trend-tag absolute">
              TREND
            </div>
            </div>

            <div class="adv-details">
              <div class="adv-info">
                <h1 class="adv-info-title">{{advert.title}}</h1>
                <div class="adv-info-locations flex-start">
                 <img src="../assets/images/icons8-location-bu.png" alt="">
                 <p class="icon-info">Konyaalti/Antalya</p>
                </div>
              </div>
              <div class="adv-icons">
                <div class="row">
                  <div class="col-4">
                    <div class="adv-icon-box">
                      <img class="icon-img" src="../assets/images/room.png" alt="">
                      <p class="icon-info">
                        3+1
                      </p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="adv-icon-box">
                       <img class="icon-img" src="../assets/images/bath.png" alt="">
                      <p class="icon-info">
                        1
                      </p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="adv-icon-box">
                       <img class="icon-img" src="../assets/images/icons8-surface.png" alt="">
                      <p class="icon-info">
                        120 m<sub>2</sub>
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
           
             <router-link :to="`/advert/${advert.id}`">
   <div class="adv-button">
           
              <button @click="updateAdv">Detayli Inceleme</button>
              
            </div>
             </router-link>
      
            
          </div>
          
          
        </div>
       
      </div>
</template>

<script>
   import {mapState, mapGetters, mapActions} from "vuex"
export default {
  data(){
    return{
         advert_db : advert_json["advert"],
       
       
    }
    },
    computed: {
     

    },
    methods: {
     
     
    },
    created(){

    }
}
</script>

<style scoped>

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
    padding: 2px 5px;
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
</style>