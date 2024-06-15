import { ref } from 'vue'
import type { Views } from './types'
const AppState = ref<Views>('MENU')

export const useHanged = () => {
  return {
    AppState,
  }
}
