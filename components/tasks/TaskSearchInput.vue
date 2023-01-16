<template>
  <custom-input
    v-model="searchQuery"
    placeholder="Поиск..."
  />
</template>

<script lang="ts">
import { computed, WritableComputedRef } from 'vue'
import CustomInput from '~/components/base/CustomInput.vue'
import { useTasksStore } from '~/store/tasks'

export default {
  name: 'TaskSearchInput',
  components: {
    CustomInput
  },
  props: {},
  setup () {
    const store = useTasksStore()

    const searchQuery: WritableComputedRef<string> = computed({
      get: () => store.searchQuery,
      set: (value) => {
        store.updateSearchQuery(value)
      }
    })
    return {
      searchQuery
    }
  }
}
</script>
