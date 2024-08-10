<script setup>
  import Tooltip from '@/components/Tooltip.vue'

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
      <p v-if="props.data.title" 
          class="body-1"
      >
        {{ props.data.title }}
      </p>

      <template v-if="props.data.tooltip" >
        <Tooltip :data="props.data.tooltip" />
      </template>
    </div>

    <span v-if="props.data.subtitle" 
          class="body-2"
    >
      {{ props.data.subtitle }}
    </span>
    
  </div>
</template>

<style>

</style>