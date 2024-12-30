<template>
  <main>
    {{ route.path }}
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
