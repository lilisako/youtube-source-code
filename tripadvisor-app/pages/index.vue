<template>
  <div>
    <!-- header -->
    <div class="flex sticky top-0 z-10 justify-between py-2 px-4 bg-white">
      <div>
        <img class="w-52" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg">
      </div>
      <div class="flex items-center">
        <div class="flex items-center px-4">
          <div>
            <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M3.366 21.984a1.36 1.36 0 01-1.067-.513 1.352 1.352 0 01-.266-1.148l1.445-6.637 10.249-10.22c1.625-1.62 4.352-1.939 6.153-.674a4.8 4.8 0 012.098 3.518 4.756 4.756 0 01-1.384 3.833l-10.326 10.32-6.902 1.521zm2.038-7.245l-1.069 4.906 4.875-1.103 7.909-7.902-3.796-3.797-7.919 7.896zm9.41-9.382l3.794 3.795.499-.499a2.662 2.662 0 00.775-2.144c-.076-.81-.502-1.514-1.196-1.982-1.029-.724-2.549-.49-3.472.431l-.4.399z" /></svg>
          </div>
          <p class="font-bold">
            Review
          </p>
        </div>
        <div class="flex items-center px-4">
          <div>
            <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z" /></svg>
          </div>
          <p class="font-bold">
            Trips
          </p>
        </div>
        <div class="flex items-center px-4">
          <div>
            <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 2c.539 0 .976.437.976.976v1.032c1.779.21 3.268 1 4.356 2.222 1.271 1.426 1.937 3.372 1.97 5.512.013.755.016 3.706.016 5.381h1.463v1.951H15.77a4.4 4.4 0 01-.336.924 3.545 3.545 0 01-1.2 1.382c-.589.391-1.332.62-2.234.62s-1.645-.229-2.233-.621a3.538 3.538 0 01-1.2-1.382 4.4 4.4 0 01-.336-.924H3.22v-1.951h1.463c0-1.669.002-4.602.015-5.372-.007-2.149.663-4.098 1.944-5.523 1.098-1.222 2.601-2.009 4.383-2.219V2.976A.975.975 0 0112 2zM6.634 17.122h10.732c0-1.675-.003-4.611-.016-5.351-.026-1.763-.573-3.232-1.475-4.245-.891-1-2.187-1.625-3.876-1.625-1.692 0-3.007.627-3.906 1.627-.909 1.012-1.452 2.473-1.444 4.223 0 .001-.015 3.696-.015 5.371zm3.653 1.951l.024.052c.125.249.297.471.538.63.234.156.59.294 1.151.294.562 0 .917-.138 1.151-.294a1.601 1.601 0 00.561-.682h-3.425z" /></svg>
          </div>
          <p class="font-bold">
            Alerts
          </p>
        </div>
        <div class="p-2 bg-black rounded-xl">
          <p class="font-bold text-white">
            Sign in
          </p>
        </div>
      </div>
    </div>
    <!-- header -->
    <!-- category -->
    <div class="grid grid-cols-4 gap-4 px-4">
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Hotels
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><path d="M20.587 12.139V4.144H3.424v7.986A3.805 3.805 0 002 15.097v4.755h1.906v-1.905h16.188v1.91H22v-4.76a3.804 3.804 0 00-1.413-2.958zm-1.906-6.09V8.83a5.048 5.048 0 00-2.865-.876c-1.565 0-2.952.69-3.816 1.749-.864-1.059-2.252-1.749-3.818-1.749-1.07 0-2.056.324-2.851.866V6.049h13.35zm-.258 5.248c-.077-.005-.155-.012-.234-.012h-4.971c.438-.838 1.437-1.426 2.598-1.426 1.168 0 2.173.593 2.607 1.438zm-7.643-.012H5.812c-.081 0-.159.007-.238.012.434-.844 1.438-1.438 2.606-1.438 1.163 0 2.163.588 2.6 1.426zM3.906 16.04v-.943c0-1.051.855-1.905 1.906-1.905h12.376c1.051 0 1.905.854 1.905 1.905v.943H3.906z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Vacation
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><path d="M12.001 2L2.097 8.6V22h19.807V8.6L12.001 2zm7.922 18.021H4.077V9.66l7.924-5.28 7.922 5.28v10.361z" /><path d="M9.036 10.627a2.973 2.973 0 00-2.97 2.968 2.974 2.974 0 002.97 2.971 2.964 2.964 0 002.788-1.98h2.152v1.979h1.98v-1.979h1.982v-1.979h-6.115a2.965 2.965 0 00-2.787-1.98zm0 3.959a.99.99 0 11-.002-1.978.99.99 0 01.002 1.978z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Things To Do
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><circle cx="12" cy="8.5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="15.5" r="1" /><path d="M20 6.5V8c-1.5.7-2.5 2.3-2.5 4 0 1.8 1 3.3 2.5 4v1.5H4V16c1.5-.7 2.5-2.3 2.5-4 0-1.8-1-3.3-2.5-4V6.5h16m2-2H2v5c1.4 0 2.5 1.1 2.5 2.5S3.4 14.5 2 14.5v5h20v-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5v-5z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Restaurants
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><path d="M18.753 21.459l-5.502-5.504-2.85 2.851-1.663-1.662-4.315 4.315-1.343-1.344 4.316-4.316-4.004-4.003A4.718 4.718 0 012 8.438c0-1.269.494-2.461 1.392-3.358l.834-.835 7.362 7.362.866-.866c-1.099-1.719-.777-3.972.912-5.661l2.538-2.538 1.343 1.344-2.538 2.537c-.785.787-1.254 1.903-.852 2.916l4.423-4.422 1.343 1.344-4.429 4.428c.31.13.64.188.977.164.646-.043 1.299-.364 1.838-.904a630.937 630.937 0 002.642-2.653L22 8.631s-1.241 1.255-2.647 2.66c-.865.865-1.951 1.383-3.057 1.456a4.027 4.027 0 01-2.501-.66l-.864.862 7.166 7.166-1.344 1.344zM4.291 6.995A2.835 2.835 0 003.9 8.438c0 .762.296 1.478.835 2.015l5.666 5.667 1.506-1.507-7.616-7.618z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Travel Forums
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><path d="M2 21.257h2.118l3.271-3h10.604l.02-11.513H2v14.513zM4 8.744h12.009l-.013 7.512H6.61L4 18.65V8.744z" /><path d="M7.004 2.743v2h12.995v8.512H22V2.743z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Flights
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><path d="M21.297 2.69C20.83 2.225 20.199 2 19.514 2c-1.005 0-2.132.481-3.036 1.387L14.41 5.455 6.144 4.082 2.697 7.528l6.536 3.105-1.028 1.026-3.44-.684-2.758 2.757L10.274 22l2.758-2.758-.684-3.442 1.026-1.025 3.109 6.541 3.447-3.447-1.379-8.271 2.067-2.069c1.524-1.524 1.827-3.69.679-4.839zm-2.056 3.459l-2.068 2.068-.71.71.165.99 1.214 7.282-.784.784-1.923-4.046-1.187-2.495-1.953 1.953-1.026 1.025-.737.738.203 1.021.48 2.42-.641.642-5.509-5.51.641-.643 2.42.482 1.021.202.737-.737 1.027-1.025 1.954-1.955-2.496-1.186-4.04-1.918.784-.784 7.278 1.208.988.165.709-.708 2.067-2.068c.603-.601 1.251-.815 1.658-.815.131 0 .305.021.403.119.248.249.181 1.226-.675 2.081z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          Cruises
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><path d="M18.331 19.999l2.34-7.981L18 10.587V3.984h-5.003V3a1 1 0 00-2.001 0v.984H6.001v6.5l-2.955 1.522 2.365 7.993H3.007V22h17.986v-2.001h-2.662zM8 5.984h8v3.532l-3.98-2.132L8 9.454v-3.47zm-2.566 7.041L11 10.158V18h2v-7.823l5.295 2.836-2.047 6.985H7.497l-2.063-6.973z" /></svg>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg border-2 border-black">
        <p class="font-bold">
          More
        </p>
        <svg viewBox="0 0 24 24" class="w-8 h-8"><circle cx="4.5" cy="11.9" r="2.5" /><circle cx="19.5" cy="11.9" r="2.5" /><circle cx="12" cy="11.9" r="2.5" /></svg>
      </div>
    </div>
    <!-- category -->
    <!-- search -->
    <div class="p-4">
      <div class="relative bg-yellow-400">
        <img class="w-full" src="https://static.tacdn.com/img2/brand/home/home1021_dt.webp">
        <div class="flex absolute top-1/2 left-1/2 items-center w-2/3 h-16 bg-white rounded-xl -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 24 24" class="ml-4 w-6 h-6"><path d="M22 20.514l-5.517-5.519a8.023 8.023 0 001.674-4.904c0-4.455-3.624-8.079-8.079-8.079C5.624 2.012 2 5.636 2 10.091s3.624 8.079 8.079 8.079a8.03 8.03 0 004.933-1.695l5.512 5.514L22 20.514zm-11.921-4.431c-3.305 0-5.993-2.688-5.993-5.992s2.688-5.992 5.993-5.992a6 6 0 015.992 5.992 6 6 0 01-5.992 5.992z" /></svg>
          <p class="pl-2 text-xl text-gray-400">
            Where to?
          </p>
        </div>
      </div>
    </div>
    <!-- search -->
    <!-- Explore Experiences -->
    <div class="py-8 px-4">
      <h2 class="py-4 text-2xl font-bold">
        Explore Experiences
      </h2>
      <div class="flex">
        <!-- section -->
        <div class="mx-2">
          <div class="relative w-72 h-72">
            <img class="w-72 h-72" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/fc/74/caption.jpg?w=300&h=300&s=1">
            <div class="absolute top-2 right-2 p-2 bg-white rounded-full">
              <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z" /></svg>
            </div>
            <div class="absolute bottom-2 left-2 p-1 text-center bg-yellow-500 rounded-xl">
              <svg viewBox="0 0 24 24" class="w-8 h-8 text-black fill-current"><path d="M19.283 15.443c1.007-.961 2.295-1.125 2.295-1.125s-.444 1.008-1.545 2.037c-1.031.961-2.062.984-2.155.984 0 .001.375-.937 1.405-1.896zM8.534 11.906c0-.515.397-.913.89-.913.516 0 .913.398.913.913a.914.914 0 01-.913.914c-.492 0-.89-.422-.89-.914zm-1.663 0c0-.75.328-1.428.843-1.897l-.843-.913h1.851a5.833 5.833 0 016.556 0h1.851l-.843.913c.515.469.843 1.125.843 1.874a2.563 2.563 0 01-2.553 2.576c-.68 0-1.288-.258-1.757-.68L12 14.67l-.819-.891a2.606 2.606 0 01-1.757.68 2.559 2.559 0 01-2.553-2.553zm7.682-1.733c-.937 0-1.733.773-1.733 1.733 0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733zm-4.473-.866c1.101.422 1.92 1.405 1.92 2.552 0-1.147.819-2.131 1.92-2.553-.585-.257-1.241-.374-1.92-.374s-1.335.117-1.92.375zm-2.39 2.599c0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733-.936 0-1.733.773-1.733 1.733zm10.399 5.739c.352 0 .562.047.562.047s-.586.538-1.616.937c-.445.163-.819.21-1.101.21-.398 0-.609-.07-.609-.07s.516-.515 1.476-.889a3.47 3.47 0 011.288-.235zm-4.426-5.739c0-.515.397-.913.913-.913.492 0 .89.398.89.913 0 .492-.397.914-.89.914a.915.915 0 01-.913-.914zM20.01 12s-.047-.304-.047-.796c0-.421.023-.983.187-1.592.328-1.382 1.288-2.225 1.288-2.225s.047.281.047.726c0 .469-.047 1.125-.233 1.874C20.899 11.438 20.01 12 20.01 12zm1.99-.656s-.234 1.077-1.101 2.318c-.843 1.219-1.897 1.406-1.897 1.406s.188-1.008.984-2.154c.796-1.148 2.014-1.57 2.014-1.57zM6.122 17.34c-.094 0-1.124-.023-2.155-.984-1.101-1.006-1.545-2.037-1.545-2.037s1.288.164 2.295 1.125c1.03.958 1.405 1.896 1.405 1.896zm2.553 1.428s-.211.07-.609.07c-.281 0-.655-.047-1.101-.21-1.03-.398-1.616-.937-1.616-.937s.211-.047.562-.047.819.047 1.288.234c.96.375 1.476.89 1.476.89zm-5.574-5.106C2.234 12.445 2 11.344 2 11.344s1.218.422 2.014 1.57c.797 1.146.984 2.154.984 2.154s-1.055-.187-1.897-1.406zm1.475-2.271c0-4.098 3.325-7.424 7.424-7.424s7.447 3.326 7.447 7.424c0 4.123-3.349 7.447-7.447 7.447s-7.424-3.348-7.424-7.447zm.82 0c0 3.654 2.951 6.605 6.604 6.605s6.604-2.951 6.604-6.605c0-3.653-2.951-6.604-6.604-6.604s-6.604 2.951-6.604 6.604zM2.749 9.986a7.788 7.788 0 01-.233-1.874c0-.445.047-.726.047-.726s.96.843 1.287 2.225c.164.609.188 1.171.188 1.592-.001.493-.048.797-.048.797s-.889-.562-1.241-2.014zm5.645 9.532s.749-.469 1.569-.469c.726 0 1.218.211 1.218.211s-.445.422-1.312.469h-.14c-.797 0-1.335-.211-1.335-.211zm5.643-.469c.82 0 1.569.469 1.569.469s-.538.211-1.335.211h-.141c-.866-.047-1.312-.469-1.312-.469s.494-.211 1.219-.211zm-2.459.562c0-.234.188-.422.422-.422s.422.188.422.422-.188.422-.422.422-.422-.187-.422-.422z" /></svg>
              <p class="text-xs font-bold">
                2021
              </p>
            </div>
          </div>
          <div class="w-72">
            <p class="font-bold">
              The Lava Tunnel - Standard Lava Tunnel Tour - Raufarhólshellir
            </p>
            <div class="flex items-center">
              <svg class="text-green-500 fill-current" viewBox="0 0 128 24" width="68" height="12"><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)" /><path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)" /></svg>
              <p class="text-sm text-gray-500">
                597
              </p>
            </div>
            <div class="font-bold">
              from $58 per adult
            </div>
          </div>
        </div>
        <!-- section -->
        <!-- section -->
        <div class="mx-2">
          <div class="relative w-72 h-72">
            <img class="w-72 h-72" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/d2/4c/ec/cappadocia-hot-air-balloon.jpg?w=300&h=-1&s=1">
            <div class="absolute top-2 right-2 p-2 bg-white rounded-full">
              <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z" /></svg>
            </div>
            <div class="absolute bottom-2 left-2 p-1 text-center bg-yellow-500 rounded-xl">
              <svg viewBox="0 0 24 24" class="w-8 h-8 text-black fill-current"><path d="M19.283 15.443c1.007-.961 2.295-1.125 2.295-1.125s-.444 1.008-1.545 2.037c-1.031.961-2.062.984-2.155.984 0 .001.375-.937 1.405-1.896zM8.534 11.906c0-.515.397-.913.89-.913.516 0 .913.398.913.913a.914.914 0 01-.913.914c-.492 0-.89-.422-.89-.914zm-1.663 0c0-.75.328-1.428.843-1.897l-.843-.913h1.851a5.833 5.833 0 016.556 0h1.851l-.843.913c.515.469.843 1.125.843 1.874a2.563 2.563 0 01-2.553 2.576c-.68 0-1.288-.258-1.757-.68L12 14.67l-.819-.891a2.606 2.606 0 01-1.757.68 2.559 2.559 0 01-2.553-2.553zm7.682-1.733c-.937 0-1.733.773-1.733 1.733 0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733zm-4.473-.866c1.101.422 1.92 1.405 1.92 2.552 0-1.147.819-2.131 1.92-2.553-.585-.257-1.241-.374-1.92-.374s-1.335.117-1.92.375zm-2.39 2.599c0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733-.936 0-1.733.773-1.733 1.733zm10.399 5.739c.352 0 .562.047.562.047s-.586.538-1.616.937c-.445.163-.819.21-1.101.21-.398 0-.609-.07-.609-.07s.516-.515 1.476-.889a3.47 3.47 0 011.288-.235zm-4.426-5.739c0-.515.397-.913.913-.913.492 0 .89.398.89.913 0 .492-.397.914-.89.914a.915.915 0 01-.913-.914zM20.01 12s-.047-.304-.047-.796c0-.421.023-.983.187-1.592.328-1.382 1.288-2.225 1.288-2.225s.047.281.047.726c0 .469-.047 1.125-.233 1.874C20.899 11.438 20.01 12 20.01 12zm1.99-.656s-.234 1.077-1.101 2.318c-.843 1.219-1.897 1.406-1.897 1.406s.188-1.008.984-2.154c.796-1.148 2.014-1.57 2.014-1.57zM6.122 17.34c-.094 0-1.124-.023-2.155-.984-1.101-1.006-1.545-2.037-1.545-2.037s1.288.164 2.295 1.125c1.03.958 1.405 1.896 1.405 1.896zm2.553 1.428s-.211.07-.609.07c-.281 0-.655-.047-1.101-.21-1.03-.398-1.616-.937-1.616-.937s.211-.047.562-.047.819.047 1.288.234c.96.375 1.476.89 1.476.89zm-5.574-5.106C2.234 12.445 2 11.344 2 11.344s1.218.422 2.014 1.57c.797 1.146.984 2.154.984 2.154s-1.055-.187-1.897-1.406zm1.475-2.271c0-4.098 3.325-7.424 7.424-7.424s7.447 3.326 7.447 7.424c0 4.123-3.349 7.447-7.447 7.447s-7.424-3.348-7.424-7.447zm.82 0c0 3.654 2.951 6.605 6.604 6.605s6.604-2.951 6.604-6.605c0-3.653-2.951-6.604-6.604-6.604s-6.604 2.951-6.604 6.604zM2.749 9.986a7.788 7.788 0 01-.233-1.874c0-.445.047-.726.047-.726s.96.843 1.287 2.225c.164.609.188 1.171.188 1.592-.001.493-.048.797-.048.797s-.889-.562-1.241-2.014zm5.645 9.532s.749-.469 1.569-.469c.726 0 1.218.211 1.218.211s-.445.422-1.312.469h-.14c-.797 0-1.335-.211-1.335-.211zm5.643-.469c.82 0 1.569.469 1.569.469s-.538.211-1.335.211h-.141c-.866-.047-1.312-.469-1.312-.469s.494-.211 1.219-.211zm-2.459.562c0-.234.188-.422.422-.422s.422.188.422.422-.188.422-.422.422-.422-.187-.422-.422z" /></svg>
              <p class="text-xs font-bold">
                2021
              </p>
            </div>
          </div>
          <div class="w-72">
            <p class="font-bold">
              Cappadocia Hot Air Balloon Flight
            </p>
            <div class="flex items-center">
              <svg viewBox="0 0 128 24" class="text-green-500 fill-current" width="68" height="12"><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)" /></svg>
              <p class="text-sm text-gray-500">
                467
              </p>
            </div>
            <div class="font-bold">
              from $113 per adult
            </div>
          </div>
        </div>
        <!-- section -->
        <!-- section -->
        <div class="mx-2">
          <div class="relative w-72 h-72">
            <img class="w-72 h-72" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/99/c0/5d/surfer-factory.jpg?w=300&h=300&s=1">
            <div class="absolute top-2 right-2 p-2 bg-white rounded-full">
              <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z" /></svg>
            </div>
            <div class="absolute bottom-2 left-2 p-1 text-center bg-yellow-500 rounded-xl">
              <svg viewBox="0 0 24 24" class="w-8 h-8 text-black fill-current"><path d="M19.283 15.443c1.007-.961 2.295-1.125 2.295-1.125s-.444 1.008-1.545 2.037c-1.031.961-2.062.984-2.155.984 0 .001.375-.937 1.405-1.896zM8.534 11.906c0-.515.397-.913.89-.913.516 0 .913.398.913.913a.914.914 0 01-.913.914c-.492 0-.89-.422-.89-.914zm-1.663 0c0-.75.328-1.428.843-1.897l-.843-.913h1.851a5.833 5.833 0 016.556 0h1.851l-.843.913c.515.469.843 1.125.843 1.874a2.563 2.563 0 01-2.553 2.576c-.68 0-1.288-.258-1.757-.68L12 14.67l-.819-.891a2.606 2.606 0 01-1.757.68 2.559 2.559 0 01-2.553-2.553zm7.682-1.733c-.937 0-1.733.773-1.733 1.733 0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733zm-4.473-.866c1.101.422 1.92 1.405 1.92 2.552 0-1.147.819-2.131 1.92-2.553-.585-.257-1.241-.374-1.92-.374s-1.335.117-1.92.375zm-2.39 2.599c0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733-.936 0-1.733.773-1.733 1.733zm10.399 5.739c.352 0 .562.047.562.047s-.586.538-1.616.937c-.445.163-.819.21-1.101.21-.398 0-.609-.07-.609-.07s.516-.515 1.476-.889a3.47 3.47 0 011.288-.235zm-4.426-5.739c0-.515.397-.913.913-.913.492 0 .89.398.89.913 0 .492-.397.914-.89.914a.915.915 0 01-.913-.914zM20.01 12s-.047-.304-.047-.796c0-.421.023-.983.187-1.592.328-1.382 1.288-2.225 1.288-2.225s.047.281.047.726c0 .469-.047 1.125-.233 1.874C20.899 11.438 20.01 12 20.01 12zm1.99-.656s-.234 1.077-1.101 2.318c-.843 1.219-1.897 1.406-1.897 1.406s.188-1.008.984-2.154c.796-1.148 2.014-1.57 2.014-1.57zM6.122 17.34c-.094 0-1.124-.023-2.155-.984-1.101-1.006-1.545-2.037-1.545-2.037s1.288.164 2.295 1.125c1.03.958 1.405 1.896 1.405 1.896zm2.553 1.428s-.211.07-.609.07c-.281 0-.655-.047-1.101-.21-1.03-.398-1.616-.937-1.616-.937s.211-.047.562-.047.819.047 1.288.234c.96.375 1.476.89 1.476.89zm-5.574-5.106C2.234 12.445 2 11.344 2 11.344s1.218.422 2.014 1.57c.797 1.146.984 2.154.984 2.154s-1.055-.187-1.897-1.406zm1.475-2.271c0-4.098 3.325-7.424 7.424-7.424s7.447 3.326 7.447 7.424c0 4.123-3.349 7.447-7.447 7.447s-7.424-3.348-7.424-7.447zm.82 0c0 3.654 2.951 6.605 6.604 6.605s6.604-2.951 6.604-6.605c0-3.653-2.951-6.604-6.604-6.604s-6.604 2.951-6.604 6.604zM2.749 9.986a7.788 7.788 0 01-.233-1.874c0-.445.047-.726.047-.726s.96.843 1.287 2.225c.164.609.188 1.171.188 1.592-.001.493-.048.797-.048.797s-.889-.562-1.241-2.014zm5.645 9.532s.749-.469 1.569-.469c.726 0 1.218.211 1.218.211s-.445.422-1.312.469h-.14c-.797 0-1.335-.211-1.335-.211zm5.643-.469c.82 0 1.569.469 1.569.469s-.538.211-1.335.211h-.141c-.866-.047-1.312-.469-1.312-.469s.494-.211 1.219-.211zm-2.459.562c0-.234.188-.422.422-.422s.422.188.422.422-.188.422-.422.422-.422-.187-.422-.422z" /></svg>
              <p class="text-xs font-bold">
                2021
              </p>
            </div>
          </div>
          <div class="w-72">
            <p class="font-bold">
              Surf Lessons with Pro Team in Jacó
            </p>
            <div class="flex items-center">
              <svg viewBox="0 0 128 24" class="text-green-500 fill-current" width="68" height="12"><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)" /></svg>
              <p class="text-sm text-gray-500">
                160
              </p>
            </div>
            <div class="font-bold">
              from $77 per adult
            </div>
          </div>
        </div>
        <!-- section -->
        <!-- section -->
        <div class="mx-2">
          <div class="relative w-72 h-72">
            <img class="w-72 h-72" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/91/0c/10/caption.jpg?w=300&h=300&s=1">
            <div class="absolute top-2 right-2 p-2 bg-white rounded-full">
              <svg viewBox="0 0 24 24" class="w-6 h-6"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z" /></svg>
            </div>
            <div class="absolute bottom-2 left-2 p-1 text-center bg-yellow-500 rounded-xl">
              <svg viewBox="0 0 24 24" class="w-8 h-8 text-black fill-current"><path d="M19.283 15.443c1.007-.961 2.295-1.125 2.295-1.125s-.444 1.008-1.545 2.037c-1.031.961-2.062.984-2.155.984 0 .001.375-.937 1.405-1.896zM8.534 11.906c0-.515.397-.913.89-.913.516 0 .913.398.913.913a.914.914 0 01-.913.914c-.492 0-.89-.422-.89-.914zm-1.663 0c0-.75.328-1.428.843-1.897l-.843-.913h1.851a5.833 5.833 0 016.556 0h1.851l-.843.913c.515.469.843 1.125.843 1.874a2.563 2.563 0 01-2.553 2.576c-.68 0-1.288-.258-1.757-.68L12 14.67l-.819-.891a2.606 2.606 0 01-1.757.68 2.559 2.559 0 01-2.553-2.553zm7.682-1.733c-.937 0-1.733.773-1.733 1.733 0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733zm-4.473-.866c1.101.422 1.92 1.405 1.92 2.552 0-1.147.819-2.131 1.92-2.553-.585-.257-1.241-.374-1.92-.374s-1.335.117-1.92.375zm-2.39 2.599c0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733-.936 0-1.733.773-1.733 1.733zm10.399 5.739c.352 0 .562.047.562.047s-.586.538-1.616.937c-.445.163-.819.21-1.101.21-.398 0-.609-.07-.609-.07s.516-.515 1.476-.889a3.47 3.47 0 011.288-.235zm-4.426-5.739c0-.515.397-.913.913-.913.492 0 .89.398.89.913 0 .492-.397.914-.89.914a.915.915 0 01-.913-.914zM20.01 12s-.047-.304-.047-.796c0-.421.023-.983.187-1.592.328-1.382 1.288-2.225 1.288-2.225s.047.281.047.726c0 .469-.047 1.125-.233 1.874C20.899 11.438 20.01 12 20.01 12zm1.99-.656s-.234 1.077-1.101 2.318c-.843 1.219-1.897 1.406-1.897 1.406s.188-1.008.984-2.154c.796-1.148 2.014-1.57 2.014-1.57zM6.122 17.34c-.094 0-1.124-.023-2.155-.984-1.101-1.006-1.545-2.037-1.545-2.037s1.288.164 2.295 1.125c1.03.958 1.405 1.896 1.405 1.896zm2.553 1.428s-.211.07-.609.07c-.281 0-.655-.047-1.101-.21-1.03-.398-1.616-.937-1.616-.937s.211-.047.562-.047.819.047 1.288.234c.96.375 1.476.89 1.476.89zm-5.574-5.106C2.234 12.445 2 11.344 2 11.344s1.218.422 2.014 1.57c.797 1.146.984 2.154.984 2.154s-1.055-.187-1.897-1.406zm1.475-2.271c0-4.098 3.325-7.424 7.424-7.424s7.447 3.326 7.447 7.424c0 4.123-3.349 7.447-7.447 7.447s-7.424-3.348-7.424-7.447zm.82 0c0 3.654 2.951 6.605 6.604 6.605s6.604-2.951 6.604-6.605c0-3.653-2.951-6.604-6.604-6.604s-6.604 2.951-6.604 6.604zM2.749 9.986a7.788 7.788 0 01-.233-1.874c0-.445.047-.726.047-.726s.96.843 1.287 2.225c.164.609.188 1.171.188 1.592-.001.493-.048.797-.048.797s-.889-.562-1.241-2.014zm5.645 9.532s.749-.469 1.569-.469c.726 0 1.218.211 1.218.211s-.445.422-1.312.469h-.14c-.797 0-1.335-.211-1.335-.211zm5.643-.469c.82 0 1.569.469 1.569.469s-.538.211-1.335.211h-.141c-.866-.047-1.312-.469-1.312-.469s.494-.211 1.219-.211zm-2.459.562c0-.234.188-.422.422-.422s.422.188.422.422-.188.422-.422.422-.422-.187-.422-.422z" /></svg>
              <p class="text-xs font-bold">
                2021
              </p>
            </div>
          </div>
          <div class="w-72">
            <p class="font-bold">
              Chichen Itza Sunrise and Cenote Ik Kil from Cancun
            </p>
            <div class="flex items-center">
              <svg viewBox="0 0 128 24" class="text-green-500 fill-current" width="68" height="12"><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)" /><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)" /></svg>
              <p class="text-sm text-gray-500">
                148
              </p>
            </div>
            <div class="font-bold">
              from $334 per adult
            </div>
          </div>
        </div>
        <!-- section -->
      </div>
    </div>
    <!-- Explore Experiences -->
  </div>
</template>

<script>
export default {}
</script>
