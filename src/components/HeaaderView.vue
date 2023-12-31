<template>
    <div 
        class="flex flex-col justify-between items-center h-mobile lg:h-media bg-cover bg-no-repeat bg-center w-full" 
        :style="{ background: `url('https://image.tmdb.org/t/p/w1280${ movies && movies.length > 0 ? movies[value].backdrop_path : ''}')` }">

        <div class="vertical flex flex-col justify-between items-center w-full h-full">

            <div class="horizontal flex flex-col justify-center items-center w-full h-full relative">
                <NavGation class="top-0 right-0"/>
                
                <!-- Box de informações de filmes  -->
                <div class="flex flex-col justify-start gap-2 lg:gap-5 text-white pl-5 lg:pl-10 min-h-72 w-full text-base md:text-lg">
                    <h1 class="text-2xl md:text-4xl font-bold w-5/6">
                        {{ movies && movies.length > 0 ? movies[value].media_type == 'tv' ? movies[value].name : movies[value].title : 'Carregando...' }}
                    </h1>

                    <div class="flex gap-4">
                        <span>
                            {{ movies && movies.length > 0
                            ? movies[value].media_type === 'tv'
                                ? new Date(movies[value].first_air_date).getFullYear()
                                : new Date(movies[value].release_date).getFullYear()
                            : 'Carregando...' }}
                        </span>
                        <span>
                            {{ movies && movies.length > 0
                            ? movies[value].media_type === 'tv' ? 'serie' : 'movie' : 'Carregando...' }}
                        </span>
                        <span>
                            {{ movies && movies.length > 0 ? movies[value].original_language : 'Carregando...' }}
                        </span>
                    </div>

                    <div class="w-5/6  md:w-1/3">
                        <p>
                            {{ movies && movies.length > 0 ? movies[value].overview.slice(0, 100) + ' ...' : 'Carregando...' }}
                        </p>
                    </div>

                    <div class="flex gap-4">
                        <ButtonView 
                            :tag="span"
                            @click="LeeVsGaara()" 
                            class="flex justify-center items-center w-36 h-10  md:h-12 bg-purple-950 rounded-lg hover:scale-110" 
                        />

                        <ButtonView 
                            ref="btnFavorite" 
                            @click="toggleFavorite" 
                            :tag="favoriteIcon" 
                            :class="favoriteClass" 
                            class="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-lg hover:scale-110"
                        />
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
import NavGation from './Nav.vue'
import ButtonView from './Button.vue'

export default {
    name : 'HeaderView',

    components : {
        NavGation, ButtonView
    },

    data() {
        return {
            span : '<span>Watch now</span>',
            icon : '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">favorite</span>',
            value : 1,
            movies : [],
            isFavorite: false
        }
    },

    computed: {
        favoriteIcon() {
            return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>'
        },

        favoriteClass() {
            return {
                'bg-purple-950': this.isFavorite,
                'text-white': this.isFavorite,
                'bg-white': !this.isFavorite,
                'text-purple-950': !this.isFavorite,
            }
        }   
    },

    methods : {
        Destaque() {
            this.value = Math.floor(Math.random() * 20)
            this.movies = this.$store.state.trending
            return true
        },

        LeeVsGaara() {
            window.open('https://www.youtube.com/watch?v=VgDgWzBL7s4', '_blank')
        },

        toggleFavorite() {
            this.movies[this.value].isFavorite = true
            this.$store.dispatch('GetMutation', { 
                mutation: 'addFavorite', 
                data: this.movies[this.value] 
            })
            this.isFavorite = !this.isFavorite

            // Se não for mais favorito, remova-o do Vuex
            if (!this.isFavorite) {
                this.$store.dispatch('GetMutation', { 
                    mutation: 'removeFavorite', 
                    data: this.movies[this.value].id 
                })
            }
        }
    },

    created() {
        const stop = setInterval(() => {
            const gaia = this.Destaque()
            if(gaia) {
                this.isFavorite = this.movies[this.value]?.isFavorite || false
                clearInterval(stop)
            }
        }, 300)
    }
}
</script>

<style scoped>
    .horizontal {
        background-image: linear-gradient(to left, transparent, transparent, rgba(0, 0, 0, 0.611), black 85%)
    }

    .vertical {
        background-image: linear-gradient(to top, black 2%,transparent, transparent 90%)
    }
</style>