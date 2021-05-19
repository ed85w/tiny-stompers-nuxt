<template>
  <div>
    <AppNavbar />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>

import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

export default {
  components: {
    AppNavbar,
    AppFooter
  }  
}
</script>

<style lang="scss">

.test {
  border: 2px solid red;
}

/* WHOLE SITE SETTINGS */

@font-face {
  font-family: kristenITC;
  src: url(~static/fonts/ITCKRIST.ttf) format('truetype');
}

html {
  font-size: 13px;
  /* scroll-behavior: smooth; */
}
body { 
  font-family: 'Roboto', sans-serif;
  color: #302d7e;
}

h1,h2,h3,h4,h5 {
  font-family: kristenITC, serif;
}
p {
  font-size: 16px;
  font-weight: 300;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 24px;
}

h2.home-h2 {
  font-weight: bold;
  font-size: 26px;
}

.btn.btn-primary {
  background-color: #5C52AF;
  border: none;
  border-radius: 30px;
  padding: 10px 40px;
  font-family: kristenITC, serif;
  font-size: 18px;

  &:hover {
    color: black;
  }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  
}
/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  p {
    font-size: 18px;
  }

  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 40px;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .max-width-container {
    max-width: 2500px;
    margin-right: auto;
    margin-left: auto;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {


}


</style>
