<template>
  <form @submit.prevent="addNewTask">
    <div class="flex gap-2">
      <custom-input
        v-model="taskTitle"
        placeholder="Новая задача..."
        :invalid="!isTaskTitleValid"
        @keyup="addNewTask"
        @input="isTaskTitleValid = checkIsTaskTitleValid()"
      />
      <custom-button
        type="submit"
        :disabled="store.isFetching || !isTaskTitleValid"
        @click="addNewTask"
      >
        Сохранить
      </custom-button>
    </div>
    <custom-form-invalid-feedback v-if="!isTaskTitleValid">
      Название задачи должно быть не меньше {{ minTaskTitleLength }} символов
    </custom-form-invalid-feedback>
  </form>
</template>

<script lang="ts">
import { ref } from 'vue'
import CustomInput from '~/components/base/CustomInput.vue'
import CustomButton from '~/components/base/CustomButton.vue'
import { useTasksStore } from '~/store/tasks'
import CustomFormInvalidFeedback from '~/components/base/CustomFormInvalidFeedback.vue'

export default {
  name: 'FormNewTask',
  components: {
    CustomFormInvalidFeedback,
    CustomButton,
    CustomInput
  },
  props: {},
  setup () {
    const store = useTasksStore()
    const taskTitle = ref('')

    const minTaskTitleLength = 3
    const isTaskTitleValid = ref(true)
    const checkIsTaskTitleValid = () => {
      return taskTitle.value.length >= minTaskTitleLength
    }

    const addNewTask = (): void => {
      if (!checkIsTaskTitleValid()) {
        return
      }

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
      minTaskTitleLength,
      isTaskTitleValid,
      checkIsTaskTitleValid,
      addNewTask
    }
  }
}
</script>
