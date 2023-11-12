<template>
  <div class="flex flex-col justify-center items-start w-52 h-auto rounded-xl relative scale-90 hover:scale-95 hover:border hover:border-2 shadow cursor-pointer">

    <div class="w-full h-52 bg-black rounded-t-xl bg-cover bg-no-repeat" :style="{ 'background-image': `url('https://image.tmdb.org/t/p/w154${localMovie.poster_path}')` }">
    </div>

    <div class="w-52 h-24 gap-px pl-4 pr-4 pb-4 text-purple-950 bg-gray-300 rounded-b-xl pt-2">
        <h1 class="text-lg font-bold">
            {{ localMovie ? localMovie.media_type == 'tv' ? localMovie.name : localMovie.title : 'Carregando...' }}
        </h1>
        <span>
            {{ localMovie ? localMovie.media_type == 'tv' ? new Date(localMovie.first_air_date).getFullYear() : new Date(localMovie.release_date).getFullYear() : 'Carregando...' }}
        </span>
    </div>

    <ButtonView 
        ref="btnFavorite" 
        @click="toggleFavorite" 
        :tag="favoriteIcon" 
        :class="favoriteIconClasses" 
        class="flex justify-center items-center w-8 h-8 rounded-lg absolute right-4 top-4 shadow"/>
  </div>
</template>

<script>
import ButtonView from './Button.vue';

export default {
  name: 'CardView',

  components: {
    ButtonView,
  },

  props: {
    movie: Object,
  },

  data() {
    return {
      localMovie: { ...this.movie },
      isFavorite: this.movie.isFavorite || false,
    };
  },

  computed: {
    favoriteIcon() {
      return '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">favorite</span>';
    },

    favoriteIconClasses() {
      return {
        'bg-purple-950': this.isFavorite,
        'text-white': this.isFavorite,
        'bg-white': !this.isFavorite,
        'text-purple-950': !this.isFavorite,
      };
    },
  },

  methods: {
    toggleFavorite() {
      this.localMovie.isFavorite = true
      this.$store.dispatch('GetMutation', { mutation: 'addFavorite', data: this.localMovie })
      this.isFavorite = !this.isFavorite

      // Se não for mais favorito, remova-o do Vuex
      if (!this.isFavorite) {
        this.$store.dispatch('GetMutation', { mutation: 'removeFavorite', data: this.localMovie.id })
      }
    },
  },
};
</script>


