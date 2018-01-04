<template>

  <div class="social-media-icons">
    <div class="is-inline-flex">
      <a href="https://twitter.com/NexoCharge?ref_src=twsrc%5Etfw" 
        class="twitter-follow-button" 
        data-size="large" 
        data-show-screen-name="false" 
        data-show-count="false">Follow @NexoCharge
      </a>

      <div class="fb-like" 
        data-href="https://www.facebook.com/Nexocharge-160202047875438/" 
        data-layout="button" 
        data-action="like" 
        data-size="large" 
        data-show-faces="false" 
        data-share="false">
      </div>

      <a href='https://www.instagram.com/nexocharge/' target='_blank'>
        <img src="/static/instagramLogo.png">
      </a>           
    </div>
  </div>
 
</template>

<script>
import SocialMedia from '@/helpers/SocialMedia'

export default {
  name: 'SocialFollowButtons',
  mounted () {
    SocialMedia.updateAll()
  }
}
</script>

<style scoped>
  
</style>
