<template>
  <div class="max-width-container">
    <div class="container-fluid">
      <section class="row d-flex justify-content-center landing-row-services max-width">
        <div class="col-12 col-lg-11 nav-col">
          <div class="row">
            <div class="d-lg-none col-12 text-center">
              <h2>Our services</h2>
            </div>
            <div class="col-12 pt-5 pb-5 col-lg-6 p-md-5 order-lg-2">
              <div class="symbols-container">
                <img class="symbols-img" src="~static/symbols-left.png" alt="">
                <img class="symbols-img" src="~static/symbols-right.png" alt="">
              </div>
              <div class="embed-responsive embed-responsive-1by1 text-center">
                <div class="embed-responsive-item p-3 p-lg-5"> 
                  <b-carousel
                    id="services-carousel"
                    class="carousel-fade"
                    fade
                  >
                  <b-carousel-slide
                    class="carousel-img"
                    caption="Such a lovely relaxed atmosphere... We can’t wait for our next class!"
                    caption-tag="p"
                    img-src="~static/photos/tiny-stompers-carousel4.jpg"
                    img-alt="a tiny stomper playing a xylophone"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    class="carousel-img"
                    caption="Becky's love for children shines through as she creates fun and motivational music and movement sessions for children and their grown ups"
                    caption-tag="p"
                    img-src="~static/photos/tiny-stompers-carousel1.jpg"
                    img-alt="becky bubbles!"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    class="carousel-img"
                    caption="Amazing group, my son loves it! Everything very well thought out, recommend to anyone"
                    caption-tag="p"
                    img-src="~static/photos/tiny-stompers-carousel2.jpg"
                    img-alt="a tiny stomper having fun at tiny stompers!"
                  ></b-carousel-slide>
                </b-carousel>
                </div>
              </div>
            </div>
            <div class="col-12 pb-5 col-lg-6 order-lg-1 pt-md-5 ">
              <h1 class="d-none d-lg-block pb-5">Our Services</h1>
                <NuxtLink to="services#classes" exact class="btn btn-primary services-button mt-3 mb-3">Tiny Stompers classes</NuxtLink>
                <NuxtLink to="services#preschool" exact class="btn btn-primary services-button mt-3 mb-3">Preschool/nursery bookings</NuxtLink>
                <NuxtLink to="services#party" exact class="btn btn-primary services-button mt-3 mb-3">Children's parties</NuxtLink>
                <NuxtLink to="services#baby" exact class="btn btn-primary services-button mt-3 mb-3">Tiny Stompers Baby Massage</NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container-fluid">
      <section class="row service-details twiggys">
        <div class="col-12 p-0 col-md-6 col-lg-7 order-md-2 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 order-md-1 fade-in-right">
          <h3 id="classes" class="pb-3 pt-lg-5">Tiny Stompers Classes</h3>
          <p>Tiny Stompers is a mobile business, with classes available near York, Easingwold, Harrogate, Thirsk and surrounding villages.</p>
          <p>For our latest classes for you to join with your little one, please visit our <a href="https://www.facebook.com/TinyStompers/" target="_blank" rel=”noopener” class="facebook-link">facebook page</a> or click the button below.</p>
          <p>Activities within our classes are aimed at children who are 12 months+ but younger children are always welcome!</p>
          <a class="btn btn-primary mt-3 mb-3 mb-lg-5" href="https://bookwhen.com/tinystompers" target="_blank" rel=”noopener”>Book your place</a>
        </div>
      </section>

      <section class="row service-details preschool">
        <div class="col-12 p-0 col-md-6 col-lg-7 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 fade-in-left">
          <h3 id="preschool" class="pb-3 pt-lg-5">Preschool / Nursery Bookings</h3>
          <p class="larger-p">Preschools and nurseries can book Tiny Stompers sessions to take place within their childcare setting.  Each session is fun and varied and links to the EYFS.</p>
          <h4>Price:</h4>
          <p>£75 for a 45 minute session for up to 10 children at your preschool or nursery location. A 50% deposit is required to reserve your date(s) with the remaining balance paid via invoice.</p>
          <h4>Locations:</h4>
          <p>Tiny Stompers covers York, Thirsk, Easingwold and surrounding villages.  Please contact us directly if you are located outside of these areas as we always try to accommodate (extra charges may apply).</p>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Contact us</NuxtLink>
        </div>
      </section>

      <section class="row service-details party">
        <div class="col-12 p-0 col-md-6 col-lg-7 order-md-2 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 order-md-1 fade-in-right">
          <h3 id="party" class="pb-3 pt-lg-5">Children's Parties</h3>
          <p class="larger-p">Enjoy a Tiny Stompers birthday themed party for up to 10 children at your chosen location. The Birthday Stomper will receive a <strong>free gift!</strong></p>
          <h4>Price:</h4>
          <p>£75 for a 45 minute party (up to 10 children)</p>
          <p>A 50% deposit is required to reserve your date, the remaining balance can be paid on the day using a contactless card machine (venue hire is not included in the price).</p>
          <h4>Locations:</h4>
          <p>Tiny Stompers children’s parties are available across York, Thirsk, Easingwold and surrounding villages. Please contact us directly if you are located outside of these areas as we always try to accommodate (extra charges may apply).</p>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Contact us</NuxtLink>
        </div>
      </section>

      <section class="row mb-5 mb-md-0 service-details baby">
        <div class="col-12 p-0 col-md-6 col-lg-7 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 fade-in-left">
          <h3 id="baby" class="pb-3 pt-lg-5">Tiny Stompers Baby Massage</h3>
          <p class="larger-p">Baby Massage courses are offered in the comfort of your own home or within a class environment in beautiful hired venues. </p>
          <p>They are very relaxing with basic to advanced techniques taught in every class to aid in bonding and child development. </p>
          <p>Techniques are also shown to help decrease pain caused by colic, constipation and teething. </p>
          <p>This wonderful mobile baby massage service covers York, Thirsk, Easingwold and surrounding villages.</p>
          <p><strong>"We loved it so much we did the course twice!"</strong></p>
          <NuxtLink to="baby-massage" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Find out more</NuxtLink>
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
  head(){
    return {
      title: 'Tiny Stompers | Services',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'Tiny Stompers offer children\'s ' //meta content
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

    var fadeInRight = gsap.utils.toArray('.fade-in-right');
    fadeInRight.forEach((fadeInRight) => {
      gsap.from(fadeInRight, { 
        opacity: 0,
        x: -30,
        duration: 1,
        scrollTrigger: {
          trigger: fadeInRight,
          start: "top 70%", //when top of element crosses 80% from of page
          end: "bottom center",   //when bottom of element crosses center of page
          toggleActions: "play none none none",
        }
      });
    })

    var fadeInLeft = gsap.utils.toArray('.fade-in-left');
    fadeInLeft.forEach((fadeInLeft) => {
      gsap.from(fadeInLeft, { 
        opacity: 0,
        x: 30,
        duration: 1,
        scrollTrigger: {
          trigger: fadeInLeft,
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

  /* carousel */
  #services-carousel {
    border-radius: 50%;
    overflow: hidden;

    .carousel-inner,
    .carousel-item {
      height: 100%;
      border-radius: 50%;

      .carousel-img .img-fluid{
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

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
  overflow: hidden;

  .services-img-container {
    height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.twiggys {
    background: $twiggys-light;

    .btn-primary {
      background: #312783;
    }

    .services-img-container {
      background-image: url('~static/photos/tiny-stompers-carousel2.jpg');
      background-position: 50% 10%;
    }
  }
  &.preschool {
    background: $preschool-light;

    .btn-primary {
      background: #CF004D;
    }

    .services-img-container {
      background-image: url('~static/photos/preschool-img.webp');
    }
  }
  &.party {
    background: $party-light;

    .btn-primary {
      background: #2D4A04;
    }

    .services-img-container {
      background-image: url('~static/photos/child-with-giant-lolly.webp');

    }
  }
  &.baby {
    background: rgba(185, 137, 221, 0.5);

    .services-img-container {
      background-image: url('~static/photos/baby-on-massage-mat.webp');
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

  p.larger-p {
    font-size: 20px;
  }

  .btn-primary {
    position: relative;
    left: 50%;
    transform: translateX(-50%);    
  }
}

.facebook-link {
  color: #302d7e;
  font-weight: bold;  
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

    p.larger-p {
      font-size: 24px;
    }
  }


}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .landing-row-services {
    .services-button {
      width: 90%;
    }
  }

  section.service-details.baby .services-img-container {
    background-position: 50% 35%;
  }


}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>