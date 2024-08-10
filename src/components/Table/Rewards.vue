<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
  })

  const showLeftButton = ref(true);
  const showRightButton = ref(true);

  function scroll_left () {
    document.getElementById('scrollable-content').scrollBy({
      left: -300,
      behavior: 'smooth'
    })

    // updateScrollButtons()
  }

  function scroll_right () {
    document.getElementById('scrollable-content').scrollBy({
      left: 300,
      behavior: 'smooth'
    })

    // updateScrollButtons()
  }

  function updateScrollButtons() {
    const scrollElement = document.getElementById('scrollable-content')
    showLeftButton.value = scrollElement.scrollLeft > 0;
    showRightButton.value = scrollElement.scrollLeft + 
                            scrollElement.clientWidth < scrollElement.scrollWidth - 10;
  }



</script>

<template>
  <div  class="padding-x padding-y card-radius relative w-full border-gray-300">
    <span class="bullet-2">Rewards to choose from</span>
    <button 
      v-if="showLeftButton" 
      @click="scroll_left" 
      class="absolute left-6 top-1/2 transform -translate-y-1/2 rotate-180 bg-white p-4 rounded-xl border border-gray-900 z-20">
      <i v-html="icons.arrow_right"></i>
    </button>

      <div id="scrollable-content" class="rewards-scrollable flex flex-row gap-4 overflow-hidden">
        <template v-for="reward in props.data">
          <a :href="props.data.link" class="cursor-pointer">
            <div class="flex flex-row gap-2 p-3 h-32 w-max bg-gray-100 rounded-xl">
              <div class="w-44 h-full flex justify-center items-center bg-white rounded-xl">
                <img class="p-4" :src="reward.image" alt="Singsave">
              </div>

              <div class="w-72 flex flex-col justify-center gap-1">
                <span class="bullet-2 text-primary font-semibold">
                  {{ reward.title }}
                </span>
                <span class="text-gray-700 font-medium text-sm">
                  {{ reward.subtitle }}
                </span>
              </div>
            </div>
          </a>
        </template>
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

  .rewards-scrollable {
    overflow-x: auto;
  }

  .rewards-scrollabler::-webkit-scrollbar {
    display: none; 
  }

  .rewards-scrollable {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }

</style>