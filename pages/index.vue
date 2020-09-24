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

        <!-- image carousel -->
        <!-- <div class="col-xs-12 col-md-5 pl-0 pr-0  pt-5 pb-5 pt-md-0 pb-md-0 carousel-container animated bounceInUp">
          <div id="carouselSlidesOnly" class="carousel slide " data-ride="carousel">
            <div class="carousel-inner " role="listbox">
              <div class="carousel-item active" style="background-image: url(/photos/carousel3.jpg); background-position-y: 40%">
                <div class="carousel-caption">
                  <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
                  <p>Linda, Tiny Stomper Nanna</p>
                </div>
              </div>
              <div class="carousel-item" style="background-image: url(/photos/carousel2.jpg)">
                <div class="carousel-caption">
                  <p>"Lots of fun for little stompers and their parents!! Becky is lovely and keeps the sessions varied and interesting each week"</p>
                  <p>Alex, Tiny Stomper Mum</p>
                </div>
              </div>
              <div class="carousel-item" style="background-image: url(/photos/carousel1.jpg);">
                <div class="carousel-caption">
                  <p>"A fabulous, interactive group for preschoolers and their grown ups. Highly recommend coming to try it out"</p>
                  <p>Kirsty, Tiny Stomper Mum</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- vue carousel  -->
        <div class="col-xs-12 col-md-5 pl-0 pr-0  pt-5 pb-5 pt-md-0 pb-md-0 carousel-container animated bounceInUp">
          <b-carousel
            id="carousel-fade"
            fade
          >
            <b-carousel-slide
              caption="Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"
              caption-tag="p"
              text="Linda, Tiny Stomper Nanna"
              img-src="/photos/carousel03.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="/photos/carousel02.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="/photos/carousel01.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <svg id="wave1" data-name="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
      <defs>
        <style>.cls-1{fill:#d2cfe7;}.cls-2{fill:#2d2e83;}</style>
      </defs>
      <path class="cls-1" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
      <path class="cls-2" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
    </svg>
    <div class="container-fluid circles-container" style="background-color: rgba(48, 45, 126, 0.2); ">
      <div class="row circles-row pt-3">
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(/photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(/photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(/photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 pl-5 pr-5 pt-3 pb-3 pl-lg-3 pr-lg-3">
          <div class="home-circle">
            <div class="home-circle-inner" style="background-image: url(/photos/carousel3.jpg);">
              <div class="home-circle-caption">
                <p>"Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
    <svg id="wave2" data-name="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
      <defs>
        <style>.cls-1{fill:#d2cfe7;}.cls-2{fill:#2d2e83;}</style>
      </defs>
      <path class="cls-1" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
      <path class="cls-2" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
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

<style>

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
/* carousel
#carouselSlidesOnly { 
  height: 200px;
  border-radius: 0;
  overflow: hidden;
  border-image: url(/bgcolours.jpg) 5; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: none;
  border-right: none;
}

.carousel-inner,
.carousel-item {
  height: inherit; /*ensures carousel bg image is visible/correct height */
  /* background-size: cover;
  background-position: center;
} */

/* .carousel-caption {
  height: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 10% 10px 10%;
  background-color: #302d7e; 
  background-color: #38328dc4;
}

.carousel-caption p:first-child {
  text-align: justify;
  font-style: italic;
  margin-top: 2px;
  margin-bottom: 2px;
}

.carousel-caption p:last-child {
  font-size: 0.5rem;
  margin-top: 0px;
  text-align: left;
}  */
/* end of carousel */

#carousel-fade {
  height: 250px;
  border-radius: 0;
  overflow: hidden;
  border-image: url(/bgcolours.jpg) 5; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: none;
  border-right: none;
}

.carousel-caption {
  right: 0;
  left: 0;
  background-color: #302d7e; 
  background-color: #38328dc4;

}

/* .img-fluid.w-100.d-block {
  max-width: 170%;
} */

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
 
  /* HOME PAGE */
  
  #carousel-fade {
    /* height: 220px;
    border: none;
    border-radius: 50%; */
  }
  /*

  .carousel-caption {
    height: 35%;
    padding: 0 17% 15px 17%;
  }

  .carousel-caption p:first-child {
    line-height: 1;
    font-size: 0.8rem;
  } */

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  /* HOME PAGE */

  #carousel-fade,
  .carousel-inner {
    border-radius: 50%;
    border: none;
    height: 295px;
  }
  .w-100 {
    width: 128% !important;
  }
  .img-fluid {
    max-width: none;
  }
/* 
  .carousel-caption {
    height: 35%;
    padding: 0 17% 15px 17%;
  }

  .carousel-caption p:first-child {
    line-height: 1;
    font-size: 0.8rem;
  } */

  .home-circle {
    height: 38vw;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  /* HOME PAGE */
  /* #carouselSlidesOnly {
    height: 395px;
  }

  .carousel-caption p:first-child {
    margin-top: 10px;
    font-size: 1.1rem;
  } */


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

  /* HOME PAGE */
  /* #carouselSlidesOnly {
    height: 471px;
  }

  .carousel-caption p:first-child {
    font-size: 1.25rem;
    margin-top: 8px;
  }

  .carousel-caption p:last-child {
    font-size: 0.8rem;
  } */

}


</style>