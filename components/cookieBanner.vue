<template>
  <div
    v-if="showCookieBanner"
    class="fixed z-50 bottom-0 w-full bg-gray-2 dark:bg-dark-2 xs:px-10 rounded-lg border border-stroke dark:border-dark-3 py-8 px-6 md:px-8 lg:px-10"
  >
    <div class="flex flex-wrap max-w-screen-2xl mx-auto">
      <div class="w-full md:w-7/12 lg:w-2/3">
        <div class="mb-6 md:mb-0">
          <h4
            class="xs:text-2xl mb-1 text-xl font-semibold text-dark dark:text-white md:text-xl lg:text-2xl"
          >
            We use cookies
          </h4>
          <p class="text-body-color dark:text-dark-6 text-base">
            Please, accept these sweeties to continue enjoying our site!
          </p>
        </div>
      </div>
      <div class="w-full md:w-5/12 lg:w-1/3">
        <div class="flex items-center space-x-3 md:justify-end">
          <button
            class="bg-primary inline-flex items-center justify-center rounded-md py-3 px-7 text-center text-base font-medium text-white hover:bg-blue-dark"
            aria-label="Accept Cookies"
            @click="acceptCookies"
          >
            Accept
          </button>
          <button
            class="text-body-color dark:text-dark-6 shadow-1 dark:shadow-none hover:bg-primary inline-flex items-center justify-center rounded-md bg-white dark:bg-dark py-3 px-7 text-center text-base font-medium hover:text-white"
            aria-label="Close Cookie Dialog"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookieBanner: false,
    };
  },
  mounted() {
    this.cookieBannerAccepted = localStorage.getItem("cookieBannerAccepted");
    if (!this.cookieBannerAccepted) {
      this.showCookieBanner = true;
    }
  },
  methods: {
    acceptCookies() {
      this.showCookieBanner = false;
      localStorage.setItem("cookieBannerAccepted", true);
    },
  },
};
</script>
