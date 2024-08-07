<script setup>
    import LogoWhite from "../assets/img/singsaver-white.svg";
    import LogoFacebook from "../assets/img/facebook.svg";
    import LogoYoutube from "../assets/img/youtube.svg";
    import LogoInstagram from "../assets/img/instagram.svg";
    import LogoLinkedin from "../assets/img/linkedin.svg";
</script>

<template>
  <footer class="bg-primary-dark px-6 xl:px-10 py-12">
    <div class="flex flex-col xl:flex-row pb-6 border-b border-white/50">
      <div
        class="basis-3/12 mb-6 xl:mb-0 border-b xl:border-none border-white/50"
      >
        <img :src="LogoWhite" alt="SingSaver" class="mb-6 xl:mb-0" />
      </div>
      <div class="basis-9/12 flex flex-wrap md:flex-nowrap gap-10">
        <div class="basis-5/12 md:flex-1">
          <p class="body-1 text-white">Products</p>
          <ul class="mt-3 space-y-1">
            <li>
              <a href="#" class="text-sm text-primary-100">Credit Cards</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Loans</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Investments</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Insurance</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Life & Health</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Telco</a>
            </li>
          </ul>
        </div>
        <div class="basis-5/12 md:flex-1">
          <p class="body-1 text-white">Promotions</p>
          <ul class="mt-3 space-y-1">
            <li>
              <a href="#" class="text-sm text-primary-100">March Madness</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100"
                >Save & Take Flight</a
              >
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100"
                >UOB Lightning Deal</a
              >
            </li>
          </ul>
        </div>
        <div class="basis-5/12 md:flex-1">
          <p class="body-1 text-white">Resources</p>
          <ul class="mt-3 space-y-1">
            <li>
              <a href="#" class="text-sm text-primary-100">Blog</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">General FAQs</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100"
                >Rewards Redemption FAQs</a
              >
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Help Center</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Submit a Request</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Giveaway Winners</a>
            </li>
          </ul>
        </div>
        <div class="basis-5/12 md:flex-1">
          <p class="body-1 text-white">About us</p>
          <ul class="mt-3 space-y-1">
            <li>
              <a href="#" class="text-sm text-primary-100">Why SingSaver</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Affiliates</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Careers</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Press</a>
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100"
                >Terms & Conditions</a
              >
            </li>
            <li>
              <a href="#" class="text-sm text-primary-100">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row gap-4 md:items-center justify-between my-8"
    >
      <p class="caption-text text-primary-100">
        © 2015-2024 SingSaver PTE LTD. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        <a href="#"><img :src="LogoFacebook" alt="social media" /></a>
        <a href="#"><img :src="LogoInstagram" alt="social media" /></a>
        <a href="#"><img :src="LogoYoutube" alt="social media" /></a>
        <a href="#"><img :src="LogoLinkedin" alt="social media" /></a>
      </div>
    </div>
    <p class="caption-text text-primary-100">
      This online platform is operated by SingSaver Pte. Ltd. and by continuing
      to use www.singsaver.com.sg (the “SingSaver Website”) or by carrying out a
      transaction on the SingSaver Website, users are deemed to have agreed with
      the Terms and Conditions and Privacy Policy of the SingSaver Website. All
      insurance product-related transactions on the SingSaver Website are
      arranged and administered by SingSaver Insurance Brokers Pte. Ltd., a
      wholly owned subsidiary of SingSaver Pte. Ltd. SingSaver Insurance Brokers
      Pte. Ltd. is a licensed and authorised broker regulated by the Monetary
      Authority of Singapore (“MAS”). SingSaver Pte. Ltd. (which administers all
      other financial products on the SingSaver Website) is not regulated by
      MAS. SingSaver is located at Eon Shenton, 70 Shenton Way, 18-08,
      Singapore, 079118.
    </p>
  </footer>
</template>

<style>

</style>