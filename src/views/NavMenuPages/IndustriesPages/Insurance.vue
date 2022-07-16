<template>
  <section class="Insurance" style="background-color: #d6e6f2" id="first">
    <div class="container">
      <div class="white-background" style="background-color: white">
        <div class="hero-container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <img style="padding-left: 10px" src="../../../assets/images/insurance.jpg" alt="" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 center">
              <div class="banner-text">
                <h2 class="section-subtitle">{{$t("insurance.hero-title-1")}}</h2>
                <h4 class="section-subtitle">{{$t("insurance.hero-title-2")}} </h4>
                <a href="#down">
                  <button class="button_insurance"> {{ $t("nav-menu.nav_menuItem_requestaDemo") }} </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="grids-container">
          <h2 class="grids-container-title">
           {{$t("insurance.video-section-title")}}
          </h2>

          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 img-box">
              <img
                style="padding-bottom: 20px"
               src="../../../assets/images/telco_identified.png" alt="" >
              <h4 style="color:darkviolet"> {{$t("insurance.inner-section-title-1")}}
              </h4>
              <p style="padding-top: 10px">  {{$t("insurance.inner-section-text-1")}}
              </p>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 img-box">
              <img
                style="padding-bottom: 20px"
               src="../../../assets/images/telco_act.png" alt="" >
              <h4 style="color:darkviolet"> {{$t("insurance.inner-section-title-2")}} 
              </h4>
              <p style="padding-top: 10px">  {{$t("insurance.inner-section-text-2")}}
              </p>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 img-box">
              <img
                style="padding-bottom: 20px"
                src="../../../assets/images/telco_analyze.png" alt="" >
              <h4 style="color:darkviolet"> {{$t("insurance.inner-section-title-3")}} 
              </h4>
              <p style="padding-top: 10px">  {{$t("insurance.inner-section-text-3")}}
              </p>
            </div>
          </div>

          <div class="inner-text">
            <h4>{{$t("insurance.video-section-text")}}</h4>
          </div>
        </div>

        <div class="info-part">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 first_part">
              <div class="row">
                <div class="col-6 column-center">
                  <div class="parallax box-3 wh-100"></div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12">
                      <div class="parallax box-1"></div>
                    </div>
                    <div class="col-12">
                      <div class="parallax box-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 sections second_part">
              <span>
                <img
                  src="../../../assets/images/telco_techsup.png" alt="" >
                <h4>{{ $t("insurance.section-1-title") }}</h4>
                <h6>{{ $t("insurance.section-1-text-1") }}</h6>
                <br />
                <p>• {{ $t("insurance.section-1-text-2") }}</p>
                <p>• {{ $t("insurance.section-1-text-3") }}</p>
                <p>• {{ $t("insurance.section-1-text-4") }}</p>
                <p>• {{ $t("insurance.section-1-text-5") }}</p>
              </span>
              <br />
              <br />

              <span>
                <img
                  src="../../../assets/images/telco_bookandmanage.png" alt="" >
                <h4>{{ $t("insurance.section-2-title") }}</h4>
                <h6>{{ $t("insurance.section-2-text-1") }}</h6>
                <br />

                <p>• {{ $t("insurance.section-2-text-2") }}</p>
                <p>• {{ $t("insurance.section-2-text-3") }}</p>
                <p>• {{ $t("insurance.section-2-text-4") }}</p>
              </span>
              <br />
              <br />

              <span>
                <img
                  src="../../../assets/images/telco_upselling.png" alt="" >
                />
                <h4>{{ $t("insurance.section-3-title") }}</h4>
                <h6>{{ $t("insurance.section-3-text-1") }}</h6>
              

                <br />

                <p>• {{ $t("insurance.section-3-text-2") }}</p>
                <p>• {{ $t("insurance.section-3-text-3") }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="strip" id="down">
      <h4>{{$t("insurance.hero-text-1")}}</h4>
    </div>

    <div class="container">
      <div class="white-background2" style="background-color: white">
        <div class="last-part">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 last-part-info">
              <h1 style="color: black; margin-bottom: 30px">
                {{$t("insurance.last-part-title")}}
              </h1>
              <h5 style="color: #2c3333">{{$t("insurance.last-part-text-1")}}</h5>
              <h5 style="color: #2c3333">{{$t("insurance.last-part-text-2")}}</h5>
                
               

              <button class="button_insurance button2">{{ $t("nav-menu.nav_menuItem_requestaDemo") }}</button>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 center">
              <div class="col-lg-12 last-part-box box1 center">
                <h4>{{$t("insurance.last-part-box-1")}}
                </h4>
              </div>
              <div class="col-lg-12 last-part-box box2 center">
                <h4> {{$t("insurance.last-part-box-2")}}</h4>
              </div>
            </div>
          </div>
        </div>
        <!-- <a style="color:grey;" href="https://icons8.com/icon">Icons by Icons8</a> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: auto;
}

.white-background {
  padding-top: 115px;
}

.white-background2 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.banner-text {
  text-align: center;
}

.banner-text h2 {
  font-family: "Jost", sans-serif;
  color: white;
  font-size: 3.7rem;
}
.banner-text h4 {
  font-family: "Jost", sans-serif;
  color: white;
}

.grids-container {
  background-color: #f6f6f6;
  color: black;
  padding: 40px;
  font-family: "Jost", sans-serif;
  text-align: center;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  margin-top: 50px;
  margin-left: 2rem;
  margin-right: 2rem;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
}

.grids-container-title {
  margin-bottom: 40px;
}

.activities__card-title {
  color: #3837ce;
}

.inner-text {
  margin-top: 50px;
  text-align: center;
}

.img-box {
  margin: 35px 0;
}

.img-box:hover {
  transition: 0.3s;
  transform: translateY(-0.5rem);
}

.info-part {
  padding: 45px;
  margin-top: 40px;
}

.strip {
  background-color: #f6f6f6;
  color: black;
  padding: 40px;
  width: 100%;
  margin: auto;
  font-family: "Jost", sans-serif;
  text-align: center;
}

.button_insurance {
  margin-top: 20px;
  background-color: #CAA5F1;
  color: white;
  border-radius: 15px;
  padding: 7px;
  border: none;
}
.button_insurance:hover {
  transition: 0.3s;
  background-color: #FDBAF8;
}

.hero-container {
  background-color:#b162ec;
  border-radius: 45px;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 30px 0;
}
.insurance__card-description {
  padding: 25px;
}

.sections h4 {
  color: black;
}

.sections h6 {
  color: #3837ce;
}

.column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.first_part {
  margin: auto;
}

.parallax {
  /* The image used */
  background-image: url("../../../assets/images/insurance_block.jpg");


  /* Set a specific height */
  height: 350px;
  border-radius: 15px;
  margin: 7px;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1155px;
}
  
 
.last-part-box {
  width: 250px;
  height: 250px;
  border-radius: 15px;
  align-content: center;
  margin: 10px 10px;
}

.box1 {
  background-color: #6b76ff;
  position: absolute;
  margin-right: 200px;
  margin-bottom: 100px;
}

.box2 {
  background-color: #8293ff;
  margin-left: 200px;
  margin-top: 101px;
}

.box1 h4 {
  text-align: center;
}

.box2 h4 {
  padding-top: 40px;
  padding-left: 70px;
  font-size: 21px !important;
}

.last-part-info {
  margin: auto;
  padding: 20px 70px;
}

.button2 {
  background-color: #6b76ff;
}

.button2:hover {
  background-color: #8293ff;
}

@media screen and (max-width: 768px) {
  .banner-text h2 {
    font-size: 2.5rem;
  }

  .banner-text h4 {
    font-size: 1.5rem;
  }

  .button_insurance {
    font-size: 1rem;
  }

  .insurance__card-description {
    padding: 0px;
  }
  .grids-container {
    padding: 0px;
  }

  .grids-container-title {
    padding: 30px 10px;
  }

  .second_part {
    margin-top: 40px;
  }

  .last-part-box {
    width: 200px;
    height: 200px;
    margin: 10px 10px;
  }

  .last-part-info {
    padding: 0px 25px;
  }

  .box1 {
    position: relative;
  }
  .box2 h4 {
    padding: 10px;
  }
  .parallax {
  /* The image used */
  background-image: url("../../../assets/images/insurance_block.jpg");


  /* Set a specific height */
  height: 350px;
  border-radius: 15px;
  margin: 7px;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
   background-position: center;
  background-repeat: no-repeat;
  background-size: 1155px;
}
  
}
</style>