<template lang="pug">
    div.story( :class="classes"  )
        .story__header-wrapper
        h3.text--white {{ title }}
        ul
            li.text--white( v-for="text in list" :key="text" )
                img( src="/icons/list-icon.svg" )
                | {{ text }}
        .story__progress( :style="{ '--proress': progress }" )
        img.story__background( :src="backgroundUrl" )
</template>

<script setup>

import { computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    list: {
        type: Array,
        default: () => ([])
    },
    progress: {
        type: String,
        default: '100%'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    backgroundUrl: {
        type: String,
    }
})

const classes = computed(() => {
    const classes = []
    props.isActive && classes.push('is-active')
    return classes
})

</script>

<style lang="scss">
    .story {
        position: relative;
        padding: var(--spacing-normal);
        border-radius: $radius-normal;
        overflow: hidden;
        heigth: 100%;
        cursor: pointer;
        &__progress {
            opacity: 0;
            position: absolute;
            bottom: 15px;
            left: var(--spacing-small);
            background: $color-white;
            border-radius: 5px;
            width: calc(100% - var(--spacing-small) - var(--spacing-small));
            height: 10px;
            transition: width 0.1s linear;
        }
        &__header-wrapper {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 40%;
            background: linear-gradient(to bottom, $color-dark, transparent);
            transition: height .3s ease;
        }
        &__background {
            z-index: -2;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
        ul {
            opacity: 0;
            display: flex;
            flex-direction: column;
            grid-gap: var(--spacing-normal);
            margin-top: var(--spacing-large);
        }
        li {
            display: flex;
            align-items: start;
            img {
                display: inline-block;
            }
            font-weight: 500;
            font-size: var(--text-size-small);
            line-height: 34px;
        }
        &.is-active {
            ul {
                opacity: 1;
            }
            .story {
                &__header-wrapper {
                    height: 100%;
                    background: $color-dark;
                    opacity: .7;
                }
                &__background {
                    filter: blur(3px);
                }
                &__progress {
                    opacity: 1;
                    overflow: hidden;
                    &::before {
                        display: block;
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: var(--proress);
                        background: #B0ABA7;
                        height: 10px;
                        border-radius: 3px;
                        transition: width .1s linear;
                    }
                }
            }


        }
    }
</style>