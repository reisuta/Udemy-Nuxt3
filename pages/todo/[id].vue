<template>
  <h1>id</h1>
  <p>{{ route.params }}</p>
  <p><NuxtLink :to="{ name: 'todo-sample', params: { sample: 'test' } }">sampleに飛ぶ</NuxtLink></p>
  <p><NuxtLink to="/todo/1/any">test/anyに飛ぶ</NuxtLink></p>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route)
</script>
