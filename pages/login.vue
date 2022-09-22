<template>
  <div>
    <!-- <h1>Login page</h1>
    Mouse Position : {{ x }},{{ y }} -->
    <div class="min-h-screen hero bg-base-200">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <div class="flex-shrink-0 w-full max-w-md shadow-2xl card bg-base-100">
          <div class="card-body w-96">
            <FormKit
              type="form"
              :actions="false"
              :incomplete-message="false"
              @submit="login"
            >
              <FormKit
                type="text"
                name="email"
                label="Email"
                validation="required|email"
                :validation-messages="{
                  required: 'กรุณาใส่ user หรือ email',
                  email: 'กรุณาระบุ email เท่านั้น',
                }"
              />
              <FormKit
                type="password"
                name="password"
                label="password"
                validation="required|length:3"
                :validation-messages="{
                  required: 'กรุณาใส่ password',
                  length: 'Password ต้องมีมากกว่า 3 ตัวอักษร',
                }"
              />
              <FormKit
                type="submit"
                label="เข้าระบบ"
                input-class="$reset btn btn-primary w-full"
              />
            </FormKit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//const { x, y } = useMouse();

import Swal from "sweetalert2";
import { useStorage } from "@vueuse/core";

const login = async (loginForm) => {
  //console.log(loginForm);
  const { data, error } = await useLogin(loginForm.email, loginForm.password);
  if (error.value) {
    console.log(error.value.response);
    Swal.fire({
      icon: "error",
      title: error.value.data?.message,
    });
  }
  if (data.value) {
    //save token from server to local storage
    console.log(data.value); // {     "access_token": "eyJ..",    "token_type": "bearer",    "expires_in": 7200 }
    const state = useStorage("token", data.value);
  }
  const { data: responseProfile } = await useGetProfile();
  if (responseProfile.value) {
    console.log(responseProfile.value);
    navigateTo("/member");
  }
};
</script>
