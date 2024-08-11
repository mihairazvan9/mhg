<script setup>
import { icons } from '../assets/icons';
import {ref} from "vue";

import ArrowRight from "../assets/img/arrow-right.svg";
import CreditCardPlaceholderImage from "@/assets/img/credit-card-placeholder.png";
import ContractBlueAlt from "@/assets/img/contract-blue-alt.png";
import VideoPlaceholder from "@/assets/img/video-placeholder.jpg";
import SofiPartnerLogo from "@/assets/img/sofi-logo.png";
import ArticleThumbOne from "../assets/img/article-thumb-1.png";
import PromoImage from "../assets/img/promo.png";

import TheWrapper from "../components/TheWrapper.vue"
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Card from "../components/Card.vue";
import Faqs from "../components/Faqs.vue";
import TheButton from "../components/TheButton.vue";

const placeholder_breadcrumb = [
  {
    title: 'Start',
    link: '/'
  },
  {
    title: 'Personal Loans',
    link: '/'
  },
  {
    title: 'Personal Loans Rates',
    link: '/'
  },
];

const placeholder_faqs = [
  {
    question: `What's the best credit card?`,
    answer: `<p class="body-2">
        The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you'll be charged interest. The whole credit cards industry rests on this basic premise.
        </p>`,
  },
  {
    question: `What's the easiest credit card to get?`,
    answer: `<p class="body-2">
            <a href="#" class="underline">Secured credit cards</a> require you to provide a cash security deposit to open an account. Because that deposit protects the card company from risk, secured cards are much easier to qualify for than other cards. You're not guaranteed approval for a secured card, but the bar is much lower than for regular cards. Store credit cards are also generally easier to qualify for than bank cards.
          </p>`,
  },
  {
    question: `What's the best credit card company?`,
    answer: `
        <p class="body-2">Just as there is no single best card for everyone, consumers have widely different opinions about the best (and worst) credit card issuers. One person could get the runaround from customer service rep and rate a bank zero stars as a result, while another has nothing but positive experiences and gives it five stars across the board. Still, some trends emerge in customer satisfaction surveys.</p>
        <p class="body-2 mt-4">J.D. Power conducts an annual study of satisfaction among major national and regional credit card issuers. It regularly rates <a href="#" class="underline">Discover</a> and <a href="#" class="underline">American Express</a> at the top among mass-market issuers. In the most recent study, USAA and Navy Federal Credit Union had the highest ratings of all, but keep in mind that only people affiliated with the military are eligible for USAA or Navy Federal products.</p>
      `
  }
];

const benefits = [
  `250+ credit cards reviewed and rated by our team of experts`,
  `80+ years of combined experience covering credit cards and personal finance`,
  `100+ categories of best credit card selections (<a class="underline text-primary" href="#">See our top picks</a>)`,
  `Objective comprehensive ratings rubrics (<a class="underline text-primary" href="#">Methodology</a>)`,
];
</script>

<template>
  <TheHeader/>

  <div class="bg-gray-100">
    <div>
      <div>
        <div class="mx-auto max-w-screen-2xl px-6 xl:px-10 pt-12">
          <!-- Breadcrumb -->
          <Breadcrumb :breadcrumb="placeholder_breadcrumb"/>

          <div class="w-full xl:w-9/12 mt-8">
            <h1 class="display-4 font-extrabold">Personal Loan Rates: Compare Top Lenders in July 2024</h1>
            <p class="text-lg font-medium text-gray-600 mt-3">Updated: Jul 24, 2024</p>
            <div class="body-1 my-8 gap mb-4">
              <p>The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you'll be charged interest. The whole credit cards industry rests on this basic premise.</p>
            </div>

            <p class="responsive-text bg-white text-gray-700 padding-l-sm pr-4 padding-y-sm">Many, or all, of the products featured on this page are from our advertising partners who compensate us when you take certain actions on our website or click to take an action on their website. However, this does not influence our evaluations. Our opinions are our own. Here is a list of
              <a class="text-primary" href="#">our partners</a> and <a class="text-primary" href="#">here's how we make money</a>.
            </p>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-screen-2xl px-6 xl:px-10 mb-10 pb-12">
        <TheWrapper simple title="Why trust Singsaver">
          <ul class="responsive-text text-gray-900 font-medium">
            <li
                v-for="(benefit, index) in benefits"
                :key="index"
                class="flex items-center mb-2"
            >
              <i class="mr-2" v-html="icons.checked_circle"></i>
              <span v-html="benefit"></span>
            </li>
          </ul>
        </TheWrapper>
      </div>
    </div>
  </div>

  <TheFooter/>
</template>