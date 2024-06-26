<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { setLocale, tm, locale } = useI18n();

const open = ref(false);
const dropdownButtonRef = ref<HTMLButtonElement | null>(null);

const toggleNavbar = () => {
  open.value = !open.value;
};

const navLinkItems = ref(
  tm("navbar.elements") as {
    text: string;
    scrollToId: string;
  }[],
);
watch(locale, () => {
  navLinkItems.value = tm("navbar.elements");
});

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (
    dropdownButtonRef.value &&
    !dropdownButtonRef.value.contains(event.target as Node)
  ) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

const scrollTo = (id: string) => {
  if (window.location.pathname !== "/") {
    window.location.href = "/#" + id;
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <header
    class="fixed z-50 top-0 flex w-full items-center bg-white dark:bg-dark"
  >
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <a href="/#" class="block w-full py-5" aria-label="homepage">
            <img
              src="/img/logo/logo.svg"
              alt="logo"
              class="dark:hidden"
              height="38"
              width="153"
            />
            <img
              src="/img/logo/logo-white.svg"
              alt="logo"
              class="hidden dark:block"
              height="38"
              width="153"
            />
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              id="navbarToggler"
              ref="dropdownButtonRef"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              aria-label="Toggle Navbar"
              @click="toggleNavbar"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
              ></span>
            </button>
            <nav
              id="navbarCollapse"
              :class="{ hidden: !open }"
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <template v-for="(item, index) in navLinkItems" :key="index">
                  <li>
                    <a
                      v-if="item.scrollToId"
                      href="/"
                      class="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                      :aria-label="item.text"
                      @click="scrollTo(item.scrollToId)"
                    >
                      {{ item.text }}
                    </a>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0 text-2xl gap-4">
            <!-- night mode tailwind  -->
            <button
              class="flex justify-center items-center"
              aria-label="Toggle Night Mode"
              @click="toggleTheme"
            >
              <span class="icon-[ic--round-dark-mode] dark:text-primary"></span>
            </button>
            <a
              href="https://github.com/ekayx/nuxt-static-landing-page-template"
              class="w-10 h-10 flex justify-center items-center"
              aria-label="GitHub Repository"
            >
              <span class="icon-[mdi--github] dark:text-primary"></span>
            </a>
            <button
              v-if="
                $i18n.availableLocales.includes('de') && 'de' != $i18n.locale
              "
              class="flex justify-center items-center"
              aria-label="Change Language to German"
              @click="setLocale('de')"
            >
              <span class="icon-[twemoji--flag-germany]"></span>
            </button>
            <button
              v-if="
                $i18n.availableLocales.includes('en') && 'en' != $i18n.locale
              "
              class="flex justify-center items-center"
              aria-label="Change Language to English"
              @click="setLocale('en')"
            >
              <span class="icon-[twemoji--flag-united-kingdom]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
