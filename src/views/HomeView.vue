<script setup>
import SiteLogo from "../assets/img/singsaver.svg";
import MenuLine from "../assets/img/menu-line.svg";
import IconProfile from "../assets/img/icon-profile.svg";
import ImgAuthor from "../assets/img/author.png";
import IconTick from "../assets/img/tick.svg";
import IconX from "../assets/img/x.svg";
import IconMail from "../assets/img/mail.svg";
import LogoWhite from "../assets/img/singsaver-white.svg";
import LogoFacebook from "../assets/img/facebook.svg";
import LogoYoutube from "../assets/img/youtube.svg";
import LogoInstagram from "../assets/img/instagram.svg";
import LogoLinkedin from "../assets/img/linkedin.svg";
import ArrowRight from "../assets/img/arrow-right.svg";
import CardLogo from "../assets/img/card-1.png";
import RewardThumb from "../assets/img/reward-thumb.png";
import RewardThumb2 from "../assets/img/reward-thumb-1.png";
import TheWrapper from "../components/TheWrapper.vue"
import OfferCard from "../components/OfferCard.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

const bestOffers = [
  {
    id: 1,
    title: 'City PremierMiles Card',
    rating: 4.9,
    subtitle: 'Best overseas cashback in Singapore',
    location: 'on Citybank’s website',
    image: CardLogo,
    features: [
      {label: 'Annual fee', content: 'S$ 0', additionalDetails: ''},
      {label: 'Rewards rate', content: '1.5% - 2%', additionalDetails: '...', extraInfo: 'Cashback'},
      {label: 'Min. income', content: 'S$ 30,000', additionalDetails: '...'},
      {label: 'Intro offer', content: '50k miles', additionalDetails: '...'},
    ],
    rewards: [
      'Apple iPad 10th Gen WiFi 64GB (worth S$529); or',
      'Dyson Supersonic™ hair dryer (worth S$699); or',
      'Samsonite Straren Spinner 67/24 + 2x Apple AirTag worth S$690.80;',
    ],
    requiresAuthentication: true,
    authenticationLink: '#',
    fullReviewLink: '#',
    cardDetails: [
      '1.2 miles per S$1 spent locally.',
      '2 miles per S$1 spent in foreign currency.',
      'Citi Miles never expire. Can be exchanged for a variety of frequent flyer miles, hotel stays, rewards and cash rebates.',
      'Use Citi PayAll to earn Citi Miles, Citi ThankYou PointsSM or Cash Back when you pay your bills with your Citi Credit Card.',
      'Earn miles on rent, condo management fees, school fees, taxes and bills via Citi PayAll.',
      '2 free airport lounge visits per year to over 1300 Priority Pass lounges worldwide.',
      'Up to S$1 million travel insurance coverage when you charge your travel tickets to this card.',
    ],
    advice: {
      content: '“If annual fees are not for you, there’s always the option of a fee waiver with 8,000 bonus miles- but I think the fee paying option is the better choice here.”',
      link: '#',
    },
  },
];

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
  },
];
</script>

<template>
  <TheHeader/>

  <div class="py-12 bg-gray-100">
    <div class="mx-auto max-w-screen-2xl px-6 xl:px-10">
      <!-- Breadcrumb -->
      <Breadcrumb :breadcrumb="placeholder_breadcrumb" />

      <div>
        <div class="w-full xl:w-9/12 mt-8">
          <h1 class="display-4 font-extrabold">Best Credit Card Bonuses for New Cardholders of August 2024</h1>
          <p class="text-lg font-medium text-gray-600 mt-3">Updated: Jul 24, 2024</p>
          <p class="body-1 my-8">Credit card bonus offers are a quick way to earn hundreds of dollars' worth of rewards by using a new credit card. The largest bonuses typically come from travel credit cards. Bonuses on cash-back credit cards generally hover in the range of $200, but some cards go even higher. Cards are judged on the value of their bonuses, as well as their bonuses relative to their annual fees.Below are good bonus offers currently available on SingSaver.</p>
          <div
              class="bg-white flex flex-col md:flex-row md:items-center gap-md rounded-2xl padding-x padding-y shadow margin-y"
          >
            <div class="flex flex-col md:flex-row lg:items-center gap-md">
              <div class="w-16 h-16 flex items-center justify-center bg-primary-light rounded-full flex-shrink-0">
          <span class="material-symbols-outlined text-4xl text-primary">
            credit_card
            </span>
              </div>
              <div class="flex flex-col gap-xs">
                <h3 class="display-1">Find the right credit card for you.</h3>
                <p class="text-gray-600 body-2 mt-1">
                  Whether you want to pay less interest or earn more rewards, the
                  right card's out there. Just answer a few questions and we'll narrow
                  the search for you.
                </p>
              </div>
            </div>
            <a
                href=""
                class="w-max flex-shrink-0 text-white button-1 bg-primary px-6 button-radius py-2"
            >
              Get started</a
            >
          </div>

          <div class="bg-white rounded-xl shadow-sm">
            <div class="p-6 flex items-center justify-between">
              <div class="flex items-center gap-5 justify-between">
                <img :src="SiteLogo" alt="SingSaver" class="w-32">
                <p class="text-xl font-semibold">Why trust SingSaver</p>
              </div>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.40002 15.0357L6.34619 13.982L12 8.32812L17.6538 13.982L16.6 15.0357L12 10.4357L7.40002 15.0357Z" fill="#212121"/>
                </svg>

              </button>
            </div>
            <div class="p-6">
              <ul class="mb-6">
                <li class="flex items-center mb-3 gap-2">
                  <img :src="IconTick" alt="icon">
                  <p class="text-lg font-medium text-gray-800">250+ credit cards reviewed and rated by our team of experts</p>
                </li>
                <li class="flex items-center mb-3 gap-2">
                  <img :src="IconTick" alt="icon">
                  <p class="text-lg font-medium text-gray-800">80+ years of combined experience covering credit cards and personal finance</p>
                </li>
                <li class="flex items-center mb-3 gap-2">
                  <img :src="IconTick" alt="icon">
                  <p class="text-lg font-medium text-gray-800">100+ categories of best credit card selections (<a href="" class="underline">See our top picks</a>)</p>
                </li>
                <li class="flex items-center mb-3 gap-2">
                  <img :src="IconTick" alt="icon">
                  <p class="text-lg font-medium text-gray-800">Objective comprehensive ratings rubrics (<a href="" class="underline">Methodology</a>)</p>
                </li>
              </ul>
              <p class="text-lg text-gray-800 font-medium">NerdWallet's credit cards content, including ratings and recommendations, is overseen by a team of writers and editors who specialize in credit cards. Their work has appeared in The Associated Press, USA Today, The New York Times, MarketWatch, MSN, NBC's "Today," ABC's "Good Morning America" and many other national, regional and local media outlets. Each writer and editor follows NerdWallet's strict guidelines for editorial integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary-light padding-section-x py-12 mt-6">
      <div class="mx-auto max-w-screen-2xl px-6 xl:px-10">
        <h3 class="display-1">Best Travel Cards of August 2024</h3>
        <div class="overflow-x-scroll">
          <div class="w-[800px] lg:w-full">
            <table class="w-full gap-t card-radius overflow-hidden">
              <thead class="text-left">
              <th class="subheading-2 padding-x padding-y bg-gray-100">Credit Card</th>
              <th class="subheading-2 padding-x padding-y bg-gray-100">Annual Fee</th>
              <th class="subheading-2 padding-x padding-y bg-gray-100">Intro Offer</th>
              <th class="subheading-2 padding-x padding-y bg-gray-100">Rewards rate</th>
              <th class="subheading-2 padding-x padding-y bg-gray-100">Learn more</th>
              </thead>
              <tbody class="">
              <tr class="">
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col gap-sm">
                    <div class="w-28">
                      <img :src="CardLogo" alt="card">
                    </div>
                    <p class="body-2"><span class="text-black">Chase</span> Freedom Wallet</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <p class="body-1">$95</p>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                      <span class="body-1">2x-5x</span>
                      <span class="material-symbols-outlined">
                    info
                  </span>
                    </div>
                    <p class="body-2">Miles</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                      <span class="body-1">75,000</span>
                      <span class="material-symbols-outlined">
                    info
                  </span>
                    </div>
                    <p class="body-2">Miles</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col gap-xs">
                    <a href="#" class="flex justify-center items-center button-1 padding-x-sm padding-y-xs bg-cta gap-xs text-white button-radius"> Apply Now <img src="/src/assets/img/arrow-right.svg" alt="arrow"></a>
                    <p class="body-2 text-center">on Chase’s website</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col gap-sm">
                    <div class="w-28">
                      <img :src="CardLogo" alt="card">
                    </div>
                    <p class="body-2"><span class="text-black">Chase</span> Freedom Wallet</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <p class="body-1">$95</p>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                      <span class="body-1">2x-5x</span>
                      <span class="material-symbols-outlined">
                    info
                  </span>
                    </div>
                    <p class="body-2">Miles</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                      <span class="body-1">75,000</span>
                      <span class="material-symbols-outlined">
                    info
                  </span>
                    </div>
                    <p class="body-2">Miles</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col gap-xs">
                    <a href="#" class="flex justify-center items-center button-1 padding-x-sm padding-y-xs bg-cta gap-xs text-white button-radius"> Apply Now <img src="/src/assets/img/arrow-right.svg" alt="arrow"></a>
                    <p class="body-2 text-center">on Chase’s website</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col gap-sm">
                    <div class="w-28">
                      <img :src="CardLogo" alt="card">
                    </div>
                    <p class="body-2"><span class="text-black">Chase</span> Freedom Wallet</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <p class="body-1">$95</p>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                      <span class="body-1">2x-5x</span>
                      <span class="material-symbols-outlined">
                    info
                  </span>
                    </div>
                    <p class="body-2">Miles</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2">
                      <span class="body-1">75,000</span>
                      <span class="material-symbols-outlined">
                    info
                  </span>
                    </div>
                    <p class="body-2">Miles</p>
                  </div>
                </td>
                <td class="bg-white padding-x padding-y">
                  <div class="flex flex-col gap-xs">
                    <a href="#" class="flex justify-center items-center button-1 padding-x-sm padding-y-xs bg-cta gap-xs text-white button-radius"> Apply Now <img src="/src/assets/img/arrow-right.svg" alt="arrow"></a>
                    <p class="body-2 text-center">on Chase’s website</p>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-screen-2xl px-6 xl:px-10">
      <TheWrapper simple title="Best Offers of 2024" class="section-y-lg">
        <OfferCard v-for="offer in bestOffers" :key="offer.id" :value="offer" class="pt-4"/>
      </TheWrapper>

      <div class="bg-gray-100 py-12 pt-2">
        <div>
          <h3 class="display-1 mb-6">Beginner’s guide to credit cards</h3>
          <div class="mb-6">
            <h4 class="subheading-2 mb-2">How credit cards work</h4>
            <p class="body-2">The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you'll be charged interest. The whole credit cards industry rests on this basic premise.</p>
          </div>
          <div class="mb-6">
            <h4 class="subheading-2 mb-2">How credit cards work</h4>
            <p class="body-2">The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you'll be charged interest. The whole credit cards industry rests on this basic premise.</p>
          </div>
          <div class="mb-6">
            <h4 class="subheading-2 mb-2">How credit cards work</h4>
            <p class="body-2">The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you'll be charged interest. The whole credit cards industry rests on this basic premise.</p>
          </div>
        </div>

        <div class="mt-8 pb-6 bg-white shadow rounded-2xl">
          <div class="padding-x py-4 border-b border-gray-300">
            <h3 class="subheading-1">Frequently asked questions</h3>
          </div>
          <div class="">
            <div class="flex items-center justify-between padding-x py-4">
              <h4 class="subheading-2">What's the best credit card?</h4>
              <button>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 7.03575L0.346191 5.98195L6.00002 0.328125L11.6538 5.98195L10.6 7.03575L6.00002 2.43575L1.40002 7.03575Z" fill="#212121"/>
                </svg>
              </button>

            </div>
            <div class="padding-x pb-4">
              <p class="body-2">The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for something. Later on, you must repay what your borrowed. If you take time to pay it back (rather than pay it in full when your credit card statement comes), you'll be charged interest. The whole credit cards industry rests on this basic premise.</p>
            </div>
          </div>
          <div class="">
            <div class="flex items-center justify-between padding-x py-4">
              <h4 class="subheading-2">What's the easiest credit card to get?</h4>
              <button>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 7.03575L0.346191 5.98195L6.00002 0.328125L11.6538 5.98195L10.6 7.03575L6.00002 2.43575L1.40002 7.03575Z" fill="#212121"/>
                </svg>
              </button>

            </div>
            <div class="padding-x pb-4">
              <p class="body-2"><a href="#" class="underline">Secured credit cards</a> require you to provide a cash security deposit to open an account. Because that deposit protects the card company from risk, secured cards are much easier to qualify for than other cards. You're not guaranteed approval for a secured card, but the bar is much lower than for regular cards. Store credit cards are also generally easier to qualify for than bank cards.</p>
            </div>
          </div>
          <div class="">
            <div class="flex items-center justify-between padding-x py-4">
              <h4 class="subheading-2">What's the best credit card company?</h4>
              <button>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 7.03575L0.346191 5.98195L6.00002 0.328125L11.6538 5.98195L10.6 7.03575L6.00002 2.43575L1.40002 7.03575Z" fill="#212121"/>
                </svg>
              </button>

            </div>
            <div class="padding-x pb-4">
              <p class="body-2">Just as there is no single best card for everyone, consumers have widely different opinions about the best (and worst) credit card issuers. One person could get the runaround from customer service rep and rate a bank zero stars as a result, while another has nothing but positive experiences and gives it five stars across the board. Still, some trends emerge in customer satisfaction surveys.</p>
              <p class="body-2 mt-4">J.D. Power conducts an annual study of satisfaction among major national and regional credit card issuers. It regularly rates <a href="#" class="underline">Discover</a> and <a href="#" class="underline">American Express</a> at the top among mass-market issuers. In the most recent study, USAA and Navy Federal Credit Union had the highest ratings of all, but keep in mind that only people affiliated with the military are eligible for USAA or Navy Federal products.</p>
            </div>
          </div>
        </div>

        <div class="mt-8 pb-6 bg-white shadow rounded-2xl">
          <div class="padding-section-x py-4 border-b border-gray-300">
            <h3 class="subheading-1">About the author</h3>
          </div>
          <div class="">
            <div class="flex items-center gap-3 padding-section-x py-4">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img :src="ImgAuthor" alt="author">
              </div>
              <h4 class="subheading-2">Paul Todd</h4>
            </div>
            <div class="padding-section-x pb-4">
              <p class="body-2">Paul has been the lead editor for NerdWallet's credit cards team since 2015 and for the travel rewards team since 2023. Previously, he worked at USA Today and the Des Moines Register, then built a freelance writing and editing business focused on personal finance topics. He has a bachelor's degree in journalism and an MBA. <a href="#" class="text-primary underline">Read more</a></p>
              <div class="flex items-center gap-4 mt-4">
                <div class="flex items-center gap-2">
                  <img :src="IconX" alt="icon">
                  <a href="#" class="body-2 text-primary underline">Twitter</a>
                </div>
                <div class="flex items-center gap-2">
                  <img :src="IconMail" alt="icon">
                  <a href="#" class="body-2 text-primary underline">Mail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheFooter/>
</template>