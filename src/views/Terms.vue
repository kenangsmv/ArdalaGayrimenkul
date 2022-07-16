<template>
  <section class="section bd-container">
    <header id="home"></header>
    <p class="policy">
      <br /><br /><strong>{{ $t("terms.title-1") }}</strong>

      <br /><br /><strong>{{ $t("terms.text-1") }}</strong>

      <br /><br />{{ $t("terms.text-2") }}

      <br /><br /><strong>{{ $t("terms.text-3") }}</strong>

      <br /><br />{{ $t("terms.text-4") }}

      <br /><br />{{ $t("terms.info-1") }}

      <br /><br />{{ $t("terms.info-2") }}

      <br /><br />{{ $t("terms.info-3") }}

      <br /><br />{{ $t("terms.info-4") }}

      <br /><br />{{ $t("terms.info-5") }}

      <br /><br />{{ $t("terms.text-5") }}

      <br /><br /><strong>{{ $t("terms.text-6") }}</strong>

      <br /><br />{{ $t("terms.text-7") }}

      <br /><br /><strong>{{ $t("terms.text-8") }}</strong>

      <br /><br />{{ $t("terms.text-9") }}

      <br /><br /><strong>{{ $t("terms.text-10") }}</strong>

      <br /><br />{{ $t("terms.text-11") }}

      <br /><br /><strong>{{ $t("terms.text-12") }}</strong>

      <br /><br />{{ $t("terms.text-13") }}

      <br /><br /><strong>{{ $t("terms.text-14") }}</strong>

      <br /><br />{{ $t("terms.text-15") }}

      <br /><br /><strong>{{ $t("terms.text-16") }}</strong>

      <br /><br />{{ $t("terms.text-17") }}
    </p>
  </section>
</template>

<script>
export default {
  name: "Terms",
  data() {
    //const choice = getProduct();
    return {
      //choice,
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "tr", language: "tr", title: "Turkish" },
      ],
    };
  },
  created() {
    document.documentElement.scrollTop;
  },
};
</script>
<style>
</style>
