<template>
  <div>
    <h1>About Page</h1>
    Result : {{ result }} <br />
    <ClientOnly> Date : {{ dateNow }} </ClientOnly>
    <br />
    {{ useB() }} {{ c }} {{ useCalendar() }}
    <BackButton />
  </div>
</template>

<script setup>
const result = useAdd(2, 3);
const dateNow = useShowDate();
const c = useCalendar();
</script>
