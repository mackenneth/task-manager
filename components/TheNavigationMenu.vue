<template>
  <nav class="navigation">
    <ul class="flex justify-around gap-1 max-w-lg m-auto">
      <li
        v-for="(navigationItem, index) in navigationMenuItems"
        :key="index"
        class="navigation__item"
      >
        <nuxt-link
          :prefetch="navigationItem.prefetch"
          :to="navigationItem.route"
          class="text-gray-500"
        >
          {{ navigationItem.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">

type TNavigationMenuItem = {
  route: string
  text: string
  prefetch: boolean
}

export default {
  name: 'TheNavigationMenu',
  components: {},
  props: {},
  setup () {
    const navigationMenuItems: Array<TNavigationMenuItem> = [
      {
        route: '/',
        text: 'Главная',
        prefetch: false
      },
      {
        route: '/task-list',
        text: 'Список задач',
        prefetch: false
      },
      {
        route: '/terms-of-use',
        text: 'Правила использования',
        prefetch: false
      }
    ]

    return {
      navigationMenuItems
    }
  }
}
</script>

<style>
.nuxt-link-exact-active {
  color: black;
  cursor: default;
}

.navigation__item :not(.nuxt-link-exact-active):hover {
  color: blue;
}
</style>
