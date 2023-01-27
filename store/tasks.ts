import { defineStore } from 'pinia'
import { TTask } from '~/core/types/tasks'
import HttpApiTasksService from '~/core/http/HttpApiTasksService'
import { searchTasksByQuery } from '~/core/helpers/helpers'
import { axiosInstance } from '~/core/http/axios'

const httpApiService = new HttpApiTasksService(axiosInstance)

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
    getUserTasks (userId: number | null) {
      return new Promise((resolve, reject) => {
        if (userId) {
          httpApiService.getTasksByUserId(userId)
            .then((response) => {
              this.tasks = response.data
              resolve(response)
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log('Log error', error)
              reject(error)
            })
            .finally(() => {
            })
        }
      })
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

    deleteTask (taskId: number): Promise<any> {
      return new Promise((resolve, reject) => {
        httpApiService.deleteTask(taskId)
          .then((response) => {
            const deletedTaskId = this.tasks.findIndex(task => task.id === taskId)
            if (deletedTaskId !== -1) {
              this.tasks.splice(deletedTaskId, 1)
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
    toggleIsFetching (isFetching: boolean) {
      this.isFetching = isFetching
    }
  }
})
