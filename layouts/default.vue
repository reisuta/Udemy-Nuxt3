<template>
  <AppHeader />

  <!-- Button style="margin-top: 90px;" @click="enableSimpleLayout"/> -->
  <AtomsButton style="margin-top: 90px;" @click="enableSimpleLayout"/>

  <h1>Lazy Component</h1>
  <button @click="showComponent = !showComponent">
    コンポネント読み込み
  </button>

  <!--開発者ツールnetworkタブで違いを確認できる -->
  <LazySample v-if="showComponent" />

  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const enableSimpleLayout = () => {
  setPageLayout('simple')
}
const showComponent = ref(false)
</script>
