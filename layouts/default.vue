<template>
  <AppHeader />

  <AtomsButton style="margin-top: 90px;" title="ホームへ" @click="navigateTo('/')"/>
  <AtomsButton style="margin-top: 90px;" title="TODOへ" @click="navigateTo('/todo')"/>

  <div>
    <slot />
  </div>
</template>
