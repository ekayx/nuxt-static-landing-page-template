<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { tm, locale } = useI18n();

const featuresItems = ref(
  tm("services.items") as {
    icon: string;
    title: string;
    description: string;
  }[]
);
watch(locale, () => {
  featuresItems.value = tm("services.items");
});
</script>

<template>
  <!-- ====== Services Section Start -->
  <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span class="text-primary mb-2 block text-lg font-semibold">
              {{ $t("services.tag") }}
            </span>
            <h2
              class="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
            >
              {{ $t("services.title") }}
            </h2>
            <p class="text-body-color text-base dark:text-dark-6">
              {{ $t("services.subtitle") }}
            </p>
          </div>
        </div>
      </div>
      <div class="-mx-4 flex flex-wrap">
        <template v-for="(item, index) in featuresItems" :key="index">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              class="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                v-html="item.icon"
              ></div>
              <h4
                class="text-dark dark:text-white mb-[14px] text-2xl font-semibold"
              >
                {{ item.title }}
              </h4>
              <p class="text-body-color dark:text-dark-6">
                {{ item.description }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Services Section End -->
</template>
