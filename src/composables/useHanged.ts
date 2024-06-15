import { ref } from 'vue'
import type { Views } from './types'
const changeView = ref<Views>('MENU')

export const useHanged = () => {
  return {
    changeView,
  }
}
