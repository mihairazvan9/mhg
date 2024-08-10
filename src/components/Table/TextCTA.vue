<script setup>
  import TheButton from "@/components/TheButton.vue"
  import { icons } from '@/assets/icons.js'

  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    
  })

  const emits = defineEmits([
    'handle-open-rewards'
  ])

  function handle_open_reward (event, id) {
    emits('handle-open-rewards', {
      event, 
      id
    })
  }

  const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g id="Icons">
<mask id="mask0_18229_17186" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
<rect id="Bounding box" width="22" height="22" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_18229_17186)">
<path id="diamond" d="M11 18.886L2.10651 8.2121L4.72428 2.97656H17.2757L19.8935 8.2121L11 18.886ZM8.45259 7.5599H13.5474L11.943 4.35156H10.057L8.45259 7.5599ZM10.3125 15.9174V8.9349H4.51092L10.3125 15.9174ZM11.6875 15.9174L17.4891 8.9349H11.6875V15.9174ZM15.0757 7.5599H18.0162L16.4118 4.35156H13.4713L15.0757 7.5599ZM3.98384 7.5599H6.92428L8.52867 4.35156H5.58824L3.98384 7.5599Z" fill="#04709B"/>
</g>
</g>
</svg>
`

</script>

<template>
  <div>
    <p class="body-2 text-nowrap hidden md:inline-block">
      {{ props.data.text }}
    </p>

    
    <p @click="handle_open_reward($event, props.data.cta.id)"
       class="hidden md:inline-block !text-primary !font-semibold underline text-nowrap cursor-pointer">
      {{ props.data.cta.text }}
    </p>

    <div @click="handle_open_reward($event, props.data.cta.id)" class="inline-block md:hidden body-2 ">
      <button class="border-primary text-primary bg-white border-solid border-2 py-2
      flex flex-shrink-0 items-center justify-center gap-x-2 button-padding-x button-1 button-radius">
        {{ props.data.cta.text }}
        <i v-html="icon"></i>
      </button>
    </div>

  </div>
</template>

<style>

</style>