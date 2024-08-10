<script setup>
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    data: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="relative cursor-pointer group">
    <i v-html="icons.info"></i>
    <span class="invisible group-hover:visible w-40 md:w-56 bg-gray-900 text-center rounded-lg py-1 px-2 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1">
        <span class="body-2 !text-white ">{{ props.data }}</span>
        <span class="absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 left-1/2 transform -translate-x-1/2 -bottom-1"></span>
    </span>
  </div>
</template>

<style>
</style>