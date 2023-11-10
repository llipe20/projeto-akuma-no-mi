<template>
    <div class="flex flex-col justify-between items-center w-full h-media bg-cover bg-no-repeat" :style="{ background: `url('https://image.tmdb.org/t/p/w1280${ movies && movies.length > 0 ? movies[value].backdrop_path : ''}')` }">

        <div class="vertical flex flex-col justify-between items-center w-full h-full">

            <div class="horizontal flex flex-col justify-between items-center w-full h-full">
                <NavGation />
                
                <!-- Box de informações de filmes  -->
                <div class="flex flex-col justify-start gap-5 text-white mb-28 pl-10 w-full text-lg">
                    <h1 class="text-4xl font-bold">
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

                    <div class="w-1/3">
                        <p>
                            {{ movies && movies.length > 0 ? movies[value].overview.slice(0, 100) + ' ...' : 'Carregando...' }}
                        </p>
                    </div>

                    <div class="flex gap-4">
                        <ButtonView :tag="span" class="flex justify-center items-center w-32 h-10 bg-purple-950 rounded-lg hover:scale-110" />

                        <ButtonView :tag="icon" class="flex justify-center items-center w-10 h-10 bg-white rounded-lg text-purple-900  hover:scale-110"/>
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
            movies : []
        }
    },

    methods : {
         Destaque() {
            this.value = Math.floor(Math.random() * 20)
            this.movies = this.$store.state.trending
        }
    },
    created() {
        this.$store.dispatch('getMovie', {
            endpoint : '/trending/all/week?language=pt-BR&api_key=',
            mutation : 'getTrending'
        }).then(() => {
            this.Destaque()
        })
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