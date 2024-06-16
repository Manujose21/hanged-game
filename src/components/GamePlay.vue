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

    <h1>Letras utilzadas</h1>
    <div class="mt-4 max-w-96 flex gap-4">
      <h2 v-for="({ letter, isSuccess }, index) in letterSelected" :key="index">
        {{ letter }} {{ isSuccess }}
      </h2>
    </div>
  </div>
  <!-- <HangedDoll /> -->
</template>

<script lang="ts" setup>
import LetterSpaces from './LetterSpaces.vue'
// import HangedDoll from './HangedDoll.vue'
import { useGamePlay } from '@/composables/useGamePlay'

const {
  exist,
  input,
  attempts,
  word,
  selectLetterValidator,
  selectWord,
  existingLetter,
  letterSelected,
} = useGamePlay()
attempts.value = 10
selectWord()
</script>
<style></style>
