<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    
  })

  const emits = defineEmits([
    'handle-open-rewards'
  ])

  function handle_open_reward (event, id) {
    emits('handle-open-rewards', {
      event, 
      id
    })
  }

</script>

<template>
  <div class="">
    <p class="body-2 text-nowrap hidden md:inline-block">
      {{ props.data.text }}
    </p>

    <p @click="handle_open_reward($event, props.data.cta.id)"
       class="body-2 !text-primary !font-semibold underline text-nowrap cursor-pointer">
      {{ props.data.cta.text }}
    </p>
  </div>
</template>

<style>

</style>