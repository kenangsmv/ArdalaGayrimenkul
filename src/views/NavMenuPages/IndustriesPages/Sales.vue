<template>
  
  <section class="sales">
    <Filter/>
    <Adverts/>

  </section>
     

</template>
<script>
import Adverts from "../../../components/Adverts.vue"
import Filter from "../../../components/Filter.vue"


export default {
    data(){
      return{
      }
    },
    components: {
    Adverts,
    Filter
  },

}

</script>
<style scoped>
.sales{
  padding: 10rem 0 5rem 0;
  background: #f0f2f5;
}

</style>