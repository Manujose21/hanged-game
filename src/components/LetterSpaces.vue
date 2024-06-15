<template>
  <div v-for="(letter, index) in word" :key="index" class="flex gap-2">
    <span>
      <span :class="letter[1] ? 'visible' : 'invisible'">{{ letter[0] }}</span>
      <div class="word-spaces"></div>
    </span>
  </div>
</template>
<script lang="ts" setup>
import type { LetterData } from '@/composables/types'

// import type { Word } from '@/composables/types'

// import { useGamePlay } from '@/composables/useGamePlay'

interface Props {
  word: LetterData[]
  exist: Boolean
}
const { word } = defineProps<Props>()
</script>
