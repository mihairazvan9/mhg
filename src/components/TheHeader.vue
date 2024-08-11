<script setup>
  import SiteLogo from "../assets/img/singsaver.svg";
  import MenuLine from "../assets/img/menu-line.svg";
  import IconProfile from "../assets/img/icon-profile.svg";
</script>

<template>
  <header class="py-5 bg-white">
    <div class="flex items-center justify-between mx-auto max-w-screen-2xl px-6 xl:px-10">
      <img :src="MenuLine" alt="SingSaver" class="xl:hidden" />
      <div class="flex items-center gap-10">
        <img :src="SiteLogo" alt="SingSaver" />
        <ul class="hidden xl:flex items-center gap-9">
          <li>
            <RouterLink to="/" class="text-lg font-bold leading-normal">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/article-page" class="text-lg font-bold leading-normal">
              Article Page
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/navbar-page" class="text-lg font-bold leading-normal ml-6">
              Try Navbar
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/personal-loans" class="text-lg font-bold leading-normal ml-6">
              Personal Loans
            </RouterLink>
          </li>
          <!-- <li>
            <a href="#" class="text-lg font-bold leading-normal"
              >All products</a
            >
          </li>
          <li>
            <a href="#" class="text-lg font-bold leading-normal">Guides</a>
          </li> -->
          <li>
            <a href="#" class="text-lg font-bold leading-normal">Rewards</a>
          </li>
          <li>
            <a href="#" class="text-lg font-bold leading-normal">Blog</a>
          </li>
          <li>
            <a href="#" class="text-lg font-bold leading-normal">About us</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="#"
          class="text-lg font-semibold leading-normal text-gray-600 hidden xl:inline-block"
          >Support</a
        >
        <a
          href="#"
          class="text-lg font-semibold leading-normal text-primary hidden xl:inline-block"
          >Log In</a
        >
        <a href="#" class=""><img :src="IconProfile" alt="pofile" /></a>
      </div>
    </div>
  </header>
</template>

<style>

</style>