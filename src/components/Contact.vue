<template>
  <div class="contact">
    <navbar pageTitle="CONTACT"></navbar>
    <div class="container main-content">
      <p> Send us a message using our contact form and we will get back to you within 2 working days. </p>
      <form class="form" method="POST" action="https://formspree.io/phil_23@live.co.uk">       
        <div class="field">
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Name">
          </div>
        </div>

        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input 
              class="input" 
              type="email" 
              name="email" 
              placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input" type="text" name="subject" placeholder="Subject">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <textarea class="textarea" name="message" placeholder="Message"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
        
    <footer-bar></footer-bar>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/elements/Footer'

export default {
  name: 'Contact',
  components: {
    'navbar': Navbar,
    'footer-bar': Footer
  },
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {

  }
}
</script>


<style scoped>
  .main-content{
    margin-top: 5vh;
    margin-bottom: 10vh;
  }
  .form{
    margin-top: 20px;
  }
</style>
