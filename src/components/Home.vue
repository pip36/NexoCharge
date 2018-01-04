<template>
  <div class="home">
    <navbar pageTitle="WELCOME"></navbar>
    <div class="container">
      <iframe 
        id="teaser-video"
        width="80%"
        src="https://www.youtube.com/embed/YBUmqq_nz9g">
      </iframe>
      <br>
      <router-link id="fund-button" class="button is-info" to="/crowdfunding">
        Fund us on Kickstarter!
      </router-link>

      <div class="info">
        <p>
          Nexocharge is a new business in London that wants 
          to offer the city an exciting new way of staying 
          online at all times. ‘Nexo’ is shortened for 'nexus' 
          meaning a network. We are bringing a network of portable 
          chargers for anyone to use for their own mobile devices, 
          which is where the ‘charge’ comes in. What’s going to 
          make you love us more is we are free to use.
        </p>
        <br>
        <p>
          We will be benefit London as we provide a service 
          that allows you to not be restricted in your daily 
          usage of your mobile devices, to conserve battery life, 
          and gives you the ability to use your tech city to the 
          fullest without the fear of your battery dying whilst you 
          are out and about.
        </p>
        <br>
        <p>
          The Mayor of London, Sadiq Khan, has recently said he wants 
          "London to be at the forefront of innovation and new 
          technology and to be a natural home for exciting new 
          companies that help Londoners". Nexocharge is exactly that. 
          We want Londoners to have full control and power over their 
          offline and online lives; something that’s not possible if 
          your mobile devices run out half-way through the day.
        </p>
        <br>

    
        <div class="has-text-centered">
          <router-link class="button is-large is-primary" to="/about">LEARN MORE</router-link> 
        </div>

        <br>

        <h2 class="title is-2 is-dark-blue"> SOCIAL MEDIA </h2>

        <div class="columns">
          <div class="column has-text-centered">
            <h3 class="subtitle is-4"> Twitter </h3>
            <div> 
              <a href="https://twitter.com/NexoCharge?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true">
                Follow @NexoCharge
              </a> 
            </div>
            <a class="twitter-timeline" data-width="300" data-height="600" href="https://twitter.com/NexoCharge?ref_src=twsrc%5Etfw">
              Tweets by NexoCharge
            </a> 
          </div>

          <div class="column has-text-centered">
            <h3 class="subtitle is-4"> Facebook </h3>
            <div 
              class="fb-page" 
              data-href="https://www.facebook.com/Nexocharge-160202047875438/" 
              data-tabs="timeline" 
              data-width="300" 
              data-height="600" 
              data-small-header="false" 
              data-adapt-container-width="true" 
              data-hide-cover="false" 
              data-show-facepile="true">
              <blockquote 
                cite="https://www.facebook.com/Nexocharge-160202047875438/" 
                class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/Nexocharge-160202047875438/">
                  Nexocharge
                </a>
              </blockquote>
            </div>
          </div>
        </div>   
      </div>  
    </div>

    <footer-bar> </footer-bar>    
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/elements/Footer'

export default {
  name: 'Home',
  components: {
    'navbar': Navbar,
    'footer-bar': Footer
  }
}
</script>

<style scoped>
  
  #fund-button{
    margin-top: 10px;
  }
  
  #teaser-video{
    margin-top: 20px;
    height: 60vh;
  }

  .info{
    text-align: left;
    margin-top: 40px;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  .is-dark-blue{
    color:#387299;
  }
</style>
