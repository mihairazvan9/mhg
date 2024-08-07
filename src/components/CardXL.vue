<script setup>
  import ArticleThumbOne from "../assets/img/article-thumb-1.png";
  import ArticleThumbTwo from "../assets/img/article-thumb-2.png";
  import ArticleThumbThree from "../assets/img/article-thumb-3.png";
  import ArrowRight from "../assets/img/arrow-right.svg";
</script>

<template>
  <div class="card-radius overflow-hidden bg-white shadow">
    <div class="h-40 overflow-hidden">
      <img
        :src="ArticleThumbOne"
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="padding-x padding-y gap-sm flex flex-col gap-sm">
      <div>
        <span class="bg-gray-100 rounded-full px-2 py-0.5 inline-block"
          >Travel insurance</span
        >
      </div>
      <div class="flex justify-between gap-xs">
        <p class="bullet-2">
          Get Your Cheap Travel Insurance Online in Singapore
        </p>
        <img :src="ArrowRight" alt="icon" />
      </div>
    </div>
  </div>
</template>

<style>

</style>