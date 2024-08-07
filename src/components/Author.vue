<script setup>
  import SociaMedia from "@/components/SociaMedia.vue"

  const props = defineProps({
    author: {
      type: Object,
      default: 'Anonymous'
    },

  })
</script>

<template>
  <div class="flex flex-col gap-sm padding-x padding-y">
    <div class="flex items-center gap-3">

      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img :src="props.author.image" alt="author" />
      </div>

      <h4 class="subheading-2">{{ props.author.author }}</h4>
      
    </div>

    <p class="body-2">
      {{ props.author.about }}
      <a :href="props.author.link" 
         class="text-primary underline">
        Read more
      </a>
    </p>

    <div class="flex items-center gap-4 mt-4">
      <SociaMedia v-for="media in props.author.media" 
                  :media
      />
    </div>
  </div>
</template>

<style>

</style>