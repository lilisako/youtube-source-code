<template>
  <div>
    <div class="flex justify-center font-righteous">
      <div class="p-6 w-full bg-gray-50 md:w-[600px]">
        <div class="flex justify-center items-center">
          <p class="text-lg">
            jesstokyo
          </p>
        </div>
        <div class="relative p-3 bg-white rounded-xl">
          <div>
            <h2>HELLO, JESS!</h2>
            <p class="text-gray-500 text-s">
              How may I assist you?
            </p>
          </div>
          <!-- <img src="~/static/employee.png" width="100" class="absolute top-0 right-2"> -->
        </div>
        <div class="my-4">
          <div class="p-3 bg-white rounded-xl">
            <p class="py-2">
              YOUR PORTFOLIO
            </p>
            <p class="text-4xl">
              $1234
            </p>
            <LineChart :labels="labels" :values="values" class="my-3" />
          </div>
        </div>
        <p>WATCHLIST</p>
        <div class="my-2">
          <div class="flex justify-between items-center p-3 my-2 bg-white rounded-xl">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-16 h-16 bg-gray-50 rounded-xl">
                <img src="~/static/apple.png" width="40">
              </div>
              <div class="px-3">
                <p class="text-sm text-gray-500">
                  Apple.inc
                </p>
                <p>APPL</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-red-400">
                ▼-2.98
              </p>
              <p>$164.32</p>
            </div>
          </div>

          <div class="flex justify-between items-center p-3 my-2 bg-white rounded-xl">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-16 h-16 bg-gray-50 rounded-xl">
                <img src="~/static/tesla.png" width="40">
              </div>
              <div class="px-3">
                <p class="text-sm text-gray-500">
                  Tesla.inc
                </p>
                <p>TSLA</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-red-400">
                ▼-35.45
              </p>
              <p>$821.53</p>
            </div>
          </div>

          <div class="flex justify-between items-center p-3 my-2 bg-white rounded-xl">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-16 h-16 bg-gray-50 rounded-xl">
                <img src="~/static/meta.png" width="40">
              </div>
              <div class="px-3">
                <p class="text-sm text-gray-500">
                  Meta Platforms.inc
                </p>
                <p>FB</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-red-400">
                ▼-4.08
              </p>
              <p>$202.08</p>
            </div>
          </div>

          <div class="flex justify-between items-center p-3 my-2 bg-white rounded-xl">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-16 h-16 bg-gray-50 rounded-xl">
                <img src="~/static/nvidia.png" width="40">
              </div>
              <div class="px-3">
                <p class="text-sm text-gray-500">
                  NVIDIA Corporation
                </p>
                <p>NVDA</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-red-400">
                ▼-2.52
              </p>
              <p>$233.90</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      labels: ['2/17', '2/18', '2/19', '2/20', '2/21', '2/22', '2/23'],
      values: [1439, 1329, 1420, 1372, 1452, 1453, 1234]
    }
  }
}
</script>
