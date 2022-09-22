<template>
  <div class="container mx-auto my-5 text-center">
    <h2>ID: {{ route.params.id }}</h2>

    <div v-if="chapter" class="grid grid-cols-3 gap-4">

      <div v-for="item in chapter.data" :key="item.ch_id" class="shadow-xl card w-96 bg-base-100">
        <div class="card-body">
          <h2 class="card-title">{{ item.ch_title }}</h2>
          <p>{{ item.ch_dateadd }}</p>
          <div class="justify-end card-actions">
            <NuxtLink :to="`https://youtube.com/watch?v=${item.ch_url}`" class="btn btn-primary" target="_blank">Watch Now</NuxtLink>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: chapter } = await useGetProductById(route.params.id);
</script>
