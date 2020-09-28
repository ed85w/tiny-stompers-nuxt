<template>
      <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-5 animated fadeIn">
          <h2>Contact Us</h2>
          <p>If you would like to ask us any questions please don’t hesitate to contact Becky...</p>
          <ul class="about-ul">
            <li class="about-li"><a href="tel:07739960910">mobile: 07739 960910</a></li>
            <li class="about-li"><a href="mailto:langstaff56@gmx.co.uk">email: langstaff56@gmx.co.uk</a></li>
            <li class="about-li"><a href="https://www.facebook.com/TinyStompers/">visit Tiny Stompers on Facebook</a></li>              
          </ul>
          <br>
          <h2 class="d-none d-md-block">Facebook</h2>
          <!-- facebook widget  (only on medium+ size screens)-->
          <div class="fb-page d-none d-md-block" data-href="https://www.facebook.com/TinyStompers/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/TinyStompers/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TinyStompers/">Tiny Stompers</a></blockquote></div>
          <!-- end of facebook widget -->
        </div>
        <div class="col-xs-12 col-md-7 animated fadeIn delay-1s" id="vue-form"> 
          <h2>Booking/enquiry form</h2>
          <!-- contact form (uses formspree) -->
          <form method="POST" action="https://formspree.io/langstaff56@gmx.co.uk">          

            <div class="form-group">
              <label for="adult_name">Adult's Name *</label>
              <input type="text" class="form-control" id="adult_name" name="adult_name" required/>
            </div>
            
            <div class="form-group">
              <label for="email">Email address *</label>
              <input type="email" class="form-control" id="email" name="email" required />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" class="form-control" id="phone" name="phone"/>
            </div>

            <!-- child details part of form -->
            <div v-for="(child, index) of children" :key="child.id">
              <span class="float-right" @click="deleteForm(index)" v-if="index > 0" style="cursor: pointer;">X</span>
              <div class="form-group">
                <label>Child's Name</label>
                <input type="text" class="form-control" :id="'Child_name' + index" :name="'Child_name' + index" v-model="child.name"/>
              </div> 
              
              <div class="form-group">
                <label>Child's Age</label>
                <select class="form-control" :id="'Child_age' + index" :name="'Child_age' + index" v-model="child.age">
                  <option selected>0 - 6 Months</option>
                  <option>7 - 12 Months</option>
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>4 Years</option>
                  <option>5 Years</option>
                </select>
              </div>

            </div>
            <!-- end of child details part of form -->
            
            <div class="form-group">
              <button type="button" class="btn" @click="addNewChildForm">
                Add Child
              </button>
            </div>
            
            <div class="form-group">
              <label>When would you like your first session to be</label>
              <input type="text" class="form-control" id="datepicker" name="first_session">
            </div>

            <div class="form-group">
              <label for="marketing_source">Where did you hear about Tiny Stompers</label>
              <input type="text" class="form-control" id="marketing_source" name="marketing_source"/>
            </div>

            <div class="form-group">
              <label for="comments">Comments</label>
              <textarea class="form-control" id="comments" name="comments"></textarea>
            </div>
            
            <button type="submit" class="btn">Send</button>
          </form>
          <br>
          <p class="gdpr-text">GDPR: Tiny Stompers holds your contact details on a tablet device/mobile for contacting you with information about Tiny Stompers. The hard copies from signing in sheets once transported from the session, are stored in my office at home. I will not share your details with any third parties (unless in child protection instances where the usual policy applies). If at any time you would like to be removed from the distribution list, please let me know through my contact details.</p> 
          <!-- end of contact form -->  
        </div>
      </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        children: [{
            name: '',
            age: ''
            }]
        }
    },
    methods: {
        addNewChildForm: function(){
            this.children.push({
                name: '',
                age: ''
            })
        },
        deleteForm: function(index){
            this.children.splice(index, 1);
        }
    }
}
</script>

<style>

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */

label {
  font-size: 0.7rem;
}

.btn {
  background-color: #302d7e;
  color: white;
}

.gdpr-text {
  font-size: 0.5rem;
  text-align: justify;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

  label {
    font-size: 0.8rem;
  }

}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  .gdpr-text {
    font-size: 0.7rem;
    margin-top: 0;
  }


}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  label {
    font-size: 1rem;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>