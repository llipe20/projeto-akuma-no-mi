<template>
    <div class="flex justify-center items-start w-full h-screen text-lg bg-black">
        <HeaderView />
    </div>
</template>
<script>
import HeaderView from '../components/HeaaderView.vue'

export default {
    name : 'HomeView',

    components : {
        HeaderView
    },

    data() {
        return {

        }
    },

    method: {

    },

    created() {
        this.$store.dispatch('getMovie', {
            endpoint : '/movie/top_rated?language=pt-BR&api_key=',
            mutation : 'getAlta'
        })
    }
}
</script>