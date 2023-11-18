<template>
    <div class="flex flex-row flex-wrap justify-start items-start gap-0 w-full xl:w-80-vw mt-10 xl:mt-0 min-h-screen text-lg bg-black p-8 relative">

        <div 
            class="w-full xl:w-5/6 h-20 text-white left-0 top-0 max-md:justify-end fixed z-20"
            :class="{ 'bg-black': isScroll, 'transition-all' : isScroll }"
        ></div>

        <CardView 
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        />      
    </div>
</template>

<script>
import CardView from '../components/Card.vue'
export default {
    name : 'FavoritePage',

    components : {
        CardView
    },

    data() {
        return {
            movies : this.$store.state.favorite || 0,
            isScroll : false
        }
    },

    mounted() {
        window.addEventListener('scroll', this.Gaia)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.Gaia);
    },

    methods : {
        Gaia() {
            this.isScroll = window.scrollY > 5
        },
    }
}
</script>