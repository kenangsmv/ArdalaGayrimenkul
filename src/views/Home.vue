<template>
  <section>
    <Hero />
    <Filter />
    <Adverts />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
//import Technologies from '../components/Technologies.vue';
import Adverts from "../components/Adverts.vue";
import Filter from "../components/Filter.vue";
import advert_data from "../advert.json";
import SearcBox from "../components/SearchBox.vue"
export default {
  name: "Home",

  data() {
    return {
      posts: advert_data["post"],
    };
  },
  components: {
    Hero,
    Adverts,
    Filter,
    SearcBox
  },
  created() {
    document.documentElement.scrollTop;
  },
  methods: {
    search(term){
      this.posts= this.posts.filter((post) =>{
        if (post.konut.toLowerCase().includes(term.toLowerCase())) {
        console.log("bu ifdeyik");
          return post
        }
       
      })
    },
    filterAdverts(filter) {
      this.posts = advert_data["post"];

      this.posts = this.posts.filter((post) => {
        if (post.durum == filter.ilanTipi && post.konut == filter.konutTipi && post.il == filter.il && post.ilce == filter.ilce && post.mahalle == filter.mahalle) {
          return post
        }
        
      });
    },
    filterTur(filter) {
      this.posts = advert_data["post"];

      this.posts = this.posts.filter((post) => {
        if (post.durum == filter.ilanTipi || post.konut == filter.konutTipi ) {
          return post


        }
       
      });
    },
    filterSum(filter) {
      this.posts = advert_data["post"];

     

      if (filter.konutTipi == "" || filter.konutTipi == "Konut" ) {
        this.filterTur(filter);
      }
      else if(filter.ilanTipi == "" || filter.ilanTipi == "Ilan Turu"){
        this.filterTur(filter);
      }
      else{
      this.filterAdverts(filter);

      }
    },
  },
};
</script>

<style>
</style>