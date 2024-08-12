<script setup>
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }

  })


  const emits = defineEmits([
    'handle-close-rewards'
  ])

  function handle_close_rewards () {
    emits('handle-close-rewards')
  }
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="flex justify-between">
      <p class="button-1 text-primary">
        Eligible rewards ({{ props.data.list.length }})
      </p>
      <i 
        v-html="icons.close"
        @click="handle_close_rewards"
      ></i>
    </div>
    <ul class="list-disc padding-x body-2">
      <template v-for="list in props.data.list">
        <li>{{ list }}</li>
      </template>
    </ul>

    <a 
      v-if="data.requiresAuthentication"
      :href="data.authenticationLink" 
      class="button-1 text-primary uppercase underline"
    >
      Sign-in required
    </a>
  </div>
</template>

<style>

</style>