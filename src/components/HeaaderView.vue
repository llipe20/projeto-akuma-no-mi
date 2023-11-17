<template>
    <div 
        class="flex flex-col justify-between items-center w-full h-media bg-cover bg-no-repeat bg-center" 
        :style="{ background: `url('https://image.tmdb.org/t/p/w1280${ movies && movies.length > 0 ? movies[value].backdrop_path : ''}')` }">

        <div class="vertical flex flex-col justify-between items-center w-full h-full">

            <div class="horizontal flex flex-col justify-between items-center w-full h-full">
                <NavGation />

                <div class="h-20 w-full"></div>
                
                <!-- Box de informações de filmes  -->
                <div class="flex flex-col justify-start gap-2 lg:gap-5 text-white mb-28 pl-5 lg:pl-10 w-full text-lg">
                    <h1 class="text-3xl md:text-4xl font-bold w-5/6">
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
                            class="flex justify-center items-center w-36 h-12 bg-purple-950 rounded-lg hover:scale-110" />

                        <ButtonView 
                            ref="btnFavorite" 
                            @click="toggleFavorite" 
                            :tag="favoriteIcon" 
                            :class="favoriteClass" 
                            class="flex justify-center items-center w-12 h-12 rounded-lg hover:scale-110"/>
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
            return '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">favorite</span>';
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