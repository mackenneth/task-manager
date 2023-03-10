<template>
  <div class="flex items-baseline gap-2 border-b-gray-500 shadow px-4 py-4 relative">
    <task-status-toggle
      :disabled="isFetching"
      :checked="task.completed"
      @input="toggleCompletedStatus"
    />
    <h6 class="font-semibold mr-[50px]">
      {{ task.title }}
    </h6>
    <button-delete-task
      class="w-[50px] h-full absolute right-0 top-0"
      @click="deleteTask"
    />
  </div>
</template>

<script lang="ts">
import { PropType, ref } from 'vue'
import { TTask } from '~/core/types/tasks'
import { useTasksStore } from '~/store/tasks'
import ButtonDeleteTask from '~/components/tasks/actions/ButtonDeleteTask.vue'
import TaskStatusToggle from '~/components/tasks/actions/TaskStatusToggle.vue'

export default {
  name: 'TaskItem',
  components: {
    TaskStatusToggle,
    ButtonDeleteTask
  },
  props: {
    task: {
      type: Object as PropType<TTask>,
      required: true
    }
  },
  setup (props: any) {
    const isFetching = ref(false)
    const isDisplayDeleteButton = ref(false)

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

    const deleteTask = (): void => {
      isFetching.value = true

      store.deleteTask(props.task.id)
        .finally(() => {
          isFetching.value = false
        })
    }

    return {
      isFetching,
      isDisplayDeleteButton,
      toggleCompletedStatus,
      deleteTask
    }
  }
}
</script>
