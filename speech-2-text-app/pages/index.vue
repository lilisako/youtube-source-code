<template>
  <div class="flex justify-center">
    <div class="p-6 w-full h-screen bg-blue-50 md:w-[600px]">
      <div class="flex items-center">
        <img src="~/static/arrow.png" width="25">
        <img src="~/static/profile.jpeg" class="mx-4 rounded-full" width="40">
        <p class="text-xl font-bold">
          jesstokyo
        </p>
      </div>
      <div class="relative m-2 my-4 h-5/6 bg-white rounded-xl">
        <div class="overflow-auto p-2 h-5/6">
          <div v-for="(chat, index) in chats" :key="index" class="relative p-4 m-4 bg-gray-100 rounded-xl">
            <p>{{ chat[0] }}</p>
            <p class="absolute right-2 bottom-2 text-sm text-gray-500">
              {{ chat[1] }}
            </p>
          </div>
        </div>
        <div class="absolute bottom-4 px-2 w-full">
          <button v-if="listening" class="py-4 w-full text-2xl font-bold text-white bg-red-200 rounded-xl" @click="text2speech">
            LISTENING
          </button>
          <button v-else class="py-4 w-full text-2xl font-bold text-white bg-blue-200 rounded-xl" @click="text2speech">
            START
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
export default {
  data () {
    return {
      // speech to text result array
      chats: [],
      // flag for listening
      listening: false
    }
  },
  methods: {
    text2speech () {
      if (process.browser) {
        // start listening
        this.listening = true
        // get Speech recognition class
        const SpeechRec = window.webkitSpeechRecognition || window.SpeechRecognition
        // create new instance
        const recognition = new SpeechRec()
        // specify the language
        recognition.lang = 'en-US'
        recognition.onresult = (e) => {
          // when finish listening, it turns off the "listening" flag and add the recognition result to the chats array
          this.listening = false
          this.chats.push([e.results[0][0].transcript, dateFormat(new Date(), 'HH:MM')])
        }
        recognition.start()
      }
    }
  }
}
</script>
