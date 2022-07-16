<template>
  <div>
    <button class="FBbutton" @click="logInWithFacebook">
      <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png"/>
       With Facebook</button>
  </div>
</template>
<script>
export default {
  name:"facebookLogin",
  methods: {
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "3148289262114119", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
};
</script>
<style>
.FBbutton{
  color:white;
  min-width: 150px;
  background-color: #4267B2;
  height: 2.5rem;
  border-radius: 5px;
  margin: 5px;
  border: none;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>