<template>
  <div class="relative bg-white dark:bg-dark">
    <div class="container mx-auto">
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
      </div>
      <div v-else>
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-8"
          name="contact"
          method="POST"
          @submit.prevent="submitForm"
        >
          <h1 class="text-3xl text-center my-8">Contact Us</h1>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold my-2"
              for="name"
            >
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nameXXX"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold my-2"
              for="role"
            >
              Role
            </label>
            <input
              id="role"
              v-model="form.role"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="role"
              placeholder="Your Role"
            />

            <label
              class="block text-gray-700 text-sm font-bold my-2"
              for="email"
            >
              Email
            </label>

            <input
              id="email"
              v-model="form.email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Your Email"
            />

            <label
              class="block text-gray-700 text-sm font-bold my-2"
              for="message"
            >
              Message
            </label>

            <textarea
              v-model="form.message"
              name="message"
              class="border-solid border-2 w-full p-2"
            ></textarea>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  access_key: "1edd7c22-a116-4dac-9344-a6fe33a12873",
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  role: "",
  message: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  try {
    status.value = "loading";
    const response = await $fetch("https://api.web3forms.com/submit", {
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
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  }
};
</script>
