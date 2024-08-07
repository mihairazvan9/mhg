<script setup>
  
  const props = defineProps({
    title: {
      type: String,
      default: 'More like this',
      required: false
    },
    chips: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <section class="gap-t" id="chips-wrapper">
    <h3 class="subheading-2">{{ props.title }}</h3>
    <div class="flex gap-xs gap-t-xs flex-wrap">
      <a v-for="card in chips"
        :href="card.link"
        class="padding-x-sm padding-y-sm bg-white button-1 underline"
      >
        {{ card.title }}
      </a>
    </div>
  </section>
</template>

<style>

</style>