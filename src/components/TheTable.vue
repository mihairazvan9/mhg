<script setup>
  import { ref, markRaw, onMounted } from 'vue'

  import TextImage from "@/components/Table/TextImage.vue"
  import Text from "@/components/Table/Text.vue"
  import TextCTA from "@/components/Table/TextCTA.vue"
  import TextButton from "@/components/Table/TextButton.vue"
  import TheTableRewards from "@/components/TheTableRewards.vue"

  import CardLogo from "@/assets/img/card-1.png";

  const table = ref({
    header: ['Credit Card', 'Annual Fee', 'Minimum Annual Income', 'Airport Lounge Access', 'Credit Card Rewards', 'Offers & Rewards', 'Apply on the Provider’s Website' ],
    rows: [
      [
        {
          component: markRaw(TextImage), 
          data: {
            text: 'Chase Freedom Wallet',
            src: CardLogo,
            alt: 'Card image'
          }      
        },
        
        {
          component: markRaw(Text),
          data: { 
            text: 'S$ 0'
          }       
        },

        {
          component: markRaw(Text),
          data: { 
            text: 'S$ 30,000',
            tooltip: 'Infos',
          }       
        },

        {
          component: markRaw(Text),
          data: { 
            text: '2',
            secondary_text: 'visits per year*',
            tooltip: 'Infos',
          }       
        },

        {
          component: markRaw(Text),
          data: { 
            text: '2',
            secondary_text: 'miles per dollar',
          }       
        },

        {
          component: markRaw(TextCTA),
          data: { 
            text: 'Intro Offer: 50 miles',
            cta: {
              text: 'Eligible rewards (8)',
              id: '1000',
            }
          }       
        },

        {
          component: markRaw(TextButton),
          data: { 
            text: 'On Chase’s Website',
            button: {
              link: '#',
              titlle: ''
            }
          }       
        },

      ],
      [
        {
          component: markRaw(TextImage), 
          data: {
            text: 'Chase Freedom Wallet',
            src: CardLogo,
            alt: 'Card image'
          }      
        },
        
        {
          component: markRaw(Text),
          data: { 
            text: 'S$ 0'
          }       
        },

        {
          component: markRaw(Text),
          data: { 
            text: 'S$ 30,000',
            tooltip: 'Infos',
          }       
        },

        {
          component: markRaw(Text),
          data: { 
            text: '2',
            secondary_text: 'visits per year*',
            tooltip: 'Infos',
          }       
        },

        {
          component: markRaw(Text),
          data: { 
            text: '2',
            secondary_text: 'miles per dollar',
          }       
        },

        {
          component: markRaw(TextCTA),
          data: { 
            text: 'Intro Offer: 50 miles',
            cta: {
              text: 'Eligible rewards (8)',
              id: '1000',
            }
          }       
        },

        {
          component: markRaw(TextButton),
          data: { 
            text: 'On Chase’s Website',
            button: {
              link: '#',
              titlle: ''
            }
          }       
        },

      ],
      // [
      //   {
      //     component: markRaw(TextImage), 
      //     data: {
      //       text: 'Chase Freedom Wallet',
      //       src: CardLogo,
      //       alt: 'Card image'
      //     }      
      //   },
        
      //   {
      //     component: markRaw(Text),
      //     data: { 
      //       text: 'S$ 0'
      //     }       
      //   },

      //   {
      //     component: markRaw(Text),
      //     data: { 
      //       text: 'S$ 30,000',
      //       tooltip: 'Infos',
      //     }       
      //   },

      //   {
      //     component: markRaw(Text),
      //     data: { 
      //       text: '2',
      //       secondary_text: 'visits per year*',
      //       tooltip: 'Infos',
      //     }       
      //   },

      //   {
      //     component: markRaw(Text),
      //     data: { 
      //       text: '2',
      //       secondary_text: 'miles per dollar',
      //     }       
      //   },

      //   {
      //     component: markRaw(TextCTA),
      //     data: { 
      //       text: 'Intro Offer: 50 miles',
      //       cta: {
      //         text: 'Eligible rewards (8)',
      //         id: '1000',
      //       }
      //     }       
      //   },

      //   {
      //     component: markRaw(TextButton),
      //     data: { 
      //       text: 'On Chase’s Website',
      //       button: {
      //         link: '#',
      //         titlle: ''
      //       }
      //     }       
      //   },

      // ],
    ]
  })

  let last_tr = null
  function handle_open_reward ({event, id}) {
    if (last_tr) {
      last_tr.style.borderBottom = 'unset'
      last_tr = null
    }

    const table = event.currentTarget.closest('.table-wrapper')
    const tr = event.currentTarget.closest('tr')
    const rewards = document.getElementById('table-rewards')
    const bb_table = table.getBoundingClientRect()
    const bb_tr = tr.getBoundingClientRect()
    const bb_rewards = rewards.getBoundingClientRect()

    // Calculate top position for rewards
    rewards.style.top = bb_tr.top - bb_table.top + tr.offsetHeight + 'px';

    tr.style.borderBottom = `solid #fff ${rewards.offsetHeight}px`
    
    last_tr = tr
  }

  function get_last_two_cells (row) {
    return row.slice(-2);
  }

  onMounted(() => {

    const table = [...document.getElementsByClassName('table-container')]
    const tr = [...document.getElementsByTagName('tr')]


    setTimeout(() =>{
      console.log(window.innerWidth)
      if (window.innerWidth > 768) {
        handle_open_reward({event: {currentTarget: tr[0]}, id: 0})
      } else {
        handle_open_reward({event: {currentTarget: tr[1]}, id: 0})
      }

    },1000)
  })

</script>

<template>
  <div class="relative h-auto table-wrapper overflow-hidden">
    <div class="overflow-x-auto relative h-auto">
      <div class="w-[800px] lg:w-full table-container">
        <table class="w-full gap-t card-radius overflow-hidden">
          <thead class="text-left">
            <th class="subheading-2 padding-x padding-y bg-gray-100"
                v-for="(tab, index) in table.header"
                :class="{'hidden md:table-cell': index >= table.header.length - 2}"
            >
              {{ tab }}
            </th>
          </thead>
          <tbody class="">
            <template v-for="(row, rowIndex) in table.rows" :key="rowIndex">
              <!-- Main row with table data -->
              <tr class="md:hover:bg-gray-50 bg-white">
                <td v-for="(cell, cellIndex) in row"
                    class="padding-x padding-y border-t border-gray-300"
                    :class="{'hidden md:table-cell': cellIndex >= row.length - 2}"
                >
                  <component :is="cell.component" 
                            :data="cell.data"
                            @handle-open-rewards="handle_open_reward"
                  >
                  </component>
                </td>
              </tr>
              <!-- Row for mobile version with buttons -->
              <tr class="bg-white cell md:hidden">
                <td colspan="100%" class="padding-x padding-y ">
                  <div class="flex gap-2 items-center">
                    <div v-for="cell in get_last_two_cells(row)">
                      <component :is="cell.component" 
                                :data="cell.data"
                                @handle-open-rewards="handle_open_reward"
                      >
                      </component>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <TheTableRewards id="table-rewards" />
  </div>
</template>

<style>

</style>