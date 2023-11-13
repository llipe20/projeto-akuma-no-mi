<template>
    <div class="flex flex-wrap justify-start items-start gap-4 w-full md:w-80-vw mt-8 md:mt-0 min-h-screen text-lg bg-black p-8">
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
                movies : this.$store.state.favorite || 0
            }
        }
}
</script>