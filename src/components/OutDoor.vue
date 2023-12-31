<template>
    <div 
        class="flex container shadow"
    >
        <!-- CARTAZ DO FILME-->
        <div 
            class="flex box-cartaz overflow-hidden border"
        >
            <img 
                :src="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`" :alt="`${movie.id}`"  
            >
        </div>

        <!-- CAIXA DE INFORMAÇÕES -->
        <div class="flex box-content">

            <!-- Box de titulo -->
            <div class="flex box-title">
                <h2 class="title">
                   {{ movie.media_type == 'tv' ? movie.name : movie.title }}
                </h2>

                <div class="flex box-nota">
                    <span class="material-symbols-outlined" style="color: yellow;">
                        star_half
                    </span>
                    <span class="text-info">
                        {{ movie.vote_average.toFixed(1) }}
                    </span>
                </div>
            </div>

            <!-- Box de informações do filme -->
            <div class="flex box-info">
                <span class="text-info">
                    {{ movie.media_type == 'tv' ? new Date(movie.first_air_date).getFullYear() : new Date(movie.release_date).getFullYear() }}
                </span>

                <span class="text-info">
                    {{ movie.media_type == 'tv' ? 'serie' : 'movie' }}
                </span>

                <span class="text-info">
                    {{ movie.popularity }} views
                </span>
            </div>

            <!-- Box de sinopse -->
            <div class="flex box-sinopse">
                <p class="text-info">
                    {{ movie.overview }}
                </p>
            </div>

            <!-- Box de botões -->
            <div class="flex box-botton text-white gap-5">
                <ButtonView 
                    :tag="span" 
                    @click="LeeVsGaara()"
                    class="flex justify-center items-center w-32 h-12 bg-purple-950 rounded-lg hover:scale-110 cursor-pointer" />

                <ButtonView  
                    :tag="favoriteIcon" 
                    :class="favoriteClass" 
                    @click="toggleFavorite()"
                    class="flex justify-center items-center w-12 h-12 rounded-lg hover:scale-110 cursor-pointer"/>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonView from './Button.vue'

export default {
    name : 'OutDoor',

    components : {
        ButtonView
    },

    props : {
        movie : Object
    },

    data() {
        return {
            span : '<span>Watch now</span>',

            isFavorite : false,
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
        LeeVsGaara() {
            window.open('https://www.youtube.com/watch?v=VgDgWzBL7s4', '_blank')
        },

        toggleFavorite() {
            const movieCopy = { ...this.movie };
            movieCopy.isFavorite = true
            this.$store.dispatch('GetMutation', { 
                mutation: 'addFavorite', 
                data: movieCopy 
            })
            this.isFavorite = !this.isFavorite

            // Se não for mais favorito, remova-o do Vuex
            if (!this.isFavorite) {
                this.$store.dispatch('GetMutation', { 
                    mutation: 'removeFavorite', 
                    data: this.movie.id 
                })
            }
        }
    }
}
</script>

<style scoped>
    .flex  {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .container {
        background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgb(47, 1, 65) 100%);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 20px;
        margin-left: 10px;
        width: 100%;
        height: auto;
        border-radius: 15px;
        gap: 0;
        border: 1px solid white;
    }

    .box-cartaz {
        height: auto;
        width: auto;
        border: 1px solid rgba(128, 128, 128, 0.215);
        border-radius: 15px;
    }

    .box-content {
        flex-direction: column;
        height: auto;
        padding: 20px;
        width: 100%;
        gap: 15px;
    }

    .box-title {
        justify-content: space-between;
        width: 100%;
    }

    .box-info, .box-botton {
        justify-content: flex-start;
        margin-top: -5px;
        width: 100%;
        gap: 30px;
    }

    .box-botton {
        margin: 0;
        gap: 15px;
    }

    .title, .text-info {
        font: bolder 2em 'Arial', sans-serif;
        color: white
    }

    .text-info {
        font-size: 1.1rem;
        font-weight: normal;
        line-height: 1.5rem;
    }

    .btn {
        height: 50px;
        width: 35%;
        border-radius: 15px;
        border: none;
        outline: none;
        background-image: linear-gradient(to left, rgb(105, 0, 105), rgb(138, 3, 138));
        box-shadow: 1px 1px 1px 1px black;
        color: white;
        transform: scale(.95);
    }

    .btn:hover {
        transform: scale(1);
    }

    .btn-favorite {
        background-image: linear-gradient(to left, rgb(236, 236, 236), white);
        color: rgb(152, 2, 152);
        width: 50px;
    }

    @media (min-width: 800px) 
    {
        .container {
            flex-direction: row;
            justify-content: stretch;
            gap: 10px;
            background: linear-gradient(100deg, rgb(36, 1, 50) 0%, rgba(255, 255, 255, 0) 100%);
        }
    }
</style>