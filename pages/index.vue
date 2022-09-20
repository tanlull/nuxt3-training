<script setup>
// SEO
useHead({
  title: "หน้าหลักรองรับ SEO",
  meta: [
    { name: "description", content: "โปรโมชั่น NT Fiber" },
    { name: "keywords", content: "โปรโมชั่น NT Mobile" },
  ],
});

// No Layout
definePageMeta({
  pageTransition: false,
});
</script>

<template>
  <div>
    <h1 class="bg-orange-600 text-stone-50 text-center">Index Page</h1>
    <button class="btn btn-success rounded">Click me</button>
  </div>
</template>
