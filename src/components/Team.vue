<template>
  <div class="team">
    <navbar pageTitle="OUR TEAM"></navbar> 
    <section class="main">
      <div class="container">
        <div class="profiles">
          <div class="columns">
            <div class="column">
              <team-profile> 
                <h2 slot="name"> Devon Smith </h2>
                <h3 slot="company-position"> CEO </h3>
                <img slot="profile-pic" src="/static/profileDS.jpg" class="rounded">
                <p slot="email">
                  devon.smith@nexocharge.co.uk
                </p>
                <p slot="bio"> 
                  As the spearhead of the business I oversee the direction in which we are headed. 
                  With Nexocharge being at the early stage of the business cycle it's essential to 
                  be flexible to overcome any obstacles that may arise. I ensure we are perfectly 
                  equipped in all sections of the business to have Nexocharge overcome any obstacles
                  and reach it's full potiential. In my free time you will see me playing my number 1, Rugby Union. 
                </p>
              </team-profile>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <team-profile> 
                <h2 slot="name"> Paulius Bogusevicius </h2>
                <h3 slot="company-position"> Chief financial officer </h3>
                <img slot="profile-pic" src="/static/profilePB.jpg" class="rounded">

                <p slot="email">
                  pbogus.nexocharge@gmail.com
                </p> 

                <p slot="bio"> 
                  As the CFO my role is to ensure that our financials are air tight, as well as to 
                  make sure that all parts of the team have enough money allocated to function effectively. 
                  My aim is to generate enough funds for all of our sectors, so that they can work efficiently 
                  at their given task. In my spare time I enjoy playing basketball and reading books. 
                </p>
              </team-profile>
            </div>
            <div class="column">
              <team-profile> 
                <h2 slot="name"> Lara Eyre </h2>
                <h3 slot="company-position"> Advertising and sales liaison director </h3>
                <img slot="profile-pic" src="/static/profileLE.jpg" class="rounded">
               
                <p slot="email">
                  eyre.nexocharge@gmail.com
                </p> 

                <p slot="bio"> 
                  My role is to help manage the creative advertising that will take place in the 
                  business for both external and internal projects. I will also be liaising with clients to 
                  ensure we get the most from our customers and they too get the best from us. I am 100% dedicated 
                  to my team and my work and this helps me build the relationships we need in order to be a thriving business. 
                  My free time will usually be spent on going out and about with friends and colleagues, wherever and whenever. 
                </p>
              </team-profile>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <team-profile> 
                <h2 slot="name"> Louie Mcgrath </h2>
                <h3 slot="company-position"> Sales Director </h3>
                <img slot="profile-pic" src="/static/profileLM.jpg" class="rounded">
            
                <p slot="email">
                  mcgrath.nexocharge@gmail.com
                </p> 

                <p slot="bio"> 
                  As the head of sales my role consists of pitching to potential clients. My aim is to attract 
                  businesses that want brand exposure and generate interest in working with Nexocharge. I ensure our clients 
                  get the best experience possible when doing business with us and I am very open and friendly to help with 
                  any issues or queries clients may have. In my spare time you might find me playing football or in the pub 
                  having a cold one. 
                </p>
              </team-profile>
            </div>
            <div class="column">
              <team-profile> 
                <h2 slot="name"> Monika Lupeikaite </h2>
                <h3 slot="company-position"> Marketing director </h3>
                <img slot="profile-pic" src="/static/profileML.jpg" class="rounded">
               
                <p slot="email">
                  lupeikaite.nexocharge@gmail.com
                </p> 
               
                <p slot="bio"> 
                  My role as a marketing director is to create material and content for the business. 
                  My aim is to keep our customers updated on our social media platforms and to promote the product 
                  online to gain wider audiences. In my free time you will see me working on photography and videography. 
                </p>
              </team-profile>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-bar></footer-bar>  
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/elements/Footer'
import TeamProfile from '@/components/elements/TeamProfile'

export default {
  name: 'Team',
  components: {
    'navbar': Navbar,
    'footer-bar': Footer,
    'team-profile': TeamProfile
  },
  data () {
    return {
      isHeroActive: false
    }
  },
  mounted () {
    this.isHeroActive = true
  }
}
</script>

<style scoped>

  .profiles{
    margin-top: 20px;
    margin-bottom: 60px;
  }

  .rounded{
    border-radius: 50%;
  }

  

</style>
