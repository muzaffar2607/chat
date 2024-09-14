<template>
  <div
    class="px-[25px] py-[15px] flex flex-col gap-[8px] max-[470px]:px-[15px] overflow-y-auto overflow-hidden h-[calc(100vh-178px)]"
  >
    <div
      class="flex"
      :class="msg.sender_id === chat.member.id ? '' : 'justify-end'"
      v-for="(msg, index) in messages"
      :key="index"
    >
      <Message :message="msg" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Message from "./message.vue";
import type { IChatList } from "@/types/chatList";
import type { IMessage } from "@/types/message";

interface IProps {
  messages: IMessage[];
  chat: IChatList;
}

withDefaults(defineProps<IProps>(), {});
</script>
<style scoped>
.messages {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
