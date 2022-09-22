<template>
  <div>
    <h1>Login page</h1>
    Mouse Position : {{ x }},{{ y }}
    <div class="min-h-screen hero bg-base-200">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <div class="flex-shrink-0 w-full max-w-md shadow-2xl card bg-base-100">
          <div class="card-body w-96">
            <FormKit type="form">
              <FormKit type="text" name="email" label="Email" />
              <FormKit type="password" name="password" label="password" />
              <FormKit type="submit" name="เข้าระบบ" />
            </FormKit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { x, y } = useMouse();
</script>
