<template>
    <div class="flex flex-col justify-start w-full xl:w-80-vw items-center min-h-screen text-lg bg-black">
        <HeaderView />

        <h2 class="text-white w-full text-start pl-6 md:pl-8 xl:pl-10 font-bold text-lg md:text-2xl">Recomendados</h2>

        <!-- filmes recomendados -->
        <div class="flex justify-start items-center w-90 h-72 relative md:pt-6 overflow-hidden">

            <ButtonView 
                @click="scrollLeft('rol-reco')" 
                :tag="left" 
                class="hidden lg:flex absolute justify-center items-center w-12 h-full bgl text-white top-0 left-1- opacity-30 hover:opacity-100 ml-1 z-10"
            />

            <div
                id="rol-reco" 
                class="flex items-center w-auto h-72 pb-6" v-if="hipes && hipes.length > 0"
            >
                <CardView 
                    v-for="hipe in hipes" 
                    :key="hipe.id" 
                    :movie="hipe"
                />
            </div>
            <span v-else class="text-white w-full text-center">Carregando...</span>

            <ButtonView 
                @click="scrollRight('rol-reco')" 
                :tag="right" 
                class="hidden lg:flex absolute justify-center items-center w-12 h-full bgr text-white top-0 right-5 md:right-0 opacity-40 hover:opacity-100"
            />
        </div>

        <h2 class="text-white w-full text-start md:pl-8 xl:pl-10 pl-6 font-bold text-lg md:text-2xl">Em alta</h2>

        <!-- em alta -->
        <div class="flex justify-start items-center w-90 h-72 relative md:pt-6 overflow-hidden">

            <ButtonView 
                @click="scrollLeft('rol-alt')" 
                :tag="left" 
                class="hidden lg:flex absolute justify-center items-center w-12 h-full bgl text-white top-0 left-1- opacity-30 hover:opacity-100 ml-1 z-10"
            />

            <div 
                id="rol-alt"
                class="flex items-center min-w-auto h-72 pb-6" 
                v-if="trending && trending.length > 0"
            > 
                <CardView 
                    v-for="trend in trending" 
                    :key="trend.id" 
                    :movie="trend" 
                />
            </div>
            <span v-else class="text-white text-center w-full">Carregando...</span>

            <ButtonView 
                @click="scrollRight('rol-alt')" 
                :tag="right" 
                class="hidden lg:flex absolute justify-center items-center w-12 h-full bgr text-white top-0 right-5 md:right-0 opacity-40 hover:opacity-100"
            />
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

            left : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>', 

            right : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>',

            widthMax : 0,

            isScroll : false,
        }
    },

    methods : {
        Destaque() {
            this.hipes = [...this.$store.state.alta]
            this.trending = [...this.$store.state.trending]
            return true
        },

        // evento para lado direito
        scrollRight(element) {
            let ul = document.getElementById(`${element}`)
            let width = window.innerWidth
            let styles = window.getComputedStyle(ul);
            let margin = parseFloat(styles.marginLeft)

            console.log(ul)

            if (margin >= ( - (this.widthMax - width)) || ((width + margin) - this.widthMax) < width / 4) 
            {
                margin = this.widthMax - width - 1400
            }
            else 
            {
                margin -= width / 4
            }

            ul.style.marginLeft = `${margin}px`
            ul.style.transition = 'all 1s'
        },

        // evento para lado esquerdo
        scrollLeft(element) {
            let ul = document.getElementById(`${element}`)
            console.log(ul)
            let width = window.innerWidth
            let styles = window.getComputedStyle(ul);
            let margin = parseFloat(styles.marginLeft)

            if (margin >= 0 || margin > (- width / 4)) {
                margin = 0
            }
            else {
                margin += width / 4
            }

            ul.style.marginLeft = `${margin}px`
            ul.style.transition = 'all 1s'
        }
    },

    mounted() {
        const stop = setInterval(() => {
            const gaia = this.Destaque()
            if(gaia) {
                clearInterval(stop)
            }
        }, 500)

        window.addEventListener('resize', () => {
            if (window.innerWidth > 800) {
                return this.widthMax = 20 * 210
            }
            else {
                return this.widthMax = 20 * 176
            }
        })
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

    html {
        scroll-behavior: smooth;
    }
</style>