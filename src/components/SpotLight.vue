<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import IconSpotlight from "../assets/img/icon-spotlight.svg";
  import CardLogo from "../assets/img/card-1.png";
  import ArrowRight from "../assets/img/arrow-right.svg";

  const is_fixed = ref(false);
  const image = ref(null)
  const image_top = ref(null)
  const spotlight = ref(null)
  const chips_wrapper = ref(null)

  onMounted(() => {
    image.value = document.getElementById('article-header-image')
    spotlight.value = document.getElementById('spotlight')
    chips_wrapper.value = document.getElementById('chips-wrapper')

    // const spotlight_size = spotlight.value.getBoundingClientRect()
    // const chips_size = chips_wrapper.value.getBoundingClientRect()
    // spotlight.value.style.height = spotlight_size.height - chips_size.height - 36  + 'px'

    image_top.value = image.value.getBoundingClientRect().top + window.scrollY

    spotlight.value.style.marginTop = image_top.value - 84 - 32 + 'px'
    window.addEventListener('scroll', handle_scroll)
  })

  function handle_scroll () {
    is_fixed.value = image_top.value + 24
  }

  onUnmounted(() => {
    window.removeEventListener('scroll', handle_scroll)
  })
</script>

<template>
  <div id="spotlight" class="hidden xl:block basis-4/12 relative z-0">
    <div class="card-radius overflow-hidden shadow"
         :class="{ 'sticky top-6': is_fixed, 'relative': !is_fixed }"
    >
      <div
        class="bg-primary-light padding-x-sm padding-y flex gap-sm items-center justify-center"
      >
        <img :src="IconSpotlight" alt="icon" />
        <span class="bullet-2 text-primary">Product Spotlight</span>
      </div>
      <div class="spotlight-products flex flex-col gap-6 padding-x padding-y bg-white">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
  .spotlight-products .spotlight-item:not(:last-child) {
    @apply pb-6;
    @apply border-b;
    @apply border-solid;
    @apply border-gray-200;
  }
</style>