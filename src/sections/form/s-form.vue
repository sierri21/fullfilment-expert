<template lang="pug">
    section.form.container--wide.mt--huge.mb--huge( id="form" )
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
        form.form__form( ref="form" @submit="sendForm")
              VInput( input-type="input" label="имя" name="имя" )
              VInput( input-type="input" label="контакт" name="контакт" )
              VInput(
                input-type="textarea"
                rows="10"
                label="дополнительная инорфмация"
                resizable
                name="дополнительно"
              )
              .d-flex( style="align-items: center;" )
                  input( type="checkbox" id="addCalculator" name="attachCalculator" )
                  label( for="addCalculator" ) приложить расчет из калькулятора
              VBtn( type="submit" v-bind="buttonBind" )
</template>

<script setup>
import VBtn from '@/v-btn.vue'
import VInput from "@/v-input.vue";
import { ref } from 'vue'

const props = defineProps({
  calculatorData: {
    type: Array,
    default: () => ([])
  }
})

const buttonBind = ref({
  disabled: false,
  text: 'отправить'
})

const form = ref(null)

async function sendForm (event) {
  event.preventDefault()
  const data = new FormData(event.target)
  if (data.get('attachCalculator') && props.calculatorData.length) {
    data.append('калькулятор', props.calculatorData
      .map(({ title, quantity }) => `${title}: ${quantity}`)
      .join('\n'))
  }
  const response = await fetch('https://formspree.io/f/mqarvpql', {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    }
  })

  if (response.ok) {
    buttonBind.value.text = 'успешно отправлено'
    buttonBind.value.disabled = true
    setTimeout(() => {
      buttonBind.value.text = 'отправить'
      buttonBind.value.disabled = false
    }, 3000)
  } else {
    buttonBind.value.text = 'что-то пошло не так'
    buttonBind.value.disabled = true
  }

}


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
        @media screen and (max-width: 800px) {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
          align-items: center;
          padding: 0 var(--spacing-normal);
          &__text {
            padding-right: 0;
            text-align: center;
          }
          &__form {
            border-top: 3px solid $color-dark;
            border-left: none;
            padding: 0;
            padding-top: var(--spacing-huge);
          }
        }
    }
</style>