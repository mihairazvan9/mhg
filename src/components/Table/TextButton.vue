<script setup>
  import TheButton from "@/components/TheButton.vue"
  import { icons } from "@/assets/icons"

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <div class="flex flex-col gap-2">
    <TheButton 
      background="bg-cta"
      title="Apply Now"
      :icon="icons.arrow_right"
    />
    <p class="body-2 text-nowrap hidden md:inline-block">
      {{ props.data.title }}
    </p>
  </div>
</template>

<style>

</style>