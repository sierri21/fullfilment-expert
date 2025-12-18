<template lang="pug">
    details.collapse
        summary {{ title }}
        hr
        .collapse__items
            label.collapse__item( v-for="item in localData" :key="item.title" )
                div.item__title {{ item.title }}
                template( v-if="typeof item.price === 'number'" )
                    div.item__price {{ decimal(item.price) }} &#8381
                template( v-else )
                    div.item__price {{ item.price }}
                div.item__quantity
                    input(
                        v-if="typeof item.price === 'number'"
                        type="number"
                        :min="0"
                        v-model="item.quantity"
                    )
                div.item__total
                    template(
                        v-if="typeof item.price === 'number' && item.quantity"
                    ) {{ decimal(item.total) }} &#8381
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

const localData = ref(props.items.map(item => {
  if (Array.isArray(item.price)) {
    return {
      ...item,
      quantity: null,
      get price () {
        const priceArr = [...item.price]
        return !this.quantity
            ? priceArr[0]
            : priceArr[this.quantity - 1]
              ? priceArr[this.quantity - 1] / this.quantity
              : priceArr.at(-1) / priceArr.length
      },
      get total () {
        const priceArr = [...item.price]
        return !(this.price && this.quantity)
            ? null
            : priceArr[this.quantity - 1]
              ? priceArr[this.quantity - 1]
              : this.price * this.quantity
      }
    }
  }
  return {
    ...item,
    quantity: null,
    get total () {
      return (this.price && this.quantity) ? this.price * this.quantity : null
    }
  }
}))

const totals = computed(() => localData.value
    .filter(({ quantity }) => quantity)
    .reduce((acc, { total }) => acc += total, 0))

const filledData = computed(() => localData.value.filter(({ quantity }) => quantity))

defineExpose({
    totals,
    filledData
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
        grid-template-columns: 3fr repeat(3, 1fr);
        grid-template-areas: 'title price quantity total';
        align-items: center;
        margin: 15px 0;
        .item {
          &__title {
            grid-area: title;
          }
          &__price  {
            grid-area: price;
          }
          &__quantity {
            grid-area: quantity;
          }
          &__total {
            grid-area: total;
          }
        }
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
    @media screen and (max-width: 800px) {
      &__item {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: var(--spacing-small);
        grid-template-areas: 'title title title' 'price quantity total';
        justify-content: space-between;
        div {
          padding: 0 var(--spacing-small);
        }
        .item {
          &__title {
            border-right: none;
            text-align: center;
            justify-content: center !important;
          }
          &__quantity {
            input {
              max-width: 100px;
            }
          }
        }
      }
    }

}
</style>