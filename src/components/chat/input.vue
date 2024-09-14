<template>
  <div
    class="px-[20px] max-[470px]:px-[10px] flex gap-[5px] absolute bottom-0 w-full justify-between items-center z-10"
  >
    <textarea
      v-model="message"
      type="text"
      class="w-full max-w-[1000px] max-[720px]:max-w-[600px] h-[40px] max-[720px]:h-[30px] rounded-[16px] max-[720px]:rounded-[10px] bottom-[10px] text-[18px] max-[720px]:text-[14px] max-[470px]:text-[12px] max-[375px]:text-[8px] leading-[20px] max-[720px]:leading-[14px] px-[15px] max-[370px]:px-[6px] max-[470px]:py-[10px] py-[12px] resize-none outline-none"
      placeholder="Type your massages..."
      @keyup.enter="sendMessage"
    ></textarea>
    <button
      type="button"
      class="text-white bg-blue-200 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
      @click="sendMessage"
    >
      <img
        src="/send.png"
        alt=""
        class="w-[30px] h-[30px] cursor-pointer max-[470px]:w-[18px] max-[470px]:h-[18px]"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits(["onSendMessage"]);

const message = ref("");

async function sendMessage() {
  if (message.value) {
    emits("onSendMessage", message.value);
    message.value = "";
  }
}
</script>
