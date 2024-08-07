<script setup>
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    card: {
      type: Object,
      required: true
    },

    large: {
      type: Boolean,
      default: false,
      required: false
    }
  })

  const { image, title, tags, subtitle } = props.card

</script>

<template>
  <div v-if="large" 
       class="card-radius overflow-hidden flex flex-col lg:flex-row items-stretch bg-white gap-t shadow"
  >
    <div class="h-40 lg:h-full overflow-hidden basis-6/12">
      <img
        :src="image"
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="padding-x padding-y gap-sm flex flex-col gap-sm basis-6/12"
    >
      <p class="subheading-2">
        {{ title }}
      </p>
      <p class="body-2">
        {{ subtitle }}
      </p>
      <div class="flex items-center gap-xs">
        <p class="button-1 text-primary">Read More</p>
        <i class="fill-current text-primary" v-html="icons.arrow_right"></i>
      </div>
    </div>
  </div>

  <div v-else 
       class="card-radius overflow-hidden bg-white shadow"
  >
    <div class="h-40 overflow-hidden">
      <img
        :src="image"
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="padding-x padding-y gap-sm flex flex-col gap-sm">
      <div>
        <span class="bg-gray-100 rounded-full px-2 py-0.5 inline-block">
          {{ tags }}
        </span
        >
      </div>
      <div class="flex justify-between gap-xs">
        <p class="bullet-2">
          {{ title }}
        </p>
        <i v-html="icons.arrow_right"></i>
      </div>
    </div>
  </div>
</template>

<style>

</style>