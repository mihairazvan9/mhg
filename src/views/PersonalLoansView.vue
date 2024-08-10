<script setup>
import { icons } from '../assets/icons';
import ImgAuthor from "../assets/img/author.png";
import IconX from "../assets/img/x.svg";
import IconMail from "../assets/img/mail.svg";
import CardLogo from "../assets/img/card-1.png";
import TheWrapper from "../components/TheWrapper.vue"
import OfferCard from "../components/OfferCard.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import TheTable from "../components/TheTable.vue";
import ArrowRight from "../assets/img/arrow-right.svg";
import Card from "../components/Card.vue";
import CreditCardPlaceholderImage from "@/assets/img/credit-card-placeholder.png";
import ContractBlueAlt from "@/assets/img/contract-blue-alt.png";
import VideoPlaceholder from "@/assets/img/video-placeholder.jpg";
import SofiPartnerLogo from "@/assets/img/sofi-logo.png";
import {ref} from "vue";
import Faqs from "../components/Faqs.vue";
import TheButton from "../components/TheButton.vue";
import ArticleThumbOne from "../assets/img/article-thumb-1.png";
import PromoImage from "../assets/img/promo.png";

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

const cardOptions = [
  {title: 'Best Credit Cards of 2024', icon: icons.credit_card, link: '#'},
  {title: 'Find the best card for you', icon: icons.cart, link: '#'},
  {title: 'Ballance transfer credit cards', icon: icons.money, link: '#'},
  {title: 'Best 0% APR credit cards', icon: icons.award, link: '#'},
  {title: 'View the top travel rewards cards', icon: icons.bag, link: '#'},
  {title: 'Best cash back credit cares', icon: icons.big_equal, link: '#'},
  {title: 'Best rewards credit cards', icon: icons.wheel, link: '#'},
  {title: 'Best airline credit cards', icon: icons.search_shield, link: '#'},
  {title: 'Best secured credit cards', icon: icons.checklist, link: '#'},
  {title: 'Best gas credit cards 2024', icon: icons.money_box, link: '#'},
];

const benefits = [
  `250+ credit cards reviewed and rated by our team of experts`,
  `80+ years of combined experience covering credit cards and personal finance`,
  `100+ categories of best credit card selections (<a class="underline text-primary" href="#">See our top picks</a>)`,
  `Objective comprehensive ratings rubrics (<a class="underline text-primary" href="#">Methodology</a>)`,
];

const creditCardCalculators = [
  {
    title: 'Credit Card Balance Transfer Calculator',
    image: CreditCardPlaceholderImage,
    subtitle: 'Move your debts to a new card with lower or 0% rate',
    link: '#',
  },
  {
    title: 'Credit Card Interest Calculator',
    image: CreditCardPlaceholderImage,
    subtitle: 'Check how much your interest charges would be for a month',
    link: '#',
  },
  {
    title: 'Credit Card Interest Calculator',
    image: CreditCardPlaceholderImage,
    subtitle: 'Check how much your interest charges would be for a month',
    link: '#'
  },
  {
    title: 'Credit Card Interest Calculator',
    image: CreditCardPlaceholderImage,
    subtitle: 'Check how much your interest charges would be for a month',
    link: '#',
  },
];

const tableOfContents = [
  {url: '#', description: 'Identify which type of credit card you need'},
  {url: '#', description: 'Identify which type of credit card you need'},
  {url: '#', description: 'Identify which type of credit card you need'},
  {url: '#', description: 'Identify which type of credit card you need'},
  {url: '#', description: 'Identify which type of credit card you need'},
  {url: '#', description: 'Identify which type of credit card you need'},
  {url: '#', description: 'Identify which type of credit card you need'},
];

const partners = [
  {name: 'SoFi Checking and Savings', image: SofiPartnerLogo, description: 'Earn up to $300 with direct deposit. Terms apply', link: '#'},
  {name: 'SoFi Checking and Savings', image: SofiPartnerLogo, description: 'Earn up to $300 with direct deposit. Terms apply', link: '#'},
  {name: 'SoFi Checking and Savings', image: SofiPartnerLogo, description: 'Earn up to $300 with direct deposit. Terms apply', link: '#'},
];

const instructions = [
  {
    title: 'Check your credit card',
    description: 'The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you\'ll be charged interest. The whole credit cards industry rests on this basic premise.',
  },
  {
    title: 'Review your debt-to-income ratio',
    description: 'The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you\'ll be charged interest. The whole credit cards industry rests on this basic premise.',
  },
  {
    title: 'Compare your options',
    description: 'The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you\'ll be charged interest. The whole credit cards industry rests on this basic premise.',
  },
  {
    title: 'Consider a co-applicant',
    description: 'The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you\'ll be charged interest. The whole credit cards industry rests on this basic premise.',
  },
  {
    title: 'Weigh secured personal loans',
    description: 'The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you\'ll be charged interest. The whole credit cards industry rests on this basic premise.',
  },
  {
    title: 'Assess your overall financial well-being',
    description: 'The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you\'ll be charged interest. The whole credit cards industry rests on this basic premise.',
  },
];

var isHeaderContentVisible = ref(true);
</script>

<template>
  <TheHeader/>

  <div class="bg-gray-100">
    <div>
      <div class="bg-primary-dark">
        <div class="mx-auto max-w-screen-2xl px-6 xl:px-10 mb-10 pt-12 pb-6 text-white">
          <!-- Breadcrumb -->
          <Breadcrumb :breadcrumb="placeholder_breadcrumb" dark-mode/>

          <div class="w-full xl:w-9/12 mt-8">
            <h1 class="display-4 font-extrabold">Best Credit Cards in Singapore</h1>
            <div class="body-1 my-8">
              <div v-if="isHeaderContentVisible" class="mb-4">
                <p class="mb-8">Looking for the best credit cards in Singapore for 2024? You're in the right spot! We've put together a guide to the top credit cards available. From cashback to travel rewards, we've covered it all.</p>
                <p class="mb-8">We'll guide you through the many options to find the perfect card for your spending and lifestyle. Whether you love food, travel, or shopping, there's a card for you. It's designed to boost your rewards.</p>
                <p>We'll explore rewards programs, cashback rates, and travel perks in detail. Plus, we'll share the best promotions and deals. Ready to find the top credit cards of 2024? Let's dive in!</p>
              </div>

              <a href="#" @click.prevent="isHeaderContentVisible = !isHeaderContentVisible;" class="inline-flex">
                <span v-if="isHeaderContentVisible">Read Less</span>
                <span v-else>Read More</span>

                <i v-html="icons.chevron_up" :class="['transition-rotate overflow-hidden', {'active': !isHeaderContentVisible }]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-screen-2xl px-6 xl:px-10 mb-10 pb-12">
        <TheWrapper simple title="Find a credit card">
          <div class="flex flex-wrap gap-2">
            <a
                v-for="(option, index) in cardOptions"
                :key="index"
                :href="option.link"
                class="flex flex-col gap-xs bg-white rounded-lg shadow-lg p-2 grow w-full sm:w-1/3 lg:w-1/5 xl:w-1/6 sm:p-3 lg:p-4 lg:justify-between"
            >
              <div class="w-10 h-10 button-gap flex items-center justify-center bg-primary-light rounded-full">
                <i v-html="option.icon"></i>
              </div>
              <div class="flex justify-between items-center lg:items-center h-full">
                <h3 class="responsive-text font-semibold text-gray-900">{{option.title}}</h3>
                <img :src="ArrowRight" alt="icon" />
              </div>
            </a>
          </div>
        </TheWrapper>

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

        <TheWrapper simple title="Table of contents">
          <ol class="responsive-text list-decimal list-inside text-gray-900 font-medium pl-2">
            <li
                v-for="(link, index) in tableOfContents"
                :key="index"
                class="flex items-center mb-2 list-item text-primary"
            >
              <a :href="link.url" class="underline text-primary">{{link.description}}</a>
            </li>
          </ol>
        </TheWrapper>

        <TheWrapper simple title="Credit card calculators">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="(calculator, index) in creditCardCalculators" class="flex ">
              <Card
                  :card="calculator"
                  :stretchHorizontally="false"
                  class="shadow-md"
                  large
                  no-margin
              />
            </div>
          </div>
        </TheWrapper>

        <TheWrapper simple title="">
          <div class="flex items-center justify-center overflow-hidden rounded-2xl md:max-h-[200px]">
            <img :src="PromoImage" alt="PromoPicture" class="self-stretch w-full object-cover"/>
          </div>
        </TheWrapper>

        <TheWrapper simple title="Understanding [Vertical] in Singapore">
          <div v-for="(instruction, index) in instructions" :key="index" class="mb-6">
            <h4 class="subheading-2">{{index + 1}}. {{instruction.title}}</h4>
            <p class="responsive-text">{{instruction.description}}</p>
          </div>
        </TheWrapper>

        <TheWrapper title="From our partners">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-2">
            <div
                v-for="(partner, index) in partners"
                :key="index"
            >
              <div class="w-[190px] lg:w-[40%] mb-3">
                <img :src="partner.image" class="w-full" alt="card"/>
              </div>

              <p class="responsive-text font-semibold">{{partner.description}}</p>

              <a :href="partner.link" class="text-primary responsive-text font-medium">{{partner.name}}</a>
            </div>
          </div>
        </TheWrapper>

        <!-- Faq -->
        <TheWrapper title="FAQs">
          <Faqs :faqs="placeholder_faqs" />
        </TheWrapper>

        <TheWrapper title="Featured Video">
          <div class="px-4">
            <div
                class="flex flex-col md:flex-row gap-md"
            >
              <div class="flex items-center justify-center bg-primary-light flex-shrink-0 overflow-hidden rounded-lg">
                <img :src="VideoPlaceholder" alt="VideoPicture" class="self-stretch md:w-72"/>
              </div>

              <div>
                <div class="flex flex-col md:flex-row gap-md">
                  <div class="flex flex-col gap-xs">
                    <h3 class="subheading-2">Credit Card Annual Fees Explained</h3>
                    <p class="text-gray-600 body-2 mt-1">
                      <span class="underline">Secured credit cards</span> require you to provide a cash security deposit to open an account. Because that deposit protects the card company from risk, secured cards are much easier to qualify for than other cards. You're not guaranteed approval for a secured card, but the bar is much lower than for regular cards. Store credit cards are also generally easier to qualify for than bank cards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TheWrapper>

        <TheWrapper simple title="Relevant Article">
          <section class="pb-3 bg-white shadow card-radius">
            <div class="flex flex-col gap-md">
              <div class="flex items-center justify-center overflow-hidden rounded-t-lg max-h-[200px]">
                <img :src="ArticleThumbOne" alt="VideoPicture" class="self-stretch w-full object-cover"/>
              </div>

              <div class="px-4">
                <div class="flex flex-col md:flex-row gap-md">
                  <div class="flex flex-col gap-xs">
                    <h3 class="subheading-2">Best Credit Cards of 2024</h3>
                    <p class="text-gray-600 body-2 mt-1">
                      From huge sign-up bonuses to generous rewards, NerdWallet's best credit cards of 2024 outshine the rest. Compare these deals to find one that best fits your needs.
                    </p>

                    <a href="#" class="button-1 text-primary flex items-center gap-xs mt-1">Read More <i class="fill-current text-primary" v-html="icons.arrow_right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TheWrapper>

        <TheWrapper simple title="">
          <div
              class="bg-white flex flex-col md:flex-row-reverse md:items-center gap-md rounded-2xl shadow margin-y"
          >
            <div class="flex items-center justify-center bg-primary-light flex-shrink-0 overflow-hidden rounded-t-2xl md:rounded-l-none">
              <img :src="ContractBlueAlt" alt="ContractPicture" class="self-stretch md:max-w-64"/>
            </div>

            <div class="padding-x pb-3">
              <div class="flex flex-col md:flex-row lg:items-center gap-md mb-3">
                <div class="flex flex-col gap-xs">
                  <h3 class="display-1">Find the right credit card for you.</h3>
                  <p class="text-gray-600 body-2 mt-1">
                    Whether you want to pay less interest or earn more rewards, the right card's out there. Just answer a few questions and we'll narrow the search for you.
                  </p>
                </div>
              </div>

              <TheButton title="Compare Credit Cards" link="#" width="w-full" class="md:max-w-[300px]"/>
            </div>
          </div>
        </TheWrapper>

        <TheWrapper simple title="">
          <section class="bg-white shadow card-radius">
            <div class="flex flex-col gap-md">
              <div class="px-4 py-4">
                <div class="flex flex-col md:flex-row md:justify-around gap-md">
                  <div class="mb-8 md:mb-0 flex flex-col items-center">
                    <h3 class="display-1 text-center mb-2">Share it with your friends.</h3>
                    <div class="flex justify-center gap-6">
                      <a href="#"><i class="text-primary [&>svg]:w-12 [&>svg]:h-12" v-html="icons.facebook"></i></a>
                      <a href="#"><i class="text-primary [&>svg]:w-12 [&>svg]:h-12" v-html="icons.x"></i></a>
                      <a href="#"><i class="text-primary [&>svg]:w-12 [&>svg]:h-12" v-html="icons.linkedin"></i></a>
                      <a href="#"><i class="text-primary [&>svg]:w-12 [&>svg]:h-12" v-html="icons.link"></i></a>
                    </div>
                  </div>

                  <div class="flex flex-col items-center">
                    <h3 class="display-1 text-center mb-2">Share it with your friends.</h3>
                    <TheButton title="Let Us Know" link="#" width="w-full" class="lg:w-[150%]"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TheWrapper>
      </div>
    </div>
  </div>

  <TheFooter/>
</template>