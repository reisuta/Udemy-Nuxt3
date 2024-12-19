<template>
  <h1>test/any</h1>
  <p>{{ route.params }}</p>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(typeof(route.params.test))

definePageMeta({
  validate: async (route) => {
    // testパラメータが数字かつ、anyパラメータがanyのときのみ許可
    return typeof route.params.test === 'string' && /^\d+$/.test(route.params.test) && route.params.any === 'any'
  }
})

</script>
