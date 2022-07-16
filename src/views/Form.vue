<template>
  <section class="request-form">
    <div class="container">
      <div class="row">
        <div style="padding-right:50px" class="col-lg-6 center">
          <div class="form-desc">
            <h1>{{ $t("form.form-title") }}</h1>
            <p>
              {{ $t("form.form-desc") }}
            </p>
            <br /><br />
            <li class="nav__item nav-item request_button">
              <a class="request_button" href="https://calendly.com/jelibot"></a>
            </li>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="title-form">
            <h2>
              <i class="fa fa-pencil" aria-hidden="true"></i
              >{{ $t("form.register") }}
            </h2>
          </div>
          <form action="/" class="row" v-on:submit.prevent="addRequest">
            <Label class="text-left col-12">{{ $t("form.fname") }}</Label>
            <input
              v-model="newRequest.fname"
              class="fname input col-12"
              type="text"
              name="fname"
              required
            />
            <Label class="text-left col-12">{{ $t("form.lname") }}</Label>
            <input
              v-model="newRequest.lname"
              class="lname input col-12"
              type="text"
              name="lname"
              required
            />
            <Label class="text-left col-12">{{ $t("form.email") }}</Label>
            <input
              v-model="newRequest.email"
              class="input col-12"
              type="email"
              name="email"
              required
            />
            <Label class="text-left col-12">{{ $t("form.pnumber") }}</Label>
            <input
              v-model="newRequest.pnumber"
              class="input col-12"
              type="tel"
              name="phone"
              required
            />
            <Label class="text-left col-12">{{ $t("form.cname") }}</Label>
            <input
              v-model="newRequest.cname"
              class="input col-12"
              type="text"
              name="cname"
              required
            />
            <Label class="text-left col-12">{{ $t("form.message") }}</Label>
            <textarea
              v-model="newRequest.message"
              class="input col-12"
              name="message"
            ></textarea>

            <select v-model="newRequest.country" class="select-option" required  name="select">
              <option
                class="option-form"
                value=""
                selected
               
              >
                {{ $t("form.country") }}
              </option>
              <option class="option-form" value="Turkey">
                {{ $t("form.op1") }}
              </option>
              <option class="option-form" value="UK">
                {{ $t("form.op2") }}
              </option>
              <option class="option-form" value="Germany">
                {{ $t("form.op3") }}
              </option>
              <option class="option-form" value="Russia">
                {{ $t("form.op4") }}
              </option>
              <option class="option-form" value="Other">
                {{ $t("form.op5") }}
              </option>
            </select>

            <div class="checkbox">
              <input class="input" type="checkbox" name="checkbox" required />
              <span class="span-color"
                >{{ $t("form.agree") }}
                <a href="/privacy">{{ $t("form.privacy") }}</a></span
              >
            </div>
            <div class="checkbox">
              <input class="input" type="checkbox" name="checkbox2" />
              <span class="span-color">{{ $t("form.recieve") }}</span>
            </div>
            <button
              @click="modal_open"
              type="submit" 
              href="#"
              class="btn btn-primary button-form"
              for="modal-toggle"
            >
            {{ $t("form.button") }}
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="modal-container" id="modalq">
      <div class="modal-box center">
        <h1>{{ $t("form.window-title") }}</h1>
        <p style="color:#03045E; padding:10px">{{ $t("form.window-title-2") }}</p>
        <button @click="modal_close" class="modal-close-btn">OK!</button>
        <button @click="modal_close" class="modal-close-btn-x">X</button>

      </div>
    </div>
  </section>
</template>
<script>
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyC7S2h_ko89pWZ10JujNVMnCbTz-M3alwk",
  authDomain: "jeli-ai.firebaseapp.com",
  projectId: "jeli-ai",
  storageBucket: "jeli-ai.appspot.com",
  messagingSenderId: "484893673553",
  appId: "1:484893673553:web:0b7cb006dc10bbce21d070",
  measurementId: "G-LMPENXQDDV",
};

let app = Firebase.initializeApp(config);
let db = app.database();

export { db };

let requestRef = db.ref("JeliAIRequest");

export default {
  name: "Form",
  firebase: {
    request: requestRef,
  },
  data() {
    return {
      newRequest: {
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
  methods: {
    addRequest: function () {
      requestRef.push(this.newRequest);
      this.newRequest.fname = "";
      this.newRequest.lname = "";
      this.newRequest.email = "";
      this.newRequest.pnumber = "";
      this.newRequest.cname = "";
      this.newRequest.message = "";
      this.newRequest.country = "";
    },
    modal_open: function () {
      let fname = form_control(document.querySelector('[name="fname"]').value);
      let lname = form_control(document.querySelector('[name="lname"]').value);
      let email = form_control(document.querySelector('[name="email"]').value);
      let phone = form_control(document.querySelector('[name="phone"]').value);
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
      console.log(checkbox)

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
        console.log("kasj");
      } else {
         console.log("ife girmedi")
      }

      function form_control(input) {
        if (
          input === "" ||
          input === null ||
          input === false
        ) {
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
.modal-close-btn-x{
position: absolute;
top: 8px;
right: 8px;
border-radius:8px;
}
.modal-close-btn{
background-color: #57CC99;
border-radius:8px;
width: 70px;
}
.modal-box h1 {
  color:#03045E;
  font-size: 26px;
  padding-top:20px;
}
.request_button {
  position: relative;
  width: 170px;
  height: 50px;
  border: 1px solid hotpink;
  border-radius: 0.25rem;
}
.request_button a {
  color: #ffffff;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.request_button::before {
  content: "Request A Live Demo";
  width: 100%;
  height: 100%;
  position: absolute;
 background: -webkit-linear-gradient(37deg, #fe5ab0, #ff7a50);
  color: white;
  top: -7px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: all 0.4s;
}
.request_button:hover::before {
  cursor: pointer;
  top: 0;
  right: 0;
}
.span-color {
  color: var(--first-color);
}
.request-form {
  position: relative;
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
  padding: 10px 5px;
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
</style>