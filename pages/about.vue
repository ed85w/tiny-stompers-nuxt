<template>
  <div class="max-width-container">
    <!-- landing section  -->
    <div class="container-fluid pt-5 pb-md-5 landing-container-about">
      <section class="row d-flex justify-content-center justify-content-lg-end pt-5 pb-md-5 landing-row-about">
        <div class="col-12 col-lg-11 pt-md-5 pb-md-5">
          <div class="row pl-3 pr-3 pt-md-5 pb-md-5 pr-md-0">
            <div class="col-12 p-3 col-md-10 offset-md-2 p-md-5 landing-text-container">
              <h2 class="pt-3 pb-3 text-center text-md-left">About Tiny Stompers</h2>
              <p class="pr-lg-5 font-weight-bold">At Tiny Stompers, we love introducing children and their parents/carers to the stimulating world of music and movemet in a fun, energetic and exciting way within a safe environment.</p>
              <p class="pr-lg-5">Each session provides a multi-sensory environment, aiding in children’s development in many different and beneficial ways. Enjoy bubbles, ribbon stick dances, parachute, baby signing and sensory play all within 45 minutes of fun, with plenty of resources for you to explore at your own pace.</p>
              <p class="pr-lg-5">Activities are aimed at 12 months+ but teeny tiny stompers are always welcome too.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- what to expect header  -->
    <div class="container-fluid">
      <section class="row d-flex justify-content-center pt-5 what-to-expect">
        <div class="col-12 col-lg-11 pt-5 pb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-12 text-center button-container">
              <div class="symbols-container">
                <img class="symbols-img" src="~static/symbols-left.png" alt="">
                <img class="symbols-img" src="~static/symbols-right.png" alt="">
              </div>
              <h3>What to expect <br class="d-lg-none">from our exciting<br>Tiny Stomper sessions</h3>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- about cards section  -->
    <div class="container-fluid">
      <section class="row d-flex justify-content-center about-cards max-width">
        <div class="col-12 col-lg-11 pt-5 pb-0">
          <div class="row">
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 p-lg-5 text-center">
              <div class="about-card p-3 p-lg-5 fade-in">
                <img class="m-4" src="~static/horse-icon.png" alt="a horse icon">
                <p class="pb-3">Parachutes, bubbles, ribbon sticks, balancing and  treasure baskets are just some of the fun activities Tiny Stompers can explore</p>
              </div>
            </div>
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 p-lg-5 text-center">
              <div class="about-card p-3 p-lg-5 fade-in">
                <img class="m-4" src="~static/note-icon.png" alt="a music note icon">
                <p class="pb-3">A range of music, dancing, singing and playing musical instruments are all part of our music and movement sessions</p>
              </div>
            </div>
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 p-lg-5 text-center">
              <div class="about-card p-3 p-lg-5 fade-in">
                <img class="m-4" src="~static/flower-icon.png" alt="a flower icon">
                <p class="pb-3">Scents such as lavender, citrus and fruity fragrances are used to stimulate our Tiny Stompers sense of smell</p>
              </div>
            </div>
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 p-lg-5 text-center">
              <div class="about-card p-3 p-lg-5 fade-in">
                <img class="m-4" src="~static/hand-icon.png" alt="a hand icon">
                <p class="pb-3">Tiny Stompers can have fun investigating lots of tactile resources to enhance their sense of touch and hand to eye co-ordination</p>
              </div>
            </div>
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 p-lg-5 text-center">
              <div class="about-card p-3 p-lg-5 fade-in">
                <img class="m-4" src="~static/eye-icon.png" alt="an eye icon">
                <p class="pb-3">Vibrant resources create a beautiful visual display of colours for Tiny Stompers to enjoy, as they move around the setting</p>
              </div>
            </div>
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 p-lg-5 text-center">
              <div class="about-card p-3 p-lg-5 fade-in">
                <img class="m-4" src="~static/star-icon.png" alt="a star icon">
                <p class="pb-3">Becky has a BA(hons) in Early Childcare and Education and is qualified in Baby Signing and Introducing Children to Yoga</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="container-fluid bubbles-container mt-5">
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
      title: 'Tiny Stompers | About us',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'Tiny Stompers in Thirsk, near York. With a range of musical instruments, textures, music, sights, and smells, there is so much for Tiny Stompers to explore! Each session provides a multi-sensory environment aiding in children\'s development in many different and beneficial ways.' //meta content
        }
      ]
    };
  },  
  mounted () {
    // gsap 
    gsap.registerPlugin(ScrollTrigger);

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

.landing-container-about {
  background: url(~static/photos/about-landing.webp);
  background-size: cover;
  background-position: center;

  .landing-text-container {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 40px 40px 0px 0px;
  }
}

// what to expect section 
section.what-to-expect {

  .button-container {
    max-width: 380px;

    h3 {
      font-size: 18px;
    }

    .symbols-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: -30px;
    left: 0;
    width: 100%;
    padding: 0 16px;

      .symbols-img {
        width: 20%;
      }
    }
  }
}

section.about-cards {

  .about-card {
    border-radius: 60px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    img {
      width: 84px;
      height: 84px;
    }

    p {
      font-size: 19px;
      color: white;
    }
  }

  div > div.row > div {
    
    &:nth-of-type(1) .about-card {
      background: #B989DD;
    }
  
    &:nth-of-type(2) .about-card {
      background: #29ABE2;
    }
    &:nth-of-type(3) .about-card {
      background: #F49300;
    }
    &:nth-of-type(4) .about-card {
      background: #FF7BAC;
    }
    &:nth-of-type(5) .about-card {
      background: #09D8A6;
    }
    &:nth-of-type(6) .about-card {
      background: #8CC63F;
    }
  }
}


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

    .landing-container-about {

    .landing-text-container {
      border-radius: 60px 0px 0px 60px;
    }
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  section.what-to-expect {

    .button-container {
      max-width: 960px;

      h3 {
        font-size: 40px;
      }

      .symbols-container {
        top: -10px;
        left: 0;
        width: 100%;
        padding: 0 16px;

        .symbols-img {
          width: 8%;
        }
      }
    }
  }

  section.about-cards {
    .about-card {
      height: 100%;

      img {
        width: 134px;
        height: 134px;
      }

      p {
        font-size: 21px;
      }
    }
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

</style>