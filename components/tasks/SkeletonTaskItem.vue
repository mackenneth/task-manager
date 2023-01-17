<template>
  <div class="flex items-start gap-2 border-b-gray-500 shadow px-4 py-4 animate-pulse">
    <span
      class="
        h-4
        w-4
        border
        border-gray-300
        rounded-sm
      "
    />
    <div class="w-full">
      <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
      <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SkeletonTaskItem'
}
</script>
