<template>
  <AppHeader />
  <div style="margin-top: 100px">
    {{ 'Simple layout' }}
    <AtomsButton @click="enableDefaultLayout"/>
    <slot />
  </div>
</template>

<script setup lang="ts">
const enableDefaultLayout = () => {
  setPageLayout('default')
}
</script>
