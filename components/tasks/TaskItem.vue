<template>
  <div class="flex items-baseline gap-2 border-b-gray-500 shadow px-4 py-4">
    <input
      type="checkbox"
      :checked="task.completed"
      :disabled="isFetching"
      class="
        h-4
        w-4
        border
        border-gray-300
        rounded-sm
        bg-white
        checked:bg-blue-600
        checked:border-blue-600
        focus:outline-none
        transition
        duration-200
        mt-1
        align-top
        float-left
        mr-2
        cursor-pointer
      "
      @input="toggleCompletedStatus"
    >
    <h6 class="font-semibold">
      {{ task.title }}
    </h6>
  </div>
</template>

<script lang="ts">
import { PropType, ref } from 'vue'
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
    const isFetching = ref(false)

    const store = useTasksStore()
    const toggleCompletedStatus = (): void => {
      isFetching.value = true

      store.editTask({
        ...props.task,
        completed: !props.task.completed
      })
        .finally(() => {
          isFetching.value = false
        })
    }
    return {
      isFetching,
      toggleCompletedStatus
    }
  }
}
</script>
