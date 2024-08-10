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
    },

    noMargin: {
      type: Boolean,
      default: false,
      required: false
    },

    stretchHorizontally: {
      type: Boolean,
      default: true,
      required: false
    },
  });

  const { image, title, tags, subtitle, link } = props.card

</script>

<template>
  <div v-if="large"
       :class="{'gap-t': noMargin === false, 'lg:flex-row items-stretch': stretchHorizontally}"
       class="card-radius overflow-hidden flex flex-col bg-white shadow"
  >
    <div class="basis-6/12">
      <img
        :src="image"
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="padding-x padding-y gap-sm flex flex-col gap-sm basis-6/12">
      <a :href="link" class="subheading-2">
        {{ title }}
      </a>

      <p v-if="subtitle" class="body-2">
        {{ subtitle }}
      </p>

      <div class="flex items-center gap-xs">
        <a :href="link" class="button-1 text-primary">Read More</a>
        <i class="fill-current text-primary" v-html="icons.arrow_right"></i>
      </div>
    </div>
  </div>

  <div v-else 
       class="card-radius overflow-hidden bg-white shadow"
  >
    <div class="h-40">
      <img
        :src="image"
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="padding-x padding-y gap-sm flex flex-col gap-sm">
      <div>
        <span v-if="tags" class="bg-gray-100 rounded-full px-2 py-0.5 inline-block">
          {{ tags }}
        </span>
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