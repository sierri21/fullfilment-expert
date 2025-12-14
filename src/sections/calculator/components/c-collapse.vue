<template lang="pug">
    details.collapse
        summary {{ title }}
        hr
        .collapse__items
            label.collapse__item( v-for="item in localData" :key="item.title" )
                div {{ item.title }}
                template( v-if="typeof item.price === 'number'" )
                    div {{ decimal(item.price) }} &#8381
                template( v-else )
                    div {{ item.price }}
                div
                    input(
                        v-if="typeof item.price === 'number'"
                        type="number"
                        :min="0"
                        v-model="item.quantity"
                    )
                div
                    template(
                        v-if="typeof item.price === 'number' && item.quantity"
                    ) {{ decimal(item.price * item.quantity) }} &#8381
</template>

<script setup>
import { decimal } from "../helpers.js";
import { ref, computed } from 'vue'

const props = defineProps({
    title: String,
    items: {
        type: Array,
        default: () => ([])
    }
})

const localData = ref(props.items.map(item => ({ ...item, quantity: null })))

const totals = computed(() => localData.value
    .filter(({ quantity }) => quantity)
    .reduce((acc, { price, quantity }) => acc += (price * quantity), 0))

defineExpose({
    totals
})

</script>

<style lang="scss">
.collapse {
    border: 3px solid $color-dark;
    padding: var(--spacing-normal) 0;
    border-radius: $radius-normal;
    hr {
        display: block;
        height: 3px;
        background: $color-dark;
    }
    summary {
        cursor: pointer;
        font-size: var(--text-size-normal);
        font-weight: 600;
        list-style: none;
        padding-left: var(--spacing-normal);

    }
    &__item {
        display: grid;
        grid-template-columns: 3fr repeat(3, 250px);
        align-items: center;
        margin: 15px 0;
        div {
            border-right: 3px solid $color-dark;
            font-size: var(--text-size-normal);
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 var(--spacing-normal);
            &:first-child {
                justify-content: start;
            }
            &:last-child {
                border-right: none;
            }
            input {
                max-width: 150px;
                background: $color-white;
                border-radius: 10px;
                text-align: center;
            }
        }
    }

}
</style>