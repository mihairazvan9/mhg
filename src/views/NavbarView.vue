<template>
  <nav
    class="bg-white w-full h-[96px] justify-between px-5 items-center gap-3 flex border-[#ECEEF0] border-b"
  >
    <div class="flex items-center gap-4">
      <button @click="openSidebar" class="xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <RouterLink to="/">
        <img :src="logo" alt class="w-[124px] object-cover h-[32px]" />
      </RouterLink>
      <!-- <a href="#" class>
        <img :src="logo" alt class="w-[124px] object-cover h-[32px]" />
      </a> -->
    </div>

    <Sidebar ref="childRef" />
    <DropdownMenu />
    <div class="flex items-center gap-3">
      <a href="#" class="text-[#04709B]">Log in</a>
      <div
        class="h-8 w-8 rounded-full flex items-center justify-center bg-[#04709B]"
      >
        <img src="@/assets/ProfileIcon.svg" alt="" class="w-6 h-6" />
      </div>
    </div>
  </nav>

  <h1 class="text-3xl font-bold underline text-center py-20">
    <!-- Sanwal Sulehri Workspace -->
  </h1>
</template>

<script setup>
import deal1 from "@/assets/deal.png";
import deal2 from "@/assets/deal2.webp";
import logo from "@/assets/logo.webp";
import DropdownMenu from "@/components/navbar/DropdownMenu.vue";
import Sidebar from "@/components/navbar/Sidebar.vue";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const childRef = ref(null);

const openSidebar = () => {
  if (childRef.value) {
    childRef.value.open(); // Call the method to open the sidebar
  }
};

onMounted(() => {
  console.log(childRef.value); // Ensure the ref is properly set
});
</script>
