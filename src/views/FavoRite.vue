<template>
    <div 
        class="w-full lg:w-5/6 h-20 text-white pr-8 pl-10 max-md:justify-end fixed z-20"
        :class="{ 'bg-black': isScroll, 'transition-all' : isScroll }"
    ></div>

    <div class="flex flex-wrap justify-start items-start gap-y-4 gap-x-px w-full lg:w-80-vw mt-8 lg:mt-0 min-h-screen text-lg bg-black p-8">
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