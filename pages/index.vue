<template>
  <div>
    <!-- page content -->
    <div class="container pl-sm-0 pr-sm-0">
      <div class="row">
        <div class="col-xs-12 col-md-7 pr-xl-5 home-div">
          <h1>Hello and welcome to Tiny Stompers!</h1>
          <p class="font-weight-bold">Here at Tiny Stompers, we love introducing children and their parents/carers to the stimulating world of music and movement in a fun, energetic and exciting way within a safe environment.</p>
          <p>With a range of musical instruments, textures, music, sights, and smells, there is so much for Tiny Stompers to explore! Each session provides a multi-sensory environment aiding in children's development in many different and beneficial ways.</p>
          <button type="button" class="btn btn-primary">Read More..</button>
        </div>

        <!-- image carousel  -->
        <div class="col-xs-12 col-md-5 pl-0 pr-0  pt-5 pb-5 pt-md-0 pb-md-0 carousel-container animated bounceInUp">
          <b-carousel
            id="carousel-fade"
            fade
          >
            <b-carousel-slide
              caption="Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"
              caption-tag="p"
              text="Linda, Tiny Stomper Nanna"
              img-src="~static/photos/carousel03.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Lots of fun for little stompers and their parents!! Becky is lovely and keeps the sessions varied and interesting each week"
              caption-tag="p"
              text="Alex, Tiny Stomper Mum"
              img-src="~static/photos/carousel02.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="A fabulous, interactive group for preschoolers and their grown ups. Highly recommend coming to try it out"
              caption-tag="p"
              text="Kirsty, Tiny Stomper Mum"
              img-src="~static/photos/carousel01.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <svg id="wave1" data-name="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
      <path fill="#d2cfe7" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
      <path fill="#2d2e83" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
    </svg>
    <div class="container-fluid circles-container">
      <div class="row circles-row pt-3">
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg');">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
    <svg id="wave2" data-name="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
      <path fill="red" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
      <path fill="green" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
    </svg>
    <div class="container-fluid">

    </div>
  </div>
</template>

<script>
export default {
  head(){
    return {
      title: 'Home Page',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'this is the description for the home page' //meta content
        }
      ]
    };
  },
}
</script>

<style lang="scss">

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */

/* HOME PAGE */

.home-div {
  text-align: justify;
}

.btn-primary{
  background-color: #302d7e;
  color: white;
}

/* carousel */

#carousel-fade {
  height: 60vw;
  border-radius: 0;
  overflow: hidden;
  border-image: url(~static/bgcolours.jpg) 5; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: none;
  border-right: none;
}

.carousel-inner,
.carousel-item {
  height: 60vw;
}

.carousel-caption {
  right: 0;
  left: 0;
  bottom: 10px; //same as #carousel-fade border
  padding: 0 10% 10px 10%;
  background-color: #302d7e; 
  background-color: #38328dc4;
  text-align: left;

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

/* home circles */

.circles-container {
  background-color: #d2cfe7;
  padding-bottom: 100px;
}

.home-circle {
  height: 70vw;
}

.home-circle-inner {
  border-radius: 50%;
  height: inherit; /*ensures carousel bg image is visible/correct height */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.home-circle-caption {
  position: absolute;
  bottom: 0;
  padding: 0 10% 10px 10%;
  background-color: #302d7e; /*fallback for older browsers */
  background-color: #38328dc4;
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

  .home-circle {
    height: 38vw;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  #carousel-fade,
  .carousel-inner,
  .carousel-item {
    height: 390px;
  }

  .circles-row {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }

  .home-circle {
    height: 18vw;
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