<template>
  <div class="container mx-auto my-10">
    <h1 class="text-2xl" v-if="users">
      ข้อมูลผู้ใช้ {{ users.totalRecord }} รายการ
    </h1>

    <br />

    <div class="my-3">
      <vue-awesome-paginate
        :total-items="users.totalRecord"
        :items-per-page="pageSize"
        :max-pages-shown="5"
        :current-page="page"
        :on-click="onClickHandler"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="table w-full table-compact">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of users.data" :key="item.id">
            <th>{{ item.id }}</th>
            <td>{{ item.fullname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const page = ref(1);
const pageSize = ref(10);
const users = ref(null);

const { data } = await useFetch(
  `/api/user/paginate?page=${page.value}&pageSize=${pageSize.value}`,
  { initialCache: false }
);
users.value = data.value;

const onClickHandler = async (pageNumber) => {
  // console.log(pageNumber);
  const { data } = await useFetch(
    `/api/user/paginate?page=${pageNumber}&pageSize=${pageSize.value}`,
    { initialCache: false }
  );
  users.value = data.value;
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
