<template>
  <div class="max-width-container">
    <!-- landing section  -->
    <div class="container-fluid pt-5 pb-md-5 landing-container-contact">
      <div class="container-fluid pt-md-5">
        <section class="row d-flex justify-content-center get-in-touch pb-md-5">
          <div class="col-12 col-lg-11 pt-5 pb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-12 text-center button-container">
                <div class="symbols-container">
                  <img class="symbols-img" src="~static/symbols-left.png" alt="">
                  <img class="symbols-img" src="~static/symbols-right.png" alt="">
                </div>
                <h3>Get in touch,<br>we'd love to hear from you!</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="container">
      <div class="row contact-row">
        <div class="col-12 col-md-7 order-md-2" id="vue-form"> 

          <!-- contact form  -->
          <form 
            name="contact-us" 
            action="/thanks" 
            method="post" 
            netlify
            netlify-honeypot="bot-field"
          >

            <div class="form-row">

              <!-- // Hidden input to check for bots -->
              <input type="hidden" name="form-name" value="contactus" />

              <div class="form-group col-12 col-md-6">
                <label for="adult_name">Adult's Name *</label>
                <input type="text" class="form-control" id="adult_name" name="adult_name" required/>
              </div>
            
              <div class="form-group col-12 col-md-6">
                <label for="phone">Phone Number</label>
                <input type="text" class="form-control" id="phone" name="phone"/>
              </div>

              <div class="form-group col-12">
                <label for="email">Email address *</label>
                <input type="email" class="form-control" id="email" name="email" required />
              </div>

            </div>

            <!-- child details part of form -->
            <div class="form-row" v-for="(child, index) of children" :key="child.id">
              <div class="form-group col-12 col-md-6">
                <label>Child's Name</label>
                <input type="text" class="form-control" :id="'Child_name' + index" :name="'Child_name' + index" v-model="child.name"/>
              </div> 
            
              <div class="form-group col-12 col-md-6">
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
              <div class="form-group col-12 text-center">
                <button type="button" class="btn" @click="addNewChildForm">
                  <img class="button-img" src="~static/plus-icon.png" alt="plus icon">
                    Add Child
                </button>
                <button type="button" class="btn btn-red" v-if="index > 0" @click="deleteForm(index)">
                  <img class="button-img" src="~static/minus-icon.png" alt="minus icon">
                  Remove Child
                </button>
              </div>

            </div>
            <!-- end of child details part of form -->

            <div class="form-row">
            
              <div class="form-group col-12">
                <label for="enquiry">Enquiry</label>
                <textarea class="form-control" id="enquiry" name="enquiry"></textarea>
              </div>
            
              <button type="submit" class="btn send-btn" value="send">
                <img class="button-img" src="~static/tick-icon.png" alt="tick icon">
                Send
              </button>
            </div>
          </form>
          <br>
          <p class="gdpr-text">GDPR: Tiny Stompers holds your contact details on a tablet device/mobile for contacting you with information about Tiny Stompers. The hard copies from signing in sheets once transported from the session, are stored in my office at home. I will not share your details with any third parties (unless in child protection instances where the usual policy applies). If at any time you would like to be removed from the distribution list, please let me know through my contact details.</p> 
          <!-- end of contact form -->  
        </div>
        <div class="col-12 col-md-5 order-md-1">
          <ul class="contact-ul pt-5 pb-5">
            <li class="contact-li"><a href="tel:07739960910"><i class="fa fa-phone"></i><p class="d-none d-lg-block m-0 contact-text">07739 960910</p></a></li>
            <li class="contact-li"><a href="mailto:langstaff56@gmx.co.uk"><i class="fa fa-envelope"></i><p class="d-none d-lg-block m-0 contact-text">langstaff56@gmx.co.uk</p></a></li>
            <li class="contact-li"><a href="https://www.facebook.com/TinyStompers/"><i class="fa fa-facebook-square"></i><p class="d-none d-lg-block m-0 contact-text">Tiny Stompers</p></a></li>              
            <li class="contact-li"><a href="https://www.instagram.com/tinystompers"><i class="fa fa-instagram"></i><p class="d-none d-lg-block m-0 contact-text">@tinystompers</p></a></li>              
          </ul>
          <br>

          <!-- facebook widget -->
          <div class="fb-page" data-href="https://www.facebook.com/TinyStompers/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/TinyStompers/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TinyStompers/">Tiny Stompers</a></blockquote></div>
          <!-- end of facebook widget -->
        </div>
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
            }],
          date: ''
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

<style lang="scss">

/*  Extra small devices (portrait phones, less than 576px) */
/*  No media query for `xs` since this is the default in Bootstrap */

.contact-row {

  ul.contact-ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: space-around;

    li a i {
      font-size: 30px;
      color: $tiny-stompers-dark;
    }

  }
  #vue-form {
    border-left: none;

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-control {
      border: 3px solid #5C52AF;
      border-radius: 30px;
    }

    label {
      font-size: 16px;
      // font-weight: 700;
      margin-bottom: 2px;
      margin-left: 12px;
    }

    input {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 15px;
      padding-right: 15px;
      background: #5C52AF;
      border-radius: 30px;  
      font-size: 16px;
      font-weight: 700;
      color: white;

      .button-img {
        width: 25px;
        height: 25px;
        margin-right: 3px;
      }
    }

    .btn-red {
      background: #f54646
    }

    .send-btn {
      margin-left: auto;
      margin-right: auto;
    }

  }
}



.gdpr-text {
  font-size: 0.8rem;
  text-align: justify;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {


}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  #vue-form {
    border-left: 1px solid black;
  }

  .gdpr-text {
    margin-top: 0;
  }


}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .contact-row {

    ul.contact-ul {
      flex-direction: column;


      li a {
        display: flex;
        align-items: center;
        padding-bottom: 1.5rem;
        
        i {
          width: 40px;
        }
        p {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: $tiny-stompers-dark;
        }

        &:hover {
          text-decoration: none;
        }
      
      
      
      }
    }
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>