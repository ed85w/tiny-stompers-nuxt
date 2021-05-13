<template>
  <div class="max-width-container">
    <!-- landing section  -->
    <div class="container-fluid pt-5 pb-md-5 landing-container-about">
      <section class="row d-flex justify-content-center justify-content-lg-end pt-5 pb-md-5 landing-row-about">
        <div class="col-12 col-lg-11 pt-md-5 pb-md-5">
          <div class="row pl-3 pr-3 pt-md-5 pb-md-5 pr-md-0">
            <div class="col-12 p-3 col-md-10 offset-md-2 p-md-5 landing-text-container">
              <h1>About Tiny Stompers</h1>
              <p>At Tiny Stompers, we love introducing children and their parents/carers to the stimulating world of music and movemet in a fun, energetic and exciting way within a safe environment.</p>
              <p>Each session provides a multi-sensory environment, aiding in children’s development in many different and beneficial ways. Enjoy bubbles, ribbon stick dances, parachute, baby signing and sensory play all within 45 minutes of fun, with plenty of resources for you to explore at your own pace.</p>
              <p>Activities are aimed at 12 months+ but teeny tiny stompers are always welcome too.</p>
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
      <section class="row d-flex justify-content-center pt-5 about-cards">
        <div class="col-12 col-lg-11 pt-5 pb-5">
          <div class="row">
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 pl-lg-5 pr-lg-5 text-center">
              <div class="about-card p-3">
                <img class="m-4" src="~static/tiny-stompers-logo.png" alt="">
                <p class="pb-3">Parachutes, bubbles, ribbon sticks, balancing and  treasure baskets are just some of the fun activities Tiny Stompers can explore</p>
              </div>
            </div>
            <!-- card start -->
            <div class="col-12 p-3 col-md-6 col-lg-4 pl-lg-5 pr-lg-5 text-center">
              <div class="about-card p-3">
                <img class="m-4" src="~static/tiny-stompers-logo.png" alt="">
                <p class="pb-3">Parachutes, bubbles, ribbon sticks, balancing and  treasure baskets are just some of the fun activities Tiny Stompers can explore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
      title: 'About Page',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'this is the description for the about page' //meta content
        }
      ]
    };
  }

}
</script>

<style lang="scss">

.landing-container-about {
  background: url(~static/photos/about-landing.png);
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

    &:nth-last-of-type(1) {
      background: #B989DD;
    }

    img {
      width: 84px;
      height: 84px;
    }

    p {
      font-size: 19px;
      color: white;
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


}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

</style>