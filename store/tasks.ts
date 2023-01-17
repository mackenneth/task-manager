import { defineStore } from 'pinia'
import { TTask } from '~/core/types/tasks'
import HttpApiService from '~/core/http/HttpApiService'
import { generateUserId, getUserIdFromLocalStorage, searchTasksByQuery } from '~/core/helpers/helpers'
import { axiosInstance } from '~/core/http/axios'

const httpApiService = new HttpApiService(axiosInstance)

type TState = {
  tasks: Array<TTask>
  searchQuery: string
  userId: number | null
  isFetching: boolean
}
export const useTasksStore = defineStore('tasks', {
  state: (): TState => ({
    tasks: [],
    searchQuery: '',
    userId: null,
    isFetching: false
  }),
  getters: {
    completedTasks: (state: TState) => {
      const completedTasks = state.tasks.filter(task => task.completed)

      if (state.searchQuery) {
        return searchTasksByQuery(state.searchQuery, completedTasks)
      }
      return completedTasks
    },
    currentTasks: (state: TState) => {
      const currentTasks = state.tasks.filter(task => !task.completed)

      if (state.searchQuery) {
        return searchTasksByQuery(state.searchQuery, currentTasks)
      }
      return currentTasks
    }
  },
  actions: {
    addNewTask (task: TTask) {
      this.toggleIsFetching(true)

      return new Promise((resolve, reject) => {
        httpApiService.addNewTask(task)
          .then((response) => {
            this.tasks.push(response.data)
            resolve(response)
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('Handle error', error)
            reject(error)
          })
          .finally(() => {
            this.toggleIsFetching(false)
          })
      })
    },
    getUserTasks () {
      this.toggleIsFetching(true)

      if (this.userId) {
        httpApiService.getTasksByUserId(this.userId)
          .then((response) => {
            this.tasks = response.data
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('Log error', error)
          })
          .finally(() => {
            this.toggleIsFetching(false)
          })
      }
    },
    editTask (editingTask: TTask): Promise<any> {
      return new Promise((resolve, reject) => {
        httpApiService.editTaskById(editingTask)
          .then((response) => {
            const editedTaskId = this.tasks.findIndex(task => task.id === response.data.id)
            if (editedTaskId !== -1) {
              this.tasks[editedTaskId].completed = response.data.completed
            }
            resolve(response)
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('Log error', error)
            reject(error)
          })
      })
    },
    updateSearchQuery (searchQuery: string) {
      this.searchQuery = searchQuery
    },
    setUserId () {
      let userId = getUserIdFromLocalStorage()
      if (!userId) {
        userId = generateUserId()
        localStorage.setItem('userId', JSON.stringify(userId))
      }
      this.userId = userId
    },
    toggleIsFetching (isFetching: boolean) {
      this.isFetching = isFetching
    }
  }
})
