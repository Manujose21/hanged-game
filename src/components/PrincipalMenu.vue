<template>
  <div class="principal-menu">
    <h1>HANGED GAME</h1>
    <img src="../assets/hanged-image.png" alt="hanged" class="min-w-40 max-w-56" />

    <button @click="changeView = 'GAME'">
      <span class="">Play</span>
      <i class="bi bi-play-fill hidden"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useHanged } from '@/composables/useHanged'

const { changeView } = useHanged()
</script>

<style scoped>
.principal-menu {
  @apply flex
    flex-col
    justify-center
    items-center;
}
button {
  @apply flex justify-center items-center;
}
button:hover i {
  @apply inline  p-0;
}
button:hover span {
  @apply hidden;
}
</style>
