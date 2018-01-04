<template>
  
  <div class="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img height="28" src="/static/nexoLogoLarge.png"> <strong id="brand-name">NEXOCHARGE</strong>
        </router-link>

        <button 
          @click="toggleNavbar()" 
          class="button navbar-burger" 
          :class="{'is-active': navbarOpen}">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div :class="{'navbar-menu': true, 'is-active': navbarOpen}">
        <div class="navbar-start">

        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/home">HOME</router-link>
          <router-link class="navbar-item" to="/about">ABOUT</router-link>
          <router-link class="navbar-item" to="/crowdfunding">CROWDFUNDING CAMPAIGN</router-link>
          <router-link class="navbar-item" to="/team">TEAM</router-link>
          <router-link class="navbar-item" to="/contact">CONTACT</router-link>
        </div>
      </div>
    </nav>

    <hero :active="heroActive">{{ pageTitle }}</hero>
  </div>
</template>

<script>
import Hero from '@/components/elements/Hero'

export default {
  name: 'Navbar',
  components: {
    'hero': Hero
  },
  props: ['pageTitle'],
  data () {
    return {
      navbarOpen: false,
      heroActive: false
    }
  },
  mounted () {
    this.heroActive = true
  },
  methods: {
    toggleNavbar () {
      this.navbarOpen ? this.navbarOpen = false : this.navbarOpen = true
    }
  }
}
</script>

<style scoped>
  #brand-name {
    font-weight: bolder;
  }
  .navbar{
    background: #266591;
  }
  .navbar-burger{
    color: #f8f8f8;
    background: #266591;
    border: none;
  }
  .navbar-menu{
    background: #266591;
  }
  .navbar a{
    color: #f8f8f8;
  }

  a:hover{
    color:black;
  }
</style>
