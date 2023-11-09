<template>
    <div class="flex justify-center items-start bg-blue-600 w-full h-screen text-lg">
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