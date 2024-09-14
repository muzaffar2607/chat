<template>
  <div class="app">
    <Layout />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Layout from "./layouts/index.vue";
import "@/assets/css/main.scss";
</script>

<style scoped>
.app {
  font-family: "JetBrains Mono", sans-serif !important;
}
</style>
