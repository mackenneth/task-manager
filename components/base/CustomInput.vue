<template>
  <input
    v-model="inputValue"
    :type="type"
    :placeholder="placeholder"
    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
       "
    :class="{ 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500': invalid}"
  >
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'CustomInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  setup (props: { value: string | number; }, { emit }: any) {
    const inputValue = computed({
      get: () => {
        return props.value
      },
      set: (value: string | number) => {
        emit('input', value)
      }
    })

    return {
      inputValue
    }
  }
}
</script>
