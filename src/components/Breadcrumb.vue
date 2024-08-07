<script setup>
  const props = defineProps({
    breadcrumb: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 truncate">
    <div v-for="(object, index) in breadcrumb" :key="index">
      <a :href="object.link"
         class="body-2"
         :class="index < breadcrumb.length - 1 ? 'text-gray-900/50' : '!text-gray-900'"
      >
        {{ object.title }}
      </a>
      <span v-if="index < breadcrumb.length - 1"
            class="body-2 text-gray-900/50">
        /
      </span>
    </div>
  </div>
</template>

<style>

</style>