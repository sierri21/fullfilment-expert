<template lang="pug">
    .v-input
        component( :is="inputType" v-bind="$attrs" :placeholder="label")
</template>

<script setup>

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        validator: val => ['input', 'textarea'].includes(val)
    }
})

</script>

<style lang="scss" scoped>
.v-input {
    position: relative;
    input, textarea {
        width: 100%;
        min-height: 85px;
        padding: 0 var(--spacing-small);
        font-size: var(--text-size-normal);
        background: $color-white;
        border-radius: $radius-small;
    }
}
</style>