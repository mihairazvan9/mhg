<template>
  <div>
    <div
      @click="toggleSection"
      :class="[
        isOpen
          ? 'flex items-center justify-between border-l-4 px-3 border-[#0081F1] py-5 cursor-pointer'
          : 'flex items-center justify-between  px-3   py-5 cursor-pointer',
      ]"
    >
      <h2 class="font-semibold uppercase text-[#212529] text-[16px]">
        {{ title }}
      </h2>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }"
        viewBox="0 0 320 512"
        width="12"
        height="12"
        aria-hidden="true"
      >
        <path
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </div>
    <div v-if="isOpen">
      <div v-for="group in groups" :key="group.title">
        <SidebarGroup :title="group.title" :links="group.links" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarGroup from "./SidebarGroup.vue";

defineProps({
  title: String,
  groups: Array,
});

const isOpen = ref(false);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};
</script>
