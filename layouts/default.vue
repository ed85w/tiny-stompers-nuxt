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
  cursor: pointer;

  &:hover {
    color: black;
  }
}

//NOTE - STYLING REUSED ON SERVICES & BABY MASSAGE PAGE!
.landing-row-home,
.landing-row-services,
.landing-row-baby {
  padding-top: 70px;

  .symbols-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 36px;
    left: 0;
    width: 100%;
    padding: 0 16px;

    .symbols-img {
      width: 20%;
    }
  }

  .embed-responsive,
  .embed-responsive .embed-responsive-item {
    overflow: visible;
  }

  /* carousel */
  .carousel-fade {
    height: 100%;
    border: 4px solid $tiny-stompers-dark;
    border-radius: 50%;
    overflow: hidden;

    .carousel-inner,
    .carousel-item {
      height: 100%;

      .carousel-img .img-fluid{
        height: 100%;
        object-fit: cover;
      }

      .carousel-caption {
        right: 0;
        left: 0;
        bottom: 0; 
        padding: 0 10% 10px 10%;
        background-color: $tiny-stompers-dark; 
        background-color: rgba($tiny-stompers-dark, 0.7);
        text-align: center;

        p {
          font-size: 0.9rem;
        }

        p:first-child::before {
          content: open-quote;
        }
        
        p:first-child::after {
          content: close-quote;
        }

        p:first-child {
          font-style: italic;
          margin-top: 2px;
          margin-bottom: 2px;
        }

        p:last-child {
          margin-top: 0px;
        }
      }
    }
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

    //NOTE - STYLING REUSED ON SERVICES PAGE!
  .landing-row-home,
  .landing-row-services,
  .landing-row-baby {

      /* carousel */
    .carousel-fade {

      .carousel-inner,
      .carousel-item {

        .carousel-caption {
          right: 0;
          left: 0;
          bottom: 0; //same as .carousel-fade border
          padding: 10px 18% 10px 18%;
          background-color: $tiny-stompers-dark; 
          background-color: rgba($tiny-stompers-dark, 0.7);
          text-align: center;

          p {
            font-size: 16px;
          }
        }
      }
    }

  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .max-width-container {
    max-width: 2500px;
    margin-right: auto;
    margin-left: auto;
  }

    //NOTE - STYLING REUSED ON SERVICES PAGE!
  .landing-row-home,
  .landing-row-services,
  .landing-row-baby {

      /* carousel */
    .carousel-fade {

      .carousel-inner,
      .carousel-item {

        .carousel-caption {
          right: 0;
          left: 0;
          bottom: 0; //same as .carousel-fade border
          padding: 10px 18% 10px 18%;

          p {
            font-size: 12px;
          }
        }
      }
    }

  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {


  .landing-row-home,
  .landing-row-services,
  .landing-row-baby {

      /* carousel */
    .carousel-fade {

      .carousel-inner,
      .carousel-item {

        // .carousel-img .img-fluid{
        // }

        .carousel-caption {
          right: 0;
          left: 0;
          bottom: 0; //same as .carousel-fade border
          padding: 15px 18% 15px 18%;

          p {
            font-size: 14px;
          }
        }
      }
    }

  }

}


</style>
