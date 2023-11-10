<template>
    <div class="flex flex-col justify-center items-start gap-4 w-52 bg-gray-300 h-auto rounded-xl relative">
        <div class="w-full h-52 bg-black rounded-t-xl bg-cover bg-no-repeat" :style="{'background-image': `url('https://image.tmdb.org/t/p/w154${movie.poster_path}')`}">
        </div>

        <div class="h-24 gap-px pl-4 pr-4 pb-4 text-purple-950">
            <h1 class="text-lg font-bold">
                {{ movie ? movie.media_type == 'tv' ? movie.name : movie.title : 'Carregando...'}}
            </h1>
            <span>
                {{ movie ? movie.media_type == 'tv' ? new Date(movie.first_air_date).getFullYear() : new Date(movie.release_date).getFullYear() : 'Carregando...' }}
            </span>
        </div>
        
        <ButtonView :tag="tag" class="flex justify-center items-center w-8 h-8 bg-white rounded-lg text-purple-900 hover:bg-gray-200 absolute right-4 top-4"/>
    </div>
</template>

<script>
import BottonView from '../components/Button.vue'

export default {
    name : 'CardView',

    components : {
        BottonView
    },

    props : {
        movie : Object
    },

    data() {
        return {

            tag : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>'
        }
    }
}
</script>