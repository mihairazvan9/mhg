<template>
  <div
    class="w-80 xl:hidden block fixed left-0 top-0 sidebar h-screen bg-white overflow-auto shadow-lg py-4"
    v-show="sideBar"
  >
    <div
      class="flex pb-5 border-b border-gray-300 items-center justify-between px-4"
    >
      <img
        src="@/assets/logo.webp"
        alt=""
        class="w-[104px] object-cover h-[27px]"
      />
      <svg
        @click="close"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 cursor-pointer"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
      >
        <rect width="21" height="21" fill="none" />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m15.5 15.5l-10-10zm0-10l-10 10"
        />
      </svg>
    </div>
    <div v-for="section in sections" :key="section.title">
      <SidebarSection :title="section.title" :groups="section.groups" />
    </div>
  </div>
</template>

<script setup>
import SidebarSection from "./SidebarSection.vue";
import { ref, defineExpose, defineProps } from "vue";
import deal1 from "@/assets/deal.png";
import deal2 from "@/assets/deal2.webp";
const sideBar = ref(false);

const close = () => {
  sideBar.value = false;
};

const open = () => {
  sideBar.value = !sideBar.value;
};
const sections = [
  {
    title: "Credit Cards",
    href: "#",
    groups: [
      {
        title: "SingSaver Campaign",
        href: "#",
        links: [
          { text: "Best Deal Guarantee", href: "#" },
          {
            text: " ",
            href: "#",
            image: deal1,
          },
          { text: " ", href: "#", image: deal2 },
        ],
      },
      {
        title: "Cards by Category",
        href: "#",
        links: [
          { text: "Best Credit Cards Promotions", href: "#" },
          { text: "All Credit Cards", href: "#" },
          { text: "Cashback Credit Cards", href: "#" },
          { text: "Airmiles Credit Cards", href: "#" },
          { text: "Rewards Credit Cards", href: "#" },
          { text: "0% Interest Installment Credit Cards", href: "#" },
          { text: "Best UOB Credit Cards With Annual Fee Waivers", href: "#" },
          {
            text: "Best UOB Miles Credit Cards in Singapore",
            href: "#",
          },
          {
            text: "Best Credit Cards for SPC Discounts in Singapore",
            href: "#",
          },
          {
            text: "Best Shell Credit Card Discounts in Singapore",
            href: "#",
          },
          {
            text: "Best Esso Credit Card Discounts in Singapore 2024",
            href: "#",
          },
        ],
      },
      {
        title: "Card Guides by Spending",
        href: "#",
        links: [
          { text: "Dining Cards", href: "#" },
          { text: "Grocery Cards", href: "#" },
          { text: "Shopping Cards", href: "#" },
          { text: "Overseas Cards", href: "#" },
          { text: "Business Credit Cards", href: "#" },
        ],
      },
      {
        title: "Cards by Bank",
        href: "#",
        links: [
          { text: "Citibank Credit Cards", href: "#" },
          { text: "OCBC Credit Cards", href: "#" },
          { text: "CIMB Credit Cards", href: "#" },
          { text: "Standard Chartered Credit Cards", href: "#" },
          { text: "HSBC Credit Cards", href: "#" },
          { text: "UOB Credit Cards", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Loans",
    href: "#",
    groups: [
      {
        title: "Best Loan Rates",
        href: "#",
        links: [
          { text: "All Personal Loans", href: "#" },
          { text: "Debt Consolidation Plans", href: "#" },
          { text: "Credit Line", href: "#" },
          { text: "Balance Transfer", href: "#" },
          { text: "Education Loan", href: "#" },
          { text: "Renovation Loan", href: "#" },
          { text: "Car Loan", href: "#" },
          { text: "Home Loan for Private Property", href: "#" },
          { text: "Home Loan for HDB Flat", href: "#" },
          {
            text: "Best Personal Loan for Low Income Earners",
            href: "#",
          },
          {
            text: "Best Instant Approval Loans for Fast Cash in Singapore 2024",
            href: "#",
          },
        ],
      },
      {
        title: "Guides & Tips for Unsecured Loans",
        href: "#",
        links: [
          { text: "Find the best personal loan", href: "#" },
          {
            text: "What are the different types of personal loans?",
            href: "#",
          },
          {
            text: "A first-timer? 5 Things to look out for",
            href: "#",
          },
          {
            text: "How many personal loans can you take at once",
            href: "#",
          },
          { text: "Best Wedding Loans in Singapore", href: "#" },
        ],
      },
      {
        title: "Guides & Tips for Secured Loans",
        href: "#",
        links: [
          {
            text: "How to Buy a House in Singapore: A Complete Guide (2024)",
            href: "#",
          },
          {
            text: "How much can You Borrow for your Home Loan?",
            href: "#",
          },
          {
            text: "Home Loans in Singapore (2024): Best Mortgage Rates to Consider",
            href: "#",
          },
          {
            text: "Fixed vs Floating Home Loan Rates: Which One is Suitable For You?",
            href: "#",
          },
        ],
      },
      {
        title: "Loans by Bank",
        href: "#",
        links: [
          { text: "HSBC Personal Loan", href: "#" },
          {
            text: "Standard Chartered Personal Loan",
            href: "#",
          },
          { text: "UOB Personal Loan", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Investments",
    href: "#",
    groups: [
      {
        title: "SingSaver Campaign",
        href: "#",
        links: [
          { image: "deal1", href: "#" },
          { image: "deal2", href: "#" },
        ],
      },
      {
        title: "Investments by Category",
        href: "#",
        links: [
          { text: "All Online Brokerage Accounts", href: "#" },
          {
            text: "Singapore Stocks Investment Accounts",
            href: "#",
          },
          { text: "US Stocks Investment Accounts", href: "#" },
          { text: "CFD Investment Accounts", href: "#" },
          { text: "Forex Investment Accounts", href: "#" },
          { text: "RoboAdvisors", href: "#" },
        ],
      },
      {
        title: "Guides to Investments",
        href: "#",
        links: [
          {
            text: "How To Start Investing In Singapore: A Beginner's Guide (2024)",
            href: "#",
          },
          {
            text: "7 Most Popular Types Of Investment In Singapore",
            href: "#",
          },
          {
            text: "Investing $100,000: How To Build A Stock Portfolio",
            href: "#",
          },
          {
            text: "5 Ways To Invest Money That Are Better Than Buying Toto",
            href: "#",
          },
          {
            text: "What To Do During A Recession: Investment Portfolio Strategy",
            href: "#",
          },
          {
            text: "How To Start Investing in My Teens, Twenties, Thirties, Forties",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Insurance",
    href: "#",
    groups: [
      {
        title: "Compare Insurance",
        href: "#",
        links: [
          { text: "Travel Insurance🔥", href: "#" },
          { text: "Car Insurance 🌟", href: "#" },
          { text: "Maid Insurance", href: "#" },
          { text: "Home Insurance", href: "#" },
          { text: "Pet Insurance", href: "#" },
        ],
      },
      {
        title: "Trending Campaigns",
        href: "#",
        links: [
          { text: "Best Deal Guarantee🎀", href: "#" },
          {
            text: "Travel Insurance Promotions",
            href: "#",
          },
        ],
      },
      {
        title: "Recommended General Insurance Guides",
        href: "#",
        links: [
          {
            text: "TI for Pregnant Travellers",
            href: "#",
          },
          { text: "TI with COVID-19 Coverage", href: "#" },
          { text: "TI for Skiing", href: "#" },
          {
            text: "TI for Schengen Travellers",
            href: "#",
          },
          {
            text: "Single Trip vs Annual Multi Trip",
            href: "#",
          },
          {
            text: "How Much Are You Getting Per S$1 Premium Paid?",
            href: "#",
          },
          {
            text: "Best Car Insurance Plans",
            href: "#",
          },
          {
            text: "Maid Insurance - A Complete Guide",
            href: "#",
          },
        ],
      },
      {
        title: "Best Insurance Policies by Provider",
        href: "#",
        links: [
          { text: "MSIG Travel Insurance", href: "#" },
          { text: "Allianz Travel Insurance", href: "#" },
          { text: "FWD Travel Insurance", href: "#" },
          { text: "Starr Travel Insurance", href: "#" },
          { text: "Tiq Travel Insurance", href: "#" },
          { text: "Seedly Travel Insurance", href: "#" },
          { text: "AIG Travel Insurance", href: "#" },
          {
            text: "Allied World Travel Insurance",
            href: "#",
          },
          {
            text: "Direct Asia Travel Insurance",
            href: "#",
          },
          {
            text: "Great Eastern Travel Insurance",
            href: "#",
          },
          {
            text: "Singlife Travel Insurance",
            href: "#",
          },
          {
            text: "Sompo Travel Insurance",
            href: "#",
          },
          {
            text: "Tokio Marine Travel Insurance",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Life & Health",
    href: "#",
    groups: [
      {
        title: "Compare Life & Health Plans",
        href: "#",
        links: [
          { text: "Integrated Shield Plans🔥", href: "#" },
          { text: "Term Life Insurance", href: "#" },
          { text: "Whole Life Insurance", href: "#" },
          { text: "Critical Illness Insurance", href: "#" },
          { text: "Cancer Insurance", href: "#" },
          { text: "Disability Income Insurance", href: "#" },
        ],
      },
      {
        title: "General Guides to Health Insurance",
        href: "#",
        links: [
          { text: "Which ISP is Best?", href: "#" },
          { text: "How to Choose the Best ISP?", href: "#" },
          { text: "How to Pick the Best CI Plan?", href: "#" },
        ],
      },
      {
        title: "Health Guides by Life Stage",
        href: "#",
        links: [
          {
            text: "Young Adults - Aged 26-30",
            href: "#",
          },
          { text: "Married with Young Kids", href: "#" },
          { text: "Singles - Aged 35-40", href: "#" },
          {
            text: "Buying CI Insurance: What You Need to Know",
            href: "#",
          },
          {
            text: "Choosing the Best ISP Rider",
            href: "#",
          },
          {
            text: "Integrated Shield Plan for Pregnancy",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Bank Account",
    href: "#",
    groups: [
      {
        title: "Bank Account by Category",
        href: "#",
        links: [
          { text: "Savings Accounts", href: "#" },
          { text: "Priority Banking", href: "#" },
          { text: "Debit Cards", href: "#" },
        ],
      },
      {
        title: "Guides to Bank Account",
        href: "#",
        links: [
          {
            text: "Best Savings Accounts in Singapore to Park Your Money (2024)",
            href: "#",
          },
          {
            text: "The Differences Between Bank Account Types You Need to Know",
            href: "#",
          },
          {
            text: "A Full Guide To Priority Banking In Singapore (2024)",
            href: "#",
          },
          {
            text: "Priority Banking In Singapore: How Does It Help To Grow Your Wealth?",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Telco",
    href: "#",
    groups: [
      {
        title: "Telco by Category",
        href: "#",
        links: [
          { text: "SIM Only Plans", href: "#" },
          { text: "Broadband", href: "#" },
        ],
      },
      {
        title: "More Telco Content",
        href: "#",
        links: [
          {
            text: "Guides for finding the best SIM-Only Mobile Plans",
            href: "#",
          },
          { text: "Cheapest Prepaid SIM Card Plans", href: "#" },
          { text: "Best Home Fibre Broadband Plan", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Blog",
    href: "#",
    groups: [
      {
        title: "Lifestyle | Tips | Saving",
        href: "#",
        links: [
          {
            text: "Top Credit Card Promotions And Deals On SingSaver",
            href: "#",
          },
          { text: "Latest GrabFood Promo Codes Singapore", href: "#" },
          {
            text: "14 Best Fixed Deposit Rates in Singapore to Lock in Your Savings",
            href: "#",
          },
          {
            text: "Best Savings Accounts in Singapore to Park Your Money",
            href: "#",
          },
          {
            text: "All You Need To Know About Income Tax In Singapore",
            href: "#",
          },
          { text: "How To Calculate Your Net Worth In Singapore?", href: "#" },
        ],
      },
      {
        title: "Manage Debt",
        href: "#",
        links: [
          { text: "5 Ways to Get the Highest Credit Score", href: "#" },
          {
            text: "What Happens If You Skip Credit Card Bills, Loan & BNPL Payments",
            href: "#",
          },
          {
            text: "Should You Always Pay Your HDB Downpayment With Cash Or CPF?",
            href: "#",
          },
        ],
      },
      {
        title: "Protect Yourself",
        href: "#",
        links: [
          {
            text: "Best Short & Long Term Endowment Plans in Singapore (2023)",
            href: "#",
          },
          {
            text: "Travel Insurance Coverage: How Much Are You Getting Per S$1 Premium Paid?",
            href: "#",
          },
          {
            text: "10 Best Car Insurance Plans in Singapore (2024)",
            href: "#",
          },
        ],
      },
      {
        title: "Grow Wealth | Property",
        href: "#",
        links: [
          {
            text: "A Complete Guide to Treasury Bills (T-Bills) in Singapore",
            href: "#",
          },
          {
            text: "Investing $100,000: How To Build A Stock Portfolio",
            href: "#",
          },
          {
            text: "Complete Guide To Electronic Road Pricing Operating Hours",
            href: "#",
          },
          {
            text: "The Ultimate Guide To Cheapest Parking In Orchard and Dhoby Ghaut (All-Day Free Parking Included)",
            href: "#",
          },
          {
            text: "How To Buy A House In Singapore: A Complete Guide",
            href: "#",
          },
          { text: "HDB BTO Launches", href: "#" },
          { text: "APEX Gold Futures", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Support",
    href: "#",
    groups: [
      {
        title: "Help Center",
        href: "#",
        links: [{}, {}],
      },
      {
        title: "Giveaway Winners",
        href: "#",
        links: [],
      },
    ],
  },
];

defineExpose({
  open,
  close,
});
</script>

<style>
/* Entire scrollbar */
.sidebar::-webkit-scrollbar {
  width: 8px;
}

/* Scrollbar track */
.sidebar::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 10px;
}

/* Scrollbar thumb */
.sidebar::-webkit-scrollbar-thumb {
  background-color: #0081f1;
  border-radius: 10px;
}

/* Thumb when hovered */
.sidebar::-webkit-scrollbar-thumb:hover {
  background-color: #1c7dd1;
}

/* Thumb when active (clicked) */
.sidebar::-webkit-scrollbar-thumb:active {
  background-color: #3a83c4;
}
</style>
