<template>
  <div class="pl-8 pt-5">
    <a :href="group.href" class="font-bold text-[#212529] text-[16px]">{{
      group.title
    }}</a>
    <div class="pt-5 flex flex-col gap-2 text-[16px]">
      <LinkItem v-for="(link, index) in group.links" :key="index" :link="link">
        <template #default>{{ link.text }}</template>
      </LinkItem>
    </div>
  </div>
</template>

<script setup>
import LinkItem from "./LinkItem.vue";

defineProps({
  group: {
    type: Object,
    required: true,
  },
});
</script>
