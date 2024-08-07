<script setup>
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    media: {
      type: Object,
      require: true
    }
  })

  const { link, icon, name } = props.media

</script>

<template>
  <div class="flex items-center gap-2">
    <a :href="link" 
       class="body-2 flex gap-2 text-primary underline cursor-pointer"
    >
      <i v-html="icons[icon]"></i>
      {{ name }}
    </a>
  </div>
</template>

<style>

</style>