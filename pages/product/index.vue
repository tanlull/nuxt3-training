<template>
  <div class="container mx-auto my-10">
    <h1 class="text-2xl">รายการคอร์สเรียน</h1>
    <br />

    <div v-if="pending" class="my-5 text-center">
      <progress class="w-56 progress bg-info"></progress>
      <h1 class="text-2xl">กำลังโหลดข้อมูล...</h1>
    </div>

    <div v-if="product">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>ID</th>
              <th>ชื่อคอร์ส</th>
              <th>รายละเอียด</th>
              <th>รูปภาพ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- row -->
            <tr v-for="item in product.data" :key="item.id">
              <th>{{ item.id }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.detail }}</td>
              <td><img :src="item.picture" width="60" /></td>
              <td>
                <NuxtLink class="link link-accent" :to="`/product/${item.id}`">
                  View
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: product, pending } = await useGetProduct();
</script>
