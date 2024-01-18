<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <button @click="()=>{increment()}">Increment</button>
  <button @click="()=>{decrement()}">Decrement</button>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useCounterStore } from "./store/store.ts";

const { increment, decrement } = useCounterStore();

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
