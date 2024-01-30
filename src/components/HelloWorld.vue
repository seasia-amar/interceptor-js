<script setup>
import { addUsers } from "../store/store.ts";
  import { ref } from "vue";

const { handleCreateUser } = addUsers();


const name = ref("sanjeev");
const email = ref("sanjeev@yopmail.com");
const password = ref("sanjeev");
const passwordVerify = ref("sanjeev");
const phone =ref("7056827391");
const alert = ref("");
const handleSubmit = async() => {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: passwordVerify.value,
    phone :phone.value
  };
 await handleCreateUser(data);
};
</script>
<template>
<div class="p-6 text-left ">
  <div id="alert" v-if="alert" class="p-2 mb-4 text-white bg-red-500">{{ alert }}</div>

  <div class="p-8 text-left text-white bg-blue-500 rounded shadow-md ">
    <label class="mb-2 font-semibold text-black-500">Email address</label>
    <input type="email" v-model="email" class="w-full px-4 py-2 mb-4 text-blue-500 border border-blue-500 rounded" />

    <label class="mb-2 font-semibold text-black-500">Name</label>
    <input type="text" v-model="name" class="w-full px-4 py-2 mb-4 text-blue-500 border border-blue-500 rounded" />

    <label class="mb-2 font-semibold text-black-500">Password</label>
    <input type="password" v-model="password" class="w-full px-4 py-2 mb-4 text-blue-500 border border-blue-500 rounded" />

    <label class="mb-2 font-semibold text-black-500">Verify password</label>
    <input type="password" v-model="passwordVerify" class="w-full px-4 py-2 mb-4 text-blue-500 border border-blue-500 rounded" />

    <label class="mb-2 font-semibold text-black-500">Phone</label>
    <input type="number" v-model="phone" class="w-full px-4 py-2 mb-4 text-blue-500 border border-blue-500 rounded" />

    <button type="submit" @click="handleSubmit" class="w-full px-4 py-2 text-blue-500 bg-white rounded hover:bg-blue-600">Sign up</button>
  </div>
</div>
</template>

