<template>
    <input 
        :type="type" 
        :name="name" 
        :id="id" 
        :placeholder="placeholder"
        :value="modelValue" 
        :maxlength="max"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
export default {
    name : 'InputView',

    props : {
        type : String,
        name : String,
        id : String,
        placeholder : String,
        modelValue : String,
        max : String
    }
}
</script>