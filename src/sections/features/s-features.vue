<template lang="pug">
    section.container--wide.mt--huge.mb--huge
        h3.text--center.mt--huge.mb--huge
            | Компания Fulfilexcpert предлагает
            br
            | полный спектр услуг, комплексное
            br
            | решение, включающее в себя все
            br
            | этапы обработки заказов:
            br
        .stories
            CStory(
                v-for="(story, idx) in stories"
                :key="story.title"
                :style="story.style"
                v-bind="story"
                :is-active="idx === currentBlockIndex"
                :progress="`${100 - progress}%`"
                @mouseenter="mouseOnHandler(idx)"
                @mouseleave="mouseLeaveHandler(idx)"
            )
</template>
<script setup>
    import { ref } from 'vue'
    import CStory from './components/c-story.vue'
    import { useBlockAnimation } from "./composables/useBlockAnimation.js";

    const mouseOnHandler = (idx) => {
        currentBlockIndex.value = idx
        stopAutoPlay()
    }

    function mouseLeaveHandler () {
        nextBlock()
        startAutoPlay()
    }

    const {
        progress,
        currentBlockIndex,
        stopAutoPlay,
        startAutoPlay,
        nextBlock
    } = useBlockAnimation(10000)


    const stories = ref([
        {
            title: 'Прием и хранение товара',
            list: [
                'Проверяем товар на брак. Весь обнаруженный брак или некондиционный товар оперативно перемещается в отдельную зону, исключая его попадание к конечному потребителю',
                'Сверка по сопроводительным документам',
                'Ведём учёт и фотофиксацию для контроля качества'
            ],
            backgroundUrl: '/images/warehouse-stories-1.jpg',
            style: {
                'grid-column-start': 1,
                'grid-column-end': 9
            },
            isActive: true
        },
        {
            title: 'Система учёта и контроля заказов и остатков товара',
            list: ['проводим инвентаризацию товара'],
            backgroundUrl: '/images/inventarization-stories-2.jpg',
            style: {
                'grid-column-start': 9,
                'grid-column-end': 13
            },
            isActive: false
        },
        {
            title: 'Обработка заказов',
            list: [
                'Комплектация заказов в соответствии с вашим техническим заданием',
                'Упаковка товара',
                'Маркировка и стикировка товара, нанесение необходимой информации, штрихкодов и этикеток'
            ],
            style: {
                'grid-column-start': 1,
                'grid-column-end': 7
            },
            backgroundUrl: '/images/package-stories-3.jpg',
            isActive: false
        },
        {
            title: 'Подготовка собранного заказа к отгрузке',
            list: [
                'Укладка предварительно упакованного товара в транспортные короба с последующей маркировкой',
                'Укладка готовых транспортных коробов на паллеты с последующей паллетировкой и маркировкой готового паллета'
            ],
            style: {
                'grid-column-start': 7,
                'grid-column-end': 13
            },
            backgroundUrl: '/images/department-stories-4.jpg',
            isActive: false
        },
    ])
</script>

<style lang="scss">
.stories {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 400px 400px;
    grid-gap: var(--spacing-normal);
}
</style>