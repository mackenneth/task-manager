<template>
  <div>
    <task-list-page-header class="mb-2" />
    <hr class="mb-3">
  </div>
</template>

<script lang="ts">
import TaskListPageHeader from '~/components/tasks/TaskListPageHeader.vue'

export default {
  name: 'task-list',
  components: { TaskListPageHeader }
}
</script>
