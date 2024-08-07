<script setup>
  const props = defineProps({
    contents: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <ul class="padding-x-xs list-decimal marker:text-primary marker:font-semibold list-inside flex flex-col gap-t-xs gap-xs"
  >
    <li v-for="content in props.contents">
      <a :href="content.link" 
         class="button-2 text-primary"
      >
        {{ content.text }}
      </a>
    </li>
  </ul>
</template>

<style>

</style>