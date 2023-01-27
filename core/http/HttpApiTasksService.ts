import { AxiosInstance, AxiosPromise } from 'axios'
import { TTask } from '~/core/types/tasks'

export default class HttpApiTasksService {
  private axiosInstance: AxiosInstance = {} as AxiosInstance

  private configs = {
    tasks: '/todos'
  }

  constructor (axios: AxiosInstance) {
    this.axiosInstance = axios
  }

  public addNewTask (task: TTask): AxiosPromise {
    return this.axiosInstance.post(`${this.configs.tasks}`, task)
  }

  public getTasksByUserId (userId: number): AxiosPromise {
    return this.axiosInstance.get(`${this.configs.tasks}?userId=${userId}`)
  }

  public editTaskById (task: TTask): AxiosPromise {
    return this.axiosInstance.put(`${this.configs.tasks}/${task.id}`, task)
  }

  public deleteTask (taskId: number): AxiosPromise {
    return this.axiosInstance.delete(`${this.configs.tasks}/${taskId}`)
  }
}
