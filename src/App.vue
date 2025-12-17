<template lang="pug">
    SHero
    SFeatures
    SAdvantages
    SQuality
    SCalculator( ref="calculator" )
    SForm( :calculatorData="calculatorData" )
    SFooter
</template>

<script setup>
import SHero from "./sections/hero/s-hero.vue";
import SFeatures from "./sections/features/s-features.vue";
import SAdvantages from "~/sections/advantages/s-advantages.vue";
import SQuality from "~/sections/quality/s-quality.vue";
import SCalculator from "~/sections/calculator/s-calculator.vue";
import SForm from "~/sections/form/s-form.vue"
import SFooter from "~/sections/footer/s-footer.vue";
import { ref, computed } from 'vue'

const calculator = ref(null)
const calculatorData = computed(() => calculator?.value?.filled)
</script>

<style scoped>
</style>
