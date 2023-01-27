<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404" class="text-3xl text-center font-semi-bold mb-2">
      Страница не найдена
    </h1>
    <img src="/img/error-404.png" class="w-full max-w-[650px] mb-4 mx-auto" alt="Логотип">
    <nuxt-link to="/" class="block text-center mx-auto hover:text-blue-600 underline">
      На главную
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
