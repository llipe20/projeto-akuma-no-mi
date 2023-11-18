<template>
  <div class="flex flex-row justify-end items-start gap-0 p-0 m-0 relative w-screen bg-black min-h-screen">
    <NavBar />
    <div class="w-65 h-screen max-xl:hidden"></div>
    <router-view />
  </div>
</template>
<script>
import NavBar from './NavBar.vue'
export default {
  name : 'DashBoard',

  components : {
    NavBar
  }
}
</script>

