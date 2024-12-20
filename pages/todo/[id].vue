<template>
  <h1>id</h1>
  <p>{{ route.params }}</p>
</template>

<script setup lang="ts">
const route = useRoute()
throw createError({
  statusCode: 404,
  statusMessage: 'エラーです',
  data: {
    server: 'サーバーエラーです',
    client: 'クライアントエラーです'
  }
})
</script>
