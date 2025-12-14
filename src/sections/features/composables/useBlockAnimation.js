import {onBeforeUnmount, onMounted, ref} from 'vue'

export const useBlockAnimation = (timePerBlock= 5000, blocksCount = 4) => {
    const currentBlockIndex = ref(0)
    const isAutoPlaying = ref(false)
    const intervalId = ref(null)
    const progress = ref(100)
    const progressInterval = ref(null)

    function nextBlock () {
        currentBlockIndex.value = (currentBlockIndex.value + 1) % blocksCount
        resetProgress()
    }

    function goToBlock(index) {
        currentBlockIndex.value = index;
        resetProgress()
    }

    function toggleAutoPlay () {
        isAutoPlaying.value = !isAutoPlaying.value

        if (isAutoPlaying.value) {
          startAutoPlay()
        } else {
          stopAutoPlay()
        }
    }

    function startAutoPlay() {
        stopAutoPlay() // Останавливаем предыдущий интервал, если был

        // Интервал для смены блоков
        intervalId.value = setInterval(() => {
            nextBlock()
        }, timePerBlock)

        // Интервал для обновления прогресс-бара
        startProgressBar();
    }

    function stopAutoPlay () {
        if (intervalId.value) {
          clearInterval(intervalId.value);
          intervalId.value = null;
        }

        if (progressInterval.value) {
          clearInterval(progressInterval.value);
          progressInterval.value = null;
        }
    }

    function startProgressBar() {
        progress.value = 100;

        if (progressInterval.value) {
          clearInterval(progressInterval.value);
        }

        const step = 100 / (timePerBlock / 100); // Количество шагов для уменьшения
        progressInterval.value = setInterval(() => {
          progress.value -= step;
          if (progress.value <= 0) {
            progress.value = 0;
            clearInterval(progressInterval.value);
          }
        }, 100);
    }

    function resetProgress() {
        progress.value = 100;
        if (isAutoPlaying.value) {
          startProgressBar();
        }
    }

    onMounted(() => {
        startAutoPlay();
        isAutoPlaying.value = true;
    })

    onBeforeUnmount(() => {
        stopAutoPlay()
    })

    return {
        progress,
        currentBlockIndex,
        stopAutoPlay,
        startAutoPlay,
        nextBlock
    }
}