<template>
    <!-- page content -->
    <div class="container pl-sm-0 pr-sm-0">
      <div class="row">
        <div class="col-xs-12 col-md-7 pr-xl-5 home-div">
          <h1>Come and join in with some stomping good fun!</h1>
          <p class="welcome-p">Hello and welcome to Tiny Stompers!</p>
          <p>Here at Tiny Stompers, we love introducing children and their parents/carers to the stimulating world of music and movement in a fun, energetic and exciting way within a safe environment.</p>
          <p>With a range of musical instruments, textures, music, sights, and smells, there is so much for Tiny Stompers to explore! Each session provides a multi-sensory environment aiding in children's development in many different and beneficial ways.</p>

          <!-- only visible on >=medium screens -->
          <p class="d-none d-md-block">Children are encouraged to move freely and take the lead in activities allowing them to decide what inspires them. Session activity examples include bubbles, ribbons sticks and pompoms, music, dancing, parachute, balancing and much more. We also celebrate themes such as Teddy Bear's Picnic, World Book Day, big box play, World Wildlife day, National Science Week, recycling and other exciting themes.</p>
          <p class="d-none d-md-block">The sessions are aimed at children aged 12 months to 5 years old, although older and younger siblings are always welcome.</p>
          <p class="d-none d-md-block">The lead worker, Becky, has a BA(hons) in Early Childcare and Education and is qualified in baby signing, baby massage and introducing young children to yoga. Time is spent looking at each child’s individual needs and interests and each session is is fun and varied and aids in your child's development, linking to the EYFS.</p>
          <p class="d-none d-md-block">Please don’t hesitate to <a href="contact.html">contact us</a> for more information, we’d love to hear from you.</p>
          <!-- end of only visible on >=medium screens -->
        </div>

        <!-- image carousel -->
        <div class="col-xs-12 col-md-5 pl-0 pr-0 carousel-container animated bounceInUp">
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
        </div>
        <!-- only visible on screens < medium -->
        <div class="d-xs-block d-md-none col-12">
          <p class="pt-2">Children are encouraged to move freely and take the lead in activities allowing them to decide what inspires them. Session activity examples include bubbles, ribbons sticks and pompoms, music, dancing, parachute, balancing and much more. We also celebrate themes such as Teddy Bear's Picnic, World Book Day, big box play, World Wildlife day, National Science Week, recycling and other exciting themes.</p>
          <p>The sessions are aimed at children aged 12 months to 5 years, although older and younger siblings are always welcome.</p>
          <p>The lead worker, Becky, has a BA(hons) in Early Childcare and Education and is qualified in baby signing, baby massage and introducing young children to yoga. Time is spent looking at each child’s individual needs and interests and each session is fun and varied and aids in your child's development, linking to the EYFS</p>
          <p>Please don’t hesitate to <a href="contact.html">contact us</a> for more information, we’d love to hear from you.</p>
        </div>
        <!-- end of only visible on screens < medium -->
      </div>
    </div>
    <!-- text to show on mobile only -->
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
  }

}
</script>

<style>

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */

/* HOME PAGE */

.home-div {
  text-align: justify;
}

.welcome-p {
  font-weight: bold;
}

/* carousel */
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
  background-size: cover;
  background-position: center;
}

.carousel-caption {
  height: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 10% 10px 10%;
  background-color: #302d7e; /*fallback for older browsers */
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
}
/* end of carousel */

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
  /* HOME PAGE */
  
  #carouselSlidesOnly {
    height: 220px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }

  .carousel-caption {
    height: 35%;
    padding: 0 17% 15px 17%;
  }

  .carousel-caption p:first-child {
    line-height: 1;
    font-size: 0.8rem;
  }

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  /* HOME PAGE */

  #carouselSlidesOnly {
    border-radius: 50%;
    border: none;
    height: 295px;
  }

  .carousel-caption {
    height: 35%;
    padding: 0 17% 15px 17%;
  }

  .carousel-caption p:first-child {
    line-height: 1;
    font-size: 0.8rem;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  /* HOME PAGE */
  #carouselSlidesOnly {
    height: 395px;
  }

  .carousel-caption p:first-child {
    margin-top: 10px;
    font-size: 1.1rem;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  /* HOME PAGE */
  #carouselSlidesOnly {
    height: 471px;
  }

  .carousel-caption p:first-child {
    font-size: 1.25rem;
    margin-top: 8px;
  }

  .carousel-caption p:last-child {
    font-size: 0.8rem;
  }

}


</style>