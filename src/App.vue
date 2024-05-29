<script setup>
import ButtonDemo from "./components/ButtonDemo.vue";
import AlertDemo from "./components/AlertDemo.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
</script>

<template>
  <change-theme></change-theme>
  <div class="theme-app">
    <div class="container">
      <button-demo></button-demo>
    </div>
    <div class="container">
      <alert-demo></alert-demo>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 650px;
  padding: 20px 24px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 24px;
}
</style>
