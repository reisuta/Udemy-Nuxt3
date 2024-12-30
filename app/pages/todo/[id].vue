<template>
  <h1>id</h1>
  <p>{{ route.params }}</p>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
