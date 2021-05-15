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
            <div class="col-12 pb-5 col-md-6 order-md-1 pt-md-5 ">
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
      <section class="row service-details twiggys">
        <div class="col-12 p-0 col-md-6 col-lg-7 order-md-2 services-img-container">
          <!-- <img class="services-img" src="~static/photos/carousel1.jpg" alt=""> -->
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 order-md-1">
          <h3 id="twiggys" class="pb-3 pt-lg-5">Tiny Stompers at Twiggy’s</h3>
          <h4>Session times:</h4>
          <p>Mondays and Wednesdays (term time only)<br>10:15 - 11:00 or 11:15 - 12:00</p>
          <p>There are a limited number of places available, so we advise booking to avoid disappointment (booking T&C apply).</p>
          <h4>Price:</h4>
          <p>£6.50 per child. Your session includes play time in Twiggy’s soft play centre after the Tiny Stompers class. </p>
          <h4>Address:</h4>
          <p>Twiggy’s Play, Unit 2, Concept Business Park, Allendale Road, Thirsk, YO7 3NY</p>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Book your place</NuxtLink>
        </div>
      </section>

      <section class="row service-details preschool">
        <div class="col-12 p-0 col-md-6 col-lg-7 services-img-container">
          <!-- <img class="services-img" src="~static/photos/preschool-img.png" alt="a child playing with a wooden toy"> -->
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5">
          <h3 id="preschool" class="pb-3 pt-lg-5">Preschool / Nursery bookings</h3>
          <p>Preschools and nurseries can book Tiny Stompers sessions to take place within their childcare setting.  Each session is fun and varied and links to the EYFS.</p>
          <h4>Price:</h4>
          <p>£75 for a 45 minute session for up to 10 children at your preschool or nursery location. A 50% deposit is required to reserve your date(s) with the remaining balance paid via invoice.</p>
          <h4>Locations:</h4>
          <p>Tiny Stompers covers York, Thirsk, Easingwold and surrounding villages.  Please contact us directly if you are located outside of these areas as we always try to accommodate (extra charges may apply).</p>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Contact us</NuxtLink>
        </div>
      </section>

      <section class="row service-details party">
        <div class="col-12 p-0 col-md-6 col-lg-7 order-md-2 services-img-container">
          <!-- <img class="services-img" src="~static/photos/child-with-giant-lolly.png" alt="a child with a giant lolly"> -->
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 order-md-1">
          <h3 id="party" class="pb-3 pt-lg-5">Children's Parties</h3>
          <p>Enjoy a Tiny Stompers birthday themed party for up to 10 children at your chosen location. The Birthday Stomper will receive a <strong>free gift!</strong></p>
          <h4>Price:</h4>
          <p>£75 for a 45 minute party (up to 10 children)</p>
          <h4>Locations:</h4>
          <p>Tiny Stompers children’s parties are available across York, Thirsk, Easingwold and surrounding villages. Please contact us directly if you are located outside of these areas as we always try to accommodate (extra charges may apply).</p>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Contact us</NuxtLink>
        </div>
      </section>

      <section class="row service-details baby">
        <div class="col-12 p-0 col-md-6 col-lg-7 services-img-container">
          <!-- <img class="services-img" src="~static/photos/baby-on-massage-mat.png" alt="a baby on a massage mat"> -->
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5">
          <h3 id="baby" class="pb-3 pt-lg-5">Tiny Stompers Baby Massage</h3>
          <p>Baby Massage courses are offered in the comfort of your own home or within a class environment in beautiful hired venues. </p>
          <p>They are very relaxing with basic to advanced techniques taught in every class to aid in bonding and child development. </p>
          <p>Techniques are also shown to help decrease pain caused by colic, constipation and teething. </p>
          <p>This wonderful mobile baby massage service covers York, Thirsk, Easingwold and surrounding villages.</p>
          <blockquote>"We loved it so much we did the course twice!"</blockquote>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Contact us</NuxtLink>
        </div>
      </section>
    </div>

    <get-in-touch/>

  </div>

</template>

<script>

import getInTouch from '../components/GetInTouch'

export default {
    components: {
      getInTouch
  },
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
      height: 500px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

  &.twiggys {
    background: $twiggys-light;

    .services-img-container {
      background-image: url('~static/photos/carousel1.jpg');
    }
  }
  &.preschool {
    background: $preschool-light;

    .services-img-container {
      background-image: url('~static/photos/preschool-img.png');
    }
  }
  &.party {
    background: $party-light;

    .services-img-container {
      background-image: url('~static/photos/child-with-giant-lolly.png');

    }
  }
  &.baby {
    background: rgba(185, 137, 221, 0.5);

    .services-img-container {
      background-image: url('~static/photos/baby-on-massage-mat.png');
    }
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }

  .btn-primary {
    position: relative;
    left: 50%;
    transform: translateX(-50%);    
  }
}


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {



}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  section.service-details {

    .services-img-container {
      height: auto;
    }

    .btn-primary {
      left: 0;
      transform: translateX(0);    
    }
  }


}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {


}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>