<template lang="pug">
    .quality
        .quality__shadow
        video( src="/video/video.mp4" autoplay loop muted width="100%")
        h2.text--white
            | Качество наших услуг постоянно растёт
            br
            | вслед за увеличением грузооборота,
            br
            | подтверждая нашу приверженность
            br
            | высоким стандартам.
</template>

<script setup>
const videoHeight = window.innerHeight + 'px'

</script>

<style lang="scss">
    .quality {
        position: relative;
        &__shadow {
            z-index: 1;
            position: absolute;
            background: #000000;
            opacity: .4;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        h2 {
            z-index: 2;
            position: absolute;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
    }

</style>