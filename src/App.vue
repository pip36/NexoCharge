<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SocialMedia from '@/helpers/SocialMedia'
import firebase from 'firebase'

export default {
  name: 'app',
  created () {
    SocialMedia.loadAll()

    firebase.auth().signInAnonymously().catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Encode Sans Expanded', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
