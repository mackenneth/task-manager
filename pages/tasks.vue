<template>
  <div>
    <task-list-page-header class="mb-2" />
    <hr class="mb-5">
    <form-new-task class="mb-5" />

    <task-search-input class="mb-5" />
    <task-list
      title="Текущие задачи"
      :tasks="store.currentTasks"
      class="mb-5"
    />
    <task-list
      title="Завершённые задачи"
      :tasks="store.completedTasks"
      class="mb-5"
    />
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import TaskListPageHeader from '~/components/tasks/TaskListPageHeader.vue'
import FormNewTask from '~/components/tasks/form/FormNewTask.vue'
import TaskList from '~/components/tasks/TaskList.vue'
import { useTasksStore } from '~/store/tasks'
import TaskSearchInput from '~/components/tasks/TaskSearchInput.vue'

export default {
  name: 'tasks',
  components: {
    TaskSearchInput,
    FormNewTask,
    TaskListPageHeader,
    TaskList
  },
  setup () {
    const store = useTasksStore()

    onMounted(() => {
      store.setUserId()
      store.getUserTasks()
    })
    return {
      store
    }
  }
}
</script>
