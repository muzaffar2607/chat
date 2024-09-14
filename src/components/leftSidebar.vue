<template>
  <div class="w-[25%] bg-sky-200 h-[calc(100vh-48px)]">
    <div
      class="text-center text-[20px] max-[470px]:h-[40px] h-[60px] max-[470px]:py-[5px] py-[15px] max-[470px]:text-[16px]"
    >
      Chats
    </div>
    <div
      v-for="(chat, index) in chats"
      :key="index"
      class="cursor-pointer w-full h-[60px] max-[470px]:h-[40px] py-[5px] px-[10px] max-[470px]:px-[15px] flex gap-[10px] items-center hover:bg-sky-500"
      :class="
        modelValue && modelValue.id === chat.id ? 'bg-sky-500' : 'bg-sky-300'
      "
      @click="toChat(chat)"
    >
      <div
        class="w-[50px] h-[50px] max-[470px]:w-[30px] max-[470px]:h-[30px] bg-lime-400 rounded-[50%]"
      >
        <h4
          class="text-white text-[30px] max-[470px]:text-[20px] leading-[16px] text-center my-[18px] max-[470px]:my-[9px]"
        >
          {{ chat.member.full_name.substring(0, 1) }}
        </h4>
      </div>
      <h1
        class="text-[16px] max-[470px]:text-[12px] leading-[12px] max-[425px]:text-[10px]"
      >
        {{ chat.member.full_name }}
      </h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IChatList } from "@/types/chatList";

defineProps<{
  modelValue: IChatList | undefined;
  chats: IChatList[];
}>();

const emits = defineEmits(["update:modelValue", "onSelectedChat"]);

function toChat(data: IChatList) {
  emits("update:modelValue", data);
  emits("onSelectedChat", data);
}
</script>
