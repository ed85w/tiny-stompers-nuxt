<template>
    <div class="footer-div">
        <svg id="footer-wave" data-name="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
            <path fill="#2d2e83" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
            <path fill="#2d2e83" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
        </svg>
        <div class="footer-wrapper">
          <div class="container footer-container">
              <div class="row justify-content-center">
                  <div class="col-xs-12 col-md-6">
                      <ul class="list-inline row justify-content-center align-items-center">
                      <li class="list-inline-item"><img src="~static/footer-logo.png" alt="tiny stompers" class="footer-logo "></li>
                      <li class="list-inline-item social-li"><a href="mailto:langstaff56@gmx.co.uk"><i class="fa fa-envelope"></i></a></li>
                      <li class="list-inline-item social-li"><a href="https://www.facebook.com/TinyStompers/"><i class="fa fa-facebook"></i></a></li>
                      <li class="list-inline-item social-li"><a href="tel:07739960910"><i class="fa fa-phone"></i></a></li>
                      </ul>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <p><a href="https://www.edwalkerweb.com/" class="dev-link">Website by Ed Walker Web</a></p>
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

#footer-wave {
  margin-top: -50px;
}

.footer-wrapper {
    background-color: #302d7e;

  .footer-container {
    margin-top: -25px;
  }

}

.footer li {
  padding: 0;
  margin: 0 15px;
}

li.social-li {
  height: 36px;
  width: 36px;
  padding-left: 0;
  padding-right: 0;
  padding-top: 7px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
}

.footer-logo{
  width: 80px;
}

.fa {
  font-size: 18px;
  width: 20px;
  color: white;
}

a.dev-link {
  color: white;
  font-size: 80%;
}


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

    #footer-wave {
        margin-top: -7vw;
    }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

</style>