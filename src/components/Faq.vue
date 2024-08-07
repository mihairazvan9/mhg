<script setup>
  import { ref } from "vue"
  import { icons } from "@/assets/icons"
  
  const props = defineProps({
    faqs: {
      type: Array,
      required: true
    }
  })

  const active_id = ref(0)

  function handle_toggle_details (target) {
    if (active_id.value === target) {
      active_id.value = -1
    } else {
      active_id.value = target
    }
  }
</script>

<template>
  <ul class="">
    <li v-for="(faq, id) in props.faqs">
      <div class="flex items-center justify-between px-6 xl:px-10 py-4">
        <h4 class="subheading-2">
          <p>{{ faq.question }}</p>
        </h4>
        <button @click="handle_toggle_details(id)" 
                :class="{'rotate-180': active_id === id }"
        >
          <i v-html="icons.arrow"></i>
        </button>
      </div>
      <div class="px-6 xl:px-10 pb-4">
        <div :class="{'transition-max-height max-h-0 overflow-hidden duration-200': active_id !== id, 'max-h-96': active_id === id }" 
              v-html="faq.answer">
        </div>
      </div>
    </li>
  </ul>
</template>

<style>
  .transition-max-height {
    transition: max-height 200ms;
  }
</style>
