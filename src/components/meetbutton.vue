<template>
        <a class="" id='meetingid' :href="murl"  @click="meet">    
               <font-awesome-icon
            :icon="meetbutton"
         
           
          />
              
</a>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
export default {
   
   data() {
   return{
        murl:"",
        meetbutton:faVideo
   }
   },
   components: {
        FontAwesomeIcon
   },

   methods: {
       meet(){
            this.murl = window.location.origin + "/meetroom/" +  (new Date()).getTime();
            console.log(murl)
       }
   }

} 
</script>

<style scoped>
/* .custom-button{
  text-decoration: none;
  height:60px;
  background: -webkit-linear-gradient(37deg, #fe5ab0, #ff7a50);
  margin-right: 20px;
  color: #ffffff;
  outline: none!important;
  border: none;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: all .2s;
  text-align: center;
  padding-top: 2%;
  line-height: 37px;
} */
#meetingid{
     color: #0f4e8f;
    font-size: 20px;
    text-decoration: none;
    transition: all 0.4s ease-in-out;
    padding: 14px 19px;
}

</style>