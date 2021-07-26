<template>
  <div class="container-fluid">
    <section class="row d-flex justify-content-center">
      <div class="col-12 col-lg-11 pt-5 pb-5 pb-md-0">
        <div class="row">
          <div class="col-12 text-center pt-5 pb-5">
            <h2>Find out more about...</h2>
          </div>
        </div>
        <div class="row circles-row pt-3 pb-3 max-width">
          <!-- left on mob  -->
          <div class="col-9 p-3 col-md-6 p-md-5 col-lg-3 p-lg-3 p-xl-4 ">
            <div class="embed-responsive embed-responsive-1by1 text-center home-circle twiggys-circle">
              <NuxtLink to="services#twiggys" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/tiny-stompers-carousel2.jpg" alt="a toddler having fun at tiny stompers">
                  <div class="home-circle-caption">
                    <h5>Tiny Stompers<br>at Twiggy's</h5>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- right on mob  -->
          <div class="col-9 p-3 offset-3 col-md-6 offset-md-0 p-md-5 col-lg-3 p-lg-3 p-xl-4">
            <div class="embed-responsive embed-responsive-1by1 text-center home-circle preschool-circle">
              <NuxtLink to="services#preschool" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/preschool-img.png" alt="a xylophone">
                  <div class="home-circle-caption">
                    <h5>Preschool/Nursery<br>Bookings</h5>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- left on mob  -->
          <div class="col-9 p-3 col-md-6 p-md-5 col-lg-3 p-lg-3 p-xl-4">
            <div class="embed-responsive embed-responsive-1by1 text-center home-circle party-circle">
              <NuxtLink to="services#party" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/child-with-giant-lolly.png" alt="a child with a giant lolly">
                  <div class="home-circle-caption">
                    <h5>Children's<br>Parties</h5>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- right on mob  -->
          <div class="col-9 p-3 offset-3 col-md-6 offset-md-0 p-md-5 col-lg-3 p-lg-3 p-xl-4 ">
            <div class="embed-responsive embed-responsive-1by1 text-center home-circle baby-circle">
              <NuxtLink to="baby-massage" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/baby-massage-carousel2.jpg" alt="a baby on a maasage mat">
                  <div class="home-circle-caption">
                    <h5>Tiny Stompers<br>Baby Massage</h5>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    // gsap 
    gsap.registerPlugin(ScrollTrigger);

    // scroll animation
    ScrollTrigger.matchMedia({
	
      // desktop - stagger all 
      "(min-width: 991px)": function() {
        gsap.from(".home-circle", {
          scrollTrigger: ".home-circle", 
          duration: 2,
          scale:0,
          ease: "elastic.out(1, 0.5)" ,
          stagger: 0.1
        });
      },

      // mobile - each animated individually
      "(max-width: 990px)": function() {
        var homeCircle = gsap.utils.toArray('.home-circle');
        homeCircle.forEach((homeCircle) => {
          gsap.from(homeCircle, { 
          duration: 2,
          scale:0,
          ease: "elastic.out(1, 0.5)" ,
            scrollTrigger: {
              trigger: homeCircle,
              start: "top 70%", //when top of element crosses 80% from of page
              end: "bottom center",   //when bottom of element crosses center of page
              toggleActions: "play none none none",
            }
          });
        })
      },
    });
    
  }

}
</script>

<style lang="scss">



/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */


.home-circle {
  border-radius: 50%;

  .circle-links {
    height: 100%;

    .nav-circle-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .home-circle-caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    text-align: center;
    padding: 5%;
    color: white;
  }


  &:hover .home-circle-caption {
    height: 100%;
    transition: 0.3s ease-out;

    h5 {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
    }
  }

  &.twiggys-circle {
    border: 5px solid $twiggys-color;

    .home-circle-caption {
        background-color: $twiggys-opaque;
    }
  }

  &.preschool-circle {
    border: 5px solid $preschool-color;

    .home-circle-caption {
        background-color: $preschool-opaque;
    }
  }

  &.party-circle {
    border: 5px solid $party-color;

    .home-circle-caption {
        background-color: $party-opaque;
    }
  }

  &.baby-circle {
    border: 5px solid $baby-color;

    .home-circle-caption {
        background-color: $baby-opaque;
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