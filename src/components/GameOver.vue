<template>
  <h1>Perdiste</h1>
  <button @click="AppState = 'GAME'">De nuevo</button>
  <button @click="AppState = 'MENU'">Ir al menu</button>
</template>
<script lang="ts" setup>
import { useHanged } from '@/composables/useHanged'

const { AppState } = useHanged()
</script>
<style></style>
