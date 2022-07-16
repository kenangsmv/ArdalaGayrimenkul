<template>
  <div>
    <blogsection></blogsection>
  </div>
</template>

<script>
import blogsection from "../components/Blog/BlogSection.vue";

export default {
  components: { blogsection: blogsection },
  props: ["darkTheme"],
};
</script>
<style>
.blog-title {
  padding-top: 5%;
  text-align: center;
  font-weight: var(--font-semi-bold);
  font-size: 50px;
}
.post-title {
  text-align: center;
  padding: 2% 10% 0% 10%;
  font-size: 32px;
}
.post-desc {
  text-align: left;
  margin: 0px;
}
.post-date {
  text-align: right;
  color: darkgray;
  font-size: 12px;
}
.blog-posts {
  padding: 0% 5% 0% 5%;
  max-width: 30cm;
  margin: 0px auto 5px auto;
  border-radius: 15px 50px;
  border: 2px solid #ee4e7e;
  background: white;
  position: relative;
}
</style>
