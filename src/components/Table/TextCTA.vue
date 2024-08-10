<script setup>
  import TheButton from "@/components/TheButton.vue"
  import { icons } from "@/assets/icons"

  const props = defineProps({
    data: {
      type: Object,
      required: true
    },

    reward_id: {
      type: Number,
      required: true
    },
  })

  const emits = defineEmits([
    'handle-open-rewards'
  ])

  function handle_open_reward () {
    emits('handle-open-rewards', props.reward_id)
  }


</script>

<template>
  <div>
    <p class="body-2 text-nowrap hidden md:inline-block">
      {{ props.data.title }}
    </p>

    <p @click="handle_open_reward()"
       class="hidden md:inline-block !text-primary !font-semibold underline text-nowrap cursor-pointer">
      Eligible rewards {{ `(${ props.data.no })` }}
    </p>

    <div class="inline-block md:hidden body-2 ">
      <TheButton 
        @handle-click="handle_open_reward" 
        :title="`View Rewards (${ props.data.no })`"
        :icon="icons.diamond"
        background="bg-white"
        outline="border-primary"
        color="text-primary"
      />
    </div>

  </div>
</template>

<style>

</style>