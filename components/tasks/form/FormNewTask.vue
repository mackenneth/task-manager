<template>
  <form
    class="flex gap-2"
    @submit.prevent="addNewTask"
  >
    <custom-input
      v-model="taskTitle"
      placeholder="Новая задача..."
      @keyup="addNewTask"
    />
    <custom-button
      type="submit"
      :disabled="store.isFetching"
      @click="addNewTask"
    >
      Сохранить
    </custom-button>
  </form>
</template>

<script lang="ts">
import { ref } from 'vue'
import CustomInput from '~/components/base/CustomInput.vue'
import CustomButton from '~/components/base/CustomButton.vue'
import { useTasksStore } from '~/store/tasks'

export default {
  name: 'FormNewTask',
  components: {
    CustomButton,
    CustomInput
  },
  props: {},
  setup () {
    const store = useTasksStore()
    const taskTitle = ref('')

    const addNewTask = (): void => {
      const task = {
        id: null,
        title: taskTitle.value,
        userId: store.userId,
        completed: false
      }

      store.addNewTask(task)
        .then(() => {
          taskTitle.value = ''
        })
    }

    return {
      taskTitle,
      store,
      addNewTask
    }
  }
}
</script>
