<template>
  <div class="container p-3 m-auto">
    <main>
      <nuxt />
    </main>
    <footer class="bg-neutral-300 p-3 fixed w-full bottom-0 left-0">
      <TheNavigationMenu />
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'default'
}
</script>
