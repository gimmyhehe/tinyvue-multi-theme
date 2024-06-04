<template>
  <div>
    <tiny-alert type="success" description="type 为 success"></tiny-alert>
    <tiny-alert type="simple" description="type 为默认值 info"></tiny-alert>
    <tiny-alert type="warning" description="type 为 warning"></tiny-alert>
    <tiny-alert type="error" description="type 为 error"></tiny-alert>
  </div>
</template>

<script>
import { Alert } from "@opentiny/vue";

export default {
  components: {
    TinyAlert: Alert,
  },
};
</script>
