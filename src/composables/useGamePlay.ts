import { ref } from 'vue'
import { words } from '@/conf/words'
import type { LetterData } from './types'
import { useHanged } from './useHanged'

const attempts = ref(10)

export const useGamePlay = () => {
  const { AppState } = useHanged()

  // reactive variables
  const input = ref('')
  const exist = ref<boolean>(false)
  const word = ref<LetterData[]>([])

  // word select
  const selectWord = () => {
    const numberWord = Math.floor(Math.random() * 178)
    const wordRandomSelect = words[numberWord]

    wordRandomSelect
      .toLowerCase()
      .split('')
      .forEach((l) => {
        word.value.push([l, false])
      })
  }

  // validate input
  const selectLetterValidator = () => {
    // limit numbers
    input.value = input.value.toLowerCase().replace(/\d/g, '')
    // limit quatity letters, only one letter
    input.value = input.value.slice(0, 1)
  }

  // show exist the letter written
  const existingLetter = () => {
    // number of matching letters
    const filter = word.value.filter((l) => l[0] === input.value)

    // if there are matching letters and you have even attempts, we show the letters
    if (attempts.value > 0 && filter.length > 0) {
      const arrLettersVisibles: boolean[] = []

      filter.forEach((letterSelect) => {
        word.value.forEach((l) => {
          if (letterSelect[0] === l[0]) l[1] = true

          arrLettersVisibles.push(l[1])
        })
      })

      AppState.value = arrLettersVisibles.includes(false) ? 'GAME' : 'WINNER'
    }

    // if attemps is zero is loser
    if (attempts.value === 1) {
      AppState.value = 'LOSER'
      return
    }

    if (filter.length === 0) attempts.value--
  }

  return {
    input,
    attempts,
    word,
    exist,
    selectWord,
    selectLetterValidator,
    existingLetter,
  }
}
