<script setup>
import ButtonDemo from "./components/ButtonDemo.vue";
import AlertDemo from "./components/AlertDemo.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
import { ConfigProvider } from "@opentiny/vue";
import { ref } from "vue";
import designSmbConfig from "@opentiny/vue-design-smb";
const designConfig = ref({});
const changeDesign = (val) => {
  console.log(val === "x-design");
  designConfig.value = val === "x-design" ? designSmbConfig : {};
};
</script>

<template>
  <change-theme @change-theme="changeDesign"></change-theme>
  <config-provider :design="designConfig" :key="designConfig.name">
    <div class="theme-app">
      <div class="container">
        <button-demo></button-demo>
      </div>
      <div class="container">
        <alert-demo></alert-demo>
      </div>
    </div>
  </config-provider>
</template>

<style scoped>
.container {
  width: 700px;
  padding: 20px 24px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 24px;
}
</style>
