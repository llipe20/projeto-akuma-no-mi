<template>
    <div class="flex container shadow">
        <!-- CARTAZ DO FILME-->
        <div class="flex box-cartaz overflow-hidden border">
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
                        {{ movie.vote_average }}
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
                <ButtonView :tag="span" class="flex justify-center items-center w-32 h-12 bg-purple-950 rounded-lg hover:scale-110 cursor-pointer" />

                <ButtonView :tag="icon" class="flex justify-center items-center w-12 h-12 bg-white rounded-lg text-purple-900  hover:scale-110 cursor-pointer"/>
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

            icon : '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">favorite</span>'
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
        background-image: linear-gradient(to left, #2f0451, #210139);
        flex-direction: column;
        padding: 20px;
        margin-left: 10px;
        width: 100%;
        height: auto;
        border-radius: 15px;
        gap: 0;
    }

    .box-cartaz {
        height: auto;
        width: auto;
        border: 2px solid rgba(128, 128, 128, 0.215);
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
        margin-top: -10px;
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
        }
    }
</style>