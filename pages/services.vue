<template>
  <div class="max-width-container">
    <div class="container-fluid">
      <section class="row d-flex justify-content-center landing-row-services">
        <div class="col-12 col-lg-11 nav-col">
          <div class="row">
            <div class="col-12 text-center text-md-left pt-md-5">
              <h1>Our services</h1>
            </div>
            <div class="col-12 pt-5 pb-5 col-md-6 p-md-5 order-md-2">
              <div class="symbols-container">
                <img class="symbols-img" src="~static/symbols-left.png" alt="">
                <img class="symbols-img" src="~static/symbols-right.png" alt="">
              </div>
              <div class="embed-responsive embed-responsive-1by1 text-center">
                <div class="embed-responsive-item p-3 p-md-5">
                  <b-carousel
                    id="carousel-fade"
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
            <div class="col-12 col-md-6 order-md-1 pt-md-5">
                <NuxtLink to="services#twiggys" exact class="btn btn-primary services-button mt-2 mb-2" href="">Tiny Stompers at Twiggys</NuxtLink>
                <NuxtLink to="services#parties" exact class="btn btn-primary services-button mt-2 mb-2" href="">Children's parties</NuxtLink>
                <NuxtLink to="services#preschool" exact class="btn btn-primary services-button mt-2 mb-2" href="">Preschool/nursery bookings</NuxtLink>
                <NuxtLink to="services#baby" exact class="btn btn-primary services-button mt-2 mb-2" href="">Tiny Stompers Baby Massage</NuxtLink>

            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container-fluid">
      <section class="row service-details">
        <div class="col-12 p-0 col-md-5 services-img-container">
          <img class="services-img" src="~static/photos/carousel1.jpg" alt="">
        </div>
        <div class="col-12 col-md-7">
          <h3>Tiny Stompers at Twiggy’s</h3>
          <h4>Session times:</h4>
          <p>Mondays and Wednesdays (term time only)<br>10:15 - 11:00 or 11:15 - 12:00</p>
          <p>There are a limited number of places available, so we advise booking to avoid disappointment (booking T&C apply).</p>
          <h4>Price:</h4>
          <p>£6.50 per child. Your session includes play time in Twiggy’s soft play centre after the Tiny Stompers class. </p>
          <h4>Address:</h4>
          <p>Twiggy’s Play, Unit 2, Concept Business Park, Allendale Road, Thirsk, YO7 3NY</p>
        </div>
      </section>
    </div>

    <!-- <get-in-touch/> -->

  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.landing-row-services {

  .services-button {
    width: 100%;
  
    &:nth-of-type(1){
        background: #29ABE2;
    }
    &:nth-of-type(2){
        background: #FF7BAC;
    }
    &:nth-of-type(3){
        background: #8CC63F;
    }
    &:nth-of-type(4){
        background: #662D91;
    }
  }
}

section.service-details {
  .services-img-container {
    
    overflow: hidden;

    .services-img {
      max-width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: center;
    }
  }
}


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