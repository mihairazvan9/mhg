<script setup>
  import { ref } from 'vue';
  import { icons } from "@/assets/icons"

  const props = defineProps({
    visible: {
      type: Boolean,
      default: false,
      required: true
    },

    title: {
      type: String,
      default: `<p class="title-1 !text-left">Rewards <span class="font-normal">for</span> Chase <span class="font-normal">Freedom Wallet</span></p>`,
      required: false
    }
  })

  const emits = defineEmits([
    'handle-close-modal'
  ])

  function close_modal() {
    emits('handle-close-modal', false)
  }

  function handle_outside_click() {
    close_modal()
  }

</script>

<template>
  <div 
    v-if="props.visible" 
    @click="handle_outside_click"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="w-full h-full relative flex flex-col bg-white" @click.stop>
      <!-- Top Bar with Close Button -->
      <div class="modal-header padding-x padding-y flex justify-between border-b border-gray-300">
        <div v-html="props.title"></div>
        <button @click="close_modal">
          <i v-html="icons.close"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="grow overflow-y-auto padding-x padding-y bg-gray-100">
        <slot name="body"></slot>
      </div>

      <!-- Bottom Fixed Bar -->
      <div class="modal-footer border-t border-gray-300 padding-x padding-y">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style>

</style>