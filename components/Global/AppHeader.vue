<template>
  <div class="navbar nt-navbar">
    <div class="flex-1">
      <NuxtLink to="/"
        ><img src="logo.png" helght="100" width="200"
      /></NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li tabindex="0">
          <a>
            Customer
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
          <ul class="p-2 bg-base-100">
            <li><a>All Customer</a></li>
            <li><a>Add Customer</a></li>
          </ul>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nt-navbar {
  background-color: #ffd100;
}
</style>
