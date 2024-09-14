<template>
  <div v-if="chat" class="w-full h-[calc(100vh-48px)] bg-sky-100 relative">
    <ChatHeader :chat="chat" />
    <ChatMain :messages="messages" :chat="chat" />
    <ChatInput @on-send-message="handleSendMessage" class="mb-4" />
  </div>
  <div v-else>No messages</div>
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
