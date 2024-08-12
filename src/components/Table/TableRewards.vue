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
  <div class="flex flex-col w-full">
    <div 
      class="flex justify-between cursor-pointer"
      @click="handle_close_rewards"
    >
      <p class="subheading-2 text-primary">
        Eligible rewards ({{ props.data.list.length }})
      </p>
      <i v-html="icons.close"></i>
    </div>
    <ul class="list-disc padding-x padding-y ">
      <template v-for="reward in props.data.list">
        <li class="body-2">{{ reward }}</li>
      </template>
    </ul>

    <a 
      v-if="data.requiresAuthentication"
      :href="data.authenticationLink" 
      class="uppercase bullet-2 text-primary underline md:text-lg"
    >
      Sign-in required
    </a>
  </div>
</template>

<style>

</style>