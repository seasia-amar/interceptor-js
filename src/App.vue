<script setup>
import { RouterView } from "vue-router";
import MainHeader from './components/MainHeader'
import "./app.css";
</script>

<template>
<div>
<MainHeader/>
  <RouterView />
</div>
</template>


