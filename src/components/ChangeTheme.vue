<template>
  <tiny-radio-group v-model="theme" @change="changeTheme">
    <tiny-radio label="tiny-vue"></tiny-radio>
    <tiny-radio label="element"></tiny-radio>
  </tiny-radio-group>
</template>

<script setup>
import {
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
} from "@opentiny/vue";
import TinyThemeTool from "../theme-tool";
import { ref } from "vue";

const emit = defineEmits(["change-theme"]);

const theme = ref("tiny-vue");

const themeTool = new TinyThemeTool();

const tinyTestTheme = {
  id: "tiny-test-theme",
  data: {
    // 设置公共变量
    "ti-common-color-primary-bg": "#409eff",
    "ti-common-color-primary-normal": "#409eff",
    "ti-common-color-success-bg": "#f0f9eb",
    "ti-common-color-success-normal": "#67c23a",
    "ti-common-color-info-bg": "#f4f4f5",
    "ti-common-color-info-normal": "#909399",
    "ti-common-color-warn-bg": "#fdf6ec",
    "ti-common-color-warn-normal": "#e6a23c",
    "ti-common-color-danger-bg": "#fef0f0",
    "ti-common-color-danger-normal": "#f56c6c",
    // 设置button相关样式属性
    "ti-button-size-normal-height": "32px",
    "ti-button-border-radius": "4px",
    "ti-button-font-size": "14px",
    // 设置alert相关样式属性
    "ti-alert-border-radius": "6px",
    "ti-alert-close-font-size": "14px",
    "ti-alert-description-font-size": "14px",
    "ti-alert-success-close-icon-color": "#a8abb2",
    "ti-alert-info-close-icon-color": "#a8abb2",
    "ti-alert-error-close-icon-color": "#a8abb2",
    "ti-alert-warning-close-icon-color": "#a8abb2",
    "ti-alert-border-weight": "0px",
  },
};

const changeTheme = (theme) => {
  themeTool.changeTheme(theme === "element" ? tinyTestTheme : { data: {} });
  emit("change-theme", theme);
};
</script>
