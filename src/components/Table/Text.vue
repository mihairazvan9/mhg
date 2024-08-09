<script setup>
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <!-- If we have primary_text in object -->
  <div class="">
    <div class="flex col items-center gap-2">
      <p v-if="props.data.text" 
          class="body-1"
      >
        {{ props.data.text }}
      </p>

      <i v-if="props.data.tooltip" v-html="icons.info"></i>
    </div>

    <span v-if="props.data.secondary_text" 
          class="body-2"
    >
      {{ props.data.secondary_text }}
    </span>
    
  </div>
</template>

<style>

</style>