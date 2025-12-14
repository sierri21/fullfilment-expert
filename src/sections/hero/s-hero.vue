<template lang="pug">
    .hero
        .container
            h1.text--gradient.mb--normal Фулфилмент в Санкт-Петербурге
            h2.text--white.mb--large
                | В современном мире фулфилмент
                br
                | не просто удобство, это
                br
                | необходимость для успешного
                br
                | роста и масштабирования вашего
                br
                | бизнеса
            .d-flex.gap-x--large
                vBtn( @click="scrollTo('calculator')" text="калькулятор" )
                vBtn( outline @click="scrollTo('form')"  text="заказать" )
</template>

<script setup>
import vBtn from '@/v-btn.vue'

function scrollTo (id) {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
}

</script>

<style lang="scss">
.hero {
    position: relative;
    background: linear-gradient(to bottom,$color-black, $color-dark);
    border-radius: 0 0 $radius-normal $radius-normal;
    height: 70vh;
    overflow: hidden;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
}
</style>