<template>
  <div>
    <h1>Hello {{ hello }} {{ version + 20 }} {{ hello.toUpperCase() }}</h1>
    <button @click="toggleMe">Show/Hide date</button>
    <div v-if="isShow">
      <p>วันนี้วันที่ : {{ new Date().toLocaleString() }}</p>
    </div>
    <hr />
    <img :src="imageURL.url" @mouseover="greet1" />
    <p />
    Users List:
    <ul v-if="items.length">
      <li v-for="(item, index) in items" :key="item.index">
        {{ index + 1 }} - Name {{ item.name }} , Email {{ item.email }}
      </li>
    </ul>

    <button @click="count++">Add 1</button> Count is: {{ count }}
    <p />
    <button @click="greet">Greet</button>
    <p />

    <input v-model="message" />
    <div>Messge = {{ message }}</div>
  </div>
</template>

<script setup>
onMounted(() => {
  console.log("Mounted");
});
const hello = "Nuxt 3";
const message = ref("xxvc");
let version = 3;

let isShow = ref(false);
let items = [
  { name: "Ram", email: "Ram@gmail.com" },
  { name: "Bob", email: "bob32@gmail.com" },
  { name: "Tan", email: "tan@gmail.com" },
  { name: "Preme", email: "preme@gmail.com" },
];

const count = ref(0);
const name = ref("Hi Tanya");
let imageURL = reactive({
  url: "https://via.placeholder.com/200",
  alt: "image",
});
function greet(event) {
  count.value = 0;
  imageURL.url = "https://via.placeholder.com/400";
  // if (event) {
  //   alert(event.target.tagName);
  // }
}

const greet1 = () => {
  alert("greet1");
};

function toggleMe() {
  isShow.value = !isShow.value;
}
</script>
