<template>
  <v-app-bar app class="app-header" color="primary" flat>
    <NuxtLink :to="'/'">
      <v-toolbar-title class="text-h5 font-weight-bold ml-5">
        ホーム
      </v-toolbar-title>
    </NuxtLink>
    <v-menu v-for="menuGroup in allMenus" :key="menuGroup.name">
      <template #activator="{ props }">
        <v-btn v-bind="props">
          {{ menuGroup.name }}
        </v-btn>
      </template>
      <v-list dense min-width="240">
        <v-list-item
          v-for="menuItem in menuGroup.items"
          :key="menuItem.label"
          class="app-header__menu-item"
        >
          <NuxtLink :to="menuItem.url">
            {{ menuItem.label }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-row class="justify-end mr-3">
      <v-btn v-if="isLogin()" @click="logout"> ログアウト </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
const { user, logout } = useAuth()
const isLogin = () => {
  return !!user.value
}
let allMenus = ref([
  {
    name: 'TODO',
    items: [
      { label: 'TODO一覧', url: '/todo' },
    ],
  },
])
</script>

<style scoped>
.app-header a {
  color: #fff;
  text-decoration: none;
}
.app-header a:hover {
  text-decoration: none;
}
.app-header__menu-item a {
  color: #333;
  text-decoration: none;
}
</style>
