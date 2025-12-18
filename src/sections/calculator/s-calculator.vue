<template lang="pug">
section.calculator.container.mt--huge( id="calculator" )
    .calculator__tabs
        .calculator__tab(
            v-for="item in Object.values(tabs)"
            :key="item.id"
            :class="{ active: item.id === tab }"
            @click="tab = item.id"
        ) {{ item.title }}
    .calculator__header
        div наименование
        div стоимость
        div кол-во
        div итого
    .calculator__table
        CCollapse(
            v-for="(item, idx) in commonData"
            v-show="item.tab === tab"
            ref="items"
            :key="item.title"
            :open="idx === 0"
            v-bind="item"
        )
    .calculator__totals
        template( v-if="totals" ) Итого: {{ decimal(totals) }} &#8381
    .calculator__warning.mt--huge
        | Уважаемые клиенты данный прайс является общим на основные виды услуг и не является окончательным.
        br
        | Точные расценки на услуги Fulfilexcpert Вы сможете получить, связавшись с нашими менеджерами в любое,
        br
        | удобное для Вас время. Индивидуальный подход к каждому клиенту. Гибкая система скидок.
</template>

<script setup>
import CCollapse from './components/c-collapse.vue'
import { decimal } from "./helpers.js";
import { data, department } from "./data.js";
import { ref, useTemplateRef, computed } from 'vue'
const tabs = {
    pricing: {
        id: 'pricing',
        title: 'рассчет стоимости'
    },
    delivery: {
        id: 'delivery',
        title: 'тарифы на доставку товаров'
    }
}

const commonData = [
    ...data.map(item => ({ ...item, tab: tabs.pricing.id })),
    ...department.map(item => ({ ...item, tab: tabs.delivery.id }))
]
const tab = ref(tabs.pricing.id)
const itemRefs = useTemplateRef('items')

const totals = computed(() => (itemRefs.value || []).reduce((acc, { totals }) => acc += totals, 0))
const filled = computed(() => (itemRefs.value || []).reduce((acc, { filledData }) => [...acc, ...filledData], []))

defineExpose({
  filled
})

</script>

<style lang="scss">
.calculator {
    &__tabs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 85px;
    }
    &__tab {
        border: 3px solid $color-dark;
        color: $color-dark;
        font-weight: 500;
        text-align: center;
        font-size: var(--text-size-medium);
        line-height: 120%;
        cursor: pointer;
        &.active {
            background: $color-dark;
            color: $color-white;
        }
        &:first-child {
            border-radius: $radius-normal 0 0 0;
        }
        &:last-child {
            border-radius: 0 $radius-normal 0 0;
        }
    }
    &__header {
        display: grid;
        margin: 10px 0;
        grid-template-columns: 3fr repeat(3, 1fr);
        color: $color-dark;
        font-size: var(--text-size-normal);
        text-align: center;
        font-weight: 500;
        div:not(:last-child) {
            border-right: 3px solid $color-dark
        }
    }
    &__table {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    &__totals {
        margin-top: var(--spacing-normal);
        text-align: right;
        font-size: var(--text-size-medium);
        font-weight: 600;
    }
    &__warning {
        font-size: var(--text-size-small);
        font-weight: 600;
    }
    @media screen and (max-width: 800px){
      &__tab {
        font-size: var(--text-size-small);
      }
      &__tabs {
        height: auto;
      }
      &__header {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        div:first-child {
          grid-column-start: 1;
          grid-column-end: 4;
          border-right: none;
          border-bottom: 3px solid $color-dark;
        }
      }
    }
}
</style>