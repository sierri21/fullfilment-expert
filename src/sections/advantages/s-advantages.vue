<template lang="pug">
    section.advantages.mt--huge.container--wide.mb--huge
        h3.text--center
            | Преимущества Fulfilexcpert – вы экономите
            br
            | время и ресурсы, полностью сосредоточившись
            br
            | на развитии своего бизнеса.
        .advantages__blocks.mt--huge
            img( src="/images/warehouse2.png" )
            .advantages__items
                CAdvantage( v-for="item in advantages" :key="item.text" v-bind="item" )
</template>

<script setup>
import CAdvantage from "./components/c-advantage.vue";

const advantages = [
    {
        imgUrl: '/icons/planning.svg',
        text: 'Мы планируем индивидуальный подход и принимаем оптимальные решения, учитывая особенности вашего бизнеса'
    },
    {
        imgUrl: '/icons/delivery.svg',
        text: 'Быстрая обработка заказов и своевременная отгрузка товара'
    },
    {
        imgUrl: '/icons/camera.svg',
        text: 'Строгий контроль качества на  всех этапах комплектации заказов'
    },
    {
        imgUrl: '/icons/package.svg',
        text: 'Готовы адаптироваться к вашим потребностям и предлагаем различные варианты комплектации и упаковки'
    },
    {
        imgUrl: '/icons/forklift.svg',
        text: 'Используем современные технологии системы управления складом (погрузо-разгрузочную технику)'
    },
    {
        imgUrl: '/icons/table.svg',
        text: 'Прозрачность и отчётность'
    },
    {
        imgUrl: '/icons/ruble.svg',
        text: 'Конкурентные цены на услуги фулфилмента'
    }
]
</script>

<style lang="scss">
.advantages {
    &__blocks {
        display: flex;
        justify-content: space-between;
        column-gap: var(--spacing-huge)
    }
    &__items {
        display: flex;
        flex-direction: column;
        row-gap: 30px
    }
}
</style>