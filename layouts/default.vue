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
  font-display: swap;
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
      object-fit: contain;
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
      border-radius: 50%;

      .carousel-img .img-fluid{
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      .carousel-caption {
        right: 0;
        left: 0;
        bottom: 0; 
        padding: 30px 17% 30px 17%;
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

// BUBBLES SECTION 
section.bubbles-container {
  margin:0;
  padding:0;
  width: 100%;
  height: 500px;
  background:#29b6f6;

  .bubbles{
    position:relative;
    width:100%;
    height: 100%;
    z-index:0;
    overflow:hidden;
    top:0;
    left:0;

    .bubble{
      position: absolute;
      bottom:-100px;
      width:40px;
      height: 40px;
      background:#f1f1f188;
      border: 2px solid white;
      border-radius:50%;
      opacity:0.5;
      animation: rise 10s infinite ease-in;
    }
    .bubble:nth-child(1){
      width:40px;
      height:40px;
      left:10%;
      animation-duration:8s;
    }
    .bubble:nth-child(2){
      width:20px;
      height:20px;
      left:20%;
      animation-duration:5s;
      animation-delay:1s;
    }
    .bubble:nth-child(3){
      width:50px;
      height:50px;
      left:35%;
      animation-duration:7s;
      animation-delay:2s;
    }
    .bubble:nth-child(4){
      width:80px;
      height:80px;
      left:50%;
      animation-duration:11s;
      animation-delay:0s;
    }
    .bubble:nth-child(5){
      width:35px;
      height:35px;
      left:55%;
      animation-duration:6s;
      animation-delay:1s;
    }
    .bubble:nth-child(6){
      width:45px;
      height:45px;
      left:65%;
      animation-duration:8s;
      animation-delay:3s;
    }
    .bubble:nth-child(7){
      width:90px;
      height:90px;
      left:70%;
      animation-duration:12s;
      animation-delay:2s;
    }
    .bubble:nth-child(8){
      width:25px;
      height:25px;
      left:80%;
      animation-duration:6s;
      animation-delay:2s;
    }
    .bubble:nth-child(9){
      width:15px;
      height:15px;
      left:70%;
      animation-duration:5s;
      animation-delay:1s;
    }
    .bubble:nth-child(10){
      width:90px;
      height:90px;
      left:25%;
      animation-duration:10s;
      animation-delay:4s;
    }
    .bubble:nth-child(11){
      width:120px;
      height:120px;
      left:11%;
      animation-duration:9s;
      animation-delay:2.5s;
    }
    .bubble:nth-child(12){
      width: 23px;
      height:23px;
      left:77%;
      animation-duration:7s;
      animation-delay:1s;
    }
    .bubble:nth-child(13){
      width:42px;
      height:42px;
      left:-5%;
      animation-duration:15s;
      animation-delay:1s;
    }
    .bubble:nth-child(14){
      width:71px;
      height:71px;
      left:5%;
      animation-duration:3s;
      animation-delay:6s;
    }
    @keyframes rise{
      0%{
        bottom:-100px;
        transform:translateX(0);
      }
      50%{
        transform:translate(100px);
      }
      100%{
        bottom:1080px;
        transform:translateX(-200px);
      }
    }
    .bubble-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;

      h4.bubbles-first-line {
        font-size: 48px;
      }
      h4.bubbles-second-line {
        font-size: 64px;
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
          padding: 40px 18% 40px 18%;
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
          padding: 30px 20% 40px 20%;

          p {
            font-size: 12px;
          }
        }
      }
    }

  }

    // BUBBLES SECTION 
  section.bubbles-container {
    height: 600px;

    .bubbles{

      .bubble-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;

        h4.bubbles-first-line {
          font-size: 72px;
        }
        h4.bubbles-second-line {
          font-size: 112px;
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
          padding: 45px 20% 45px 20%;

          p {
            font-size: 18px;
          }
        }
      }
    }

  }

}


</style>
