<script setup>
  import {computed} from "vue";

  const props = defineProps({
    breadcrumb: {
      type: Array,
      required: true
    },

    darkMode: {
      type: Boolean,
      default: false,
    },
  });

  const theme = computed(() => {
    return props.darkMode ? modeStyle.dark : modeStyle.white;
  })

  const modeStyle = {
    white: {
      previous: '!text-gray-900/50',
      current: '!text-gray-900',
    },
    dark: {
      previous: '!text-white/50',
      current: '!text-white',
    },
  };
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 truncate">
    <div v-for="(object, index) in breadcrumb" :key="index">
      <a :href="object.link"
         class="body-2 text-wrap"
         :class="index < breadcrumb.length - 1 ? theme.previous : theme.current"
      >
        {{ object.title }}
      </a>
      <span v-if="index < breadcrumb.length - 1"
            :class="[theme.previous]"
            class="body-2 text-gray-900/50">
        /
      </span>
    </div>
  </div>
</template>

<style>

</style>