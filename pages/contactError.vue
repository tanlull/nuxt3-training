<template>
  <div class="container mx-auto my-12">
    <h1 class="text-lg">Contact Page</h1>

    <p>Tel: 9999999999</p>

    <hr />

    <p v-if="pending">
      <progress class="w-56 progress bg-error"></progress>
    </p>
    <p v-if="data">API Version: {{ data.data.version }} {{ data.message }}</p>
    <ClientOnly>
      <p v-if="error" class="alert alert-error">
        เกิดข้อผิดพลาดจาก Server {{ error }}
      </p>
    </ClientOnly>
  </div>
</template>

<script setup>
// const { data } = await useFetch('https://api.codingthailand.com/api/version', {
//     pick: ['data', 'message']
// });

// const { data, pending } = await useLazyFetch('https://api.codingthailand.com/api/version', {
//     pick: ['data', 'message'],
// });

// const { data, pending } = await useAsyncData('apiversion', () => $fetch('https://api.codingthailand.com/api/version'), {
//     pick: ['data', 'message'],
// });
const { data, pending, error } = await useLazyAsyncData(
  "apiversion2",
  () => $fetch("https://api.codingthailand.com/api/version5555"),
  {
    pick: ["data", "message"],
  }
);
if (error) {
  showError("เกิดข้อผิดพลาดจาก Server");
}
</script>
