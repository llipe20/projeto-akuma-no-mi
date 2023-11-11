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

    // Observa as mudanças de rota
    this.$router.afterEach((to, from) => {
      // 'to' é o objeto da rota que estamos indo
      // 'from' é o objeto da rota de onde estamos vindo

      console.log('Rota alterada:', to.path)
      console.log('Rota alterada:', from.path)
      // Faça o que quiser com a nova rota
    })
  }
}
</script>

<style>
  *::-webkit-scrollbar {
    display: none;
  }
</style>


