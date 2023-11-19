<template>
  <div class="h-screen overflow-hidden">
    <DashBoard  v-if="!login"/>
    <LoginPage v-else />
  </div>
</template>

<script>
import DashBoard from './components/DashBoard.vue'
import LoginPage from './views/LoginPage.vue'

export default {
  name : 'App',

  components : {
    DashBoard, LoginPage
  },

  computed: {
      login() {
        return this.$store.state.login
      }
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

  html {
    scroll-behavior: smooth;
  }
</style>


