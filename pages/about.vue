<template>
  <div class="container mx-auto my-12">
    <h1>About Page</h1>
    Result : {{ result }} <br />
    <ClientOnly> Date : {{ dateNow }} </ClientOnly>
    <br />
    {{ useB() }} {{ c }} {{ useCalendar() }}
    <BackButton />
    <p>{{ config.apiKey }}</p>
    <p>{{ config.jwtSecret }}</p>
    <p>{{ config.mysqlPassword }}</p>
    <p>{{ config.public.backendUrl }}</p>
  </div>
</template>

<script setup>
const result = useAdd(2, 3);
const dateNow = useShowDate();
const c = useCalendar();
const config = useRuntimeConfig();
</script>
