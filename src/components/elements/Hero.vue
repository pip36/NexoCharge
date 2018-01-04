<template>
  
  <div class="hero">
    <transition name="slide">
      <section class="hero is-bold" v-if="active">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-3 is-size-4-mobile has-text-white">
              <slot> </slot>
            </h1>
          </div>
        </div>
      </section>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'Hero',
  props: ['active']
}
</script>

<style scoped>
  .hero{
    background: #266591;
  }
  
  .slide-enter-active {
    animation: slideDown 0.6s;
  }
  @keyframes slideDown {
    0% {
      height: 0vh;
    }
    100% {
      height: 15vh;
    }
  }
</style>
