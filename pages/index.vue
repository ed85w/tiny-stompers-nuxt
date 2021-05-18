<template>
  <div class="max-width-container">
    <div class="container-fluid">
      <section class="row d-flex justify-content-center landing-row-home">
        <div class="col-12 col-md-11 nav-col">
          <div class="row">
            <div class="col-12 text-center text-lg-left pt-lg-5">
              <h1>Welcome to<br class="d-lg-none"> Tiny Stompers!</h1>
            </div>
            <div class="col-12 col-md-10 offset-md-1 pt-5 pb-5 col-lg-6 offset-lg-0 p-lg-5 order-lg-2">
              <div class="symbols-container">
                <img class="symbols-img" src="~static/symbols-left.png" alt="">
                <img class="symbols-img" src="~static/symbols-right.png" alt="">
              </div>
              <div class="embed-responsive embed-responsive-1by1 text-center">
                <div class="embed-responsive-item p-3 p-lg-5">
                  <b-carousel
                    class="carousel-fade"
                    fade
                  >
                  <b-carousel-slide
                    class="carousel-img"
                    caption="Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"
                    caption-tag="p"
                    text="Linda, Tiny Stomper Nanna"
                    img-src="~static/photos/carousel03.jpg"
                    img-alt="becky bubbles with a certificate for a tiny stomper"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    class="carousel-img"
                    caption="Lots of fun for little stompers and their parents!! Becky is lovely and keeps the sessions varied and interesting each week"
                    caption-tag="p"
                    text="Alex, Tiny Stomper Mum"
                    img-src="~static/photos/carousel02.jpg"
                    img-alt="a tiny stomper having fun at tiny stompers!"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    class="carousel-img"
                    caption="A fabulous, interactive group for preschoolers and their grown ups. Highly recommend coming to try it out"
                    caption-tag="p"
                    text="Kirsty, Tiny Stomper Mum"
                    img-src="~static/photos/carousel01.jpg"
                    img-alt="a younger tiny stomper enjoying sensory play"
                  ></b-carousel-slide>
                </b-carousel>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 order-lg-1 pt-lg-5">
              <h2 class="home-h2 pt-lg-3 pt-xl-5 fade-in">Tiny Stompers<br class="d-lg-none"> Music & Movement</h2>
              <p class="fade-in">A multi-sensory world of music and movement in a fun and exciting setting for children to explore as part of a class, children’s party or at a preschool/nursery setting.</p>
              <NuxtLink to="about" exact class="btn btn-primary mb-5 fade-in">Go to Tiny Stompers Music & Movement</NuxtLink>
              <h2 class="home-h2 fade-in">Tiny Stompers<br class="d-lg-none"> Baby Massage</h2>
              <p class="fade-in">A relaxing environment for you and your baby to share a wonderful massage experience together, as a 1:1 in your home, joining a class or a private group booking.</p>
              <NuxtLink to="baby-massage" exact class="btn btn-primary mb-5 fade-in">Go to Tiny Stompers Baby Massage</NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="container-fluid bubbles-container">
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble-text text-center">
          <h4 class="pb-5 pb-lg-0 bubbles-first-line">Come and join us for...</h4>
          <h4 class="bubbles-second-line">stomping good fun!</h4>
        </div>
      </div>
    </section>

    <nav-circles/>

    <get-in-touch/>


  </div>
</template>

<script>

import navCircles from '../components/NavCircles'
import getInTouch from '../components/GetInTouch'

export default {
    components: {
    navCircles,
    getInTouch
  },
  head(){
    return {
      title: 'Tiny Stompers | Home',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'Tiny Stompers - music, movement and sensory group for babies, toddlers and children aged 12 months to 5 years. Based in Thirsk near York.' //meta content
        }
      ]
    };
  },
  mounted () {
    // gsap 
    gsap.registerPlugin(ScrollTrigger);

    // gsap timeline to animate carousel circle
    var tl = gsap.timeline({})
    tl.from(".carousel-fade", {duration:2, scale: 0, opacity: 0, ease: "elastic.out(1, 0.5)" },1);

    // scroll animations 
    var fadeIn = gsap.utils.toArray('.fade-in');
    fadeIn.forEach((fadeIn) => {
      gsap.from(fadeIn, { 
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: fadeIn,
          start: "top 70%", //when top of element crosses 80% from of page
          end: "bottom center",   //when bottom of element crosses center of page
          toggleActions: "play none none none",
        }
      });
    })
  }
}
</script>

<style lang="scss">

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */


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

  //NOTE - STYLING REUSED ON SERVICES PAGE!
.landing-row-home,
.landing-row-services {

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
        padding: 10px 18% 10px 18%;
        background-color: $tiny-stompers-dark; 
        background-color: rgba($tiny-stompers-dark, 0.7);
        text-align: center;

        p {
          font-size: 1rem;
        }
      }
    }
  }

}



}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

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


}


</style>