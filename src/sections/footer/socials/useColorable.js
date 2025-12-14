import { ref, computed } from 'vue'

export const useColorable = (color, noHoverColor = '#fff') => {
    const underHover = ref(false)

    const onMouseEnter = () => underHover.value = true
    const onMouseLeave = () => underHover.value = false

    const currentColor = computed(() => underHover.value ? color : noHoverColor)

    return {
        currentColor,
        onMouseEnter,
        onMouseLeave
    }
}