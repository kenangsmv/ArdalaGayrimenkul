<template>
  <section class="contact">
    <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.705059102611!2d30.645519315224945!3d36.87347797993354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391a158c8e429%3A0x4d1da29eefe62263!2sZeytin%20Dal%C4%B1%20Meyhanesi%20Konyaalt%C4%B1!5e0!3m2!1str!2str!4v1659098995102!5m2!1str!2str"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="contact-information">
      <div class="container center">
      <div class="row center">
        <div class="col-12">
          <!-- <h4>Send us a Message</h4> -->
        </div>

        <div class="col-xl-12 ">
          <div class="row ">
            <div class="col-xl-5 mb-5 iletisim">
              <div class="phones h100 colum-flex-start">
                <h1>Get in Touch</h1>
                <div class="phone-numb">
                  <img style="padding:4px" class="contact-img" src="../assets/images/ardalaphone3.png" alt="" />
                  <span>+90 533 763 00 02</span>
                </div>
                <div class="email">
                  <img class="contact-img" src="../assets/images/ardalaemail.png" alt="" />
                  <span>ardala@gmail.com</span>
                </div>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="row">
                <img class="col-lg-6" src="../assets/images/ardalalocation.png" alt="" />
                <p class="col-lg-6 location-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  quod sunt natus facere harum omnis neque nisi iure fuga a.
                  Fuga maiores itaque velit dolorum magni, accusantium illum
                  tempore corporis vitae neque doloremque beatae molestiae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </section>
</template>

<script>
import { db } from "./Form.vue";
let requestRef = db.ref("JeliAIContact");

export default {
  name: "Contact",
  firebase: {
    JeliAIContact: requestRef,
  },
  data() {
    return {
      newContact: {
        fname: "",
        lname: "",
        email: "",
        pnumber: "",
        cname: "",
        message: "",
        country: "",
      },
    };
  },
  created() {
    document.documentElement.scrollTop;
  },

  methods: {
    addContact: function () {
      requestRef.push(this.newContact);
      this.newContact.fname = "";
      this.newContact.lname = "";
      this.newContact.email = "";
      this.newContact.pnumber = "";
      this.newContact.cname = "";
      this.newContact.message = "";
      this.newContact.country = "";
    },
    modal_open: function () {
      let fname = form_control(document.querySelector('[name="fname"]').value);
      let lname = form_control(document.querySelector('[name="lname"]').value);
      let email = form_control(document.querySelector('[name="email"]').value);
      let phone = form_control(
        document.querySelector('[name="pnumber"]').value
      );
      let cname = form_control(document.querySelector('[name="cname"]').value);
      let message = form_control(
        document.querySelector('[name="message"]').value
      );
      let select = form_control(
        document.querySelector('[name="select"]').value
      );
      // form_control(document.querySelector('[name="checkbox"]'))
      let checkbox = form_control(
        document.querySelector('[name="checkbox"]').checked
      );
      console.log(checkbox);

      if (
        fname &&
        lname &&
        email &&
        phone &&
        cname &&
        message &&
        select &&
        checkbox
      ) {
        let modal = document.getElementById("modalq");
        modal.style.display = "flex ";
      } else {
      }

      function form_control(input) {
        if (input === "" || input === null || input === false) {
          console.log(input);
          return false;
        } else {
          return true;
        }
      }
    },
    modal_close: function () {
      let modal = document.getElementById("modalq");
      modal.style.display = "none";
    },
  },
};
</script>

<style scoped>

@media screen and (min-width: 1024px) {
}
/* For Tablet View */
@media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .location-description{
  font-size: 28px;
  padding-top: 15px;
}
.phones span{
  font-size: 28px;
  color: #837474;
}
.phones h1{
  width: 100%;
  text-align: center;
  font-size: 60px;
}
.phones img{
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
.iletisim{
  display: flex;
  justify-content: center;
}
}
@media (device-height: 720px) and (device-width: 540px) and (-webkit-min-device-pixel-ratio: 2) {
}
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px) and (orientation: portrait) {
.location-description{
  font-size: 18px;
  padding-top: 15px;
}
.phones span{
  font-size: 18px;
  color: #837474;
}
.phones img{
  width: 30px;
  height: 30px;
}
.iletisim{
  display: flex;
  justify-content: center;
}
}
/* For Mobile Landscape View */
@media screen and (max-device-width: 640px) and (orientation: landscape) {
}

/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-device-width: 640px) {
}

/* For iPhone 4 Portrait or Landscape View */
@media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
}

/* For iPhone 5 Portrait or Landscape View */
@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
}

/* For iPhone 6 and 6 plus Portrait or Landscape View */
@media (min-device-height: 667px) and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
}

.contact-information{
      padding: 6rem 0;
}
.contact-infos {
  /* From https://css.glass */

}
.contact-img{
  width:50px;
  height:50px;
}
.location-img{
    height: 170px;
    object-fit: cover;
    margin-bottom: 23px;
    border-radius: 2px;
}
.location-description{
  color: #000000b3;
  text-align: justify;
  padding-left: 20px;
}
.modal-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0000008f;

  justify-content: center;
  align-items: center;
  display: none;
}
.modal-box {
  width: 400px;
  height: 240px;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
}
.modal-close-btn-x {
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 8px;
}
.modal-close-btn {
  background-color: #57cc99;
  border-radius: 8px;
  width: 70px;
}
.modal-box h1 {
  color: #03045e;
  font-size: 26px;
  padding-top: 20px;
}

.span-color {
  color: var(--first-color);
}
.request-form {
  padding: 8rem 0;
}
.form-desc h1 {
  color: var(--first-color);
  margin-bottom: 50px;
}
.form-desc {
  margin-bottom: 50px;
}
.form-desc p {
  font-size: 20px;
}
.title-form h2 {
  color: var(--first-color);
}
.left-part,
.form-demo {
  padding: 25px;
}
.left-part {
  text-align: center;
}
.fa-graduation-cap {
  font-size: 72px;
}
.title-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.info {
  display: flex;
  flex-direction: column;
}
.input,
.select-option {
  padding: 5px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(48, 0, 16);
  color: rgba(80, 0, 0, 0.616);
}
.option-form::placeholder,
.input::placeholder,
.text-left {
  color: rgba(80, 0, 0, 0.616);
}
.option-form:focus {
  border: none;
}
.option-form {
  background: rgba(255, 173, 173, 0.151);
  border: none;
}
.checkbox input {
  margin: 0 10px 0 0;
  vertical-align: middle;
}
.checkbox a {
  color: #fe5ab0;
}
.checkbox a:hover {
  color: #ff7a50;
}
.button-form {
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background: -webkit-linear-gradient(37deg, #fe5ab0, #ff7a50);
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
}
.button-form {
  width: 100%;
}
.button-form:hover {
  background: -webkit-linear-gradient(37deg, #ff7a50, #fe5ab0);
}

.google-map {
  height: 390px;
}
.contact {
  position: relative;
}
.contact h1,
span,
p {
  color: black;
}
.form {
  padding: 50px 0;
}
.location-box {
  padding: 33px 0;
}
.location-box img {
  border-radius: 5px;
}
.contact .form-header {
  padding: 20px 150px;
}

.location-description span {
  font-size: 16px;
}
.contact .form-header h4,
.contact .form-header h5 {
  color: #22272d;
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 25px;
}
.contact .form-header span {
  color: #888;
  line-height: 1.625em;
}
.contact .jelly-form {
  padding-right: 80px;
}
.contact .jelly-form .form-body {
  border: 1px solid #88888817;
  padding: 15px 20px;
  border-radius: 5px;
  margin-top: 15px;
}
.contact .jelly-form .form-body .form-items {
  margin-bottom: 15px;
}
.contact .jelly-form .form-body .form-items span {
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 700;
  color: #333;
}
.contact .jelly-form .form-body .form-items input {
  width: 100%;
  border: none;
  outline: none;
  background: #f7f7f7;
  height: 36px;
  border-radius: 4px;
  margin-top: 8px;
}
.contact .jelly-form .form-body .form-items textarea {
  width: 100%;
  border: none;
  outline: none;
  background: #f7f7f7;
  border-radius: 4px;
  margin-top: 8px;
}
.contact .jelly-form .form-body .human input {
  width: 30px;
  height: 30px;
}
.contact .jelly-form .form-body button {
  font-size: 13px;
  color: #fff;
  padding: 11px 20px;
  text-decoration: none;
  background-color: #e4584b;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 43px;
  margin-top: 30px;
}
.contact .jelly-form .form-body button:hover {
  background: #333;
  cursor: pointer;
}
.contact .contact-about {
  padding-left: 35px;
}
.contact .contact-about .contact-about-items {
  background-color: #fafafa;
  margin: 20px 0;
  padding: 30px 0 30px 25px;
  border-radius: 7px;
  border: 1px solid #88888817;
}
.contact .contact-about .contact-about-items h5 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 14px;
}
.contact .contact-about .contact-about-items span {
  color: #333333a1;
  font-size: 15px;
}
.title {
  padding-top: 10%;
  text-align: center;
}
.container {
  /* gereksiz */
  /* margin-top: 50px;
  margin-bottom: 40px;
  display: flex; */
}
.row {
  padding-top: 0%;
}
.card {
  width: auto;
  height: 350px;
  padding-top: 50px;
}
.card > img {
  width: 70px;
  margin-left: 110px;
  margin-top: 5px;
}
.card-body {
  text-align: center;
}
.email input {
  width: 100%;
  height: 60px;
  background-color: #f4fafe;
  border: none;
  padding: 0px 20px;
  color: #000000;
  font-weight: 600;
  margin-bottom: 15px;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #000000;
  font-weight: 600;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #000000;
  font-weight: 600;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #000000;
  font-weight: 600;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #000000;
  font-weight: 600;
}
textarea {
  background-color: #f4fafe;
  border: none;
  width: 100%;
  padding: 20px;
  margin-top: 15px;
  color: #000000;
  font-weight: 600;
}
</style>
