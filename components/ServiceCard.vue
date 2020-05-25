<template>
  <div
    class="service__card m-h-64 bg-white m-2 shadow-md md:w-1/3 w-full my-6 mx-6 md:mx-2 rounded"
  >
    <div
      class="service__cardTitle h-48 flex justify-center items-end bg-blue-200"
      :style="{ 'background-image': 'url(' + img + ')' }"
    >
      <h3 class="text-4xl font-black text-white text-center shadow">
        {{ title }}
      </h3>
    </div>
    <div
      class="service__cardBody flex flex-col items-center justify-between p-6 h-64"
    >
      <p class="text-center">
        {{ body }}
      </p>
      <nuxt-link
        to="/desinfection"
        class="mt-4 px-4 py-2 text-white font-bold bg-red-600 hover:bg-red-400 rounded shadow-md"
        >En savoir plus</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: [Object],
    body: String,
    img: String
  }
}
</script>
