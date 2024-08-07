<script setup>
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-col gap-xs gap-t">
    <div class="rich-text" 
         v-html="content">
    </div>
  </div>
</template>

<style>
</style>