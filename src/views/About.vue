<template>
  <section class="about section bd-container" id="about">
    <div class="about__container bd-grid">
      <div class="about__data">
        <span class="section-subtitle about__initial">{{
          $t("nav.nav_title_about-us")
        }}</span>
        <h2 class="section-title about__initial">
          Biz kimiz?
        </h2>
        <p class="about__description">
          Jeli.ai, web sitelerinde müşteri hizmetleri deneyimini geliştirmek
          için kişiye özel kişiselleştirilmiş yardım sağlamak için şirketler ve
          potansiyel müşterileri arasındaki boşluğu doldurur. NLP'yi yapay zeka
          ile öğrenebilen, otomatikleştirebilen ve sınıflandırabilen bir hizmet
          olarak sunarak, firmaların en son iletişim platformları trendine
          uymaları için bir konuşma mekanizması sağlar. Özellikler, özel sohbet
          robotları, sanal yardım, bağlamsal konuşmalar, konuşma tanıma ve
          sosyal medya entegrasyonunu içerebilir.
        </p>
        <a href="/contact" class="button">{{
          $t("nav-menu.nav_menuItem_contactUs")
        }}</a>
      </div>
      <img src="../assets/images/Jelibot-pp.png" alt="" class="about__img" />
    </div>
    <section class="team section bd-container" id="team">
      <span class="section-subtitle">{{ $t("nav.nav_title_OurTeam") }}</span>
      <div class="team__container bd-grid">
        <div class="team__content" v-for="worker in workers" :key="worker.name">
          <img  :src="require('@/assets/images/' + worker.img)" alt="" class="team__img" />
          <h2 class="team__name">{{ worker.name }}</h2>
          <span class="section-subtitle">{{ worker.title }}</span>
          <span><a v-bind:href="worker.linkedin" target="_blank" style="color:var(--text-color-light)">Linkedin</a></span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "About",
  props: ["darkTheme"],
  data() {
    return {
      workers: [
        {
          name: "Deniz Gül Özcan",
          img: "deniz.jpg",
          title: "Founder & Research Engineer",
          linkedin: "https://www.linkedin.com/in/denizgul/",
        },
        {
          name: "Baran Savran",
          img: "baran.jpg",
          title: "Senior Software Developer",
          linkedin: "https://www.linkedin.com/in/baransavran/",
        },
        {
          name: "Deniz Fırat",
          img: "DenizFırat.jpg",
          title: "Software Engineer",
          linkedin: "https://www.linkedin.com/in/dnzfrt/",
        },
        {
          name: "Ceren Büyükyörük",
          img: "ceren.jpg",
          title: "AI Engineer",
          linkedin: "https://www.linkedin.com/in/cerenbuyukyoruk/",
        },
        {
          name: "Faize Ertürk",
          img: "faize.jpg",
          title: "Frontend Engineer",
          linkedin: "https://www.linkedin.com/in/faize-e-38b551172/",
        },
        {
          name: "Duygu Işık",
          img: "duygu.jpg",
          title: "Frontend Engineer",
          linkedin: "https://www.linkedin.com/in/duyguisikk/",
        },
        {
          name: "Fatime Nur Çelik",
          img: "fatime.jpg",
          title: "Frontend Developer",
          linkedin: "https://www.linkedin.com/in/fatime-nur-çelik-491ab61a3/",
        },
        {
          name: "Çağatay Beşer",
          img: "cagatay.jpg",
          title: "BackEnd Developer",
          linkedin: "https://www.linkedin.com/in/cagatay-beser/",
        },
        {
          name: "Rahmani Saygın",
          img: "rahmani.jpg",
          title: "Speech/Machine Learning Engineer",
          linkedin: "https://www.linkedin.com/in/rahmanisaygin/",
        },
      ],
    };
  },
};
</script>

<style>
.about__description {
  margin-bottom: var(--mb-3);
}
.section-subtitle{
      color: orange;
    font-size: 20px;
  }
.about__img {
  border-radius: 0.5rem;
  justify-self: center;
}
.team__img {
  width: 150px;
  align-self: center;
  margin-bottom: var(--mb-2);
}
.team__name {
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  text-align: center;
}
.team__container {
  justify-content: center;
}

.team__content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--container-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(74, 3, 23, 0.15);
  padding: 0.75rem;
  align-items: center;
}
</style>