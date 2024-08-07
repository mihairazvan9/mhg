<script setup>
  import AuthorSimple from "@/components/AuthorSimple.vue"

  const props = defineProps({
    header: {
      type: Object,
      required: true
    }
  })

</script>

<template>
  <!-- Header infos wrapper -->
  <div class="flex flex-col gap-sm gap-t">
    <h1 class="display-4">
      {{ header.title }}
    </h1>
    <p class="body-1 gap-y-xs">
      {{ header.subtitle }}
    </p>
    <p class="text-lg font-medium text-gray-600">
      {{ header.date }}
    </p>
  </div>

  <!-- Authors wrapper -->
  <div class="flex flex-wrap flex-col md:flex-row gap-10 my-8">
    <AuthorSimple v-for="author in header.authors" 
                  :author
    />
  </div>

  <!-- Header image wrapper -->
  <div class="card-radius overflow-hidden">
    <img :src="header.header_image" alt="credit card" class="w-full" />
  </div>
</template>

<style>

</style>