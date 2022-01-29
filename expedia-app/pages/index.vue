<template>
  <div>
    <!-- header -->
    <div class="flex justify-between items-center p-4 border-b-2">
      <img src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2">
      <div class="flex items-center text-gray-800">
        <div class="flex items-center mx-4">
          <svg class="w-4 h-4 text-gray-800 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M11.99 2A10 10 0 1012 21.99 10 10 0 0011.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82A14.09 14.09 0 0112 4.04zM4.26 14a8.17 8.17 0 010-4h3.38a16.45 16.45 0 000 4H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 015.08 16zm2.95-8H5.08a7.99 7.99 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96A14.09 14.09 0 0110.09 16h3.82A14.09 14.09 0 0112 19.96zM14.34 14H9.66a14.49 14.49 0 010-4h4.68a14.5 14.5 0 010 4zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.16-1.34.16-2.66 0-4h3.38a8.17 8.17 0 010 4h-3.38z" /></svg></svg>
          <p>English</p>
        </div>
        <p class="mx-4">
          List your property
        </p>
        <p class="mx-4">
          Support
        </p>
        <p class="mx-4">
          Trips
        </p>
        <p class="mx-4">
          Sign in
        </p>
      </div>
    </div>
    <!-- Search selection -->
    <div class="flex items-center py-2 px-4 text-blue-600">
      <div class="flex items-center">
        <p>Roundtrip</p>
        <svg class="mx-2 w-4 h-4 text-blue-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg></svg>
      </div>
      <div class="flex items-center">
        <p>1 traveler</p>
        <svg class="mx-2 w-4 h-4 text-blue-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg></svg>
      </div>
      <div class="flex items-center">
        <p>Economy</p>
        <svg class="mx-2 w-4 h-4 text-blue-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg></svg>
      </div>
      <div class="flex items-center">
        <p>Any airline</p>
        <svg class="mx-2 w-4 h-4 text-blue-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg></svg>
      </div>
      <div class="flex items-center">
        <p>More options</p>
        <svg class="mx-2 w-4 h-4 text-blue-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg></svg>
      </div>
    </div>
    <!-- Search selection -->
    <!-- search box -->
    <div class="flex items-center py-2 px-4">
      <div class="flex items-center w-72 h-12 rounded-xl border border-gray-700">
        <svg class="mx-2 w-8 h-8 text-gray-700 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd" /></svg></svg>
        <div class="text-gray-700">
          <p class="text-xs">
            Flying from
          </p>
          <p class="text-lg">
            Tokyo(NRT - Narita Intl.)
          </p>
        </div>
      </div>
      <svg class="mx-2 w-8 h-8 text-blue-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" /></svg></svg>
      <div class="flex items-center w-72 h-12 rounded-xl border border-gray-700">
        <svg class="mx-2 w-8 h-8 text-gray-700 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path fill-rule="evenodd" d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clip-rule="evenodd" /></svg></svg>
        <div class="text-gray-700">
          <p class="text-xs">
            Flying to
          </p>
          <p class="text-lg">
            Zurich(ZRH)
          </p>
        </div>
      </div>
      <div class="flex items-center mx-2 w-36 h-12 rounded-xl border border-gray-700">
        <svg class="mx-2 w-8 h-8 text-gray-700 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path fill-rule="evenodd" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z" clip-rule="evenodd" /></svg></svg>
        <div class="text-gray-700">
          <p class="text-xs">
            Departing
          </p>
          <p class="text-lg">
            Feb 12
          </p>
        </div>
      </div>
      <div class="flex items-center w-36 h-12 rounded-xl border border-gray-700">
        <svg class="mx-2 w-8 h-8 text-gray-700 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path fill-rule="evenodd" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z" clip-rule="evenodd" /></svg></svg>
        <div class="text-gray-700">
          <p class="text-xs">
            Returning
          </p>
          <p class="text-lg">
            Feb 13
          </p>
        </div>
      </div>
      <button class="mx-2 bg-blue-600 rounded-xl drop-shadow">
        <p class="p-3 text-lg text-white">
          Search
        </p>
      </button>
    </div>
    <!-- search box -->
    <!-- result -->
    <div class="flex py-12 px-4 bg-orange-50">
      <!-- filter by -->
      <div class="w-1/4">
        <p class="text-lg ">
          Filter by
        </p>
        <div class="flex justify-between">
          <p>Stops</p>
          <p>From</p>
        </div>
        <div class="my-2">
          <div class="flex justify-between">
            <div>
              <input type="checkbox" name="nonstop">
              <label for="nonstop" class="mx-2 text-gray-700">Nonstop</label>
            </div>
            <p class="text-gray-700">
              $3,076
            </p>
          </div>
          <div class="flex justify-between">
            <div>
              <input type="checkbox" name="nonstop">
              <label for="nonstop" class="mx-2 text-gray-700">1 Stop(16)</label>
            </div>
            <p class="text-gray-700">
              $1,148
            </p>
          </div>
          <div class="flex justify-between">
            <div>
              <input type="checkbox" name="nonstop">
              <label for="nonstop" class="mx-2 text-gray-700">2+ Stop(18)</label>
            </div>
            <p class="text-gray-700">
              $3,668
            </p>
          </div>
        </div>
      </div>
      <!-- choose flight -->
      <div class="mx-4">
        <div class="flex items-center">
          <p class="text-sm">
            Choose departing flight
          </p>
          <svg class="mx-2 w-6 h-6"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
          <p class="text-sm">
            Choose returning flight
          </p>
          <svg class="mx-2 w-6 h-6"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
          <p class="text-sm">
            Review your trip
          </p>
        </div>
        <div class="border-b border-black">
          <div class="p-4 my-4 w-full bg-white rounded-xl">
            <p class="text-bold">
              Flexible dates
            </p>
            <p class="text-xs">
              Compare prices for nearby days
            </p>
          </div>
        </div>
        <div class="flex justify-between my-4">
          <p class="w-3/4 text-xs">
            Prices displayed include taxes and may change based on availability. You can review any additional fees before checkout. Prices are not final until you complete your purchase.
          </p>
          <div class="flex justify-between items-center px-2 h-12 rounded-xl border border-gray-700">
            <div class="text-gray-700">
              <p class="text-xs">
                Sort by
              </p>
              <p class="text-lg">
                Price(Lowest)
              </p>
            </div>
            <svg class="mx-2 w-8 h-8 text-gray-600 fill-current" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg></svg>
          </div>
        </div>
        <!-- one selection -->
        <div class="flex justify-between items-start p-4 my-4 w-full bg-white rounded-xl">
          <div>
            <p class="font-bold">
              9:40am - 7:50am
            </p>
            <p class="text-xs">
              Tokyo(NRT) - Zurich(ZRH)
            </p>
            <div class="flex items-center">
              <img class="w-4 h-4" src="https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/SQ_sq.svg">
              <p class="text-xs">
                Singapore Airline
              </p>
            </div>
            <p class="text-xs">
              2 cleaning and safety practices
            </p>
          </div>
          <div class="text-sm text-gray-700">
            <p>30h10m(1stop)</p>
            <p>9h in Singapore(SIN)</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold">
              $1,148
            </p>
            <p class="text-xs">
              Roundtrip per traveler
            </p>
          </div>
        </div>
        <!-- one selection -->
        <!-- one selection -->
        <div class="flex justify-between items-start p-4 my-4 w-full bg-white rounded-xl">
          <div>
            <p class="font-bold">
              9:40am - 7:50am
            </p>
            <p class="text-xs">
              Tokyo(NRT) - Zurich(ZRH)
            </p>
            <div class="flex items-center">
              <img class="w-4 h-4" src="https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/SQ_sq.svg">
              <p class="text-xs">
                Singapore Airline
              </p>
            </div>
            <p class="text-xs">
              2 cleaning and safety practices
            </p>
          </div>
          <div class="text-sm text-gray-700">
            <p>30h10m(1stop)</p>
            <p>9h in Singapore(SIN)</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold">
              $1,148
            </p>
            <p class="text-xs">
              Roundtrip per traveler
            </p>
          </div>
        </div>
        <!-- one selection -->
        <!-- one selection -->
        <div class="flex justify-between items-start p-4 my-4 w-full bg-white rounded-xl">
          <div>
            <p class="font-bold">
              9:40am - 7:50am
            </p>
            <p class="text-xs">
              Tokyo(NRT) - Zurich(ZRH)
            </p>
            <div class="flex items-center">
              <img class="w-4 h-4" src="https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/SQ_sq.svg">
              <p class="text-xs">
                Singapore Airline
              </p>
            </div>
            <p class="text-xs">
              2 cleaning and safety practices
            </p>
          </div>
          <div class="text-sm text-gray-700">
            <p>30h10m(1stop)</p>
            <p>9h in Singapore(SIN)</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold">
              $1,148
            </p>
            <p class="text-xs">
              Roundtrip per traveler
            </p>
          </div>
        </div>
        <!-- one selection -->
      </div>
    </div>
    <!-- result -->
  </div>
</template>

<script>
export default {}
</script>
