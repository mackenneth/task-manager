import { defineStore } from 'pinia'
import { generateUserId, getUserIdFromLocalStorage } from '~/core/helpers/helpers'

type TState = {
  userId: null | number
}
export const useUserStore = defineStore('user', {
  state: (): TState => ({
    userId: null
  }),
  actions: {
    setUserId () {
      let userId = getUserIdFromLocalStorage()
      if (!userId) {
        userId = generateUserId()
        localStorage.setItem('userId', JSON.stringify(userId))
      }
      this.userId = userId
    }
  }
})
