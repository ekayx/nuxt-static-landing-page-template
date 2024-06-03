<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import inViewportMixin from "~/mixins/viewportObserver.ts";

export default {
  mixins: [inViewportMixin],
  setup() {
    useI18n();
  },
};
</script>
