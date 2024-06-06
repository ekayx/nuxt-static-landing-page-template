<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { tm, locale } = useI18n();

type PortfolioItem = {
  image: string;
  category: string;
  title: string;
  buttonText: string;
  buttonLink: string;
};

const portfolioItems = ref(tm("portfolio.projects") as PortfolioItem[]);
watch(locale, () => {
  portfolioItems.value = tm("portfolio.projects");
});

const selectedCategory = ref<string>("All");

const uniqueCategories = computed(() => {
  return ["All", ...new Set(portfolioItems.value.map((item) => item.category))];
});

const filteredItems = computed(() => {
  if (selectedCategory.value === "All") {
    return portfolioItems.value;
  } else {
    return portfolioItems.value.filter(
      (item) => item.category === selectedCategory.value,
    );
  }
});

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};
</script>

<template>
  <!-- ====== Portfolio Section Start -->
  <section
    id="portfolio"
    class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center">
            <span class="text-primary mb-2 block text-lg font-semibold">
              {{ $t("portfolio.tag") }}
            </span>
            <h2
              class="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]"
            >
              {{ $t("portfolio.title") }}
            </h2>
            <p class="text-body-color text-base dark:text-dark-6">
              {{ $t("portfolio.subtitle") }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-wrap justify-center -mx-4">
        <div class="w-full px-4">
          <ul class="flex flex-wrap justify-center mb-12 space-x-1">
            <li class="mb-1">
              <button
                v-for="category in uniqueCategories"
                :key="category"
                :class="{
                  'bg-primary text-white': selectedCategory === category,
                  'text-body-color dark:text-dark-6 hover:bg-primary hover:text-white':
                    selectedCategory !== category,
                }"
                class="inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8"
                aria-label="Category"
                @click="selectCategory(category)"
              >
                {{ category }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <div
          v-for="item in filteredItems"
          :key="item.title"
          class="w-full px-4 md:w-1/2 xl:w-1/3"
        >
          <div class="relative mb-12">
            <div class="overflow-hidden rounded-[10px]">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="w-full"
                data-inviewport="scaleUpCenter"
                width="370"
                height="300"
              />
            </div>
            <div
              class="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark"
            >
              <span class="text-primary mb-2 block text-sm font-medium">{{
                item.category
              }}</span>
              <h3 class="text-dark dark:text-white mb-5 text-xl font-bold">
                {{ item.title }}
              </h3>
              <a
                :href="item.buttonLink"
                class="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                aria-label="button"
              >
                {{ item.buttonText }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Portfolio Section End -->
</template>
