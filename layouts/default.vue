<template>
  <div class="container p-3 m-auto">
    <main class="mb-[140px] sm:mb-[100px] ">
      <nuxt />
    </main>
    <footer class="bg-neutral-300 p-3 fixed w-full bottom-0 left-0">
      <the-navigation-menu />
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'default'
}
</script>
