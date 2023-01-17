<template>
  <p
    class="mt-2 text-sm text-red-600 dark:text-red-500"
  >
    <slot />
  </p>
</template>

<script lang="ts">
export default {
  name: 'CustomFormInvalidFeedback'
}
</script>
