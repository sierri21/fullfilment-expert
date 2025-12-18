<template lang="pug">
footer.footer
    .container
        .footer__logo
            img( src="/images/logo.png" )
        .footer__socials
            a( href="https://t.me/+79657556556" target="_blanc" )
                ITelegram
            a( href="https://wa.me/message/BTP7HOB3VVSWI1?src=qr" target="_blanc" )
                IWhatsapp
            a( href="https://max.ru/u/f9LHodD0cOKU4FTPRD69TwCaNlqdheTwj-UVxn3dB_ciT2325210qjWMfpc" target="_blanc" )
                IMax
            a( href="https://s.imoim.net/la1823" target="_blanc" )
                IImo
        .footer__contacts
            a.text--white( href="mailto:fulfilexcpert222@gmail.com" ) fulfilexcpert222@gmail.com
            a.text--white( href="tel:+79697199669" ) +7 (969) 719-96-69
            a.text--white( href="tel:+79657556556" ) +7 (965) 755-65-56
            a.text--white( href="https://yandex.ru/maps/-/CLwlmJoa" target="_blank" ) Санкт – Петербург, Московское шоссе 162
</template>
<script setup>
import ITelegram from "./socials/i-telegram.vue";
import IWhatsapp from "~/sections/footer/socials/i-whatsapp.vue";
import IMax from "~/sections/footer/socials/i-max.vue";
import IImo from "~/sections/footer/socials/i-imo.vue";
</script>

<style lang="scss">
    .footer {
        background: $color-black;
        .container {
            display: grid;
            grid-template-areas: "logo contact" "social contact";
            padding: var(--spacing-large) 0;
        }
        &__socials {
            grid-area: social;
            display: flex;
            align-items: center;
            column-gap: var(--spacing-normal)
        }
        &__logo {
            grid-area: logo;
            img {
                width: 115px;
            }
        }
        &__contacts {
            grid-area: contact;
            display: flex;
            flex-direction: column;
            text-align: right;
            a {
                font-size: var(--text-size-large);
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            a:last-child {
                margin-top: var(--spacing-large);
                font-size: var(--text-size-small);
                font-weight: 600;
            }
        }
        @media screen and (max-width: 800px) {
          .container {
            grid-template-areas: "logo" "contact" "social";
            gap: var(--spacing-small);
          }
          &__logo {
            text-align: center;
            img {
              width: 50px;
            }
          }
          &__contacts {
            text-align: left;
          }
          &__socials {
            justify-content: center;
            svg {
              width: 30px;
            }
          }
        }
    }
</style>