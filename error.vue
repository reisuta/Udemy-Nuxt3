<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <h2>{{ error.statusMessage }}</h2>
    <p>{{ JSON.parse(error.data).server }}</p>
    <NuxtLink to="/">home画面へ</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>
