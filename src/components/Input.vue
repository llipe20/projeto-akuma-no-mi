<template>
    <input :type="type" :name="name" :id="id" :value="value" :placeholder="placeholder">
</template>

<script>
export default {
    name : 'InputView',

    props : {
        type : String,
        name : String,
        id : String,
        placeholder : String,
        value : String
    },
}
</script>