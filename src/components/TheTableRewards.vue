<script setup>
  import img from '@/assets/img/airunes.png'
  import img1 from '@/assets/img/airunes1.png'
  import { icons } from '@/assets/icons.js'

  import { ref, onMounted, watch } from 'vue';

  const showLeftButton = ref(false);
  const showRightButton = ref(true);

  function scroll_left () {
    document.getElementById('scrollable-content').scrollBy({
      left: -300,
      behavior: 'smooth'
    })

    updateScrollButtons()
  }

  function scroll_right () {
    document.getElementById('scrollable-content').scrollBy({
      left: 300,
      behavior: 'smooth'
    })

    updateScrollButtons()
  }

  function updateScrollButtons() {
    const scrollElement = document.getElementById('scrollable-content')
    showLeftButton.value = scrollElement.scrollLeft > 0;
    showRightButton.value =
      scrollElement.scrollLeft + scrollElement.clientWidth < scrollElement.scrollWidth - 10;
  }



</script>

<template>
  <div  class="padding-x padding-y card-radius absolute z-10 w-full border-gray-300">
    <span class="bullet-2">Rewards to choose from</span>
    <button 
      v-if="showLeftButton" 
      @click="scroll_left" 
      class="absolute left-6 top-1/2 transform -translate-y-1/2 rotate-180 bg-white p-4 rounded-xl border border-gray-900 z-20">
      <i v-html="icons.arrow_right"></i>
    </button>

    <div id="scrollable-content"  class="flex flex-row gap-4 overflow-hidden">
      <div class="flex flex-row gap-2 p-3 h-32 w-max bg-gray-100 rounded-xl">
        <div class="w-44 h-full flex justify-center items-center bg-white rounded-xl">
          <img class="p-4" :src="img" alt="Singsave">
        </div>

        <div class="w-72 flex flex-col justify-center gap-1">
          <span class="bullet-2 text-primary font-semibold">
            Dyson Supersonic™ hair dryer (worth S$699)
          </span>
          <span class="text-gray-700 font-medium text-sm">
            T&Cs apply
          </span>
        </div>
      </div>
      <div class="flex flex-row gap-2 p-3 h-32 w-max bg-gray-100 rounded-xl">
        <div class="w-44 h-full flex justify-center items-center bg-white rounded-xl">
          <img class="p-4" :src="img1" alt="Singsave">
        </div>

        <div class="w-72 flex flex-col justify-center gap-1">
          <span class="bullet-2 text-primary font-semibold">
            Dyson Supersonic™ hair dryer (worth S$699)
          </span>
          <span class="text-gray-700 font-medium text-sm">
            T&Cs apply
          </span>
        </div>
      </div>
      <div class="flex flex-row gap-2 p-3 h-32 w-max bg-gray-100 rounded-xl">
        <div class="w-44 h-full flex justify-center items-center bg-white rounded-xl">
          <img class="p-4" :src="img" alt="Singsave">
        </div>

        <div class="w-72 flex flex-col justify-center gap-1">
          <span class="bullet-2 text-primary font-semibold">
            Dyson Supersonic™ hair dryer (worth S$699)
          </span>
          <span class="text-gray-700 font-medium text-sm">
            T&Cs apply
          </span>
        </div>
      </div>
    </div>

    <button 
      v-if="showRightButton" 
      @click="scroll_right" 
      class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl border border-gray-900 z-20">
      <i v-html="icons.arrow_right"></i>
    </button>
  </div>
</template>

<style>

</style>