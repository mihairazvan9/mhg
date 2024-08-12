<script setup>
  import { ref, markRaw, onMounted } from 'vue'
  import { icons } from "@/assets/icons"

  import TheButton from "@/components/TheButton.vue"
  import Tooltip from '@/components/Tooltip.vue'


  const props = defineProps({
    table: {
      type: Object,
      required: true
    }
  })


  const active_reward = ref(0)
  const scrollable = ref(null)

  let is_dragging = false
  let startX
  let scroll_left
  
  onMounted(() => {

    scrollable.value.addEventListener('mousedown', (e) => {
      is_dragging = true
      startX = e.pageX - scrollable.value.offsetLeft
      scroll_left = scrollable.value.scrollLeft
      scrollable.value.style.cursor = 'grabbing'
    })

    scrollable.value.addEventListener('mouseleave', () => {
      is_dragging = false
      scrollable.value.style.cursor = 'grab'
    })

    scrollable.value.addEventListener('mouseup', () => {
      is_dragging = false
      scrollable.value.style.cursor = 'grab'
    })

    scrollable.value.addEventListener('mousemove', (e) => {
      if (!is_dragging) return
      e.preventDefault()
      const x = e.pageX - scrollable.value.offsetLeft
      const walk = (x - startX) * 1 // Adjust the multiplier
      scrollable.value.scrollLeft = scroll_left - walk
    })
  })

  function handle_open_rewards (row_no) {
    if (active_reward.value === row_no)  {
      active_reward.value = -1
    } else {
      active_reward.value = row_no
    }
  }

  function handle_close_rewards () {
    active_reward.value = -1
  }


// We can keep the header and cell components only in FE side, 
// on the parent page, to be able to customize other tables easily
const header = ['Credit Card', 'Annual Fee', 'Minimum Annual Income', 'Airport Lounge Access', 'Credit Card Rewards', 'Offers & Rewards', 'Apply on the Provider’s Website' ]

</script>

<template>
  <div class="gap-t card-radius overflow-hidden relative select-none shadow">
    <div ref="scrollable" class="table-container">
      <table class="min-w-[1024px] w-full bg-white">
        <thead class="text-left contents">
          <th 
            v-for="(tab, index) in header"
            class="flex items-center subheading-2 padding-x padding-y bg-gray-100"
            :class="{'hidden md:flex': index >= header.length - 2}"
          >
            {{ tab }}
          </th>
        </thead>

        <tbody class="contents">
          <template v-for="(data, rowIndex) in props.table" :key="rowIndex">
            <tr class="md:hover:bg-gray-50 contents table-line">
              
              <!-- Row 1 -->
              <td class="flex items-center bg-white padding-x padding-y border-t border-gray-300">
                <div class="flex flex-col gap-sm">
                  <div class="w-28">
                    <img :src="data.rows[0].src" :alt="data.rows[0].alt || 'Singsave'">
                  </div>
                  <p class="body-2 !text-gray-900">
                    {{ data.rows[0].title }}
                  </p>
                </div>
              </td>

              <!-- Row 2 -->
              <td class="flex items-center bg-white padding-x padding-y border-t border-gray-300" >
                <div class="">
                  <div class="flex col items-center gap-2">
                    <p class="body-1">{{ data.rows[1].title }}</p>
                  </div>
                </div>
              </td>
              
              <!-- Row 3 -->
              <td class="flex items-center bg-white padding-x padding-y border-t border-gray-300">
                <div class="">
                  <div class="flex col items-center gap-2">
                    <p class="body-1">{{ data.rows[2].title }}</p>
                    <template>
                      <Tooltip :data="data.rows[2].tooltip" />
                    </template>
                  </div>
                </div>
              </td>

              <!-- Row 4 -->
              <td class="flex items-center bg-white padding-x padding-y border-t border-gray-300" >
                <div class="">
                  <div class="flex col items-center gap-2">
                    <p class="body-1">{{ data.rows[3].title }}</p>

                    <template>
                      <Tooltip :data="data.rows[3].tooltip" />
                    </template>
                  </div>

                  <span class="body-2">{{ data.rows[3].subtitle }}</span>
                </div>
              </td>

              <!-- Row 5 -->
              <td class="flex items-center bg-white padding-x padding-y border-t border-gray-300">
                <div class="">
                  <div class="flex col items-center gap-2">
                    <p class="body-1">{{ data.rows[4].title }} </p>
                  </div>
                  <span class="body-2">{{ data.rows[4].subtitle }}</span>
                </div>
              </td>

              <!-- Row 6 -->
              <td class="hidden md:flex items-center bg-white padding-x padding-y border-t border-gray-300">
                <div>
                  <p class="body-2 text-nowrap hidden md:inline-block">
                    {{ data.rows[5].title }}
                  </p>

                  <p @click="handle_open_rewards(rowIndex)"
                    class="hidden md:inline-block !text-primary !font-semibold underline text-nowrap cursor-pointer">
                    Eligible rewards {{ `(${ data.rows[5].no_of_rewards })` }}
                  </p>

                  <div class="inline-block md:hidden body-2 ">
                    <TheButton 
                      @handle-click="handle_open_rewards(rowIndex)" 
                      :title="`View Rewards (${ data.rows[5].no_of_rewards })`"
                      background="bg-white"
                      outline="border-primary"
                      color="text-primary"
                    />
                  </div>
                </div>
              </td>
              <!-- Row 7 -->
              <td class="hidden md:flex items-center bg-white padding-x padding-y border-t border-gray-300">
                <div class="flex flex-col gap-2">
                  <TheButton 
                    background="bg-cta"
                    title="Apply Now"
                    :icon="icons.arrow_right"
                    :link="data.rows[6].link"
                  />
                  <p class="body-2 text-nowrap hidden md:inline-block">
                    {{ data.rows[6].title }}
                  </p>
                </div>
              </td>

              <!-- Place last to rows for mobile version -->
              <td colspan="7" class="flex md:hidden padding-x padding-y bg-white">
                <!-- Row 6 -->
                <div class="flex flex-row-reverse gap-2">
                  <div>
                  <p class="body-2 text-nowrap hidden md:inline-block">
                    {{ data.rows[5].title }}
                  </p>

                  <p @click="handle_open_rewards(rowIndex)"
                    class="hidden md:inline-block !text-primary !font-semibold underline text-nowrap cursor-pointer">
                    Eligible rewards {{ `(${ data.rows[5].no_of_rewards })` }}
                  </p>

                  <div class="inline-block md:hidden body-2 ">
                    <TheButton 
                      @handle-click="handle_open_rewards(rowIndex)" 
                      :title="`View Rewards (${ data.rows[5].no_of_rewards })`"
                      background="bg-white"
                      outline="border-primary"
                      color="text-primary"
                    />
                  </div>
                </div>
                  <!-- Row 7 -->
                  <div class="flex flex-col gap-2">
                  <TheButton 
                    background="bg-cta"
                    title="Apply Now"
                    :icon="icons.arrow_right"
                    :link="data.rows[6].link"
                  />
                  <p class="body-2 text-nowrap hidden md:inline-block">
                    {{ data.rows[6].title }}
                  </p>
                </div>
                </div>
              </td>
            </tr>

            <tr class="contents" v-show="active_reward === rowIndex">
              <td colspan="7"  class="flex relative bg-primary-light padding-x padding-y">

                <div class="flex flex-col w-full">
                  <div 
                    class="flex justify-between cursor-pointer"
                    @click="handle_close_rewards(rowIndex)"
                  >
                    <p class="subheading-2 text-primary">
                      Eligible rewards ({{ data.rewards.list.length }})
                    </p>
                    <i v-html="icons.close"></i>
                  </div>
                  <ul class="list-disc padding-x padding-y ">
                    <template v-for="reward in data.rewards.list">
                      <li class="body-2">{{ reward }}</li>
                    </template>
                  </ul>

                  <a 
                    v-if="data.rewards.requiresAuthentication"
                    :href="data.rewards.authenticationLink" 
                    class="uppercase bullet-2 text-primary underline md:text-lg"
                  >
                    Sign-in required
                  </a>
                </div>
     
              </td>
            </tr>

          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .table-container {
    overflow-x: auto;
    width: 100%;
    position: relative; 
  }

  .table-container::-webkit-scrollbar {
    display: none; 
  }

  .table-container {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }

  .table-container table {
    display: grid;
    grid-template-columns: repeat(5, minmax(auto, 1fr));
  }

  .table-container [colspan="7"] {
    grid-column: 1 / -1;
  }

  @media (min-width: 768px) {
    .table-container table {
      grid-template-columns: repeat(7, minmax(auto, 1fr));
    }
  }


</style>
