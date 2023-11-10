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
  }
}
</script>

<style>
  *::-webkit-scrollbar {
    display: none;
  }
</style>


