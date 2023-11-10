<template>
    <div class="flex flex-col justify-start items-center gap-5 w-full min-h-screen text-lg bg-black">
        <HeaderView />

        <!-- filmes em alta -->
        <div class="flex items-center gap-5 min-w-full h-auto bg-purple-950 pl-10 pt-4 pb-4" v-if="hipes && hipes.length > 0">
            <CardView v-for="hipe in hipes" :key="hipe.id" :movie="hipe" />
        </div>
        <span v-else class="text-white">Carregando...</span>

        <!-- recomendados -->
         <div class="flex items-center gap-5 min-w-full h-auto bg-purple-950 pl-10 pt-4 pb-4" v-if="trending && trending.length > 0">
            <CardView v-for="trend in trending" :key="trend.id" :movie="trend" />
        </div>
        <span v-else class="text-white">Carregando...</span>
    </div>
</template>
<script>
import HeaderView from '../components/HeaaderView.vue'
import CardView from '../components/Card.vue'

export default {
    name : 'HomeView',

    components : {
        HeaderView, CardView
    },

    data() {
        return {
            hipes : null,
            trending : null,
        }
    },

    async mounted() {
        await this.$store.dispatch('getMovie', {
            endpoint : '/movie/top_rated?language=pt-BR&api_key=',
            mutation : 'getAlta'
        })
        this.hipes = this.$store.state.alta,

        await this.$store.dispatch('getMovie', {
            endpoint : '/trending/all/week?language=pt-BR&api_key=',
            mutation : 'getTrending'
        })
        this.trending = this.$store.state.trending
    }
}
</script>