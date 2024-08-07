<script setup>
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="bg-gray-50 padding-x-sm padding-y-sm my-8">
    <div class="rich-text" v-html="props.content">

    </div>
  </div>
</template>

<style>
</style>