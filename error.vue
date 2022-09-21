<template>
  <div class="container mx-auto my-10 text-center">
    <p class="alert alert-error">ระบบเกิดข้อผิดพลาด</p>
    <hr />
    <p v-if="error" class="alert alert-error">{{ error?.message }}</p>
    <hr />
    <button class="btn btn-warning" @click="handleError">Clear errors</button>
    <hr />
    <BackButton />
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
