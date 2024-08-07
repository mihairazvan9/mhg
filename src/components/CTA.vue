<script setup>
  import IconContract from "../assets/img/Contract_Blue.svg";
  
  const props = defineProps({
    cta: {
      type: Object,
      default: 'Default Title',
      required: false,
    },
  })

</script>

<template>
  <div class="bg-white flex flex-col-reverse lg:flex-row items-center md:items-start padding-y padding-x card-radius gap-md gap-t shadow">
    <div class="flex flex-col gap-md">
      <h3 class="subheading-2">
        {{ cta.title }}
      </h3>
      <div class="rich-text"
           v-html="cta.infos">
      </div>

      <slot></slot>
    </div>
    <div>
      <img :src="cta.icon || IconContract" alt="Icon" />
    </div>
  </div>
</template>

<style scoped>

</style>