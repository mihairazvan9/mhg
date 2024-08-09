<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-col gap-sm">
    <div class="w-28">
      <img :src="props.data.src" :alt="props.data.alt || 'Singsave'">
    </div>
    <p class="body-2 !text-gray-900">
      {{ props.data.text }}
    </p>
  </div>
</template>

<style>

</style>