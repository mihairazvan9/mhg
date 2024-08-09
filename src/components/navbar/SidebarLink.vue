<template>
  <div class="py-5 px-2 border-b-2 border-[#D0E8FE] text-[#687076] text-[16px]">
    <a :href="href" class="flex items-center">
      <img v-if="image" :src="image" alt="" class="w-full object-cover mr-2" />
      {{ text }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  href: String,
  image: String,
});
</script>
