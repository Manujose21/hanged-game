<template>
  <!-- menu -->
  <template v-if="changeView === 'MENU'">
    <div class="hanged-menu">
      <principal-menu></principal-menu>
    </div>
  </template>
  <!-- paly game -->
  <template v-else>
    <div class="hanged-game">
      <game-play></game-play>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { useHanged } from '@/composables/useHanged'
import PrincipalMenu from './PrincipalMenu.vue'
import GamePlay from './GamePlay.vue'
const { changeView } = useHanged()
</script>

<style scoped>
.hanged-game {
  @apply grid
    grid-cols-1
    md:grid-cols-2
    justify-items-center
    items-center
    min-h-screen;
}
.hanged-menu {
  @apply flex 
  flex-col 
  gap-8 
  items-center;
}
</style>
