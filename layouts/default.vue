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
<style>

.test {
  border: 2px solid red;
}

/* WHOLE SITE SETTINGS */

@font-face {
  font-family: kristenITC;
  src: url(~static/fonts/ITCKRIST.ttf) format('truetype');
}

@font-face {
  font-family: centuryGothic;
  src: url(~static/fonts/CenturyGothic.ttf) format('truetype');
}

html {
  font-size: 13px;
}
body { 
  font-family: centuryGothic, sans-serif;
  color: #302d7e;
}
h1,h2,h3,h4,h5 {
  font-family: kristenITC;
}
p {
  font-weight: normal;
}

h1 {
  font-size: 2rem;
}

.about-ul {
  list-style-type: none;
}

li.about-li {
  background: url(~static/star-tint.png);
  background-size: 15px;
  background-repeat: no-repeat;
  margin-bottom: 10px;
  padding-left: 2em;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  
}
/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .max-width-container {
    max-width: 2500px;
    margin-right: auto;
    margin-left: auto;
  }

  h1 {
    font-size: 2.5rem;
  }

  li.about-li {
    background-size: 25px;
    font-size: 1rem;
    padding-bottom: 15px;
    padding-left: 3rem;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {


}


</style>
