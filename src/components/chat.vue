<template>
  <div v-if="chat" class="w-[75%] h-[calc(100vh-48px)] bg-sky-100 relative">
    <ChatHeader :chat="chat" />
    <ChatMain :messages="messages" :chat="chat" />
    <ChatInput @on-send-message="handleSendMessage" class="mb-4" />
  </div>
  <div v-else class="flex items-center flex-1 bg-sky-100">
    <div class="flex-1">
      <div class="text-[20px] text-center">Kimga yozishni hoxlaysiz</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChatHeader from "@/components/chat/header.vue";
import ChatMain from "@/components/chat/main.vue";
import ChatInput from "@/components/chat/input.vue";

import type { IMessage } from "@/types/message";
import type { IChatList } from "@/types/chatList";

defineProps<{
  chat: IChatList | undefined;
  messages: IMessage[];
}>();

const emits = defineEmits(["onSendMessage"]);

function handleSendMessage(msg: IMessage) {
  emits("onSendMessage", msg);
}
</script>
