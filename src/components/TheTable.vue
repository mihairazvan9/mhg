<script setup>
  import { ref, markRaw } from 'vue'

  import TextImage from "@/components/Table/TextImage.vue"
  import Text from "@/components/Table/Text.vue"
  import TextCTA from "@/components/Table/TextCTA.vue"
  import TextButton from "@/components/Table/TextButton.vue"

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
    ]
  })

  function handle_open_reward ({event, id}) {
    console.log(event.currentTarget.parentElement.parentElement.parentElement)
    console.log(id)
  }

  function get_last_two_cells (row) {
    return row.slice(-2);
  }


  const newComponent = ref(null)

  function showComponent(event, rowIndex) {
    const trElement = event.currentTarget;
      const tableContainer = trElement.closest(".table-container");

      if (newComponent.value) {
        // Get the position of the tr element
        const rect = trElement.getBoundingClientRect();
        const tableContainerRect = tableContainer.getBoundingClientRect();

        // Calculate the position for the newComponent div
        newComponent.value.style.top = `${
          rect.top - tableContainerRect.top + trElement.offsetHeight
        }px`;
        newComponent.value.style.left = `${
          rect.left - tableContainerRect.left
        }px`;
        newComponent.value.style.width = `${rect.width}px`;
        trElement.style.borderBottom = `solid 100px red`
        // Show the newComponent
        newComponent.value.classList.remove("hidden2");
      }
  }
</script>

<template>
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
            <tr class="md:hover:bg-gray-50 bg-white" @click="showComponent($event, rowIndex)">
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

    <!-- <div class="new-component" ref="newComponent">
      <h2>Olaaa</h2>
    </div> -->

  </div>
</template>

<style>

.new-component {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100px;
    background: red;
  }

  .hidden2 {
    display: none;
  }

</style>