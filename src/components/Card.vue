<template>
  <div class="flex flex-col justify-center items-start gap-4 w-52 bg-gray-300 h-auto rounded-xl relative scale-95 hover:scale-100">
    <div class="w-full h-52 bg-black rounded-t-xl bg-cover bg-no-repeat" :style="{'background-image': `url('https://image.tmdb.org/t/p/w154${movie.poster_path}')`}">
    </div>

    <div class="w-52 h-24 gap-px pl-4 pr-4 pb-4 text-purple-950">
      <h1 class="text-lg font-bold">
        {{ movie ? movie.media_type == 'tv' ? movie.name : movie.title : 'Carregando...'}}
      </h1>
      <span>
        {{ movie ? movie.media_type == 'tv' ? new Date(movie.first_air_date).getFullYear() : new Date(movie.release_date).getFullYear() : 'Carregando...' }}
      </span>
    </div>
    
    <ButtonView 
      ref="btnFavorite" 
      @click="toggleFavorite" 
      :tag="svg" 
      :class="{
        'bg-purple-950': isFavorite, 
        'text-white': isFavorite, 
        'bg-white': !isFavorite, 
        'text-purple-950': !isFavorite }"
      class="flex justify-center items-center w-8 h-8 rounded-lg absolute right-4 top-4 shadow"/>
  </div>
</template>

<script>
import ButtonView from './Button.vue'

export default {
  name: 'CardView',

  components: {
    ButtonView
  },

  props: {
    movie: Object
  },

  data() {
    return {
      svg: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">favorite</span>',

      isFavorite: this.movie.isFavorite || false
    }
  },

  methods: {
    toggleFavorite() {
      this.$store.dispatch('GetMutation', this.movie)
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

