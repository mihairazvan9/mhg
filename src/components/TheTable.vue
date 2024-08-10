<script setup>
  import { ref, onMounted } from 'vue'

  import Rewards from "@/components/Table/Rewards.vue"

  const props = defineProps({
    table: {
      type: Object,
      required: true
    }
  })

  const active_reward = ref(0)

  let is_dragging = false
  let startX
  let scroll_left
  
  onMounted(() => {
    const scrollable_div = document.getElementById('table-container')

    scrollable_div.addEventListener('mousedown', (e) => {
      is_dragging = true
      startX = e.pageX - scrollable_div.offsetLeft
      scroll_left = scrollable_div.scrollLeft
      scrollable_div.style.cursor = 'grabbing'
    })

    scrollable_div.addEventListener('mouseleave', () => {
      is_dragging = false
      scrollable_div.style.cursor = 'grab'
    })

    scrollable_div.addEventListener('mouseup', () => {
      is_dragging = false
      scrollable_div.style.cursor = 'grab'
    })

    scrollable_div.addEventListener('mousemove', (e) => {
      if (!is_dragging) return
      e.preventDefault()
      const x = e.pageX - scrollable_div.offsetLeft
      const walk = (x - startX) * 1 // Adjust the multiplier
      scrollable_div.scrollLeft = scroll_left - walk
    })
  })

  function get_last_two_cells (row) {
    return row.slice(-2);
  }

  function handle_open_reward (reward_id) {
    if (active_reward.value === reward_id)  {
      active_reward.value = -1
    } else {
      active_reward.value = reward_id
    }
  }
</script>

<template>
  <div class="gap-t card-radius overflow-hidden relative select-none ">
    <div id="table-container">
      <table class="min-w-[1024px] w-full bg-white">
        <thead class="text-left contents">
          <th 
            v-for="(tab, index) in props.table.header"
            class="flex items-center subheading-2 padding-x padding-y bg-gray-100"
            :class="{'hidden md:flex': index >= props.table.header.length - 2}"
          >
            {{ tab }}
          </th>
        </thead>

        <tbody class="contents">
          <template v-for="(row, rowIndex) in props.table.body" :key="rowIndex">
            <tr class="md:hover:bg-gray-50 contents table-line">

              <td 
                v-for="(cell, cellIndex) in row.rows"
                class="flex items-center bg-white padding-x padding-y border-t border-gray-300"
                :class="{'hidden md:flex': cellIndex >= row.rows.length - 2}"
              >
              
                <component 
                  :is="cell.component" 
                  :data="cell.data"
                  :reward_id="rowIndex"
                  @handle-open-rewards="handle_open_reward"
                />

              </td>

              <td 
                colspan="7" 
                class="flex md:hidden padding-x padding-y bg-white"
              >
                <div class="flex flex-row-reverse gap-2">
                  <div v-for="cell in get_last_two_cells(row.rows)">
                    <component 
                      :is="cell.component" 
                      :data="cell.data"
                      :reward_id="rowIndex"
                      @handle-open-rewards="handle_open_reward"
                    />
                  </div>
                </div>
              </td>

            </tr>

            <tr 
              class="bg-white contents" 
              v-show="active_reward === rowIndex"
            >
              <td colspan="7" class="flex relative">
                <Rewards 
                  :data="row.rewards"
                />
              </td>
            </tr>

          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  #table-container {
    overflow-x: auto;
    width: 100%;
    position: relative; 
  }

  #table-container::-webkit-scrollbar {
    display: none; 
  }

  #table-container {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }

  #table-container table {
    display: grid;
    grid-template-columns: repeat(5, minmax(auto, 1fr));
  }

  @media (min-width: 768px) {
    #table-container table {
      grid-template-columns: repeat(7, minmax(auto, 1fr));
    }
  }

  #table-container [colspan="7"] {
    grid-column: 1 / -1;
  }
</style>
