<template>
  <div
    class="max-w-[400px] max-[470px]:max-w-[170px] bg-blue-600 rounded-[8px]"
  >
    <h4
      class="text-[16px] leading-[12px] max-[470px]:leading-[9px] text-white p-2 max-[470px]:text-[12px]"
    >
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
