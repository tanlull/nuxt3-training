<template>
  <div class="navbar nt-navbar">
    <div class="flex-1">
      <NuxtLink to="/">
        <img src="/assets/logo.png" helght="100" width="200" />
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="p-0 menu menu-horizontal">
        <li><NuxtLink to="/">Home</NuxtLink></li>

        <li v-if="!token"><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/product">Product</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <!-- <li><NuxtLink to="/contactError">Contact Error Handle</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/vueuse">VueUse</NuxtLink></li> -->
        <li><NuxtLink to="/about">About</NuxtLink></li>

        <li tabindex="0" v-if="profile?.data?.user?.name">
          <a>
            สวัสดีคุณ {{ profile?.data?.user?.name }}
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 nt-navbar w-72">
            <li><NuxtLink to="/member">ข้อมูลส่วนตัว</NuxtLink></li>
            <li><a href="#!" @click.prevent="logout">Logout</a></li>
          </ul>
        </li>
        <li><ApiVersion /></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nt-navbar {
  background-color: #ffd100;
}
</style>

<script setup>
import { useStorage } from "@vueuse/core";
//refresh page
const token = useStorage("token", null);
if (token.value !== null) {
  const { data: responseProfile } = await useGetProfile();
  useState("globalProfile", () => responseProfile);
}

const profile = useState("globalProfile");
const logout = () => {
  useLogout();
};
</script>
