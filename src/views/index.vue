<template>
  <div class="flex">
    <LeftSideBar
      v-model="selectedChat"
      :chats="chats"
      @onSelectedChat="handleSelectedChat"
    />
    <Chat
      :chat="selectedChat"
      :messages="messages"
      @onSendMessage="handleSendMessage"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

import type { IChatList } from "@/types/chatList";
import type { IMessage, ISendMessage } from "@/types/message";

import LeftSideBar from "@/components/leftSidebar.vue";
import Chat from "@/components/chat.vue";

const ACTIONS = {
  get_private_chat_list: "get_private_chat_list",
  get_private_chat_message: "get_private_chat _message",
  ping: "ping",
  send_message_to_chat: "send_message_to_chat",
};

const route = useRoute();

const socket = ref<WebSocket | null>(null);

const selectedChat = ref<IChatList>();
const chats = ref<IChatList[]>([]);
const messages = ref<IMessage[]>([]);

onMounted(async () => {
  socket.value = new WebSocket(
    `${import.meta.env.VITE_WEB_SOCKET_URL}?token=${route.query.token}`
  );
  socket.value.onmessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    switch (data.action) {
      case ACTIONS.get_private_chat_list:
        chats.value = data.results;
        break;
      case ACTIONS.get_private_chat_message:
        messages.value = data.results;
        break;
      case ACTIONS.send_message_to_chat:
        messages.value.push(data.data);
        console.log(ACTIONS.send_message_to_chat, data, messages.value);
        break;
      default:
        break;
    }
  };
  socket.value.onopen = () => {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(
        JSON.stringify({ action: ACTIONS.get_private_chat_list })
      );
    }
  };
});

onUnmounted(() => {
  if (socket.value) {
    socket.value.close();
  }
});

function handleSelectedChat() {
  sendMessage({
    action: "get_private_chat_message",
  });
}

function handleSendMessage(msg: string) {
  if (selectedChat.value)
    sendMessage({
      action: "send_message_to_chat",
      payload: {
        chat_room_id: selectedChat.value?.id,
        message: msg,
        reply_message: null,
      },
    });
}

function sendMessage(msg: ISendMessage) {
  if (socket.value && socket.value.readyState === WebSocket.OPEN) {
    socket.value.send(JSON.stringify(msg));
  }
}
</script>
