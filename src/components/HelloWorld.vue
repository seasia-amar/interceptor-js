<script setup>
import { useCounterStore, addUsers } from "../store/store.ts";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { ref } from "vue";

const { count } = storeToRefs(useCounterStore());
const { handleCreateUser } = addUsers();
const test = computed(() => {
  return count;
});

const name = ref("sanjeev");
const email = ref("sanjeev@yopmail.com");
const password = ref("sanjeev");
const passwordVerify = ref("sanjeev");
const alert = ref("");
// const createUser=handleCreateUser()

const handleSubmit = async() => {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    passwordVerify: passwordVerify.value,
  };
  console.log(data)
 await handleCreateUser(data);
};
</script>
<template>
  <div class="hello">
    HelloWorld
    {{ test }}

    <div id="app">
      <div id="alert" v-if="alert">{{ alert }}</div>

      <div class="form-style">
        <label> Email address </label>
        <input type="email" v-model="email" />
        <label>
          Name
          <input type="text" v-model="name" />
        </label>
        <label>
          Password
          <input type="password" v-model="password" />
        </label>
        <label>
          Verify password
          <input type="password" v-model="passwordVerify" />
        </label>
        <button type="submit" @click="handleSubmit">Sign up</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-style {
  display: block;
}
</style>
