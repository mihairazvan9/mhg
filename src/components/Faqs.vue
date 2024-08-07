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
      
      <div class="flex items-center justify-between padding-x py-4 cursor-pointer" 
           @click="handle_toggle_details(id)"
      >
        <h4 class="subheading-2">
          <p>{{ faq.question }}</p>
        </h4>
        <button :class="['transition-rotate overflow-hidden', {'active': active_id === id }]">
          <i v-html="icons.arrow"></i>
        </button>
      </div>
      <!-- pb-4 if active -->
      <div class="padding-x">
        <div :class="['transition-max-height overflow-hidden', {'active': active_id === id }]" 
              v-html="faq.answer">
        </div>
      </div>
    </li>
  </ul>
</template>

<style>

  .transition-max-height {
    max-height: 0;
    transition: max-height 250ms;
  }

  .transition-max-height.active {
    max-height: 600px;
  }

  .transition-rotate {
    transform: 0;
    transition: transform 250ms;
  }

  .transition-rotate.active {
    transform: rotate(-180deg);
  }

</style>
