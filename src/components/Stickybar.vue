<template>
<div>  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div class="icon-bar">
    <a href="https://www.facebook.com/Jelibot/" class="facebook icon-link"
      ><i class="fa fa-facebook"></i
    ></a>
    <a href="https://twitter.com/jelibot" class="twitter icon-link"
      ><i class="fa fa-twitter"></i
    ></a>
    <a href="https://instagram.com/jeli.ai" class="instagram icon-link"
      ><i class="fa fa-instagram"></i
    ></a>
    <a href="https://www.linkedin.com/company/jeliai" class="linkedin icon-link"
      ><i class="fa fa-linkedin"></i
    ></a>
    <a
      href="https://www.youtube.com/channel/UCbCZnpkA58ImdGz_xRMPxCg"
      class="youtube icon-link"
      ><i class="fa fa-youtube"></i
    ></a>
  </div></div>
</template>

<script>
export default {
  name: "Stickybar",
};
</script>

<style scoped>
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-link {
  display: block;
  text-align: center;
  padding: 4px;
  transition: all 0.3s ease;
  color: white;
  font-size: 10px;
}

.icon-link:hover {
  background-color: #000;
}

.icon-link:hover > i {
  padding: 4.5px;
}

.facebook {
  background: #3b5998;
  color: white;
  border-top-right-radius: 50%;
}

.twitter {
  background: #55acee;
  color: white;
}

.instagram {
  background: #f033ea;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
  border-bottom-right-radius: 50%;
}
</style>
