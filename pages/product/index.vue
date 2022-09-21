<template>
  <div class="container mx-auto my-10">
    <h1>Product page</h1>
    <div v-if="pending" class="my-5 text-center">
      <progress class="w-56 progress bg-error"></progress>
      <h1 class="text-2xl">กำลัง Loading ..</h1>
    </div>
    <div v-if="product">{{ product.data }}</div>
  </div>
</template>

<script setup>
const { data: product, pending } = await useGetProduct();
</script>
