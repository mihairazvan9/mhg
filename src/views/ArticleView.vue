<script setup>



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
  import Card from "@/components/Card.vue"
  import ChipsCard from "@/components/ChipsCard.vue"
  import SpotLight from "@/components/SpotLight.vue"
  import Faqs from "@/components/Faqs.vue"
  import TableOfContents from "@/components/TableOfContents.vue"
  import PieceOfContent from "@/components/PieceOfContent.vue"
  import TheFooter from "@/components/TheFooter.vue"


  // remove next images when we have API
  import CardBanner from "../assets/img/card-banner.png";
  import AuthorImg from "../assets/img/author.png";
  import ArticleThumbOne from "../assets/img/article-thumb-1.png";
  import ArticleThumbTwo from "../assets/img/article-thumb-2.png";
  import ArticleThumbThree from "../assets/img/article-thumb-3.png";
  
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

  const placeholder_cards = [
    {
      tags: 'Travel insurance',
      title: 'Get Your Cheap Travel Insurance Online in Singapore',
      subtitle: `From huge sign-up bonuses to generous rewards, NerdWallet's best
        credit cards of 2024 outshine the rest. Compare these deals to
        find one that best fits your needs.`,
      image: ArticleThumbOne
    },
    {
      tags: 'Travel insurance',
      title: 'Get Your Cheap Travel Insurance Online in Singapore',
      subtitle: `From huge sign-up bonuses to generous rewards, NerdWallet's best
        credit cards of 2024 outshine the rest. Compare these deals to
        find one that best fits your needs.`,
      image: ArticleThumbTwo
    },
    {
      tags: 'Travel insurance',
      title: 'Get Your Cheap Travel Insurance Online in Singapore',
      subtitle: `From huge sign-up bonuses to generous rewards, NerdWallet's best
        credit cards of 2024 outshine the rest. Compare these deals to
        find one that best fits your needs.`,
      image: ArticleThumbThree
    },
  ]

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
  ]

  const placeholder_contents = [
    {
      text: 'Identify which type of credit card you need',
      link: '#'
    },
    {
      text: 'Identify which type of credit card you need',
      link: '#'
    },
    {
      text: 'Identify which type of credit card you need',
      link: '#'
    },
    {
      text: 'Identify which type of credit card you need',
      link: '#'
    },
    {
      text: 'Identify which type of credit card you need',
      link: '#'
    },
  ]


  const placeholder_white_board = `
    <p>
      Many, or all, of the products featured on this page are from our
      advertising partners who compensate us when you take certain actions
      on our website or click to take an action on their website. However,
      this does not influence our evaluations. Our opinions are our own.
      Here is a list of
      <a href="#">our partners</a> and
      <a href="#">here's how we make money.</a>
    </p>
  `
  const placeholder_piece_of_content = `
    <h3 class="subheading-2">1. How credit cards work</h3>
    <p class="body-2">
      The idea behind credit cards is simple: When you use a credit card,
      you are borrowing money to pay for something. Later on, you must repay
      what your borrowed. If you take time to pay it back (rather than pay
      it in full when your credit card statement comes), you'll be charged
      interest. The whole credit cards industry rests on this basic premise.
    </p>
  `
</script>

<template>
  <TheHeader />

  <div class="px-6 xl:px-10 py-12 bg-gray-100 flex gap-md mx-auto max-w-screen-2xl">
    <div class="basis-full xl:basis-8/12">
      <!-- Breadcrumb -->
      <Breadcrumb :breadcrumb="placeholder_breadcrumb" />

      <!-- Page title -->
      <TheArticleHeader :header="placeholder_header" />

      <TheWhiteBoard :content="placeholder_white_board" />

      <!-- Table of contents -->
      <TheWrapper title="Table of contents" simple>
        <TableOfContents :contents="placeholder_contents" />
      </TheWrapper>
  
      <!-- Beginner’s guide to credit cards -->
      <TheWrapper title="Beginner’s guide to credit cards" simple>
        <PieceOfContent :content="placeholder_piece_of_content" />
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
          <PieceOfContent :content="placeholder_piece_of_content" />
          <PieceOfContent :content="placeholder_piece_of_content" />
          <PieceOfContent :content="placeholder_piece_of_content" />
        </CTA>
        
      </TheWrapper>

      
      <!-- Find the right credit card for you. -->
       <!-- TODO -->
      <BestDeal>
        <TheButton text="Compare Credit Cards" />
      </BestDeal>

      <!-- Other articles -->
      <TheWrapper title="Other articles" simple>
        <div class="flex flex-col md:flex-row gap-md gap-t">

          <Card v-for="card in placeholder_cards"
                  :card
          />
        </div>
        <Card :card="placeholder_cards[0]" large />

      </TheWrapper>

      <!-- Faq -->
      <TheWrapper title="Frequently asked questions">
        <Faqs :faqs="placeholder_faqs" />
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
