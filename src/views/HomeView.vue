<template>
    <div class="flex flex-col justify-start items-center w-full lg:w-80-vw min-h-screen text-lg bg-black">
        <HeaderView />

        <!-- filmes em alta -->
        <div class=" flex justify-center items-center w-full h-72 relative lg:pl-2">

            <ButtonView :tag="left" class="hidden lg:flex absolute justify-center items-center w-10 h-full bgl text-white top-0 left-1 opacity-30 hover:opacity-100 ml-1 z-10"/>

            <div class="flex items-center w-auto h-72 pl-4 pt-4 overflow-scroll" v-if="hipes && hipes.length > 0">
                <CardView v-for="hipe in hipes" :key="hipe.id" :movie="hipe"/>
            </div>
            <span v-else class="text-white w-full text-center">Carregando...</span>

            <ButtonView :tag="right" class="hidden lg:flex absolute justify-center items-center w-10 h-full bgr text-white top-0 right-5 md:right-0 opacity-40 hover:opacity-100"/>
        </div>

        <!-- recomendados -->
        <div class="flex justify-center items-center w-full h-72 relative lg:pl-2">

            <ButtonView :tag="left" class="hidden lg:flex absolute justify-center items-center w-10 h-full bgl text-white top-0 left-1 opacity-30 hover:opacity-100 ml-1 z-10"/>

            <div class="flex items-center min-w-auto h-72 pl-4 pt-4 pb-6 overflow-scroll" v-if="trending && trending.length > 0"> 
                <CardView v-for="trend in trending" :key="trend.id" :movie="trend" />
            </div>
            <span v-else class="text-white text-center w-full">Carregando...</span>

            <ButtonView :tag="right" class="hidden lg:flex absolute justify-center items-center w-10 h-full bgr text-white top-0 right-5 md:right-0 opacity-40 hover:opacity-100"/>
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
            hipes : [],
            trending : [],

            left : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>', 

            right : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
        }
    },

    methods : {
        Destaque() {
            this.hipes = [...this.$store.state.alta]
            this.trending = [...this.$store.state.trending]
            return true
        }
    },

    mounted() {
        const stop = setInterval(() => {
            const gaia = this.Destaque()
            if(gaia) {
                clearInterval(stop)
            }
        }, 500)
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