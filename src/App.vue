<script setup>
import ButtonDemo from './components/ButtonDemo.vue'
import AlertDemo from './components/AlertDemo.vue'
</script>

<template>
  <div>
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
  width: 600px;
  padding: 20px 24px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 24px;
}
.container:first-child {
  padding-bottom: 0px;
}
</style>
