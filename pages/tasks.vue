<template>
  <div>
    <task-list-page-header class="mb-2" />
    <hr class="mb-5">
    <form-new-task class="mb-5" />
    <task-progress-bar
      :completed-tasks-count="store.completedTasks.length"
      :total-task-count="store.completedTasks.length + store.currentTasks.length"
      :is-fetching="isFetching"
      class="mb-5"
    />
    <task-search-input class="mb-5" />
    <task-list
      title="Текущие задачи"
      :tasks="store.currentTasks"
      class="mb-5"
      :is-fetching="isFetching"
    />
    <task-list
      title="Завершённые задачи"
      :tasks="store.completedTasks"
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
    const store = useTasksStore()

    const isFetching = ref(true)

    onMounted(() => {
      store.setUserId()
      store.getUserTasks()
        .finally(() => {
          isFetching.value = false
        })
    })
    return {
      isFetching,
      store
    }
  }
}
</script>
