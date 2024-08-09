<script setup>
  import TheButton from "@/components/TheButton.vue"

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <div class="flex flex-col gap-2">
    <TheButton background="bg-cta"
               title="Apply Now"
    />
    <p class="body-2 hidden md:inline-block">
      {{ props.data.text }}
    </p>
  </div>
</template>

<style>

</style>