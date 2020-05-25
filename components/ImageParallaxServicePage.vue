<template>
  <div
    class="w-screen flex flex-col justify-center items-center h-64 bg-blue-200 bg-fixed bg-center bg-cover"
    :style="{ 'background-image': 'url(' + img + ')' }"
  >
    <h2
      class="py-1 px-10 text-white text-center text-3xl font-black bg-red-600 uppercase rounded"
    >
      {{ title }}
    </h2>
    <ul
      class="text-white text-xl font-semibold flex flex-col items-center justify-center"
    >
      <li v-for="(item, index) in items" :key="index">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: [String],
    img: String
  },
  computed: {
    backgroundURL() {
      // return require(`~/assets/logoSite.png`)
      return 'nothing'
    }
  }
}
</script>

<style></style>
