<template>
  <div class="w-full font-google bg-yellow-50">
    <div class="flex relative justify-end items-center p-4">
      <div class="flex absolute top-3 right-2 justify-center items-center w-6 h-6 text-white bg-black rounded-full">
        1
      </div>
      <img src="~/static/cart.png" width="50">
    </div>
    <div class="flex items-start">
      <div class="w-1/3 h-4 border-b-4 border-black" />
      <div class="w-1/3 h-8 text-center ">
        <p>1 Chome Marunouchi Chiyoda</p>
        <p>TOKYO JAPAN</p>
      </div>
      <div class="w-1/3 h-4 border-b-4 border-black" />
    </div>
    <div class="">
      <div class="flex items-top">
        <div class="p-4 w-1/6">
          <p class="py-4">
            ABOUT
          </p>
          <p class="py-4">
            ACCESS
          </p>
          <p class="py-4">
            OUR COFFEE
          </p>
          <p class="py-4">
            RECRUITE
          </p>
        </div>
        <div class="p-4 w-5/6">
          <img src="~/static/logo.png" width="300">
          <div class="grid grid-cols-2 gap-4">
            <div class="relative p-4 h-80 border-4 border-black">
              <p class="text-2xl">
                AMERICANO
              </p>
              <p class="text-sm">
                15cal
              </p>
              <p class="text-4xl">
                $4
              </p>
              <img src="~/static/americano.png" class="absolute right-2 bottom-0">
            </div>
            <div class="relative p-4 h-80 border-4 border-black">
              <p class="text-2xl">
                CAPPUCCINO
              </p>
              <p class="text-sm">
                140cal
              </p>
              <p class="text-4xl">
                $5
              </p>
              <img src="~/static/cappuccino.png" class="absolute right-2 bottom-0">
            </div>
            <div class="relative p-4 h-80 border-4 border-black">
              <p class="text-2xl">
                ESPRESSO
              </p>
              <p class="text-sm">
                10cal
              </p>
              <p class="text-4xl">
                $4
              </p>
              <img src="~/static/espresso.png" width="300" class="absolute right-2 bottom-0">
            </div>
            <div class="relative p-4 h-80 border-4 border-black">
              <p class="text-2xl">
                MACCHIATO
              </p>
              <p class="text-sm">
                15cal
              </p>
              <p class="text-4xl">
                $5
              </p>
              <img src="~/static/macchiato.png" width="300" class="absolute right-2 bottom-0">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
