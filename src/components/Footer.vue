<template>
  <section class="footer relative" id="footer">

    <footer class="section">
      <div class="container">
        <div class="footer__container ">
          <div class="row">
         
            <div class="col-lg-4 col-md-6 ">
              <div class="footer__content__first">
          <img class="footer__logo" src="../assets/images/ardala-logo.png" alt="">
          <div class="footer-socials bd-grid">
        <div>
          <a href="https://www.facebook.com/Jelibot/" class="footer__social">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://instagram.com/jeli.ai" class="footer__social">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/jelibot" class="footer__social">
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/jeliai"
            class="footer__social"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCbCZnpkA58ImdGz_xRMPxCg"
            class="footer__social"
          >
            <i class="bx bxl-youtube"></i>
          </a>
         
          <a
            href="https://web.telegram.org/#/im?p=@ssat_budgie_bot"
            class="footer__social"
          >
            <i class="bx bxl-telegram"></i>
          </a>
          <a href="404page.html" class="footer__social">
            <i class="bx bxl-whatsapp"></i>
          </a>
        </div>
      </div>
        </div>
            </div>
            <div class="col-lg-4 col-md-6 ">
                <div class="footer__content px-5">
          <h3 class="footer__title">{{ $t("footer.title-4") }}</h3>
      
          <ul>
            <li>
              <a href="/privacy" class="footer__link">{{
                $t("footer.policy_privacy")
              }}</a>
            </li>
            <li>
              <a href="/isms" class="footer__link">{{
                $t("footer.policy_isms")
              }}</a>
            </li>
            <li>
              <a href="/terms" class="footer__link">{{
                $t("footer.policy_terms")
              }}</a>
            </li>
            <li>
              <a href="/quality" class="footer__link">{{
                $t("footer.policy_quality")
              }}</a>
            </li>
            <li>
              <a href="/cookie" class="footer__link">{{
                $t("footer.policy_cookie")
              }}</a>
            </li>
          </ul>
        </div>
            </div>
            <div class="col-lg-4 col-md-6 ">
               <div class="footer__content">
          <h3 class="footer__title">{{ $t("footer.title-2") }}</h3>
          <div class="contact">
          <ul>
            <li>
              <br>
             
            </li>
            <li>
              <a style="color: #fe5ab0" href="tel:+90 0533 479 25 19"
                > <h5> +90 0533 763 00 02 </h5> </a
              >
            </li>
            <li>{{ $t("footer.info-1") }}</li>
            <li>{{ $t("footer.info-3") }}</li>
          </ul>
          </div>
        </div>
            </div>

            
            </div>

          </div>
      </div>
      <p class="footer__copy">{{ $t("footer.info-2") }}</p>
    
      
    </footer>
  </section>
</template>

<script>
import axios from "axios";

import firebase from "firebase";

import {db} from "../views/Form.vue"

let newslettertRef = db.ref("JeliAINewsletter");

export default {
  name: "Footer",
  props: ["darkTheme"],
  data() {
    return {
      email: "",
      newsletter: {
        email: "",
        
      },
    };
  },
   firebase: {
    JeliAINewsletter: newslettertRef,
  },
  methods: {
    addNewSletter: function () {
      newslettertRef.push(this.newsletter);
      this.newsletter.email = "";
      

    },
    async handlerSubmit() {
      let data = {
        post: {
          email: this.email,
        },
        // callbackUrl: "https://10.90.30.22:5080/payment/paymentcheckoutresult",
      };
      console.log(data);
      await this.post(data);
    },
    async post(req) {
      let res = await axios.post(
        "https://10.90.30.22:5080/payment/paymentcheckout",
        req
      );
      console.log(res);
      if (res.status == 200) {
        console.log(res.data);
        // window.location.href = res.data.payWithIyzicoPageUrl;
      } else {
        console.log(res);
      }
    },
  },
};
</script>

<style scoped>
.footer{
  padding-top: 5rem;
  background:black;
  }
.footer-background{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000008c;
}
.footer__form__content {
  padding: 0.2rem 0.2rem;
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}

.footer__input {
  width: 100%;
  color: black;
  background-color: whitesmoke;
  font-family: var(--body-font);
  font-size: var(--small-font-size);
  border: none;
  outline: none;
}

.footer__button {
  font-size: var(--small-font-size);
  padding: 5px 20px !important;
  
}

.footer__container {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  row-gap: 2rem;
  padding-bottom: 4rem;
}



.footer__content {
  text-align: left;
}


.footer__content__first {
  text-align: center;
}

.footer__logo {
 width: 50%;
 height: 50%;
 color: black;
}

.footer__description {
  display: block;
  font-size: var(--small-font-size);
  margin: 0.25rem 0 var(--mb-1);
}

.footer__logos {
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  
}

.footer-socials {
  grid-template-rows: repeat(1, 1fr);
  justify-content: center;
}

.footer__social {
  font-size: 1.5rem;
  color: white;
  margin-right: var(--mb-2);
}

.footer__title {
  font-size: var(--h2-font-size);
  color: white;
  margin-bottom: var(--mb-2);
}

.footer__link {
  display: inline-block;
  color: white;
  margin-bottom: var(--mb-1);
}

.footer__link:hover {
  color: var(--text-color-light);
}

.footer__copy {
  text-align: center;
  font-size: var(--small-font-size);
  color: var(--text-color-light);
      padding: 45px 0px;
    border-top: 1px #ffffff1f solid;
}

.footer__img {
  background-color: white;
  width: 80px;
  height: 80px;
  border-radius: 200px;
  margin: auto;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.contact li{
  color: white;
  

}
</style>
