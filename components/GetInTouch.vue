<template>
  <div class="container-fluid">
    <section class="row d-flex justify-content-center get-in-touch">
      <div class="col-12 col-lg-11 pt-5 pb-5">
        <div class="row">
          <div class="col-12 text-center">
            <div class="symbols-container">
              <img class="symbols-img" src="~static/symbols-left.png" alt="">
              <img class="symbols-img" src="~static/symbols-right.png" alt="">
            </div>
            <h3>Get in touch,<br>we'd love to hear from you!</h3>
            <a class="btn btn-primary mt-3 mb-3" href="">Contact us</a>
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