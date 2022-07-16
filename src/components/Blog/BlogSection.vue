<template>
  <section class="blog section">
    <div class="container">
       <h3 class="section-title">
      {{$t("blog-window.blog-title")}}
      <a
        href="https://jelibot-com.medium.com"
        target="_blank"
        class="section-title"
        style="color: var(--first-color)"
        >Medium</a
      >
    </h3>
    <div class="press__container bd-grid">
      <div class="image-block-inner" v-for="post in postList" v-bind:key="post">
          <img :src="post.thumbnail" alt="" class="blog__img"/>
          <h3 v-html="post.title" class="section-subtitle"></h3>
          <router-link
            class="blog__desc section-subtitle"
            active-class="active"
            :to="{
              name: 'News',
              params: {
                title: post.title,
                description: post.description,
                pubDate: post.pubDate,
              },
            }"
            tag="li"
          >{{$t("tech.text-0")}}
          </router-link>
          <!-- link to the medium   
                    <a v-bind:href="post.link" target="_blank">Read More</a> -->
          <p class="blog__date">{{ post.pubDate }}</p>
      </div>
    </div>
    </div>
   
  </section>
</template>

<script>
import axios from "axios";
export default {
  // methods: {
  //     changeLanguage(lang) {
  //         this.$root.$i18n.locale = lang;
  //         setCookie("language", lang, 365);
  //     },
  // },
  data() {
    return {
      postList: [],
      languages: [
        {
          flag: "EN",
          language: "en",
          title: "English",
        },
        {
          flag: "TR",
          language: "tr",
          title: "Turkish",
        },
        {
          flag: "DE",
          language: "de",
          title: "German",
        },
        {
          flag: "RU",
          language: "ru",
          title: "Russian",
        },
      ],
    };
  },
  created() {
    document.documentElement.scrollTop;
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fjelibot-com.medium.com%2Ffeed"
      )
      .then((response) => {
        console.log(response);
        let data = response.data.items;
        for (let key in data) {
          this.postList.push(data[key]);
        }
        //console.log(this.postList)
      })
      .catch((e) => console.log(e));
  },
  name: "Blog",
};
</script>

<style>
.image-block-inner {
  position: relative;
  background-color: #f1f1f1;
  padding: 20px 25px;
  min-height: 90%;
  max-height: 90%;
  border-radius: 25px; 
  text-align: center;
}
.image-block-inner h3, a, p{
  color: var(--first-color);
}
.blog__img {
  margin-bottom: var(--mb-3);
  height: 100px;
}
.blog__date{
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb-3);
}
.blog__desc {
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--first-color);
}
</style>