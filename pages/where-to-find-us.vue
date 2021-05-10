<template>
      <!-- page conetent -->
    <div class="container">
      <div class="row find-us-row">
        <div class="col-xs-12 col-sm-6 animated fadeIn">
          <h2>Session Times</h2>
          <p>Mondays 10:15am to 11:00 & 11:15am to 12:00</p>
          <p>Wednesdays 10:15am to 11:00 & 11:15am to 12:00</p>
          <br>
          <h2>Address</h2>
          <p>Twiggy's Play</p>
          <p>Unit 2</p>
          <p>Concept Business Park</p>
          <p>Allendale Road</p>
          <p>Thirsk</p>
          <p>YO7 3NY</p>
        </div>
        <div class="col-xs-12 col-sm-6 animated fadeIn delay-1s" id="map">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    head() {
      return {
        script: [
          {
            src:
              'https://maps.googleapis.com/maps/api/js?key=AIzaSyCXYLBZn-ErcllJnGxiRVPyRXBzGb2nSjQ&callback=initMap', async: true ,defer: true
          },
          {
            src:
              'js/map.js'
          }
        ],
      }
    }
}
</script>

<style>

.find-us-row {
  padding-bottom: 50px;
}

#map {
  height: 300px;
  border-radius: 0;
  transition: 0.8s;
  -webkit-transition: 0.8s;
  -o-transition: .8s;
}

#map:hover,
#map:focus {
  border-radius: 0;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  /* WHERE TO FIND US PAGE */
  #map {
    height: 360px;
    border-radius: 50%;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .find-us-row {
    padding-bottom: 150px;
  }

  #map {
    height: 480px;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  /* WHERE TO FIND US PAGE */
  #map {
    height: 550px;
  }

}


</style>