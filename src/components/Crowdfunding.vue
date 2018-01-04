<template>
  <div class="crowdfunding">
    <navbar pageTitle="CROWDFUNDING"></navbar>
    <div class="container">
  
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

</style>
