<template>
  <div class="container-fluid pt-md-5">
    <section class="row d-flex justify-content-center get-in-touch pt-md-5 pb-md-5">
      <div class="col-12 col-lg-11 pt-5 pb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-12 text-center button-container">
            <div class="symbols-container">
              <img class="symbols-img" src="~static/symbols-left.png" alt="">
              <img class="symbols-img" src="~static/symbols-right.png" alt="">
            </div>
            <h3>Get in touch,<br>we'd love to hear from you!</h3>
            <NuxtLink to="contact" exact class="btn btn-primary mt-3 mb-3" href="">Contact us</NuxtLink>
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


section.get-in-touch {

  .button-container {
    max-width: 380px;

    h3 {
      font-size: 18px;
    }

    .symbols-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: -30px;
    left: 0;
    width: 100%;
    padding: 0 16px;

      .symbols-img {
        width: 20%;
      }
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

  section.get-in-touch {

    .button-container {
      max-width: 750px;

      h3 {
        font-size: 40px;
      }

      .symbols-container {
        top: -10px;
        left: 0;
        width: 100%;
        padding: 0 16px;

        .symbols-img {
          width: 12%;
        }
      }
    }
  } 
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

</style>