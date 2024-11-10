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
                <NuxtLink to="services#preschool" exact class="btn btn-primary services-button mt-3 mb-3">Our locations</NuxtLink>
                <NuxtLink to="services#party" exact class="btn btn-primary services-button mt-3 mb-3">Why choose us</NuxtLink>
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
          <p>Tiny Stompers began in 2017 to introduce children and their carers to the engaging and magical world of music and movement.</p>
          <p>Each session provides a multi-sensory environment which aids in child development through a variety of fun and beneficial activities. Explore our diverse range of equipment, songs, lights and sounds at your child’s pace nurturing creativity, coordination and social skills.</p>
          <p>Watch children delight in each moment growing in confidence and forming connections through the joy of music, play and discovery. At Tiny Stompers every tiny step is a big stomp towards learning!</p>
          <NuxtLink to="about" exact class="btn btn-primary mt-3 mb-3 mb-lg-5">Find out more</NuxtLink>
          <p><strong>"Becky brought the sunshine with her! I'd have absolutely no hesitation in giving my recommendations"</strong></p>
        </div>
      </section>

      <section class="row service-details preschool">
        <div class="col-12 p-0 col-md-6 col-lg-7 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 fade-in-left">
          <h3 id="preschool" class="pb-3 pt-lg-5">Our locations</h3>
          <p>Tiny Stompers covers Thirsk, Easingwold, the North of York and surrounding villages. </p>  
          <p>Please contact us directly if you are located outside of these areas as we always try to accommodate (extra charges may apply).</p>
          <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3 mb-lg-5" href="">Contact us</NuxtLink>
        </div>
      </section>

      <section class="row service-details party">
        <div class="col-12 p-0 col-md-6 col-lg-7 order-md-2 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 order-md-1 fade-in-right">
          <h3 id="party" class="pb-3 pt-lg-5">Why choose us</h3>
          <p>"Tiny stompers involves fun and engaging sessions that focus on appealing to the senses and needs of children, including those with special educational needs and disabilities. Becky is so knowledgeable in her field and has a sound understanding of the development of children. She interacts with all of the children and is always happy with and infectious and bubbly personality. </p>
          <p>Each session is carefully planned, with a different theme each week ranging from food to animals. The music, lights, toys and equipment provided means that there is something for everyone. We have had Tiny Stompers sessions at our nursery since April 2023 and all of the children show thorough enjoyment of the sessions and look forward to Becky's visits. </p>
          <p><strong>Thank you so much - we love to see the smiles you put on the children's faces. I can't recommend Tiny Stompers enough."</strong></p>
          <NuxtLink to="about" exact class="btn btn-primary mt-3 mb-3 mb-lg-5">Find out more</NuxtLink>
        </div>
      </section>

      <section class="row mb-5 mb-md-0 service-details baby">
        <div class="col-12 p-0 col-md-6 col-lg-7 services-img-container">
        </div>
        <div class="col-12 pt-5 pb-5 col-md-6 col-lg-5 p-md-5 fade-in-left">
          <h3 id="baby" class="pb-3 pt-lg-5">Tiny Stompers Baby Massage</h3>
          <p class="larger-p">Enjoy your relaxing four week Baby Massage Course in the comfort of your own home guided by your qualified baby massage instructor.</p>
          <p>All courses include basic to advance techniques to help ease discomfort and soothe your baby. It’s a beautiful way to bond with your baby and help aid in their development.</p> 
          <p>Everything is brought to you, just you and your baby are needed.</p>
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