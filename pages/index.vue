<template>
  <div>
    <!-- page content -->
    <div class="container pl-sm-0 pr-sm-0">
      <div class="row home-row">
        <div class="col-xs-12 col-md-7 pr-xl-5 home-div">
          <h1 class="pb-3">Hello and welcome to Tiny Stompers!</h1>
          <p class="pb-1 pb-md-4 font-weight-bold">Here at Tiny Stompers, we love introducing children and their parents/carers to the stimulating world of music and movement in a fun, energetic and exciting way within a safe environment.</p>
          <p class="pb-3 d-none d-md-block">With a range of musical instruments, textures, music, sights, and smells, there is so much for Tiny Stompers to explore! Each session provides a multi-sensory environment aiding in children's development in many different and beneficial ways.</p>
          <button type="button" class="btn btn-primary d-none d-md-block">Read More..</button>
        </div>

        <!-- image carousel  -->
        <div class="col-xs-12 col-md-5 pt-0 pr-0 pb-3 pl-0 carousel-container animated bounceInUp">
          <b-carousel
            id="carousel-fade"
            fade
          >
            <b-carousel-slide
              caption="Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"
              caption-tag="p"
              text="Linda, Tiny Stomper Nanna"
              img-src="~static/photos/carousel03.jpg"
              img-alt="becky bubbles with a certificate for a tiny stomper"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Lots of fun for little stompers and their parents!! Becky is lovely and keeps the sessions varied and interesting each week"
              caption-tag="p"
              text="Alex, Tiny Stomper Mum"
              img-src="~static/photos/carousel02.jpg"
              img-alt="a tiny stomper having fun at tiny stompers!"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="A fabulous, interactive group for preschoolers and their grown ups. Highly recommend coming to try it out"
              caption-tag="p"
              text="Kirsty, Tiny Stomper Mum"
              img-src="~static/photos/carousel01.jpg"
              img-alt="a younger tiny stomper enjoying sensory play"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <div class="col-xs-12 col-md-7 pr-xl-5 home-div">
          <p class="pb-2 d-md-none">With a range of musical instruments, textures, music, sights, and smells, there is so much for Tiny Stompers to explore! Each session provides a multi-sensory environment aiding in children's development in many different and beneficial ways.</p>
          <button type="button" class="btn btn-primary d-md-none">Read More..</button>
        </div>
      </div>
    </div>
    <svg id="wave1" data-name="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
      <path fill="#d2cfe7" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
      <path fill="#2d2e83" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
    </svg>
    <div class="wrapper">
      <div class="container circles-container pl-sm-0 pr-sm-0">
        <div class="row">
          <div class="col-12">
            <h1 class="pb-3">Come and join in with some stomping good fun!</h1>
            <h5 class="font-weight-bold">Tiny Stompers is proud to be a Ryedale Mumbler Awards Finalist and York Mumbler</h5>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <navCircles />
      </div>
      <div class="container pl-sm-0 pr-sm-0">
        <div class="row">
          <div class="col-12">
            <h1 class="pb-3">Contact us we'd love to hear from you!</h1>
            <h5 class="pb-3">Tiny Stompers is proud to be a Ryedale Mumbler Awards Finalist and York Mumbler</h5>
            <NuxtLink to="services"><button type="button" class="btn btn-primary">Read More..</button></NuxtLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import navCircles from '../components/NavCircles'

export default {
    components: {
    navCircles
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
}
</script>

<style lang="scss">

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */

.home-row {
  padding-bottom: 20px;
}

.btn-primary{
  background-color: #302d7e;
  color: white;
}

/* carousel */

#carousel-fade {
  height: 65vw;
  border-radius: 0;
  overflow: hidden;
  border-image: url("~static/bgcolours.jpg") 5; 
  border-top: 10px solid transparent; //also split out below as fallback as not rendering properly once generated
  border-top: 10px;
  border-top-style: solid;
  border-top-color: transparent;
  border-bottom: 10px solid transparent;
  border-left: none;
  border-right: none;
}

.carousel-inner,
.carousel-item {
  height: 65vw;
}

.carousel-caption {
  right: 0;
  left: 0;
  bottom: 10px; //same as #carousel-fade border
  padding: 0 10% 10px 10%;
  background-color: #302d7e; 
  background-color: #38328dc4;
  text-align: left;

  p {
    font-size: 0.8rem;
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

.wrapper {
  background-color: #d2cfe7;
  padding-bottom: 40px;
}

.circles-container {
  background-color: #d2cfe7;
}

#wave2 {
  position: relative;
  top: -50px;
}


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  #carousel-fade,
  .carousel-inner,
  .carousel-item {
    border-radius: 50%;
    border: none;
    height: 295px;

    .carousel-caption{
      bottom: 0;
      padding-left: 20%;
      padding-right: 20%;

      p:last-child {
        text-align: center;
      }

    }

  }
  .w-100 {
    width: 128% !important;
  }
  .img-fluid {
    max-width: none;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  #carousel-fade,
  .carousel-inner,
  .carousel-item {
    height: 390px;
  }

  .carousel-caption p {
    font-size: 1rem;
  }

  .circles-row {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapper {
    padding-bottom: 150px;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  #carousel-fade,
  .carousel-inner,
  .carousel-item {
    height: 465px;
  }

}


</style>