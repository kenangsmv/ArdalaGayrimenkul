<template>
  <div class="container">
    <p class="post-title" v-html="title"></p>
    <p class="post-desc" v-html="description"></p>
    <p class="post-date">{{ pubDate }}</p>
    <router-link to="/blog">
      <button class="btn btn-ghost-secondary mb-3 btn-sm">
        <i class="fa fa-arrow-left mx-1"></i>
        {{$t("blog-window.back-button")}}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "pubDate"],
};
</script>

<style scoped>
.post-title {
  font-size: 40px;
}
</style>
