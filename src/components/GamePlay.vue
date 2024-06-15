<template>
  <div class="mt-8">
    <p class="text-2xl">❤️ {{ attempts }}</p>
    <div class="flex justify-center bg-white p-8">
      <LetterSpaces :word="word" :exist="exist" />
    </div>

    <input
      type="text"
      placeholder="Ingresa tu letra"
      v-model="input"
      @input="selectLetterValidator()"
    />
    <button @click="existingLetter()">Probar</button>
  </div>
  <!-- <HangedDoll /> -->
</template>

<script lang="ts" setup>
import LetterSpaces from './LetterSpaces.vue'
// import HangedDoll from './HangedDoll.vue'
import { useGamePlay } from '@/composables/useGamePlay'

const { exist, input, attempts, word, selectLetterValidator, selectWord, existingLetter } =
  useGamePlay()
attempts.value = 10
selectWord()
</script>
<style></style>
