<template>
  <div class="flex gap-10">
    <button
      v-for="(user, index) in users"
      :key="index"
      @click="toChat(user.token)"
    >
      {{ user.full_name }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const users = ref([
  {
    full_name: "Minmux",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MSwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzI2MjA0MDIzLCJleHAiOjE3NTUwMDQwMjMsImp0aSI6ImZjZWFjZTVhNDViOTQ2NjI5YzRlOTA5MDE2YjM5OWNkIiwidG9rZW5fdHlwZSI6ImFjY2VzcyJ9.mroEu4GUCCSLpqKtDM4s9qbxF_ExtQSud-LMEhc7LRI",
  },
  {
    full_name: "Fozil",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0Miwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzI2MjA0MDQwLCJleHAiOjE3NTUwMDQwNDAsImp0aSI6ImU2ZWU0YzFjYjhiZDRhNWM5ZjAxMGE1NjBiMWI4YThhIiwidG9rZW5fdHlwZSI6ImFjY2VzcyJ9.ekjZZzo530uE2VzKEquZJ74KdcfMs1TyR-nHu4p5Bh0",
  },
]);

function toChat(token: string) {
  router.push({
    name: "home",
    query: {
      token: token,
    },
  });
}
</script>
