<template>
    <div class="flex flex-wrap justify-start items-start gap-5 w-5/6 min-h-screen text-lg bg-black p-8">

        <!-- recomendados -->
        <div class="w-full h-auto relative pl-2">

            <ButtonView :tag="left" class="absolute flex justify-center items-center w-10 h-full bgl text-white top-0 left-1 opacity-30 hover:opacity-100 ml-1 z-10"/>

            <div class="flex items-center gap-5 min-w-auto h-auto pl-6 pt-4 pb-4 overflow-scroll" v-if="trending && trending.length > 0">
                <CardView v-for="trend in trending" :key="trend.id" :movie="trend" />
            </div>
            <span v-else class="text-white">Carregando...</span>

            <ButtonView :tag="right" class="absolute flex justify-center items-center w-10 h-full bgr text-white top-0 right-0 opacity-40 hover:opacity-100"/>
        </div>

    </div>
</template>

<script>
export default {
    name : 'TrendingView',

    data() {
        return {
            trending : null,

            left : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>', 

            right : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
        }
    },

    async created() {
        this.trending = await this.$store.state.trending
    }
}
</script>