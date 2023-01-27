<template>
  <div>
    <task-list-page-header class="mb-2" />
    <hr class="mb-5">
    <form-new-task class="mb-5" />
    <task-progress-bar
      :completed-tasks-count="tasksStore.completedTasks.length"
      :total-task-count="tasksStore.completedTasks.length + tasksStore.currentTasks.length"
      :is-fetching="isFetching"
      class="mb-5"
    />
    <task-search-input class="mb-5" />
    <task-list
      title="Текущие задачи"
      :tasks="tasksStore.currentTasks"
      class="mb-5"
      :is-fetching="isFetching"
    />
    <task-list
      title="Завершённые задачи"
      :tasks="tasksStore.completedTasks"
      class="mb-5"
      :is-fetching="isFetching"
    />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import TaskListPageHeader from '~/components/tasks/TaskListPageHeader.vue'
import FormNewTask from '~/components/tasks/form/FormNewTask.vue'
import TaskList from '~/components/tasks/TaskList.vue'
import { useTasksStore } from '~/store/tasks'
import TaskSearchInput from '~/components/tasks/TaskSearchInput.vue'
import TaskProgressBar from '~/components/tasks/TaskProgressBar.vue'
import { useUserStore } from '~/store/user'

export default {
  name: 'tasks',
  components: {
    TaskProgressBar,
    TaskSearchInput,
    FormNewTask,
    TaskListPageHeader,
    TaskList
  },
  setup () {
    const tasksStore = useTasksStore()
    const userStore = useUserStore()

    const isFetching = ref(true)

    onMounted(() => {
      userStore.setUserId()
      tasksStore.getUserTasks(userStore.userId)
        .finally(() => {
          isFetching.value = false
        })
    })
    return {
      isFetching,
      tasksStore
    }
  }
}
</script>
