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

    full: {
      type: Boolean,
      default: false,
      required: false,
    },

    background: {
      type: String,
      default: 'bg-primary-light',
      required: false,
    },
  })

</script>

<template>
  <section v-if="simple" 
           class="gap-t my-8"
  >
    <h3 v-show="props.title" class="display-1 padding-y-sm py-4">{{ props.title }}</h3>
    <slot></slot>
  </section>

  <section v-if="!simple && !full" 
           class="mt-8 pb-6 bg-white shadow card-radius"
  >
    <div class="padding-x padding-y-sm py-4">
      <h3 v-show="props.title" class="subheading-1">{{ props.title }}</h3>
    </div>
    <slot></slot>
  </section>

  <section v-if="full"
                :class="[
                  props.background ? props.background : '', 
                  'py-12 '
                ]"
  >
    <div class="mx-auto max-w-screen-2xl px-6 xl:px-10 gap-md">
      <h3 v-show="props.title" class="display-1">{{ props.title }}</h3>
      <slot></slot>
    </div>
  </section>
</template>