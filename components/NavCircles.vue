<template>
  <div class="container-fluid">
    <section class="row d-flex justify-content-center">
      <div class="col-12 col-lg-11 pt-5 pb-5">
        <div class="row">
          <div class="col-12 text-center pt-5 pb-5">
            <h2>Find out more about...</h2>
          </div>
        </div>
        <div class="row circles-row pt-3 pb-3">
          <!-- left on mob  -->
          <div class="col-9 p-3 col-md-6 p-md-5 col-lg-3 p-lg-3 p-xl-4 ">
            <div class="embed-responsive embed-responsive-1by1 text-center home-circle twiggys-circle">
              <NuxtLink to="services" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/carousel1.jpg" alt="">
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
              <NuxtLink to="services" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/carousel1.jpg" alt="">
                  <div class="home-circle-caption">
                    <h5>Preschool/Nursery<br>Session Bookings</h5>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- left on mob  -->
          <div class="col-9 p-3 col-md-6 p-md-5 col-lg-3 p-lg-3 p-xl-4">
            <div class="embed-responsive embed-responsive-1by1 text-center home-circle party-circle">
              <NuxtLink to="services" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/carousel1.jpg" alt="">
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
              <NuxtLink to="services" class="circle-links">
                <div class="embed-responsive-item">
                  <img class="nav-circle-img" src="~/static/photos/carousel1.jpg" alt="">
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

}
</script>

<style lang="scss">



/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */


.home-circle {
  border-radius: 50%;

  .circle-links {
    height: 100%;
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