<template lang="pug">
    .advantage
        img( :src="imgUrl" alt="" )
        p( v-html="text" )
</template>

<script setup>

defineProps({
    text: String,
    imgUrl: String
})

</script>

<style lang="scss">
.advantage {
    display: flex;
    align-items: center;
    background: $color-white;
    padding: 20px 10px 20px 50px;
    column-gap: 50px;
    border-radius: $radius-normal;

    p {
        font-size: var(--text-size-normal);
        font-weight: bold;
    }
}
</style>