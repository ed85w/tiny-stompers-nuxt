<template>
  <div>
    <div class="container about-container">
      <div class="row">
        <div class="col-12">
          <h1 class="pb-3">About Tiny Stompers</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <p class="pb-3">Here at Tiny Stompers, we love introducing children and their parents/carers to the stimulating world of music and movement in a fun, energetic and exciting way within a safe environment.</p>
          <p class="pb-3">With a range of musical instruments, textures, music, sights, and smells, there is so much for Tiny Stompers to explore! Each session provides a multi-sensory environment aiding in children's development in many different and beneficial ways.</p>
          <p class="pb-3">Children are encouraged to move freely and take the lead in activities allowing them to decide what inspires them. Session activity examples include bubbles, ribbons sticks and pompoms, music, dancing, parachute, balancing and much more. We also celebrate themes such as Teddy Bear's Picnic, World Book Day, big box play, World Wildlife day, National Science Week, recycling and other excitingthemes.</p>
        </div>
        <div class="col-12 col-md-6">
          <p class="pb-3">The sessions are aimed at children aged 12 months to 5 years old, although older and younger siblings are always welcome.</p>
          <p class="pb-3">The lead worker, Becky, has a BA(hons) in Early Childcare and Education and is qualifed in baby signing, baby massage and introducing young children to yoga. Time is spent looking at each child’s individual needs and interests</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h5 class="pb-3 font-weight-bold">Tiny Stompers is proud to be a Ryedale Mumbler Awards Finalist and York Mumbler</h5>
          <button type="button" class="btn btn-primary">Book Now</button>
        </div>
      </div>
      
    </div>
    <!-- <div class="container-fluid">
      <NavCircles />
    </div> -->
  </div>
</template>

<script>

import navCircles from '../components/NavCircles'

export default {
    components: {
    navCircles
  },
  head(){
    return {
      title: 'About Page',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'this is the description for the about page' //meta content
        }
      ]
    };
  }

}
</script>

<style>

.about-container {
  padding-bottom: 40px;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .about-container {
    padding-bottom: 150px;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}

</style>