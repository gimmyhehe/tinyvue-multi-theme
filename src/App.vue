<script setup>
import ButtonDemo from "./components/ButtonDemo.vue";
import AlertDemo from "./components/AlertDemo.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
import { ConfigProvider } from "@opentiny/vue";
import { ref } from 'vue'

const customDesign = {
  name: "customDesign", // 自定义规范名称
  components: {
    Alert: {
      icons: {
        warning: () => null,
        success: () => null,
        error: () => null,
      },
      // 可以通过renderless重写某个方法，自定义交互逻辑
      renderless: (props, hooks, { emit }, api) => {
        const state = api.state;
        return {
          handleClose() {
            const isClose = confirm('是否确认关闭alert')
            if (isClose) {
              state.show = false;
            }
          },
        };
      },
    },
  },
};
const design = ref({});
const changeDesign = (theme) => {
  design.value = theme === 'element' ? customDesign : {}
};
</script>

<template>
  <change-theme @change-theme="changeDesign"></change-theme>
  <config-provider :design="design" :key="design.name">
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
  width: 650px;
  padding: 20px 24px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 24px;
}
</style>
