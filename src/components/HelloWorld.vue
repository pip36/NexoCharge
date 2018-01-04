<template>
  <div class="hello">
    <section class='section no-pad double-height'>
      <div class='container double-height'>  
        <div class="title-content">   
          <img class="main-logo" src="/static/nexoLogoLarge.png">                
          <h1 class="title is-size-3 is-size-6-mobile" id="main-title"> NEXOCHARGE </h1>
          <router-link class="button is-info" to="/home">Enter Website</router-link>
          <div @click="scrollDown()" class="double-arrow">
            <div class='arrow'> </div>
            <div class='arrow arrow2'> </div>
          </div>
        </div>

        <div class="subscribe-content container">     
          <h2 class="subtitle is-4 is-size-6-mobile has-text-white"> SUBSCRIBE TO NEXOCHARGE </h2>
          <p class="has-text-white is-size-7-mobile">
            Subscribe to NEXOCHARGE to be the first one to know 
            about our updates, products and services.
          </p>
                       
          <div class='form'>
            <div class="field">          
              <div class="control">
                <input class="input" type="text" placeholder="Name">
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>         
            </div>

            <div class="has-text-centered"> 
              <button class="button is-link">
                <span>Subscribe</span>
              </button>         
            </div>
          </div>

          <social-media-links></social-media-links>

          <ul class="nav-buttons is-inline-flex">
            <li><router-link class="button is-info" to="/contact">Contact Us</router-link></li>
            <li><router-link class="button is-info" to="/home">Enter Website</router-link></li>
          </ul>

        </div>
      </div>
        
    </section>
  </div>
</template>

<script>
import SocialLinks from '@/components/elements/SocialLinks'

export default {
  name: 'HelloWorld',
  components: {
    'social-media-links': SocialLinks
  },
  data () {
    return {

    }
  },
  methods: {
    scrollDown () {
      document.querySelector('.double-height').scrollIntoView({behavior: 'smooth', block: 'end'})
    }
  }
}
</script>

<style scoped>
  .double-height{
    height: 200vh;
    background: linear-gradient(#f0f0f0 , #2d6993);
  }

  .no-pad{
    padding: 0;
  }

  #main-title{
    color: #204265;
   
  }

  .main-logo{
    margin-top: 20px;
    max-width: 50%;
    height: auto;
  }


  .title-content{
    height: 100vh;
  }
  .subscribe-content{
   height: 100vh;
   padding-top: 20vh;
  }



  .form{
    width: 50vw;
    margin-top: 20px;
    margin-left: auto; 
    margin-right: auto;
  }

  .social-media-icons{
    margin-top: 20px;
  }

  .social-media-icons ul li{
    margin-left: 5px;
    margin-right: 5px;
  }

  .nav-buttons li{
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .double-arrow{
    margin-top: 20vh;
    margin-left: auto;
    margin-right: auto;
    width: 25px;
    height: 25px;
  }

  .arrow{
    position: absolute;
    width: inherit;
    height: inherit;
    border: solid #266591;
    border-width: 0 6px 6px 0;
    transform: rotate(45deg);
  }

  .arrow2{
    margin-top: -15px;
  }

</style>
