<template>
  
  <div class="team-profile">
    <div class="box">
      <h2 class="title is-4"><slot name="name"></slot></h2>
      <h3 class="subtitle is-6"><slot name="company-position"></slot></h3>
      
      <div class="columns is-vcentered">
        <div class="column">       
          <slot name="profile-pic"></slot>
          <slot name="email"></slot>
        </div>
             
        <div class="column bio">     
          <p><slot name="bio"></slot></p>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'TeamProfile'
}
</script>

<style scoped>
  h2{
    color:#f8f8f8;
    font-weight: bold;
  }

  h3{
    color:#f8f8f8;
  }

  .email{
    text-decoration: underline;
    color: #f8f8f8;
  }

  .email:hover{
     color:#387299;
  }

  .bio{
    text-align: left;
    color: #f8f8f8
  }

  .team-profile{
    height: 100%;
  }

  .box{
    height: 100%;
    border-radius: 0px 100px 100px 0px;
    background: rgba(7, 29, 66, 0.8);
  }
</style>
