<template>
  
  <div class="footer-links">  
    <div class="columns is-gapless">
      <div class="column is-one-quarter"></div>
      
      <div class="column">
        <router-link class="footer-link is-size-7" to="/home">Home</router-link> 
      </div> 
      <div class="column">
        <router-link class="footer-link is-size-7" to="/about">About</router-link>
      </div>
      <div class="column">
        <router-link class="footer-link is-size-7" to="/crowdfunding">Crowdfunding Campaign</router-link>
      </div>
      <div class="column">
        <router-link class="footer-link is-size-7" to="/team">Team</router-link>
      </div>
      <div class="column">
        <router-link class="footer-link is-size-7" to="/contact">Contact</router-link>
      </div>

      <div class="column is-one-quarter"></div>
    </div>
  </div> 
 
</template>

<script>

export default {
  name: 'FooterLinks'
}
</script>

<style scoped>
  .footer-link{
    color: #f8f8f8;
    text-decoration: underline;
  }
  .footer-link:hover{
    color: black;
  }
</style>
