<template>
  <div>
    <!-- Default error page-->
    <H1 :style="{ color: 'red', fontsize: '20rem' }">404 Not Found</H1>

    <BackButton></BackButton>
  </div>
</template>

<script setup>
// No Layout
definePageMeta({
  layout: false,
});
</script>
