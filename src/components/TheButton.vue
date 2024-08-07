<script setup>
  const props = defineProps({
    text: {
      type: String,
      default: 'Get started',
    },

    link: {
      type: String,
      default: '',
    },

    color: {
      type: String,
      default: 'text-white',
    },

    background: {
      type: String,
      default: 'bg-primary',
    },

    icon: {
      type: String,
      default: null
    },

    icon_left: {
      type: String,
      default: null
    }
  })
</script>

<template>
  <a class="the-button" 
     :href="props.link"
     :class="`${props.background} ${props.color} flex flex-shrink-0 items-center gap-x-2 button-padding-x py-2.5 button-1 w-max button-radius`"
  >
    <!-- Left icon -->
    <i v-if="props.icon_left" 
       v-html="props.icon_left"
       :class="`${props.color}`"
    ></i>

    <!-- Text -->
    {{ props.text }}

    <!-- Right icon -->
    <i v-if="props.icon" 
       v-html="props.icon"
       :class="`${props.color}`"
    ></i>
  </a>
</template>

<style>
  .the-button i svg path {
    @apply fill-current;
  }
</style>