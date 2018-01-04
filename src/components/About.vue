<template>
  <div class="about">
    <navbar pageTitle="ABOUT"></navbar>
    <div class="container">
      <div class="top-section">
        <div class="box" id="mission">
          <h2 class="subtitle is-4"> OUR MISSION </h2>
          <p class="is-size-7-mobile"> We are a new business with an aim to make the 
            city we live in smarter and more connected. 
            Today's interests is in technology and we're 
            trying to make it easier to access. </p> 
        </div>
      
        <div class="columns has-text-centered">
          <div class="column">  </div>
          <div class="column">  </div>
          <div class="column"> 
            <button @click="scrollTo('product')" class="button is-large is-primary">
              PRODUCT INFORMATION
            </button> 
          </div>
          <div class="column"> 
            <button @click="scrollTo('users')" class="button is-large is-link">
              FOR USERS
            </button> 
          </div>
          <div class="column"> 
            <button @click="scrollTo('businesses')" class="button is-large is-info">
              FOR BUSINESSES
            </button> 
          </div>
          <div class="column">  </div>
          <div class="column">  </div>
        </div>
      </div>
    

      <div class="box" id="product">  
        <h2 class="subtitle is-4"> PRODUCT INFORMATION </h2>
        <p class="is-size-7-mobile"> Nexocharge is a network of portable chargers around London capable of providing 
          power to any of the main mobile devices. <br> <br>

          70% of people we have surveyed stated that their mobile devices run out of battery too quickly. <br> <br>

    ​        Nexocharge allows users to pick up a nexo (our custom portable charger), while out around the 
          city, at any Nexo docking station. When they are finished with the portable charger the user can simply 
          deposit it at any docking station they pass throughout their day. <br> <br>

          The best part is that this is absolutely free! All you need to do is download the Nexocharge app 
          to have access to a Nexo whenever you need it. <br> <br>

          The way Nexocharge is free is by advertisements. However, unlike typical advertisers and tools 
          that don't care about your likes and dislikes, we provide a personalised advertising system. 
          This means the adverts you are presented with are ones that you would have told us you are interested
          in by telling us what your preferences are when registering on the Nexocharge app. This makes the 
          adverts we show you beneficial, as we bring the product or service you want straight to your phone.
        </p>  
      </div>

      <div class="box" id="users">
        <h2 class="subtitle is-4"> FOR USERS </h2>
        <p class="is-size-7-mobile"> 
          Mobile devices are amazing aren't they? <br> <br>

          You can book a taxi and it will arrive instantly, you can order food and it will be delivered
          within minutes, transfer money with a few clicks and reserve seats or tickets for an event 
          you're on your way to. The list is practically endless when it comes to what you can do with your mobile device. <br> <br>

  ​        But there's one problem… <br> <br>
        
          What if it runs out of battery while out and about? Then what? <br> <br>

          The Nexocharge team understand the desire and necessity that people universally have when it comes to being connected. 
          That being, connecting with friends and family or having the power to access any information they want via their 
          mobile phone. Nexocharge aims to eliminate the fear of being disconnected. </p>
          <div class="columns poster-block">
            <div class="column">
              <figure class="image poster">
                <img src="/static/users1.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image poster">
                <img src="/static/users2.jpg">
              </figure>
            </div>      
          </div> 
          <p class="is-size-7-mobile"> 
            Nexocharge also wants to assist in making sure we can use our city to the fullest. With London becoming smarter 
            at a rapid speed, your mobile devices will become more important than they already are when it comes to journeying
            around our capital. So having access to a source of power is essential. Nexocharge is here.
          </p>
      </div>

      <div class="box" id="businesses">  
        <h2 class="subtitle is-4"> FOR BUSINESSES </h2>
        <p class="is-size-7-mobile">       
          Nexocharge is an innovator in the advertising distribution market. We have created a service that covers all demographics
          in London and that will have significant traction once launched. With Londoners becoming more dependent on their 
          mobile devices for bookings, orders, video consuming and connecting with others through social media. 
          It takes a tole on the battery life. This is where Nexocharge comes into play. <br> <br>

          Your business can advertise with Nexocharge to take advantage of the high demand of the service and thus 
          increase your business exposure. <br> <br>

  ​        Our advertising distribution channel is one that gives a breath of fresh air to a stale and stagnant advertising industry. 
          We have created new technologies and systems to innovate the way adverts are presented and viewed in both its digital 
          and physical appearance. <br> <br>
        
        <div class="columns poster-block">
          <div class="column">
            <figure class="image poster">
              <img src="/static/bus1.jpg">
            </figure>
          </div>
          <div class="column">
            <figure class="image poster">
              <img src="/static/bus2.jpg">
            </figure>
          </div>      
        </div> 

        <p class="is-size-7-mobile"> 
          Unlike our competitors, the Nexocharge team are adamant to make this service accessible and beneficial 
          to both small and large businesses. That's why advertising with Nexocharge starts from £79 a month.
        </p>

        <div class="columns ">
          <div class="column has-text-centered">
            <figure class="image poster has-text-centered">
              <img src="/static/bus3.jpg">
            </figure>
          </div>
          <div class="column">
            <figure class="image poster">
              <img src="/static/bus4.jpg">
            </figure>
          </div>      
        </div> 
      </div>
    </div>

    <footer-bar></footer-bar>  
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/elements/Footer'

export default {
  name: 'About',
  components: {
    'navbar': Navbar,
    'footer-bar': Footer
  },
  methods: {
    scrollTo (section) {
      document.querySelector('#' + section).scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}
</script>

<style scoped>
  h1{
    margin-top: 10px;
  }

  @media screen and (max-device-width: 1023px){
    .top-section{
      background-image: url('/static/london-c.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: -10px;
    }
  }

  @media screen and (min-device-width: 1024px){
    .about{
      background-image: url('/static/london-c.jpg');
      min-height: 100vh;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  #mission{
    max-width: 400px;
    margin-left: auto; 
    margin-right: auto;
    text-align: center;
  }

  #mission p{
    font-style: italic;
  }

  .box{
    margin-top: 10px;
    background: rgba(7, 29, 66, 0.8);
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    color: #f8f8f8;
  }

  .box h2{
    color: #f8f8f8;
  }
  
  .poster{
    margin-top: 10px;
  }

  .poster img{
    max-width: 450px;
    opacity: 1.0;
    margin-left: auto;
    margin-right: auto;
  }
</style>
