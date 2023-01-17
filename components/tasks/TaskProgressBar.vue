<template>
  <div>
    <h3

      class="text-lg mb-3 font-medium text-neutral-700 flex items-center gap-2"
    >
      <span>Выполнено</span>
      <template v-if="!isFetching">
        {{ completedTasksCount }} из {{ totalTaskCount }}
      </template>
      <div
        v-else
        class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] w-full"
      />
    </h3>

    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        v-if="!isFetching"
        class="bg-blue-600 h-2.5 rounded-full  transition-all duration-700"
        :style="{width: `${progressPercentage}%`}"
      />
      <div
        v-else
        class="bg-blue-600 h-2.5 rounded-full w-60 animate-pulse"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'TaskProgressBar',
  components: {},
  props: {
    completedTasksCount: {
      type: Number,
      default: 0
    },
    totalTaskCount: {
      type: Number,
      default: 0
    },
    isFetching: {
      type: Boolean,
      default: false
    }
  },
  setup (props: any) {
    const progressPercentage = computed(() => 100 * props.completedTasksCount / props.totalTaskCount)

    return {
      progressPercentage
    }
  }
}
</script>
