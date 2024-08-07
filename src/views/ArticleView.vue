<script setup>
  import ArticleThumbOne from "../assets/img/article-thumb-1.png";
  import ArticleThumbTwo from "../assets/img/article-thumb-2.png";
  import ArticleThumbThree from "../assets/img/article-thumb-3.png";
  import ArrowRight from "../assets/img/arrow-right.svg";


  import { icons } from '@/assets/icons.js'

  import TheWrapper from "@/components/TheWrapper.vue"
  import TheButton from "@/components/TheButton.vue"
  import TheHeader from "@/components/TheHeader.vue"
  import Breadcrumb from "@/components/Breadcrumb.vue"
  import TheArticleHeader from "@/components/TheArticleHeader.vue"
  import TheWhiteBoard from "@/components/TheWhiteBoard.vue"
  import CTA from "@/components/CTA.vue"
  import BestDeal from "@/components/BestDeal.vue"
  import Author from "@/components/Author.vue"
  import ChipsCard from "@/components/ChipsCard.vue"
  import SpotLight from "@/components/SpotLight.vue"
  import TheFooter from "@/components/TheFooter.vue"


  // remove next images when we have API
  import CardBanner from "../assets/img/card-banner.png";
  import AuthorImg from "../assets/img/author.png";

  const placeholder_breadcrumb = [
    {
      title: 'Start',
      link: '/'
    },
    {
      title: 'Best credit cards',
      link: '/'
    },
    {
      title: 'Best Credit Card Bonuses for New Cardholders of August 2024',
      link: '/'
    }
  ]

  const placeholder_header = {
    title: 'How to Pick the Best Credit Card for You: 4 Easy Steps',
    subtitle: `If you know your options and ask the right questions, you can find the
      best fit for your spending habits and goals.`,
    date: 'Updated: Jul 24, 2024',
    header_image: CardBanner,
    authors: [
      {
        name: 'Jae Bratton',
        position: 'Lead Assigning Editor',
        link: '/',
        image: AuthorImg
      },
      {
        name: 'Jae Bratton',
        position: 'Lead Assigning Editor',
        link: '/',
        image: AuthorImg
      },
      {
        name: 'Jae Bratton',
        position: 'Lead Assigning Editor',
        link: '/',
        image: AuthorImg
      },
      {
        name: 'Jae Bratton',
        position: 'Lead Assigning Editor',
        link: '/',
        image: AuthorImg
      },
    ]
  }

  const placeholder_cta = {
    title: 'Ready to earn your first $100 in rewards?',
    infos: `
    <p>
      Nerdwallet+ members can earn $100 in rewards by paying their first
        bill on time with one of these eligible credit cards.
    <p>`,
    // icon: null// We can change icon or empty to use default
  }

  const placeholder_author = {
    image: AuthorImg,
    about: `Paul has been the lead editor for NerdWallet's credit cards team since 2015 and for the travel rewards team since 2023. Previously, he worked at USA Today and the Des Moines Register, then built a freelance writing and editing business focused on personal finance topics. He has a bachelor's degree in journalism and an MBA.`,
    author: 'Paul Todd',
    link: 'Paul Todd',
    media: [
      {
        name: 'Twiter',
        link: 'Twiter',
        icon: 'x'
      },
      {
        name: 'Mail',
        link: 'Mail',
        icon: 'mail'
      },
      {
        name: 'Facebook',
        link: 'Facebook',
        icon: 'facebook'
      },
      {
        name: 'Linkedin',
        link: 'Linkedin',
        icon: 'linkedin'
      },
      {
        name: 'Youtube',
        link: 'Youtube',
        icon: 'youtube'
      },
      {
        name: 'Google',
        link: 'Google',
        icon: 'google'
      },
      {
        name: 'Whatapp',
        link: 'Whatapp',
        icon: 'whatapp'
      },
      {
        name: 'Website',
        name: 'Website',
        icon: 'website'
      },
    ]
  }

  const placeholder_chips = [
    {
      title: 'Credit cards',
      link: '#'
    },
    {
      title: 'Student Credit Cards',
      link: '#'
    },
    {
      title: 'Choose a credit card',
      link: '#'
    },
    {
      title: 'Cash Back',
      link: '#'
    },
    {
      title: 'Rewards',
      link: '#'
    },
  ]
</script>

<template>
  <TheHeader />

  <div class="px-6 xl:px-10 py-12 bg-gray-100 flex gap-md">
    <div class="basis-full xl:basis-8/12">
      <!-- Breadcrumb -->
      <Breadcrumb :breadcrumb="placeholder_breadcrumb" />

      <!-- Page title -->
      <TheArticleHeader :header="placeholder_header" />

      <TheWhiteBoard />

      <!-- Table of contents -->
      <TheWrapper title="Table of contents" simple>
        <ul
          class="padding-x-xs list-decimal marker:text-primary marker:font-semibold list-inside flex flex-col gap-t-xs gap-xs"
        >
          <li>
            <a href="#" class="button-2 text-primary"
              >Identify which type of credit card you need</a
            >
          </li>
          <li>
            <a href="#" class="button-2 text-primary"
              >Identify which type of credit card you need</a
            >
          </li>
          <li>
            <a href="#" class="button-2 text-primary"
              >Identify which type of credit card you need</a
            >
          </li>
          <li>
            <a href="#" class="button-2 text-primary"
              >Identify which type of credit card you need</a
            >
          </li>
          <li>
            <a href="#" class="button-2 text-primary"
              >Identify which type of credit card you need</a
            >
          </li>
        </ul>
      </TheWrapper>
  
      <!-- Beginner’s guide to credit cards -->
      <TheWrapper title="Beginner’s guide to credit cards" simple>
        <div class="flex flex-col gap-xs gap-t">
          <h3 class="subheading-2">1. How credit cards work</h3>
          <p class="body-2">
            The idea behind credit cards is simple: When you use a credit card,
            you are borrowing money to pay for something. Later on, you must
            repay what your borrowed. If you take time to pay it back (rather
            than pay it in full when your credit card statement comes), you'll
            be charged interest. The whole credit cards industry rests on this
            basic premise.
          </p>
        </div>
        <div class="flex flex-col gap-xs gap-t">
          <h3 class="subheading-2">1. How credit cards work</h3>
          <p class="body-2">
            The idea behind credit cards is simple: When you use a credit card,
            you are borrowing money to pay for something. Later on, you must
            repay what your borrowed. If you take time to pay it back (rather
            than pay it in full when your credit card statement comes), you'll
            be charged interest. The whole credit cards industry rests on this
            basic premise.
          </p>
        </div>


        <CTA :cta="placeholder_cta">
        <!-- All property for TheButton:
            -text (default - 'Get started')
            -link
            -color (tailwind class, default - 'text-white')
            -background (tailwind class, default - 'bg-primary')
            -icon (right icon)
            -icon_left (left icon)
        -->
          <TheButton />
        </CTA>
        <div class="flex flex-col gap-xs gap-t">
          <h3 class="subheading-2">1. How credit cards work</h3>
          <p class="body-2">
            The idea behind credit cards is simple: When you use a credit card,
            you are borrowing money to pay for something. Later on, you must repay
            what your borrowed. If you take time to pay it back (rather than pay
            it in full when your credit card statement comes), you'll be charged
            interest. The whole credit cards industry rests on this basic premise.
          </p>
        </div>
        <div class="flex flex-col gap-xs gap-t">
          <h3 class="subheading-2">1. How credit cards work</h3>
          <p class="body-2">
            The idea behind credit cards is simple: When you use a credit card,
            you are borrowing money to pay for something. Later on, you must repay
            what your borrowed. If you take time to pay it back (rather than pay
            it in full when your credit card statement comes), you'll be charged
            interest. The whole credit cards industry rests on this basic premise.
          </p>
        </div>
      </TheWrapper>

      
      <!-- Find the right credit card for you. -->
       <!-- TODO -->
      <BestDeal />

      <!-- Other articles -->
      <TheWrapper title="Other articles" simple>
        <div class="flex flex-col md:flex-row gap-md gap-t">
          <div class="card-radius overflow-hidden bg-white shadow">
            <div class="h-40 overflow-hidden">
              <img
                :src="ArticleThumbOne"
                alt="thumbnail"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="padding-x padding-y gap-sm flex flex-col gap-sm">
              <div>
                <span class="bg-gray-100 rounded-full px-2 py-0.5 inline-block"
                  >Travel insurance</span
                >
              </div>
              <div class="flex justify-between gap-xs">
                <p class="bullet-2">
                  Get Your Cheap Travel Insurance Online in Singapore
                </p>
                <img :src="ArrowRight" alt="icon" />
              </div>
            </div>
          </div>
          <div class="card-radius overflow-hidden bg-white shadow">
            <div class="h-40 overflow-hidden">
              <img
                :src="ArticleThumbTwo"
                alt="thumbnail"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="padding-x padding-y gap-sm flex flex-col gap-sm">
              <div>
                <span class="bg-gray-100 rounded-full px-2 py-0.5 inline-block"
                  >Travel insurance</span
                >
              </div>
              <div class="flex justify-between gap-xs">
                <p class="bullet-2">
                  Single Trip vs Annual: Which Travel Insurance Should You Get?
                </p>
                <img :src="ArrowRight" alt="icon" />
              </div>
            </div>
          </div>
          <div class="card-radius overflow-hidden bg-white shadow">
            <div class="h-40 overflow-hidden">
              <img
                :src="ArticleThumbThree"
                alt="thumbnail"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="padding-x padding-y gap-sm flex flex-col gap-sm">
              <div>
                <span class="bg-gray-100 rounded-full px-2 py-0.5 inline-block"
                  >Travel insurance</span
                >
              </div>
              <div class="flex justify-between gap-xs">
                <p class="bullet-2">
                  6 Best Senior Travel Insurance for Elderly in Singapore
                </p>
                <img :src="ArrowRight" alt="icon" />
              </div>
            </div>
          </div>
        </div>
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
      </TheWrapper>

      <!-- About the author -->
      <TheWrapper title="About the author">
        <Author :author="placeholder_author" />
      </TheWrapper>


      <!-- More like this -->
      <ChipsCard title="More like this"
                 :chips="placeholder_chips"
      />
          
    </div>
    
    <!-- Product Spotlight -->
    <!-- TODO -->
    <SpotLight />
  </div>

  <TheFooter />
</template>
