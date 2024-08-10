<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Get started',
    },

    link: {
      type: String,
      default: null,
    },

    color: {
      type: String,
      default: 'text-white',
    },

    background: {
      type: String,
      default: 'bg-primary',
    },

    width: {
      type: String,
      default: 'w-max',
    },

    icon: {
      type: String,
      default: null
    },

    icon_left: {
      type: String,
      default: null
    },

    outline: {
      type: String,
      default: null
    }
  })

  const emits = defineEmits([
    'handle-click'
  ])
</script>

<template>
  <a 
    v-if="props.link"
    class="the-button" 
    :href="props.link"
    :class="[
      props.background,
      props.color,
      props.width,
      props.outline ? `${props.outline} border-solid border-2 py-2` : 'py-2.5',
      'flex flex-shrink-0 cursor-pointer items-center justify-center gap-x-2 button-padding-x button-1 button-radius'
    ]"
  >
    <!-- Left icon -->
    <i v-if="props.icon_left" 
       v-html="props.icon_left"
       :class="`${props.color}`"
    ></i>

    <!-- Text -->
    {{ props.title }}

    <!-- Right icon -->
    <i v-if="props.icon" 
       v-html="props.icon"
       :class="`${props.color}`"
    ></i>
  </a>
  <button 
    v-else
    @click="emits('handle-click')"
    class="the-button" 
    :href="props.link"
    :class="[
      props.background,
      props.color,
      props.width,
      props.outline ? `${props.outline} border-solid border-2 py-2` : 'py-[9px]',
      'flex flex-shrink-0 items-center cursor-pointer justify-center gap-x-2 button-padding-x button-1 button-radius'
    ]"
  >
    <!-- Left icon -->
    <i v-if="props.icon_left" 
       v-html="props.icon_left"
       :class="`${props.color}`"
    ></i>

    <!-- Text -->
    {{ props.title }}

    <!-- Right icon -->
    <i v-if="props.icon" 
       v-html="props.icon"
       :class="`${props.color}`"
    ></i>
  </button>
</template>

<style>
  .the-button i svg path {
    @apply fill-current;
  }
</style>