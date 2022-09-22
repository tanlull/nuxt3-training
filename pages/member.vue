<template>
  <div>
    <div
      class="min-h-screen hero"
      style="background-image: url(https://placeimg.com/1000/800/arch)"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div
        class="text-center hero-content text-neutral-content"
        v-if="profile?.data?.user"
      >
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">
            ยินดีต้อนรับคุณ {{ profile?.data?.user?.name }}
          </h1>
          <p class="mb-5">
            Email : {{ profile?.data?.user?.email }} Role :
            {{ profile?.data?.user?.role }}
          </p>

          <button class="btn btn-warning" @click="useLogout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
onMounted(() => {
  //alert("member loaded!");
  const token = useStorage("token", null);
  if (token.value === null) {
    alert("no authorize");
    navigateTo("/login", { replace: true });
  }
});

const profile = useState("globalProfile");
</script>
