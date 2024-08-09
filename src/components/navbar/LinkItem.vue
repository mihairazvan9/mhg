<template>
  <div class="">
    <a
      :href="link.href"
      class="text-[#687076] text-[16px] hover:text-[#212529]"
    >
      <slot>{{ link.text }}</slot>
    </a>
    <div
      v-if="link.image"
      class="p-2 mt-3 bg-white w-fit border-gray-200 border rounded-md"
    >
      <img :src="link.image" alt="" class="w-[160px] rounded-md h-[160px]" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>
