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
              <h2 class="home-h2 pb-3 pt-lg-3 pt-xl-5 fade-in">Tiny Stompers<br class="d-lg-none"> Music & Movement</h2>
              <p class="pb-3 fade-in">A multi-sensory world of music and movement in a fun and exciting setting for children to explore as part of a class, children’s party or at a preschool/nursery setting.</p>
              <a class="btn btn-primary mb-5 fade-in" href="https://bookwhen.com/tinystompers">Book Tiny Stompers</a>
              <h2 class="home-h2 pb-3 pt-3 fade-in">Tiny Stompers<br class="d-lg-none"> Baby Massage</h2>
              <p class="pb-3 fade-in">A relaxing environment for you and your baby to share a wonderful massage experience together, as a 1:1 in your home, joining a class or a private group booking.</p>
              <NuxtLink to="baby-massage" exact class="btn btn-primary mb-5 fade-in">Find out more</NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="container-fluid bubbles-container mt-3">
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

    // scroll animation
    ScrollTrigger.matchMedia({

      // mobile only - each animated individually
      "(max-width: 990px)": function() {
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
      },
    });
  }
}
</script>

<style lang="scss">

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>