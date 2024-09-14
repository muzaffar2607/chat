<template>
  <div
    class="w-full h-[60px] max-[470px]:h-[40px] py-[5px] px-[20px] max-[470px]:px-[15px] flex gap-[10px] bg-blue-400 items-center"
  >
    <div
      class="w-[50px] h-[50px] max-[470px]:w-[30px] max-[470px]:h-[30px] bg-lime-400 rounded-[50%]"
    >
      <h4
        class="text-white text-[30px] max-[470px]:text-[20px] leading-[16px] text-center my-[18px] max-[470px]:my-[9px] uppercase"
      >
        {{ chat.member.full_name.substring(0, 1) }}
      </h4>
    </div>
    <h1 class="text-[16px] leading-[12px] max-[470px]:text-[12px]">
      {{ chat.member.full_name }}
    </h1>
  </div>
</template>
<script setup lang="ts">
import type { IChatList } from "@/types/chatList";

defineProps<{
  chat: IChatList;
}>();
</script>
