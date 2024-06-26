<script setup>
import { ref } from "vue";
const theme = ref("light");
const changeTheme = () => {
  const link = document.getElementById("dynamic-css");
  theme.value = theme.value === "light" ? "dark" : "light";
  link.setAttribute("href", `./${theme.value}.css`);
};
</script>

<template>
  <div id="root">
    <div id="theme-app">
      <button class="btn" @click="changeTheme">
        {{ theme === "light" ? "亮色模式" : "暗黑模式" }}
      </button>
      <p class="title">主题切换</p>
    </div>
  </div>
</template>
