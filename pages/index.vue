<template>
  <div class="max-width-container">
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
        <div class="col-xs-12 col-md-5 pt-0 pr-0 pb-3 pl-0 carousel-container animate__animated animate__zoomIn animate__delay-1s">
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
          <div class="bubble-text">Come and join in</div>
        </div>
      </section>
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
      background:#f1f1f1;
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
      width:90px;
      height:90px;
      left:25%;
      animation-duration:10s;
      animation-delay:4s;
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
      transform: translate(-50%, 50%);
    }
  }
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