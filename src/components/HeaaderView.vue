<template>
    <div class="flex flex-col justify-between items-center w-full h-4/5" :style="{ background: `url('https://image.tmdb.org/t/p/w1280${ movies && movies.length > 0 ? movies[value].backdrop_path : ''}')` }">

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
                        <ButtonView :tag="span" class="flex justify-center items-center w-32 h-10 bg-purple-950 rounded-lg" />

                        <ButtonView :tag="icon" class="flex justify-center items-center w-10 h-10 bg-white rounded-lg text-purple-900"/>
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

            icon : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>',

            value : 1,
            movies : []
        }
    },

    methods : {
         Destaque() {
            this.value = Math.floor(Math.random() * 20)
            this.movies = this.$store.state.movies
            console.log(this.movies[this.value])
        }
    },
    created() {
        this.$store.dispatch('getMovie', '/trending/all/week?language=pt-BR&api_key=').then(() => {
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