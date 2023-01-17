import { TTask } from '~/core/types/tasks'

export const searchTasksByQuery = (query: string, tasks: Array<TTask>): Array<TTask> => {
  return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
}

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateUserId = (): number => {
  return randomIntFromInterval(1, 10)
}

export const getUserIdFromLocalStorage = (): number | null => {
  const userId = localStorage.getItem('userId')
  if (userId) {
    return JSON.parse(userId)
  }
  return null
}
