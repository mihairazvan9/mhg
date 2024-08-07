<script setup>

  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <div class="spotlight-item bg-white flex flex-col gap-sm">
    <div class="flex items-center gap-sm">
      <img :src="props.product.image" alt="card" />
      <p class="display-1">
        {{ props.product.title }}
      </p>
    </div>
    <p class="tag-tex">
      {{ props.product.subtitle }}
    </p>
    <slot></slot>
  </div>
</template>

<style>

</style>