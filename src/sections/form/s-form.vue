<template lang="pug">
    section.form.container--wide.mt--huge( id="form" )
        .form__text
            | Свяжитесь с нами, а лучше
            | напишите нам в мессенджер для
            | расчёта стоимости услуг, уточним
            | детали (какой вы продаёте товар,
            | объём продаж в штуках, ваши
            | пожелания к упаковке) и мы
            | подготовим персональное
            | коммерческое предложение.
            br
            br
            | Подготовим и подпишем договор,
            | расчёты в рублях на расчётный счёт.
            | Также есть опция рассмотреть
            | вариант с вашей формой договора.
        .form__form
            VInput( input-type="input" label="имя" )
            VInput( input-type="input" label="контакт" )
            VInput( input-type="textarea" rows="10" label="дополнительная инорфмация" resizable )
            .d-flex( style="align-items: center;" )
                input( type="checkbox" id="addCalculator" )
                label( for="addCalculator" ) приложить расчет из калькулятора
            VBtn( text="отправить" )
</template>

<script setup>
import VBtn from '@/v-btn.vue'
import VInput from "@/v-input.vue";
</script>

<style lang="scss">
    .form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        &__text {
            font-size: var(--text-size-normal);
            font-weight: bold;
            padding-right: var(--spacing-huge);
            word-break: normal;
        }
        &__form {
            border-left: 5px solid $color-dark;
            padding: var(--spacing-normal) 0 var(--spacing-normal) var(--spacing-huge);
            display: flex;
            flex-direction: column;
            row-gap: var(--spacing-normal);
            .v-btn {
                width: 100%
            }
            label {
                font-size: var(--text-size-normal);
                font-weight: 500;
                color: $color-dark;
                margin-left: var(--spacing-normal)
            }
            input[type=checkbox] {
                width: 32px;
                height: 32px;
                border: none;
            }
        }
    }
</style>