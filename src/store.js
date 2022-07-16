// store.js
import { reactive } from 'vue'
import advert_data from "./advert.json";

export const store = reactive({
    posts: advert_data["post"],
    tempPost :advert_data["post"],

    

  search(term){
    this.tempPost= this.tempPost.filter((post) =>{
      if (post.konutTipi.toLowerCase().includes(term.toLowerCase())) {
        return post
      }
     
    })
  },
  filter(terms){
   this.tempPost=this.posts;

    const termsKeys = Object.keys(terms)
    termsKeys.forEach(key => {
         if(terms[key]!==""){ 
          console.log("temppost-inside-if", this.tempPost);
          console.log("posts-inside-if", this.posts);
            if (key === "minValue" || key === "maxValue") {   
          

              this.tempPost=this.tempPost.filter((post) =>{     
                           
                    return  (post["price"] > terms["minValue"]) && (post["price"]<terms["maxValue"]) 
                  })              
            } else {
                 
              this.tempPost=this.tempPost.filter((post) =>{
                         

                    return  post[key]===terms[key]
                  })
            }
         }
        
    }); 
  }
})