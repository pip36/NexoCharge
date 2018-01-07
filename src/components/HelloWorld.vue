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
                <input 
                  v-model="name"
                  v-validate="'required|min:2|max:26'" 
                  :class="{'input': true, 'is-danger': errors.has('name')}" 
                  name= "name"
                  type="text" 
                  placeholder="Name">
              </div>
              <p v-show="errors.has('name') " class="help is-danger">{{ errors.first('name') }}</p>
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input 
                  v-model="email"
                  v-validate="'required|email'"
                  :class="{'input': true, 'is-danger': errors.has('email')}" 
                  name="email"
                  type="email" 
                  placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div> 
              <p v-show="errors.has('email') " class="help is-danger">{{ errors.first('email') }}</p>        
            </div>

            <div class="has-text-centered"> 
              <button @click="validateBefore(addSubscriber)" class="button is-link">
                <span>Subscribe</span>
              </button>         
            </div>
          </div>
   
          <notification type="success" v-show="subscribeMessage" @close="subscribeMessage = null"> 
            {{ subscribeMessage }} 
          </notification>
          <notification type="danger" v-show="subscribeError" @close="subscribeError = null"> 
            {{ subscribeError }} 
          </notification>
          
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
import SubscribeForm from '@/helpers/SubscribeForm'
import Notification from '@/components/elements/Notification'

export default {
  name: 'HelloWorld',
  components: {
    'social-media-links': SocialLinks,
    'notification': Notification
  },
  data () {
    return {
      name: '',
      email: '',
      subscribeMessage: null,
      subscribeError: null
    }
  },
  methods: {
    scrollDown () {
      document.querySelector('.double-height').scrollIntoView({behavior: 'smooth', block: 'end'})
    },

    addSubscriber () {
      SubscribeForm.hasSubscriber(this.email).then(() => {
        SubscribeForm.addSubscriber({name: this.name, email: this.email})
        .then((success) => {
          this.subscribeMessage = success
        })
      }).catch((error) => {
        this.subscribeError = error.message
      })
    },

    validateBefore (callback) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          callback()
        }
      })
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
