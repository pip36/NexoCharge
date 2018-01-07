<template>
  
  <div :class="{'notification': true, 'is-danger': type==='danger', 'is-info': type==='success'}">
    <button @click="close()" class="delete"></button>
    <slot> </slot>
  </div>

</template>

<script>
export default {
  name: 'Notification',
  props: ['type'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .notification{
    margin-top: 10px;
  }
</style>
