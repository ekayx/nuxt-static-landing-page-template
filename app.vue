<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { locale, setLocale } = useI18n();
</script>

<script>
import inViewportMixin from "~/mixins/viewportObserver.ts";

export default {
  mixins: [inViewportMixin],
};
</script>
