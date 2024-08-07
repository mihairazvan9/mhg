<script setup>
  const props = defineProps({
    author: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="w-12 h-12 rounded-full overflow-hidden">
      <img :src="author.image" alt="author" />
    </div>
    <div>
      <h4 class="text-base font-semibold">
        Written by
        <a :href="author.link" 
           class="underline text-primary ml-1">
          {{ author.name }}
        </a>
      </h4>
      <p class="text-sm font-medium text-gray-700">
        {{ author.position }}
      </p>
    </div>
  </div>
</template>

<style>

</style>