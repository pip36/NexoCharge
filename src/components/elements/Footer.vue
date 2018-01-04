<template>
  
  <footer class="footer">
    <div class="columns">
      <div class="column"></div>

      <div class="column">
        <p> Follow Us! </p>
        <social-follow-buttons></social-follow-buttons>
      </div>
        
      <div class="column">
        <p> Visit us on social media! </p>
        <social-media-links></social-media-links>
      </div>

      <div class="column"></div>
    </div>

    <footer-links></footer-links>
    <company-info></company-info>
  </footer>
 
</template>

<script>
import SocialMedia from '@/helpers/SocialMedia'
import SocialLinks from '@/components/elements/SocialLinks'
import SocialFollow from '@/components/elements/SocialFollowButtons'
import FooterLinks from '@/components/elements/FooterLinks'
import CompanyInfo from '@/components/elements/CompanyInfo'

export default {
  name: 'Footer',
  components: {
    'social-media-links': SocialLinks,
    'social-follow-buttons': SocialFollow,
    'footer-links': FooterLinks,
    'company-info': CompanyInfo
  },
  mounted () {
    SocialMedia.updateAll()
  }
}
</script>

<style scoped>
  footer{
    padding: 20px;
    background-color: #387299;
    color: #f8f8f8;
  } 

  .footer-links{
    margin-top: -2vh;
    margin-bottom: 2vh;
  }
</style>
