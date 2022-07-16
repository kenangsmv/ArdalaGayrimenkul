<template>
   <section class="mission">
      <div class="mission-background">
       <div class="home-background"></div>
         <img src="../assets/images/intro-home.jpg" alt="">
      </div>
      <div class="mission-blog">
        
        <div class="container mission-blog-background">
           <div class="row">
              <div class="col-12">
                <div class="mission-header">
                    <h1>{{ $t("mission.title_1") }}, {{ $t("mission.title_2") }}</h1>
                </div>
              </div>
              <div class="col-12">
                <div class="mission-content">
                    <div class="row">
                        <div class="col-12">
                            <div class="content-box">
                                <h3>{{ $t("mission.title_1") }}</h3>
                                <p>{{ $t("mission_description.item_1") }}</p>
                            </div>
                        </div>
                         <div class="col-12">
                            <div class="content-box">
                                <h3>{{ $t("mission.title_2") }}</h3>
                                <p>{{ $t("mission_description.item_2") }}</p>
                            </div>
                        </div>
                         <div class="col-12">
                            <div class="content-box">
                                <h3>{{ $t("mission.title_3") }}</h3>
                                  <ul>
                                    <li>{{ $t("mission_description.item_3.li_1") }}</li>
                                    <li>{{ $t("mission_description.item_3.li_2") }}</li>
                                    <li>{{ $t("mission_description.item_3.li_3") }}</li>
                                    <li>{{ $t("mission_description.item_3.li_4") }}</li>
                                    <li>{{ $t("mission_description.item_3.li_5") }}</li>
                                    <li>{{ $t("mission_description.item_3.li_6") }}</li>
                                    
                                  

                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="content-box">
                                 <h3>{{ $t("mission.title_4") }}</h3>
                                <ul>
                                     <li>{{ $t("mission_description.item_4.li_1") }}</li>
                                    <li>{{ $t("mission_description.item_4.li_2") }}</li>
                                    <li>{{ $t("mission_description.item_4.li_3") }}</li>
                                    <li>{{ $t("mission_description.item_4.li_4") }}</li>
                                

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
           </div>

        </div>
      </div>
   </section>
</template>

<script>
export default {

}
</script>

<style scoped>
p,li{
    color: #000000cf;
    text-align: justify;
} 
  .mission{
    position: relative;
    }
  .mission-blog{
   padding-top:20rem;
padding-bottom: 5rem;
  }
  .mission-header{
    background: #000000d9;
    color: white;
    padding: 3rem 0 3rem 2rem;
  }
  .mission-header h1{
    color:white;
        font-size: 56px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .mission-content{
    background:white;
    padding: 3rem 3rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }
  .content-box h3{
        font-size: 18px;
    color: #002a5c;
    margin: 20px auto;
    font-weight: 600;
}
  .content-box {
        font-size: 14px;
        color: #00000094;
    
}

  .content-box ul{
    padding-left: 1rem;
    list-style-type: disc;
  }
  .mission-background{
       position: absolute;
    width: 100%;
    z-index: -1;
  }
   .mission-background img{
   width: 100%;
    height: 515px;
    object-fit: cover;
  }
  .home-background{
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000061;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
 .mission-content{
    padding: 1rem ;
  }
  .mission-header h1{
    font-size: 33px;
  }
}
</style>