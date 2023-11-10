<template>
    <div class="flex flex-col justify-start items-center gap-5 w-5/6 min-h-screen text-lg bg-black">
        <HeaderView />

        <!-- filmes em alta -->
        <div class="w-full h-auto relative">

            <ButtonView :tag="left" class="absolute flex justify-center items-center w-10 h-full bgl text-white top-0 left-1 opacity-30 hover:opacity-100 ml-1 z-10"/>

            <div class="flex items-center gap-2 w-auto h-auto pl-6 pt-4 pb-4 overflow-scroll" v-if="hipes && hipes.length > 0">
                <CardView v-for="hipe in hipes" :key="hipe.id" :movie="hipe"/>
            </div>
            <span v-else class="text-white">Carregando...</span>

            <ButtonView :tag="right" class="absolute flex justify-center items-center w-10 h-full bgr text-white top-0 right-0 opacity-40 hover:opacity-100"/>
        </div>

        <!-- recomendados -->
        <div class="w-full h-auto relative">

            <ButtonView :tag="left" class="absolute flex justify-center items-center w-10 h-full bgl text-white top-0 left-1 opacity-30 hover:opacity-100 ml-1 z-10"/>

            <div class="flex items-center gap-5 min-w-auto h-auto pl-6 pt-4 pb-4 overflow-scroll" v-if="trending && trending.length > 0">
                <CardView v-for="trend in trending" :key="trend.id" :movie="trend" />
            </div>
            <span v-else class="text-white">Carregando...</span>

            <ButtonView :tag="right" class="absolute flex justify-center items-center w-10 h-full bgr text-white top-0 right-0 opacity-40 hover:opacity-100"/>
        </div>
    </div>
</template>
<script>
import HeaderView from '../components/HeaaderView.vue'
import CardView from '../components/Card.vue'
import ButtonView from '../components/Button.vue'

export default {
    name : 'HomeView',

    components : {
        HeaderView, CardView, ButtonView
    },

    data() {
        return {
            hipes : null,
            trending : null,

            left : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>', 

            right : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
        }
    },

    async mounted() {
        await this.$store.dispatch('getMovie', {
            endpoint: '/movie/top_rated?language=pt-BR&api_key=',
            mutation: 'getAlta'
        });
        this.hipes = this.$store.state.alta.map(movie => ({ ...movie, isFavorite: movie.isFavorite || false }));

        await this.$store.dispatch('getMovie', {
            endpoint: '/trending/all/week?language=pt-BR&api_key=',
            mutation: 'getTrending'
        });
        this.trending = this.$store.state.trending.map(movie => ({ ...movie, isFavorite: movie.isFavorite || false }));
    }
}
</script>

<style scoped>
    .bgl {
        background: linear-gradient(to left, transparent, black);
    }

    .bgr {
        background: linear-gradient(to left, black, transparent);
    }
</style>