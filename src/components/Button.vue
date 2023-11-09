<template>
    <div v-html="tag">
        
    </div>
</template>

<script>
export default {
    name : 'ButtonView',

    props : {
        tag : String
    }
}
</script>