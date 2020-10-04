<template>
  <div>
    <!-- navbar -->
    <nav class="sidebar text-center" v-bind:class="{ showsidebar: showMobileMenu }">
      <ul class="sidebar-nav">
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="/" exact>Home</NuxtLink></li>
        <li class="li-star"><img src="~static/star-tint.png" alt="star" class="nav-star"></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="about" exact>About</NuxtLink></li>
        <li class="li-star"><img src="~static/star-tint.png" alt="star" class="nav-star"></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="services">Services</NuxtLink></li>
        <li class="li-star"><img src="~static/star-tint.png" alt="star" class="nav-star"></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="where-to-find-us">Where to find us</NuxtLink></li>
        <li class="li-star"><img src="~static/star-tint.png" alt="star" class="nav-star"></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="contact" >Contact</NuxtLink></li>
        <li class="li-star"><img src="~static/star-tint.png" alt="star" class="nav-star"></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="#">Baby Massage</NuxtLink></li>
      </ul>
      <button class="sidebarBtn" v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }">
        <span></span>
      </button>
    </nav>
    <!-- end of navbar -->

    <!-- 'wave' header -->
    <div class="container-fluid" id="wave">
    </div>
    <!-- end of wave header -->
  </div>
</template>

<script>
export default {
    data() {
      return{
          showMobileMenu: false,
      }
  }
}
</script>

<style>

/* navbar styling (mobile)*/

/* sidebar */
.sidebar {
  display: block;
  position: fixed;
  top: 0;
  left: -250px; 			
  background: #302d7e;
  width: 25px;
  height: 100%;
  transition: .8s;
  -o-transition: .8s;
  /* overflow-y: scroll; */
  z-index: 1;
}

.showsidebar {
  left: 0;
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;

}

ul.sidebar-nav li {
  padding: 10px 20px;
  display: block;
  text-decoration: none;
}

ul.sidebar-nav {
  padding-top: 20px;
}

ul.sidebar-nav li a {
  color: #ffffff;
  font-size: 1.2rem;
}

ul.sidebar-nav li a:active,
ul.sidebar-nav li a:hover,
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: none;
}

ul.sidebar-nav li.li-star {
  padding-left: 0;
  padding-right: 0;
}

img.nav-star {
  height: 20px;
  width: 20px;
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

/* 'burger' */
.sidebarBtn {
  display: block;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  cursor: pointer;
  background:none;
  border-radius: 5px;
  border: none;
  outline: none;
  padding-left: 5px;
  overflow: hidden;
}

.sidebarBtn:focus {
  outline: none;
}
.sidebarBtn span {
  display: block;
  width: 25px;
  height: 3px;
  background-color:   rgb(0, 0, 0);
  position: absolute;
  top: 17px;
  transition: .3s;
  -o-transition: .3s;
}

.sidebarBtn span:before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgb(0, 0, 0);
  transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}

.sidebarBtn span:after {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgb(0, 0, 0);
  transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}

.sidebarBtn.toggle{
  transition: 0.3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}

.sidebarBtn.toggle span {
  background: transparent;
}

.sidebarBtn.toggle span:before {
  top: 0;
  transform: rotate(405deg);
  -webkit-transform: rotate(405deg);
  -o-transform: rotate(405deg);
}

.sidebarBtn.toggle span:after {
  top: 0;
  transform: rotate(-225deg);
  -webkit-transform: rotate(-225deg);
  -o-transform: rotate(-225deg);
}
/* end of 'burger' */
/* end of navbar styling */

#wave {
  background-image: url("~static/mobile-header.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom center;
  overflow: hidden;
  height: 45vw;
  position: relative;
  z-index: -1;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {


  #wave {
    background-image: url("~static/homepage-header.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom center;
    overflow: hidden;
    height: 146px;
  }
  
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

    /* navbar */

    .sidebar {
      width: 100%;
      height: auto;
      display: inline-block;
      position: static;
      left: auto;
      text-align: center;
      float: none;
      vertical-align: top;
      padding: 0;
      margin-bottom: 0;
      border-radius: 0;
      transition: 0s;
      -webkit-transition: 0s;
      -o-transition: 0s;
      overflow-y: hidden;
    }
    
    nav {
      width: 80%;
      margin: 0 auto;
      padding: 0;
    }
    
    ul.sidebar-nav li {
      padding: 20px 20px;
      list-style: none;
      display: inline-block;
    }
  
    ul.sidebar-nav {
       padding-top: 0;
    }
  
    .sidebarBtn {
      display: none;
    }
    /* end of navbar */
  

  #wave {
    height: 196px;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  #wave {
    height: 254px;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  #wave {
    height: 21vw;
  }

}


</style>