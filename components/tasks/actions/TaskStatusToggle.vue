<template>
  <input
    type="checkbox"
    :checked="checked"
    :disabled="disabled"
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
    @input="$emit('input')"
  >
</template>

<script lang="ts">
export default {
  name: 'TaskStatusToggle',
  components: {},
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
