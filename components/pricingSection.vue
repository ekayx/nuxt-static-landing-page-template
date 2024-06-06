<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { tm, locale } = useI18n();

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: {
    users: string;
    components: string;
    access: string;
    updates: string;
    projects: string;
    support: string;
  };
  button: {
    text: string;
  };
};

const pricingPlans = ref(tm("pricing.plans") as PricingPlan[]);
watch(locale, () => {
  pricingPlans.value = tm("pricing.plans");
});
</script>

<template>
  <!-- ====== Pricing Section Start -->
  <section
    id="pricing"
    class="relative z-10 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center">
            <span class="mb-2 block text-lg font-semibold text-primary">
              {{ $t("pricing.tag") }}
            </span>
            <h2
              class="mb-3 text-3xl leading-[1.208] font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]"
            >
              {{ $t("pricing.title") }}
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              {{ $t("pricing.subtitle") }}
            </p>
          </div>
        </div>
      </div>
      <div class="-mx-4 flex flex-wrap justify-center">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="w-full px-4 md:w-1/2 lg:w-1/3"
        >
          <div
            class="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
          >
            <span class="mb-3 block text-lg font-semibold text-primary">{{
              plan.name
            }}</span>
            <h2 class="mb-5 text-[42px] font-bold text-dark dark:text-white">
              <span>{{ plan.price }}</span>
              <span
                class="text-base font-medium text-body-color dark:text-dark-6"
              >
                / year
              </span>
            </h2>
            <p
              class="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color dark:text-dark-6"
            >
              {{ plan.description }}
            </p>
            <div class="mb-9 flex flex-col gap-[14px]">
              <p class="text-base text-body-color dark:text-dark-6">
                {{ plan.features.users }}
              </p>
              <p class="text-base text-body-color dark:text-dark-6">
                {{ plan.features.components }}
              </p>
              <p class="text-base text-body-color dark:text-dark-6">
                {{ plan.features.access }}
              </p>
              <p class="text-base text-body-color dark:text-dark-6">
                {{ plan.features.updates }}
              </p>
              <p class="text-base text-body-color dark:text-dark-6">
                {{ plan.features.projects }}
              </p>
              <p class="text-base text-body-color dark:text-dark-6">
                {{ plan.features.support }}
              </p>
            </div>
            <a
              href="/"
              :class="{
                ' border-primary bg-primary text-white hover:bg-opacity-90':
                  plan.name === 'Business',
                'border-stroke dark:border-dark-3 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white':
                  plan.name !== 'Business',
              }"
              class="block w-full rounded-md border p-3 text-center text-base font-medium transition"
              :aria-label="plan.button.text"
            >
              {{ plan.button.text }}
            </a>
            <div>
              <span class="absolute right-0 top-7 z-[-1]">
                <svg
                  width="77"
                  height="172"
                  viewBox="0 0 77 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="86"
                      y1="0"
                      x2="86"
                      y2="172"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3056D3" stop-opacity="0.09" />
                      <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span class="absolute right-4 top-4 z-[-1]">
                <svg
                  width="41"
                  height="89"
                  viewBox="0 0 41 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="38.9138"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 38.9138 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 38.9138 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 38.9138 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 38.9138 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 38.9138 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 38.9138 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 38.9138 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.9138"
                    cy="1.42021"
                    r="1.42021"
                    transform="rotate(180 38.9138 1.42021)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 26.4157 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 26.4157 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 26.4157 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 26.4157 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 26.4157 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 26.4157 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 26.4157 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.4157"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 26.4157 1.4202)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 13.9177 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 13.9177 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 13.9177 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 13.9177 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 13.9177 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 13.9177 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 13.9177 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.9177"
                    cy="1.42019"
                    r="1.42021"
                    transform="rotate(180 13.9177 1.42019)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 1.41963 87.4849)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 1.41963 74.9871)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 1.41963 62.4892)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 1.41963 38.3457)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 1.41963 13.634)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 1.41963 50.2754)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 1.41963 26.1319)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.41963"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 1.41963 1.4202)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== Pricing Section End -->
</template>
