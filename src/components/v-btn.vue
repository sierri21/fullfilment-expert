<template lang="pug">
    button.v-btn.wait(
        :class="classes"
    ) {{ text }}
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    outline: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        required: true
    }
})

const classes = computed(() => {
    const classes = []
    props.outline && classes.push('v-btn--outline')
    return classes
})
</script>

<style lang="scss">
.v-btn {
    background: $color-red;
    color: $color-white;
    border-radius: $radius-small;
    text-align: center;
    padding: var(--spacing-small) 0;
    border: 1px solid $color-red;
    width: 330px;
    font-size: var(--text-size-normal);
    cursor: pointer;
    &--outline {
        background: transparent;
    }
}

.wait:hover {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1.05); }
    50% { transform: scale(1); }
    100% { transform: scale(1.05); }
}
</style>
