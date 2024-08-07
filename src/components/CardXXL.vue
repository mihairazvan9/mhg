<script setup>
  import ArticleThumbOne from "../assets/img/article-thumb-1.png";
  import ArticleThumbTwo from "../assets/img/article-thumb-2.png";
  import ArticleThumbThree from "../assets/img/article-thumb-3.png";
  import ArrowRight from "../assets/img/arrow-right.svg";
</script>

<template>
  <div
    class="card-radius overflow-hidden flex flex-col lg:flex-row items-stretch bg-white gap-t shadow"
  >
    <div class="h-40 lg:h-full overflow-hidden basis-6/12">
      <img
        :src="ArticleThumbOne"
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="padding-x padding-y gap-sm flex flex-col gap-sm basis-6/12"
    >
      <p class="subheading-2">Best Credit Cards of 2024</p>
      <p class="body-2">
        From huge sign-up bonuses to generous rewards, NerdWallet's best
        credit cards of 2024 outshine the rest. Compare these deals to
        find one that best fits your needs.
      </p>
      <div class="flex items-center gap-xs">
        <p class="button-1 text-primary">Read More</p>
        <img :src="ArrowRight" alt="icon" />
      </div>
    </div>
  </div>
</template>

<style>

</style>