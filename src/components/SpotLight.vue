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

  onUnmounted(() => {
    window.removeEventListener('scroll', handle_scroll)
  })

  function handle_scroll () {
    is_fixed.value = image_top.value + 24
  }
  
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

      
      <div class="padding-x padding-y bg-white">
        <div class="bg-white flex flex-col gap-sm">
          <div class="flex items-center gap-sm">
            <img :src="CardLogo" alt="card" />
            <p class="display-1">Wells Fargo Autograph Journey Card</p>
          </div>
          <p class="tag-tex">
            Earn 60,000 bonus points when you spend $4,000 in purchases in the
            first 3 months – that’s $600 toward your next trip.
          </p>
          <a
            href="#"
            class="flex justify-center items-center button-1 padding-x-sm padding-y-sm bg-cta gap-xs text-white button-radius"
          >
            Apply Now
            <img :src="ArrowRight" alt="arrow" />
          </a>
        </div>
        <div
          class="bg-white flex flex-col gap-sm padding-t gap-t border-t border-gray-200"
        >
          <div class="flex items-center gap-sm">
            <img :src="CardLogo" alt="card" />
            <p class="display-1">Wells Fargo Autograph Journey Card</p>
          </div>
          <p class="tag-tex">
            Earn 60,000 bonus points when you spend $4,000 in purchases in the
            first 3 months – that’s $600 toward your next trip.
          </p>
          <a
            href="#"
            class="flex justify-center items-center button-1 padding-x-sm padding-y-sm bg-secondary gap-xs text-white button-radius"
          >
            Apply Now
            <img :src="ArrowRight" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>