<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import IconSpotlight from "../assets/img/icon-spotlight.svg";
  import CardLogo from "../assets/img/card-1.png";
  import ArrowRight from "../assets/img/arrow-right.svg";

  const is_fixed = ref(false);

  function handleScroll () {
    is_fixed.value = window.scrollY > 110
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <div class="hidden xl:block basis-4/12 relative z-0">
    <div class="card-radius overflow-hidden shadow"
         :class="{ 'fixed w-100 mr-6 xl:mr-10 top-6': is_fixed, 'relative': !is_fixed }">
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