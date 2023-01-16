<template>
  <div class="flex items-baseline gap-2 border-b-gray-500 shadow px-4 py-4">
    <input type="checkbox" :checked="task.completed" @input="toggleCompletedStatus">
    <h6 class="font-semibold">
      {{ task.title }}
    </h6>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TTask } from '~/core/types/tasks'
import { useTasksStore } from '~/store/tasks'

export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object as PropType<TTask>,
      required: true
    }
  },
  setup (props: any) {
    const store = useTasksStore()
    const toggleCompletedStatus = (): void => {
      store.editTask({
        ...props.task,
        completed: !props.task.completed
      })
    }
    return {
      toggleCompletedStatus
    }
  }
}
</script>
