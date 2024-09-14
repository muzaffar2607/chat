<template>
  <div
    class="max-w-[500px] max-[470px]:max-w-[170px] bg-blue-600 rounded-[8px] p-2"
  >
    <h4 class="text-[16px] leading-[20px] text-white max-[470px]:text-[12px]">
      {{ message.message }}
    </h4>
  </div>
</template>
<script setup lang="ts">
import { IMessage } from "@/types/message";

defineProps<{
  message: IMessage;
}>();
</script>
