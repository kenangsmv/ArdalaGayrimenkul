

<script>
import Axios from "axios";
import advert_json from "../../../advert.json";

export default {
  data() {
    return {
      advert_db: advert_json["post"],
      id: "",
      advert_element: {},
      classes: "full-page-img",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.advert_db.forEach((element) => {
      if (element.id === this.id) {
        this.advert_element = {
          ...element,
        };
        console.log(this.advert_element);
      }
    });
  },

  computed: {},
  methods: {
    switchImage(index) {
      this.advert_element.active_img = this.advert_element.images[index];
    },
    closeFullPageImg() {
      const fullPage = document.querySelector(".full-img");
      fullPage.style.display = "none";
    },
    openFullPageImg() {
      const fullPage = document.querySelector(".full-img");
      fullPage.style.display = "block";
      console.log("bura girdi");
    },
    moreDetails() {
      const moreDetail = document.querySelector(".responsive-advert-details");
      const moreButton = document.querySelector("#expand");

      if (moreDetail.classList.contains("responsive-advert-details-open")) {
        moreDetail.classList.remove("responsive-advert-details-open");
        moreButton.style.transform = "rotate(-90deg)";
      } else {
        moreDetail.classList.add("responsive-advert-details-open");
        moreButton.style.transform = "rotate(90deg)";
      }
    },
  },
};
</script>
<template>
  <section class="advertpage-section relative">
    <div class="container">
      <div class="advert-title">
        <h1>{{ this.advert_element.title }}</h1>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="advert-img relative">
            <div class="row">
              <div class="col-lg-12">
                <div class="advert-big-img">
                  <img
                    :src="this.advert_element.active_img"
                    alt=""
                    ref="bigImg"
                    @click="openFullPageImg"
                  />
                </div>
              </div>
              <div class="col-lg-12 advert-small-imgs">
                <div class="imgs-box">
                  <div class="row">
                    <div
                      v-for="(advert_img, index) in this.advert_element.images"
                      class="col-lg-2 col-4"
                    >
                      <img
                        :src="advert_img"
                        alt=""
                        :ref="advert_img.ref"
                        @click="switchImage(index)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 video-button-box">
                <div class="row">
                  <div class="col-3">
                    <a :href="this.advert_element.tr_video" class="video-button">
                      <img src="../../../assets/images/puprle_video.png" alt="" /> <span class="video-button-text"> TR</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a :href="this.advert_element.en_video" class="video-button">
                      <img src="../../../assets/images/puprle_video.png" alt="" /> <span class="video-button-text"> EN</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a :href="this.advert_element.ru_video" class="video-button">
                      <img src="../../../assets/images/puprle_video.png" alt="" /> <span class="video-button-text"> RU</span>
                    </a>
                  </div>
                  <div class="col-3">
                    <a :href="this.advert_element.arb_video" class="video-button">
                      <img src="../../../assets/images/puprle_video.png" alt="" /> <span class="video-button-text"> ARB</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 advert-details responsive-advert-details">
          <div class="responsive-more-details" @click="moreDetails">
            <span id="expand">&#8249;</span>
          </div>
          <div class="" style="padding: 0 10px">
            <ul class="row">
              <li class="col-12">
                <div class="details-top">
                  <p class="price">{{ this.advert_element.price }}</p>
                  <p class="address-short">
                    {{ this.advert_element.location }}/{{
                      this.advert_element.location_2
                    }}
                  </p>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.advert_no") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.ilan_no }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.advert_date") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.ilan_tarihi }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.real_estate") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.ilanTipi }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.real_estate_type") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.konutTipi }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    m<sup>2</sup>({{ $t("advert.advert_m2_brut") }})
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.m2_brut }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    m<sup>2</sup>({{ $t("advert.advert_m2_net") }})
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.m2_net }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">{{ $t("advert.room") }}</div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.oda }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">{{ $t("advert.age") }}</div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.bina_yasi }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.at_floor") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.bulundugu_kat }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">{{ $t("advert.floor") }}</div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.kat_sayisi }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.climate") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.isitma }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">{{ $t("advert.bath") }}</div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.bathrooms }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">
                    {{ $t("advert.balkon") }}
                  </div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.balkon }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">{{ $t("advert.esya") }}</div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.esyali }}
                  </div>
                </div>
              </li>
              <li class="col-12">
                <div class="row">
                  <div class="col-6 detail-items">{{ $t("advert.state") }}</div>
                  <div class="col-6 detail-items">
                    {{ this.advert_element.kullanim_durumu }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {{ $t("advert.aciklama") }}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                 {{   this.advert_element.description}}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {{ $t("advert.konum") }}
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <iframe
                    :src="this.advert_element.map"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full-img">
      <div class="image-fullpage">
        <div class="fullpage-background"></div>
        <div class="fullpage-img-box">
          <img :src="this.advert_element.active_img" alt="" />
        </div>
        <button class="close-button" @click="closeFullPageImg">
          <img src="../../../assets/close.png" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media screen and (min-width: 1024px) {
}
/* For Tablet View */
@media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
@media (device-height: 720px) and (device-width: 540px) and (-webkit-min-device-pixel-ratio: 2) {
}
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px) and (orientation: portrait) {
  .detail-items {
    font-size: 18px;
  }
  .responsive-advert-details {
    display: block !important;
    height: 320px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
  }

  .responsive-more-details {
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    background: linear-gradient(to bottom, #ffffff00 0%, #000000a6 215%);
    position: absolute;
    bottom: 0;
    left: 0;

    font-size: 15px;
  }
  .responsive-more-details span {
    font-weight: 700;
  }
  .responsive-advert-details-open {
    height: 670px !important;
    transition: all 0.3s;
  }
  .accordion {
    padding-top: 2rem;
  }
  #expand {
    font-size: 52px;
    transform: rotate(-90deg);
    transition: all 0.3s;
  }
  .accordion-body {
    font-size: 18px;
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
.video-button-text{
       padding-left: 5px;
    font-size: 15px;
    font-weight: 600;
}
.video-button-box {
  padding-top: 2rem;
}
.video-button {
  background: rgb(120 36 219 / 22%);
  padding: 10px;
  color: #9B59B6;
  display: flex;
  width: 100%;
  border-radius: 10px;
  
}
.responsive-more-details {
  display: none;
}
.accordion {
  padding-top: 4rem;
}
.accordion-button {
  border: none !important;
}
.accordion-button:not(.collapsed)::after {
  background-image: none !important;
}
.full-img {
  display: none;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  outline: none;
}
.none {
  display: none !important;
}
.fullpage-background {
  width: 100%;
  height: 100%;
  background-color: #000000eb;
  position: absolute;
}
.fullpage-img-box {
  width: 60%;
  z-index: 9999;
}
.fullpage-img-box img {
  width: 100%;
}
.image-fullpage {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.advert-big-img img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.accordion-button {
  border: 3px solid blue;
}
.accordion-item {
  border: none;
}
.accordion-body {
  color: black;
}
.accordion-button:not(.collapsed) {
  color: white;
  background-color: rgba(120, 36, 219, 1);
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
}
.imgs-box {
  padding: 12px 0;
}
.advert-title {
  padding-bottom: 10px;
}
.advert-title h1 {
  color: black;
  border-bottom: 1px solid black;
}
.advertpage-section {
  padding: 10rem 0;
  background: #f0f2f5;
}

.advert-small-imgs img {
  height: 80px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.advert-small-imgs img:hover {
  cursor: pointer;
}
.detail-items {
  color: black;
  border-bottom: 1px black solid;
  padding: 5px;
}
.price {
  font-size: 21px;
  padding-bottom: 10px;
}
.address-short {
  color: #000000d1;
  font-size: 13px;
  padding-bottom: 11px;
}
</style>