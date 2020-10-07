<template>
    <div>
        <div class="services-wrapper wrapper-white">
            <div class="container">
                <div class="row" id="twiggys-row">
                    <div class="col-12 col-md-6 animated fadeIn">
                        <h2>Twiggy's Play - pay as you go! </h2>
                        <p>£6.50 per child. This includes your Tiny Stompers session and a play in Twiggy's soft play centre!
                            (please check Tiny Stompers Facebook/ instagram site for any special offers)</p>
                        <p>For this venue there are a limited number of places available for the Tiny Stompers sessions</p>
                        <br>
                        <h2>Session Times</h2>
                        <p>Mondays 10:15am to 11:00 & 11:15am to 12:00</p>
                        <p>Wednesdays 10:15am to 11:00 & 11:15am to 12:00</p>
                    </div>
                    <div class="col-12 col-md-6 animated fadeIn">
                        <h2>Address</h2>
                        <p>Twiggy's Play<br>Unit 2<br>Concept Business Park<br>Allendale Road<br>Thirsk<br>YO7 3NY</p>   
                    </div>
                </div>
            </div>        
        </div>
        <svg id="green-wave" class="wave-svg" data-name="green-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
            <path d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
            <path d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
        </svg>
        <div class="services-wrapper wrapper-green">
            <div class="container">
                <div class="row" id="party-row">
                    <div class="col-12 col-md-8">
                        <h2>Party bookings</h2>
                        <ul class="about-ul">
                            <li class="about-li">£75 for a 45 minute Birthday themed Tiny Stompers session</li>
                            <li class="about-li">For up to 10 children</li>
                            <li class="about-li">Includes a gift for the Birthday Stomper!</li>
                            <li class="about-li">Venue hire is not included in this price</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        other stuff
                    </div>
                </div>
            </div>        
        </div>
        <svg id="pink-wave" class="wave-svg" data-name="pink-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 82.08">
            <path fill="pink" d="M845.83,89.75s-806-.09-846.81,3V30.85h0c40.8-3,114.13,40.89,215.07,12.24C371.64-1.64,398.83,11.74,581.77,49.4,735.58,81.07,845.83,24.26,845.83,24.26Z"/>
            <path fill="pink" d="M846.17,29.59S736.5,82.82,582.43,51.89C399.18,15.1,371.94,2,214.12,45.72,113,73.71,39.54,30.86-1.32,33.83V26.11h0c40.86-3,114.32,39.94,215.44,12C371.94-5.63,399.18,7.44,582.43,44.23c154.07,30.93,263.74-23.3,263.74-23.3Z"/>
        </svg>
        <div class="services-wrapper wrapper-pink">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <h2>Prices for preschool/ nursery bookings</h2>
                        <ul class="about-ul">
                            <li class="about-li">£75 per 45 minute session for up to 15 children</li>
                            <li class="about-li">Please contact Becky if you are a Charity as discount may apply</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        other stuff
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

.wave-svg {
    position: relative;
    top: -50px;
}

.services-wrapper {
    padding-bottom: 50px;

    &:not(:first-of-type) {
    margin-top: -50px;
    padding-top: 25px;
    }

}

.services-wrapper.wrapper-white {
    background-color: white;
}

.services-wrapper.wrapper-green {
    background-color: $party-light;
    padding-bottom: 80px;
}

#green-wave {

    path:first-child{
        fill: $party-light;
    }

    path:last-child {
        fill: $party-color;
    }

}

.services-wrapper.wrapper-pink {
    background-color: $preschool-light;
}

#pink-wave {

    path:first-child{
        fill: $preschool-light;
    }

    path:last-child {
        fill: $preschool-color;
    }

}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
 
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

    .wave-svg {
        margin-top: -30px;
    }

    .services-wrapper.services-wrapper.wrapper-white,
    .services-wrapper.services-wrapper.wrapper-green,
    .services-wrapper.services-wrapper.wrapper-pink {
        padding-bottom: 120px;
    }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

    .wave-svg {
        margin-top: -50px;
    }

    .services-wrapper.services-wrapper.wrapper-white,
    .services-wrapper.services-wrapper.wrapper-green,
    .services-wrapper.services-wrapper.wrapper-pink {
        padding-bottom: 150px;
    }

}

</style>