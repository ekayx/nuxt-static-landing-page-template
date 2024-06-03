<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { tm, locale } = useI18n();

type TeamItem = {
  image: string;
  name: string;
  profession: string;
};

const teamItems = ref(tm("team.members") as TeamItem[]);
watch(locale, () => {
  teamItems.value = tm("team.members");
});
</script>

<template>
  <!-- ====== Team Section Start -->
  <section id="team" class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center">
            <span class="text-primary mb-2 block text-lg font-semibold">
              {{ $t("team.tag") }}
            </span>
            <h2
              class="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
            >
              {{ $t("team.title") }}
            </h2>
            <p class="text-body-color text-base dark:text-dark-6">
              {{ $t("team.subtitle") }}
            </p>
          </div>
        </div>
      </div>

      <div class="-mx-4 flex flex-wrap justify-center">
        <template v-for="(item, index) in teamItems" :key="index">
          <div class="w-full px-4 md:w-1/2 xl:w-1/4">
            <div class="mx-auto mb-10 w-full max-w-[370px]">
              <div class="relative overflow-hidden rounded-lg">
                <NuxtImg
                  :src="item.image"
                  alt="image"
                  class="w-full"
                  data-inviewport="scaleUpCenter"
                />
                <div class="absolute bottom-5 left-0 w-full text-center">
                  <div
                    class="relative mx-5 overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-5 px-3"
                  >
                    <h3
                      class="text-dark dark:text-white text-base font-semibold"
                    >
                      {{ item.name }}
                    </h3>
                    <p class="text-body-color dark:text-dark-6 text-xs">
                      {{ item.profession }}
                    </p>
                    <div>
                      <span class="absolute left-0 bottom-0">
                        <svg
                          width="61"
                          height="30"
                          viewBox="0 0 61 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="45"
                            r="45"
                            fill="#13C296"
                            fill-opacity="0.11"
                          />
                        </svg>
                      </span>
                      <span class="absolute top-0 right-0">
                        <svg
                          width="20"
                          height="25"
                          viewBox="0 0 20 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="0.706257"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 0.706257 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 6.39669 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 12.0881 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 17.7785 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 0.706257 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 6.39669 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 12.0881 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 17.7785 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 0.706257 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 6.39669 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 12.0881 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 17.7785 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 0.706257 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 6.39669 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 12.0881 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 17.7785 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 0.706257 1.58989)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 6.39669 1.58989)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 12.0881 1.58989)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 17.7785 1.58989)"
                            fill="#3056D3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Team Section End -->
</template>
