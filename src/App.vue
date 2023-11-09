<template>
<div>
  <DashBoard />
</div>
  
</template>

<script>
import DashBoard from './components/DashBoard.vue'
export default {
  name : 'App',

  components : {
    DashBoard
  },

  created() {
    this.$store.dispatch('getMovie', '/trending/all/week?language=pt-BR&api_key=')
  }
}
</script>


