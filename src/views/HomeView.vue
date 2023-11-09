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
    }
}
</script>