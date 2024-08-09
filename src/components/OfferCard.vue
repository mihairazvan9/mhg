<script setup>
import SiteLogo from "../assets/img/singsaver.svg";
import MenuLine from "../assets/img/menu-line.svg";
import IconProfile from "../assets/img/icon-profile.svg";
import ImgAuthor from "../assets/img/author.png";
import IconTick from "../assets/img/tick.svg";
import IconX from "../assets/img/x.svg";
import IconMail from "../assets/img/mail.svg";
import LogoWhite from "../assets/img/singsaver-white.svg";
import IconInfo from "../assets/img/info.svg";
import IconStar from "../assets/img/star.svg";
import IconLinkSquare from "../assets/img/link-square.svg";
import IconDiamond from "../assets/img/diamond.svg";
import LogoFacebook from "../assets/img/facebook.svg";
import LogoYoutube from "../assets/img/youtube.svg";
import LogoInstagram from "../assets/img/instagram.svg";
import LogoLinkedin from "../assets/img/linkedin.svg";
import ArrowRight from "../assets/img/arrow-right.svg";
import CardLogo from "../assets/img/card-1.png";
import RewardThumb from "../assets/img/reward-thumb.png";
import RewardThumb2 from "../assets/img/reward-thumb-1.png";
import { icons } from "@/assets/icons";
import TheButton from "./TheButton.vue";
import {ref} from "vue";

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
});

const sectionVisible = ref({
  rewards: true,
  cardDetails: false,
  expertAdvice: false,
});
</script>

<template>
  <div>
    <div class="bg-white padding-y padding-x gap-t card-t-radius">
      <div class="flex justify-between">
        <span class="bg-primary-light text-primary padding-x-xs font-semibold mb-2 text-sm inline rounded-lg">{{ value.subtitle }}</span>

        <div class="hidden items-center gap-2 lg:flex">
          <input id="default-checkbox-2"
                 type="checkbox"
                 value=""
                 class="w-5 h-5 text-gray-300 bg-white border-gray-300 rounded"
          />
          <label for="default-checkbox-2" class="body-2 text-gray-900">
            Add to compare
          </label>
        </div>
      </div>

      <h3 class="leading-7 font-bold text-xl text-gray-900">{{ value.title }}</h3>

      <div class="h-5 lg:hidden justify-start items-center gap-2 gap-t inline-flex">
        <input id="default-checkbox-1"
               type="checkbox"
               value=""
               class="w-5 h-5 text-gray-300 bg-white border-gray-300 rounded-lg"
        >

        <label for="default-checkbox-1" class="body-2 text-gray-900">
          Add to compare
        </label>
      </div>

      <div class="flex md:flex-nowrap flex-col lg:flex-row items-start lg:items-center justify-between gap-md gap-t w-full lg:w-auto">
        <div class="w-full">
          <div class="flex items-center gap-sm w-full lg:w-auto lg:items-start">
            <div class="w-[140px] lg:w-[40%]">
              <img :src="value.image" class="w-full" alt="card"/>
            </div>

            <div class="flex flex-col gap-x-2">
              <div class="flex items-center gap-xs text-base md:text-xl">
                <div class="text-gray-800 font-medium body-2 whitespace-nowrap text-base">Seedly rating</div>
                <img :src="IconInfo" class="icon-xs" alt="card">
              </div>

              <div class="flex items-center gap-xs text-base md:text-xl">
                <img :src="IconStar" class="icon-sm" alt="card">
                <span class="text-primary text-lg md:text-xl xl:text-3xl font-semibold">{{ value.rating }}</span>
                <span class="text-gray-700 font-medium text-base md:text-lg xl:text-xl leading-7"> / 5</span>
              </div>
            </div>
          </div>

          <div class="w-full gap-t lg:w-[40%]">
            <TheButton
                :icon="icons.link_square"
                title="Apply Now"
                background="bg-cta"
                width="w-full"
                link="#"
            />

            <p class="text-gray-700 font-medium text-center gap-t-sm leading-none body-2">{{ value.location }}</p>
          </div>
        </div>

        <div class="w-full">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr v-for="(feature, index) in value.features" :key="index" class="border-b">
                  <th scope="row" class="padding-y-xs body-2 text-gray-700 whitespace-nowrap">{{feature.label}}</th>
                  <td class="padding-y-xs text-base font-semibold text-gray-900">
                    <div>
                      <div class="flex items-center">
                        <span>{{ feature.content }}</span>
                        <img v-if="feature.additionalDetails" :src="IconInfo" class="icon-xs ml-1" alt="card">
                      </div>
                      <p v-if="feature.extraInfo" class="text-sm font-medium">{{ feature.extraInfo }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <ul class="bg-white rounded-b-2xl xl:rounded-b-3xl">
      <li>
        <div class="padding-x padding-y-sm flex flex-col gap-md bg-primary-light">
          <div
              class="flex items-center justify-between gap-md cursor-pointer"
              @click.prevent="sectionVisible.rewards = !sectionVisible.rewards"
          >
            <div class="flex items-center">
              <h4 class="subheading-2 text-primary">Gifts & rewards</h4>
            </div>

            <div class="flex items-center gap-md">
              <div class="flex items-center subheading-2 text-primary">
                <span>{{ value.rewards.length }} rewards</span>
                <img :src="IconDiamond" alt="reward" class="icon-xs ml-1"/>
              </div>

              <button
                  :class="['transition-rotate overflow-hidden', {'active': sectionVisible.rewards }]"
              >
                <i v-html="icons.arrow_down"></i>
              </button>
            </div>
          </div>

          <div v-if="sectionVisible.rewards" class="body-2">
            <ul class="list-disc padding-x text-gray-800 ml-2 body-2">
              <li v-for="(reward, index) in value.rewards" :key="index">{{reward }}</li>
            </ul>

            <div v-if="value.requiresAuthentication" class="gap-t">
              <a :href="value.authenticationLink" class="uppercase bullet-2 text-primary underline md:text-lg">
                Sign-in required
              </a>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="padding-x padding-y-sm flex flex-col gap-md">
          <div
              class="flex items-center justify-between gap-md cursor-pointer"
              @click.prevent="sectionVisible.cardDetails = !sectionVisible.cardDetails"
          >
            <div class="flex items-center">
              <h4 class="subheading-2">Card details</h4>
            </div>

            <button
                :class="['transition-rotate overflow-hidden', {'active': sectionVisible.cardDetails }]"
            >
              <i v-html="icons.arrow_down"></i>
            </button>
          </div>

          <div v-if="sectionVisible.cardDetails" class="body-2">
            <div class="grid grid-cols-1 md:grid-cols-2 text-sm md:text-base font-medium">
              <ul class="list-disc padding-x text-gray-800 ml-2">
                <li class="font-medium">
                  <a :href="value.fullReviewLink" class="underline">Read the full review</a>
                </li>

                <li v-for="(cardDetail, index) in value.cardDetails.slice(0, value.cardDetails.length / 2 + 1)" :key="index">{{ cardDetail }}</li>
              </ul>

              <ul class="list-disc padding-x text-gray-800 ml-2 md:ml-8">
                <li v-for="(cardDetail, index) in value.cardDetails.slice(value.cardDetails.length / 2 + 1, value.cardDetails.length)" :key="index">{{ cardDetail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li class="border-t">
        <div class="padding-x padding-y-sm flex flex-col gap-md">
          <div
              class="flex items-center justify-between gap-md cursor-pointer"
              @click.prevent="sectionVisible.expertAdvice = !sectionVisible.expertAdvice"
          >
            <div class="flex items-center">
              <h4 class="subheading-2">Expert take</h4>
            </div>

            <button
                :class="['transition-rotate overflow-hidden', {'active': sectionVisible.expertAdvice }]"
            >
              <i v-html="icons.arrow_down"></i>
            </button>
          </div>

          <div v-if="sectionVisible.expertAdvice" class="body-2 flex flex-col gap-sm">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <figure class="col-span-2 md:text-lg">
                <blockquote class="body-2 text-gray-800">{{value.advice.content}}</blockquote>

                <figcaption class="body-2 pt-1">
                  <a :href="value.advice.content" class="text-primary underline font-medium">The Milelion</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
</style>