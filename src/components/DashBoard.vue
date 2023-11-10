<template>
  <div class="flex flex-row justify-start items-start gap-0 p-0 m-0 relative">
    <NavBar class="fixed"/>
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

