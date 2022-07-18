<template>
  <section class="filter-section">
    <div class="container">
      <div class="row">
        <div class="filter col-12">
          <div class="row">
            <div class="filter-up  col-12">
              <div class="row">
                <div class="satilik col-lg-3 col-sm-6">
                  <select class="filter-select" @change="ilanChange">
                    <option value="0" data-foo="Ilan Turu">{{$t("filterDefault.ad_type")}}</option>
                    <option value="1" data-foo="Satilik">{{$t("filterSelection.sale")}}</option>
                    <option value="2" data-foo="Kiralik">{{$t("filterSelection.rental")}}</option>
                  </select>
                </div>
                <div class="konut col-lg-3 col-sm-6">
                  <select class="filter-select" @change="konutChange">
                    <option value="0" data-foo="Konut">{{$t("filterDefault.residential")}}</option>
                    <option value="1" data-foo="Daire">{{$t("filterSelection.flat")}}</option>
                    <option value="2" data-foo="Residence">{{$t("filterSelection.residence")}}</option>
                    <option value="3" data-foo="Mustakil Ev">{{$t("filterSelection.det_house")}}</option>
                    <option value="4" data-foo="Villa">{{$t("filterSelection.villa")}}</option>
                    <option value="5" data-foo="Hotel">{{$t("filterSelection.hotel")}}</option>
                   
                  </select>
                </div>
                <div class="il col-lg-3 col-sm-6">
                  <select class="filter-select" @change="ilChange">
                    <option  value="0" data-foo="Il">{{$t("filterDefault.city")}}</option>
                    <option v-for="sehir in filteroptions" :value="sehir.plaka_kodu" :data-foo="sehir.il_adi">{{sehir.il_adi}}</option>

                  
                  </select>
                </div>
                <div class="ilce col-lg-3 col-sm-6">
                  <select class="filter-select" @change="ilceChange">
                    <option value="0" data-foo="Ilce">{{$t("filterDefault.district")}}</option>
                    <option v-for="ilce in filteril.ilceler" value="1" :data-foo="ilce.ilce_adi">{{ilce.ilce_adi}}</option>
                    
                  </select>
                </div>
                <!-- <div class="mahalle col-lg-3 col-sm-6">
                  <select class="filter-select" @change="mahalleChange">
                    <option value="0" data-foo="Mahalle">Mahalle</option>
                    
                  </select>
                </div> -->
                <div class="price-box col-lg-3 col-sm-6">
                  <div class="row">
                    <div class="min col-6">
                      <input
                        type="number"
                        placeholder="Min TL "
                        v-model="minValue"
                        @change="minChange"
                      />
                    </div>
                    <div class="max col-6">
                      <input
                        type="number"
                        placeholder="Max TL "
                        v-model="maxValue"
                        @change="maxChange"
                      />
                    </div>
                  </div>
                </div>

                <div class="oda col-lg-3 col-sm-6">
                  <select class="filter-select" name="" id="">
                    <option value="0">{{$t("filterDefault.room")}}</option>
                    <option value="1">3+1</option>
                    <option value="2">1+1</option>
                    <option value="3">2+1</option>
                  </select>
                </div>

                <div class="ara col-lg-3 col-sm-6">
                  <button class="search-btn" @click="store.filter(filter)">
                    {{$t("filterDefault.button")}}
                  </button>
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
import { store } from "../store";
import il_data from "../assets/json/il-ilce.json";
export default {
  props: ["filterSum"],
  data() {
    return {
      filteroptions:il_data["data"],
      filteril:[],
      filterilce:[],

      store,
      filter: {
        ilanTipi: "",
        konutTipi: "",
        il: "",
        ilce: "",
        mahalle: "",
        oda: "",
        minValue: 0,
        maxValue: 1000000000000000,
      },
    };
  },
  
  methods: {
    ilanChange(e) {
      if (e.target.options.selectedIndex > -1) {
        this.filter.ilanTipi =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }

    },
    konutChange(e) {
      if (e.target.options.selectedIndex > -1) {
        this.filter.konutTipi =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
        console.log(this.filter.konutTipi);
      }
    },
    ilChange(e) {
      if (e.target.options.selectedIndex > -1) {
        this.filter.il =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
      this.filteril=this.filteroptions[e.target.options.selectedIndex-1]
      console.log("il",this.filteril);

    
    },
    ilceChange(e) {
      if (e.target.options.selectedIndex > -1) {
        this.filter.ilce =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
            console.log("ilceler",this.filteril.ilceler);

      
     

      this.filterilce=this.filteril.ilceler[e.target.options.selectedIndex-1]
      // console.log("mahalle?",this.filtermahalle);

    },
    mahalleChange(e) {
      if (e.target.options.selectedIndex > -1) {
        this.filter.mahalle =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    minChange(e) {
      this.filter.minValue = e.target.value;
    },
    maxChange(e) {
      this.filter.maxValue = e.target.value;
    },
  },
};
</script>

<style scoped >
.ara {
  display: flex;
  justify-content: flex-end;
}


.filter-select {
  width: 100%;
  margin-bottom: 20px;
}
.filter-section {
  padding: 4rem 0 5rem 0;
  background: #f0f2f5;
}
.filter-down {
  padding-top: 20px;
}
.filter {
  background: white;
  padding: 3rem 2rem;
  box-shadow: rgb(0 0 0 / 7%) 0px 1px 2px, rgb(0 0 0 / 7%) 0px 2px 4px,
    rgb(0 0 0 / 7%) 0px 4px 8px, rgb(0 0 0 / 7%) 0px 8px 16px,
    rgb(0 0 0 / 7%) 0px 16px 32px, rgb(0 0 0 / 7%) 0px 32px 64px;
}
select {
  padding: 5px 6px;
  border: 1px #00000029 solid;
  outline: none;
  height: 45px;
}
select > option {
  height: 45px;
}


input {
  border: none;
  background: #f0f2f5;
  width: 100px;
  padding: 10px 5px;
  margin-right: 40px;
}
input:focus {
  color: black;
}
::placeholder {
  color: black;
}
.search-btn {
  width: 196px;
  border: none;
  height: 40px;
  background: rgba(120, 36, 219, 1);
  color: white;
  font-family: Rubik;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
  .home__title{
    font-size: 60px;
    text-align: center;
  }
  .katil_button{
        font-size: 13px;
  }
  .search-btn{
      width: 100%;
      font-size: 20px;
  }
   select{
        font-size: 19px;
   }
   input{
       font-size: 19px;
       margin:0;
       } 
    .min, .max{
        margin-bottom: 20px;
    }
    .max{
        display: flex;
        justify-content: flex-end;
    }

}
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
  .search-btn{
      width: 100%;
      font-size: 15px;
  }
   select{
        font-size: 14px;
   }
   input{
       font-size: 14px;
       margin:0;
       } 
    .min, .max{
        margin-bottom: 20px;
    }
    .max{
        display: flex;
        justify-content: flex-end;
    }
   
    
}
@media screen and (min-width: 500px) and (max-width:800px){
select {
    font-size: 14px;
}
.min, .max {
    margin-bottom: 20px;
}
input {
    font-size: 14px;
    margin: 0;
}
.search-btn {
    width: 100%;
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