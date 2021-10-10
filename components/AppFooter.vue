<template>
  <div class="max-width-container pt-5">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center footer-row">
        <div class="col-12 col-lg-11 nav-col max-width">
          <div class="row">
            <div class="col-12 pt-3 pb-3 col-lg-4 text-center text-lg-right">
              <NuxtLink to="/" exact><img class="footer-logo-img m-3 m-lg-1" src="~static/tiny-stompers-logo.png" alt="tiny stompers logo" loading="lazy"></NuxtLink>
              <NuxtLink to="baby-massage" exact><img class="footer-logo-img m-3 m-lg-1" src="~static/tiny-stompers-baby-massage-logo.png" alt="tiny stompers baby massage logo" loading="lazy"></NuxtLink>
            </div>
            <div class="col-12 pr-5 pl-5 col-lg-4 pr-lg-3 pl-lg-3">
              <div class="row d-flex">
                <ul class="footer-nav pt-lg-5 mb-lg-1">
                  <li><NuxtLink to="about" exact>About</NuxtLink></li>
                  <li><NuxtLink to="services" exact>Services</NuxtLink></li>
                  <li><NuxtLink to="contact" exact>Contact</NuxtLink></li>
                  <li><NuxtLink to="baby-massage" exact>Baby Massage</NuxtLink></li>
                </ul>
                <ul class="footer-socials">
                  <li><a href="https://www.instagram.com/tinystompers/" target="_blank" rel=”noopener”><i class="fa fa-instagram"></i></a></li>
                  <li><a href="mailto:langstaff56@gmx.co.uk" target="_blank" rel=”noopener”><i class="fa fa-envelope"></i></a></li>
                  <li><a href="https://www.facebook.com/TinyStompers/" target="_blank" rel=”noopener”><i class="fa fa-facebook-square"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-lg-4 pt-3 pb-3 col-lg-4 text-center text-lg-left">
              <img class="footer-logo-img m-3 m-lg-1" src="~static/photos/Mumbler.webp" alt="mumbler logo" loading="lazy">
            </div>
            <div class="col-12 text-center">
              <p><a href="https://www.koodi.co.uk/" target="_blank" rel=”noopener”>website designed and built by koodi</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.footer-row {
  background: $tiny-stompers-dark;
  border-top: 5px solid $tiny-stompers-light;

  .footer-logo-img {
    width: 93px;
    height: 93px;
  }

  ul.footer-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    padding: 0;
    
    li {
      padding: 10px 20px;
      text-align: center;
      
      a {
        font-size: 16px;
        color: white;
      }
    }
  }

  ul.footer-socials {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    list-style: none;
    border-bottom: 1px solid #D9DBE1;

    li {
      padding: 10px;

      a i {
        font-size: 30px;
        color: white;
      }
    }
  }

  p a {
    color: #D9DBE1;
    font-size: 14px;
  }
}




/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {



}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  .footer-row {
    border-top-width: 18px;

    ul.footer-nav {
      flex-wrap: nowrap;
    }

    ul.footer-socials {
      
      li {
        padding: 20px;
      }
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