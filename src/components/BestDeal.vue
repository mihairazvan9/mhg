<script setup>

</script>

<template>
  <div
    class="bg-primary-light flex flex-col md:flex-row md:items-center gap-md rounded-2xl padding-x padding-y shadow margin-y"
  >
    <div class="flex flex-col gap-xs">
      <h3 class="display-1">Find the right credit card for you.</h3>
      <p class="text-gray-600 body-2 mt-1">
        Whether you want to pay less interest or earn more rewards, the
        right card's out there. Just answer a few questions and we'll narrow
        the search for you.
      </p>
    </div>
    <slot></slot>
  </div>
</template>