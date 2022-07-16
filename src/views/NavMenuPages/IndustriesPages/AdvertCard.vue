<template>
  <div  class="col-lg-4 col-sm-12">
            <div class="advert" :title="title" :img="img" :img_2="img_2" :price="price" :m2="m2" :rooms="rooms" :batrooms="bathrooms" :location="location" :id="id">
              <a href="/advertfull"></a>
  <div class="advert-header">
    <h3> {{title}}

    </h3>
  </div>
  <div class="advert-images">
   <Splide :options="{autoplay:true, rewind: true }">
    <SplideSlide>
       <div class="slide-content ">
                <img  :src="`../../../assets/images/${item.img_2}`" alt="">
       </div>
    </SplideSlide>
    <SplideSlide>
     <div class="slide-content">
            <img :src="`../../../assets/images/${item.img_2}`" alt="">
            </div>

    </SplideSlide>
  </Splide>
       </div>
  
  <div class="advert-icons">
    <div class="cs-center price">
        <img src="../../../assets/images/icons8-price.png" alt="">
        <p class="px-2">{{price}}</p>
    </div>
    <div class="row">
    <div class="col-3">
      <div class="icons-box surface">
        <img class="icon-img" src="../../../assets/images/icons8-surface.png" alt="">
        <p class="px-2">{{m2}}</p>
      </div>
    </div>
    <div class="col-3">
      <div class="icons-box room">
        <img class="icon-img" src="../../../assets/images/icons8-room.png" alt="">
        <p class="px-2">{{rooms}}</p>
      </div>
    </div>
     <div class="col-3">
      <div class="icons-box bathroom">
        <img class="icon-img" src="../../../assets/images/icons8-bathroom.png" alt="">
        <p class="px-2">{{bathrooms}}</p>
      </div>
    </div>
    <div class="col-3">
      <div class="icons-box location">
        <img  class="icon-img" src="../../../assets/images/icons8-location.png" alt="">
        <p class="px-2">{{location}}</p>
      </div>
    </div>
  </div>
   </div>
  </div>
  </div>
</template>

<script>
export default {
   name:"AdvertCard",
   props:["title","img","img_2","price","m2","rooms","bathrooms","location","id"]
}
</script>

<style>

</style>