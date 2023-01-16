<template>
  <div>
    <h3 class="text-lg mb-3 font-medium text-neutral-700">
      {{ title }}
    </h3>
    <div
      v-if="tasks.length"
      class="grid sm:grid-cols-2 gap-4"
    >
      <task-item
        v-for="(task, index) in tasks"
        :key="`${task.id}-${index}`"
        :task="task"
      />
    </div>
    <p v-else class="text-neutral-600">
      Нет задач
    </p>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import TaskItem from '~/components/tasks/TaskItem.vue'
import { TTask } from '~/core/types/tasks'

export default {
  name: 'TaskList',
  components: { TaskItem },
  props: {
    tasks: {
      type: Array as PropType<Array<TTask>>,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
