<template>
  <header class="app-bar">
    <div class="app-bar-title">ToDo App</div>
    <a href="/" class="app-bar-link">home</a>
  </header>
</template>

<style>
.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #1976d2;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.app-bar-title {
  font-size: 24px;
  font-weight: bold;
}

.app-bar-link {
  color: white;
  font-size: 24px;
  margin-left: 10px;
  text-decoration: none;
}

</style>
