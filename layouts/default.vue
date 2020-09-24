<template>
  <div>
    <AppNavbar />
    <Nuxt />
  </div>
</template>

<script>

import AppNavbar from '../components/AppNavbar';

export default {
  components: {
    AppNavbar
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
  src: url(/fonts/ITCKRIST.ttf) format('truetype');
}

@font-face {
  font-family: centuryGothic;
  src: url(/fonts/CenturyGothic.ttf) format('truetype');
}

html {
  font-size: 14px;
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
  font-size: 0.7rem;
  margin-bottom: 8px;
}

h1 {
  font-size: 1rem;
  font-weight: bold;
}

h2 {
  font-size:0.9rem;
  font-weight: bold;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
  h1 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
  }
  
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.5rem;
  }

}


</style>
