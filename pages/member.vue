<template>
  <div>
    <div
      class="min-h-screen hero"
      style="background-image: url(https://placeimg.com/1000/800/arch)"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">ยินดีต้อนรับคุณ John Doe</h1>
          <p class="mb-5">Email : tan@gmail.com Role : Memeber</p>
          <NuxtLink to="/"
            ><button class="btn btn-warning">Logout</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
