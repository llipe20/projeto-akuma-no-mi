<template>
    <div class="flex flex-wrap justify-start items-start gap-5 w-full md:w-80-vw min-h-screen text-lg bg-black p-8 mt-8 mb-4 md:mt-0">

        <!-- recomendados -->
        <div class="flex justify-center w-full relative pl-2">

            <ButtonView :tag="left" class="absolute flex justify-center items-center w-8 h-full bgl text-white top-0 left-1 opacity-30 hover:opacity-100 z-10"/>

            <div class="flex items-center gap-1 min-w-auto h-80 pt-2 pb-4 overflow-scroll overflow-y-hidden" v-if="trending && trending.length > 0">
                <CardView 
                    v-for="trend in trending" 
                    :key="trend.id" 
                    :movie="trend" 
                    @click="Mugen(trend)"
                />
            </div>
            <span v-else class="text-white text-center">Carregando...</span>

            <ButtonView :tag="right" class="absolute flex justify-center items-center w-10 h-full bgr text-white top-0 right-0 opacity-40 hover:opacity-100"/>
        </div>

        <OutDoor 
            v-if="trending && trending.length > 0"
            :movie="movie"
        />
        <span v-else class="text-white w-full text-center">Carregando..</span>
    </div>
</template>

<script>
import ButtonView from '../components/Button.vue'
import CardView from '../components/Card.vue'
import OutDoor from '../components/OutDoor.vue'

export default {
    name : 'TrendingView',

    components : {
        ButtonView, CardView, OutDoor
    },

    data() {
        return {
            trending : [],

            movie : null,

            left : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>', 

            right : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
        }
    },

    methods : {
        Destaque() {
            this.trending = [...this.$store.state.trending]
            this.movie = this.trending[0]
            return true
        },

        Mugen(data) {
            this.movie = data
        }
    },

    created() {
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