<template>
<div class="v-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" >
    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="73" height="73" fill="black"/>
        <path
            d="M36.5 3.80176C18.4415 3.80176 3.80209 18.4411 3.80209 36.4997C3.80209 44.8494 6.95813 52.4436 12.1084 58.2223C10.6317 62.4817 7.55612 63.8109 3.80209 65.1681C7.23994 68.4854 13.9426 69.3643 19.9573 64.6696C24.8145 67.5286 30.4561 69.1976 36.5 69.1976C54.5585 69.1976 69.1979 54.5582 69.1979 36.4997C69.1979 18.4411 54.5585 3.80176 36.5 3.80176Z"
            :stroke="currentColor"
            stroke-width="3.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M52.5431 30.2461H52.5429C50.0996 30.2461 48.1188 32.2268 48.1188 34.6702V37.5461C48.1188 39.9895 50.0996 41.9702 52.5429 41.9702H52.5431C54.9865 41.9702 56.9672 39.9895 56.9672 37.5461V34.6702C56.9672 32.2268 54.9865 30.2461 52.5431 30.2461Z"
            :stroke="currentColor"
            stroke-width="2.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M25.7293 34.6702C25.7293 32.2268 27.71 30.2461 30.1534 30.2461C32.5968 30.2461 34.5775 32.2268 34.5775 34.6702V41.97"
            :stroke="currentColor"
            stroke-width="2.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M25.7293 30.2461V41.9702"
            :stroke="currentColor"
            stroke-width="2.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M34.5776 34.6702C34.5776 32.2268 36.5584 30.2461 39.0017 30.2461C41.4451 30.2461 43.4258 32.2268 43.4258 34.6702V41.97"
            :stroke="currentColor"
            stroke-width="2.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M18.7267 27.2676C19.3566 27.2676 19.8673 26.7569 19.8673 26.127C19.8673 25.497 19.3566 24.9863 18.7267 24.9863C18.0967 24.9863 17.5861 25.497 17.5861 26.127C17.5861 26.7569 18.0967 27.2676 18.7267 27.2676Z"
            :fill="currentColor"
        />
        <path
            d="M18.7267 30.2461V41.9702"
            :stroke="currentColor"
            stroke-width="2.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</div>
</template>

<script setup>
import {useColorable} from "~/sections/footer/socials/useColorable.js";

const { currentColor, onMouseEnter, onMouseLeave } = useColorable('#009CFF')
</script>