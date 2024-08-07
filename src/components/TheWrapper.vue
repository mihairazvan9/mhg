<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Default Title',
      required: false,
    },

    simple: {
      type: Boolean,
      default: false,
      required: false,
    },
  })

</script>

<template>
  <section v-if="simple" 
           class="gap-t my-8"
  >
    <h3 class="display-1">{{ props.title }}</h3>
    <slot></slot>
  </section>

  <section v-else 
           class="mt-8 pb-6 bg-white shadow rounded-2xl"
  >
    <div class="padding-x padding-y-sm py-4 border-b border-gray-300">
      <h3 class="subheading-1">{{ props.title }}</h3>
    </div>
    <slot></slot>
  </section>
</template>