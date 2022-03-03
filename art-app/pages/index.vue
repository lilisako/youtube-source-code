<template>
  <div class="font-rosarivo">
    <div class="flex justify-center items-center py-3">
      <h1 class="text-2xl">
        JESSTOKYO
      </h1>
    </div>
    <div class="flex items-center mx-8">
      <div class="flex justify-center items-center w-1/2">
        <div class="p-3 w-3/4 bg-black">
          <img :src="data['primaryImageSmall']">
        </div>
      </div>
      <div class="w-1/2">
        <div class="my-32">
          <p class="text-2xl">
            {{ data['title'] }}
          </p>
          <p class="text-sm">
            {{ data['artistDisplayName'] }}({{ data['artistBeginDate'] }}-{{ data['objectEndDate'] }})
          </p>
        </div>
        <div class="">
          <a :href="data['objectURL']" target="_blank" class="py-2 px-4 text-sm text-white bg-black rounded-xl" type="button">
            Read more
          </a>
          <p class="my-2">
            {{ data['repository'] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    // database indexes for the art from Van Gogh
    const ids = [436535, 437984, 436529, 459123, 436528, 436532, 436533, 459193, 436536, 436526, 436525, 436530, 436524, 437980, 336327, 438722, 436531, 436534, 437998, 436527, 335538, 335536, 335537, 336318, 849056, 849054, 849055, 849052, 203894]
    // get random number
    const index = Math.floor(Math.random() * (ids.length))
    // call API
    const data = await $axios.$get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + ids[index])
    return {
      data
    }
  }
}
</script>
