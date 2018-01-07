<template>
  <div class="crowdfunding">
    <navbar pageTitle="CROWDFUNDING"></navbar>
    <div class="container">
      <div class="coming-soon">
        <h1 class="title is-2"> Page Under Construction </h1>
        <p> Please continue browsing and check back soon for updates! </p>
      </div>
    </div>
    <footer-bar></footer-bar>  
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/elements/Footer'

export default {
  name: 'Crowdfunding',
  components: {
    'navbar': Navbar,
    'footer-bar': Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .coming-soon{
    margin-top: 20vh;
    margin-bottom: 20vh;
  }
</style>
