<template>
  <div class="max-width-container">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center nav-row">
        <div class="col-12 col-lg-11 nav-col">
          <nav class="row">
            <div class="logo-container">
              <NuxtLink to="/" exact><img class="logo-img" src="~static/tiny-stompers-logo.png" alt="tiny stompers logo"></NuxtLink>
              <NuxtLink to="/" exact><img class="logo-img-baby" src="~static/tiny-stompers-baby-massage-logo.png" alt="tiny stompers baby massage logo"></NuxtLink>
            </div>
            <div class="col nav-menu-container" v-bind:class="{ showsidebar: showMobileMenu }">
              <ul class="sidebar-nav p-3 pt-5">
                <li class="d-lg-none" v-on:click="showMenu()" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="/" exact>Home</NuxtLink></li>
                <li v-on:click="showMenu()" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="about" exact>About us</NuxtLink></li>
                <li v-on:click="showMenu()" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="services" exact>Our services</NuxtLink></li>
                <li v-on:click="showMenu()" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="contact" exact>Contact</NuxtLink></li>
                <li v-on:click="showMenu()" v-bind:class="{ toggle: showMobileMenu }"><NuxtLink to="baby-massage" exact>Baby Massage</NuxtLink></li>
              </ul>
              <ul class="socials p-3 pt-0 pt-lg-5">
                <li><a href="https://www.instagram.com/tinystompers/" target="_blank" rel=”noopener”><i class="fa fa-instagram"></i></a></li>
                <li><a href="mailto:langstaff56@gmx.co.uk" target="_blank" rel=”noopener”><i class="fa fa-envelope"></i></a></li>
                <li><a href="https://www.facebook.com/TinyStompers/" target="_blank" rel=”noopener”><i class="fa fa-facebook-square"></i></a></li>
              </ul>
            </div>
            <button class="sidebarBtn" v-bind:class="{ toggle: showMobileMenu }" :aria-expanded="showMobileMenu ? 'true' : 'false'" @click="showMobileMenu = !showMobileMenu" aria-label="expand  navigation menu">
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    showMenu() {
      // on laptops and larger 
      if(window.innerWidth < 991) {
        if(this.showMobileMenu == false){
          this.showMobileMenu = true;
        } else {
          this.showMobileMenu = false;
        }
      }
    },
    onResize(e) {
      if(window.innerWidth > 991 && this.showMobileMenu == true) {
        this.showMobileMenu = false;
      }
    }
  },
}
</script>

<style lang="scss">

/* navbar styling (mobile)*/

// if TS page(s)
body .nav-row .nav-col .logo-container .logo-img {
  display: block;
}
body .nav-row .nav-col .logo-container .logo-img-baby {
  display: none;
}
// if baby massage page
body.baby-massage .nav-row .nav-col .logo-container .logo-img {
  display: none;
}
body.baby-massage .nav-row .nav-col .logo-container .logo-img-baby {
  display: block;
}

.nav-row {
  height: 99px;
  background: #312783;
  border-bottom: 10px solid #5C52AF;

  .nav-col {
    display: block;

    .logo-container {
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);

      .logo-img,
      .logo-img-baby {
        width: 127px;
        height: 127px;

      }
    }

    .nav-menu-container {
      position: absolute;
      top: 0;
      overflow: hidden;
      background: #312783;
      text-align: center;
      opacity: 0;
      pointer-events: none;

      &.showsidebar {
        z-index: 5;
        transition: 0.3s ease-in;
        opacity: 1;
        pointer-events: all;
      }

      ul.sidebar-nav {
        list-style: none;
        padding-top: 20px;

        li {
          display: block;
          padding: 10px 20px;
          font-family: kristenITC;
          text-decoration: none;
        }

      }

      ul.socials {
        display: flex;
        justify-content: center;
        list-style: none;

        li a {
          padding: 0 20px;

          i {
            font-size: 28px;
            color: #ffffff;
          }
        }
      }

      ul.sidebar-nav li a {
        color: #ffffff;
        font-size: 20px;
      }

      /* prevent default behaviour  */
      ul.sidebar-nav li a:active,
      ul.sidebar-nav li a:hover {
        text-decoration: none;
      }

      /* active nav item  */
      ul.sidebar-nav li a.nuxt-link-exact-active.nuxt-link-active {
        border-bottom: 3px solid white;
      }
    }
  }
}


/* 'burger' */
.sidebarBtn {
  display: block;
  position: absolute;
  top: 25px;
  right: 25px;
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
  z-index: 10;
}

.sidebarBtn:focus {
  outline: none;
}
.sidebarBtn span {
  display: block;
  width: 35px;
  height: 4px;
  background-color:   white;
  position: absolute;
  top: 17px;
  transition: .3s;
  -o-transition: .3s;
}

.sidebarBtn span:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: white;
  transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}

.sidebarBtn span:after {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: white;
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

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {

  
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {


  

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .nav-row {
    height: 178px;
    border-bottom: 18px solid #5C52AF;

    .nav-col {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .logo-container {
        left: 0;
        top: 20px;
        transform: none;
        z-index: 2;

        .logo-img,
        .logo-img-baby {
          width: 230px;
          height: 230px;
        }
      }

      .nav-menu-container {
        position: static;
        display: flex;
        justify-content: flex-end;
        opacity: 1;
        pointer-events: all;
        
        ul.sidebar-nav {
          display: inline-flex;
          

          li {
            padding: 20px 15px;
            list-style: none;
            display: inline-block;

            a {
              font-size: 17px;
            }
          }
        }

        ul.socials {
          display: inline-flex;
          align-items: center;

          li a {
            padding: 0 15px;

            i {
            font-size: 24px;
            }
          }
        }
      }
    }
  }
  
  .sidebarBtn {
    display: none;
  }
  /* end of navbar */
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  .nav-row .nav-col .nav-menu-container {

    ul.sidebar-nav {
      li a {
        font-size: 20px;
      }
    }

    ul.socials {
      li a {
        padding: 0 20px;

        i {
          font-size: 28px;
        }
      }
    }
  }


}


</style>