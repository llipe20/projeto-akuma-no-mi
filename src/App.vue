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

  async created() {
    await this.$store.dispatch('getMovie', {
        endpoint: '/trending/all/week?language=pt-BR&api_key=',
        mutation: 'getTrending'
    })

    await this.$store.dispatch('getMovie', {
        endpoint: '/movie/top_rated?language=pt-BR&api_key=',
        mutation: 'getAlta'
    })
  }
}
</script>

<style>
  *::-webkit-scrollbar {
    display: none;
  }
</style>


