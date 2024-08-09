<template>
  <div>
    <div
      @click="toggleGroup"
      class="flex items-center justify-between px-4 bg-[#EDF6FF] py-5 cursor-pointer"
    >
      <h3 class="font-bold text-[#212529] text-[16px]">{{ title }}</h3>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }"
        viewBox="0 0 448 512"
        width="10"
        height="10"
        aria-hidden="true"
      >
        <path
          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
        ></path>
      </svg>
    </div>
    <ul v-if="isOpen">
      <li v-for="link in links" :key="link.text" class="mt-1">
        <SidebarLink :text="link.text" :href="link.href" :image="link.image" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarLink from "./SidebarLink.vue";

defineProps({
  title: String,
  links: Array,
});

const isOpen = ref(false);

const toggleGroup = () => {
  isOpen.value = !isOpen.value;
};
</script>
