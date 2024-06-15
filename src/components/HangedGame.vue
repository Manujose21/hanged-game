<template>
  <!-- menu -->
  <template v-if="AppState === 'MENU'">
    <div class="hanged-menu">
      <principal-menu></principal-menu>
    </div>
  </template>
  <!-- paly game -->
  <template v-else-if="AppState === 'GAME'">
    <div class="hanged-menu">
      <game-play></game-play>
    </div>
  </template>

  <template v-else-if="AppState === 'LOSER'">
    <div class="hanged-menu">
      <game-over></game-over>
    </div>
  </template>

  <template v-else-if="AppState === 'WINNER'">
    <div class="hanged-menu">
      <game-win></game-win>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { useHanged } from '@/composables/useHanged'
import PrincipalMenu from './PrincipalMenu.vue'
import GamePlay from './GamePlay.vue'
import GameOver from './GameOver.vue'
import GameWin from './GameWin.vue'

const { AppState } = useHanged()
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
