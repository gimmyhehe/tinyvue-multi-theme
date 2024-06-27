<script setup>
import {
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
} from "@opentiny/vue";
import TinyThemeTool from "@opentiny/vue-theme/theme-tool";
import { ref } from "vue";
import { tinySmbTheme } from "@opentiny/vue-theme/theme";

const theme = ref("tiny-vue");
const themeTool = new TinyThemeTool();

const emit = defineEmits(["change-theme"]);
const changeTheme = (theme) => {
  themeTool.changeTheme(theme === "x-design" ? tinySmbTheme : null);
  emit("change-theme", theme);
};
</script>

<template>
  <tiny-radio-group v-model="theme" @change="changeTheme">
    <tiny-radio label="tiny-vue"></tiny-radio>
    <tiny-radio label="x-design"></tiny-radio>
  </tiny-radio-group>
</template>
