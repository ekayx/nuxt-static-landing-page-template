<template>
  <div class="relative bg-white dark:bg-dark">
    <div class="container mx-auto">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-8">
        <div class="text-center mb-8">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Contact Us
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to send us a message.
          </p>
        </div>
        <div v-if="status === 'loading'" class="text-center">
          <p>Loading...</p>
        </div>
        <div v-else-if="status === 'success'" class="text-center">
          <div class="min-h-60 flex justify-center items-center">
            <p>{{ result }}</p>
          </div>
        </div>
        <div v-else-if="status === 'error'" class="text-center">
          <p>Error! 😢</p>
          <p>Contact us via company@email.com</p>
        </div>
        <div v-else>
          <form name="contact" method="POST" @submit.prevent="submitForm">
            <div class="flex mb-6 space-x-4">
              <div class="w-full md:w-1/2">
                <label
                  for="fname"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >First Name</label
                >
                <input
                  id="first_name"
                  v-model="form.firstName"
                  type="text"
                  name="name"
                  placeholder="John"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="w-full md:w-1/2">
                <label
                  for="lname"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >Last Name</label
                >
                <input
                  id="lname"
                  v-model="form.lastName"
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
            </div>

            <div class="flex mb-6 space-x-4">
              <div class="w-full md:w-1/2">
                <label
                  for="email"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >Email Address</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div class="w-full md:w-1/2">
                <label
                  for="phone"
                  class="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                  >Phone Number</label
                >
                <input
                  id="phone"
                  v-model="form.phone"
                  type="text"
                  name="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Your Message</label
              >

              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                name="message"
                placeholder="Your Message"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                aria-label="Submit"
                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p id="result" class="text-base text-center text-gray-400"></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact Page",
});

const form = ref({
  access_key: "1edd7c22-a116-4dac-9344-a6fe33a12873",
  subject: "New Submission from Web3Forms",
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  phone: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  try {
    status.value = "loading";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form.value,
    });
    console.log(response);
    result.value = response.message;
    if (response.success) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.lastName = "";
    form.value.firstName = "";
    form.value.email = "";
    form.value.message = "";
    form.value.phone = "";
  }
};
</script>
