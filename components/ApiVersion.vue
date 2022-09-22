<template>
    <div>
        <span :style="{ color: 'red' }">API Version {{ data.data.version }}</span>
    </div>
</template>

<script setup>
    const { data } = await useGetApiVersion();
</script>