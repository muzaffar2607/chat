<template>
  <div class="flex">
    <div class="w-[30%] bg-sky-200 h-[720px] max-[470px]:h-[600px]">
      <div class="text-center text-[20px] my-[10px] max-[470px]:text-[16px]">
        Chats
      </div>
      <div
        class="w-full h-[60px] max-[470px]:h-[40px] py-[5px] px-[20px] max-[470px]:px-[15px] flex gap-[10px] bg-sky-600 items-center"
      >
        <div
          class="w-[50px] h-[50px] max-[470px]:w-[30px] max-[470px]:h-[30px] bg-lime-400 rounded-[50%]"
        >
          <h4
            class="text-white text-[30px] max-[470px]:text-[20px] leading-[16px] text-center my-[18px] max-[470px]:my-[9px]"
          >
            U
          </h4>
        </div>
        <h1 class="text-[16px] max-[470px]:text-[12px] leading-[12px]">
          User1
        </h1>
      </div>
    </div>
    <div class="w-full h-[720px] max-[470px]:h-[600px] bg-sky-100 relative">
      <div
        class="w-full h-[60px] max-[470px]:h-[40px] py-[5px] px-[20px] max-[470px]:px-[15px] flex gap-[10px] bg-blue-400 items-center"
      >
        <div
          class="w-[50px] h-[50px] max-[470px]:w-[30px] max-[470px]:h-[30px] bg-lime-400 rounded-[50%]"
        >
          <h4
            class="text-white text-[30px] max-[470px]:text-[20px] leading-[16px] text-center my-[18px] max-[470px]:my-[9px]"
          >
            U
          </h4>
        </div>
        <h1 class="text-[16px] leading-[12px] max-[470px]:text-[12px]">
          User1
        </h1>
      </div>
      <div
        class="px-[25px] py-[15px] flex flex-col gap-[8px] max-[470px]:px-[15px]"
      >
        <div class="flex">
          <Messages />
        </div>
        <div class="flex justify-end">
          <Messages />
        </div>
        <div class="flex">
          <Messages />
        </div>
      </div>
      <div
        class="px-[20px] max-[470px]:px-[10px] flex gap-[10px] absolute bottom-[10px] w-full justify-between items-center"
      >
        <textarea
          type="text"
          class="w-full max-w-[1000px] max-[720px]:max-w-[600px] h-[40px] max-[720px]:h-[30px] rounded-[16px] max-[720px]:rounded-[10px] bottom-[10px] text-[18px] max-[720px]:text-[14px] max-[470px]:text-[12px] leading-[20px] max-[720px]:leading-[14px] px-[15px] max-[470px]:py-[10px] py-[13px] resize-none outline-none"
          placeholder="Type your massages..."
        ></textarea>
        <img
          src="/public/send.png"
          alt=""
          class="w-[30px] h-[30px] cursor-pointer max-[470px]:w-[18px] max-[470px]:h-[18px]"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Messages from "@/components/messages.vue";
</script>
