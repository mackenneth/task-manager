<template>
  <div>
    <h3 class="text-lg mb-3 font-medium text-neutral-700">
      {{ title }}
    </h3>
    <div
      v-if="isFetching"
      class="grid sm:grid-cols-2 gap-4"
    >
      <skeleton-task-item
        v-for="i in [1, 2, 3, 4]"
        :key="i"
      />
    </div>
    <div
      v-else-if="tasks.length"
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
import SkeletonTaskItem from '~/components/tasks/SkeletonTaskItem.vue'
import { TTask } from '~/core/types/tasks'

export default {
  name: 'TaskList',
  components: {
    TaskItem,
    SkeletonTaskItem
  },
  props: {
    tasks: {
      type: Array as PropType<Array<TTask>>,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    isFetching: {
      type: Boolean,
      default: false
    }
  }
}
</script>
