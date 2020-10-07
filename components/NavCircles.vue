<template>
    <div class="row circles-row pt-3 pb-3">
        <div class="col-12 col-md-6 col-xl-3 pl-5 pr-5 pt-3 pb-3 pl-lg-5 pr-lg-5 pl-xl-3 pr-xl-3">
          <div class="home-circle twiggys-circle">
            <NuxtLink to="services" class="circle-links">
                <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
                    <div class="home-circle-caption">
                        <h5>Tiny Stompers<br>at Twiggy's</h5>
                    </div>
                </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 pl-5 pr-5 pt-3 pb-3 pl-lg-5 pr-lg-5 pl-xl-3 pr-xl-3">
          <div class="home-circle baby-circle">
            <NuxtLink to="#" class="circle-links">
                <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
                    <div class="home-circle-caption">
                        <h5>Tiny Stompers<br>Baby Massage</h5>
                    </div>
                </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 pl-5 pr-5 pt-3 pb-3 pl-lg-5 pr-lg-5 pl-xl-3 pr-xl-3">
          <div class="home-circle party-circle">
            <NuxtLink to="#" class="circle-links">
                <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
                    <div class="home-circle-caption">
                        <h5>Children's<br>Parties</h5>
                    </div>
                </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 pl-5 pr-5 pt-3 pb-3 pl-lg-5 pr-lg-5 pl-xl-3 pr-xl-3">
          <div class="home-circle preschool-circle">
            <NuxtLink to="#" class="circle-links">
                <div class="home-circle-inner" style="background-image: url(./photos/carousel3.jpg);">
                    <div class="home-circle-caption">
                        <h5>Preschool/Nursery<br>Session Bookings</h5>
                    </div>
                </div>
            </NuxtLink>
          </div>
        </div>

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
  height: 73vw;
  width: 73vw;
  margin-left: auto;
  margin-right: auto;

  .circle-links {
      height: 100%;

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
        width: 100%;
        height: 30%;
        text-align: center;
        padding: 5%;
        color: white;
    }
  }

}

.twiggys-circle {

    .home-circle-inner{
        border: 4px solid $twiggys-color;
    }

    .home-circle-caption {
        background-color: $twiggys-opaque;
    }
}

.baby-circle {

    .home-circle-inner{
        border: 4px solid $baby-color;
    }

    .home-circle-caption {
        background-color: $baby-opaque;
    }
}

.party-circle {

    .home-circle-inner{
        border: 4px solid $party-color;
    }

    .home-circle-caption {
        background-color: $party-opaque;
    }
}

.preschool-circle {

    .home-circle-inner{
        border: 4px solid $preschool-color;
    }

    .home-circle-caption {
        background-color: $preschool-opaque;
    }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  .home-circle {
    height: 39vw;
    width: 39vw;
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

  .circles-row {
    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }

  .home-circle {
    height: 35vw;
    width: 35vw;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

    .home-circle {
        height: 19vw;
        width: 19vw;
    }

}
</style>