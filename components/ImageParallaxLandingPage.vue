<template>
  <div
    class="w-screen flex flex-col justify-center items-center py-12 md:h-64 bg-blue-200 bg-fixed bg-center bg-auto"
    :style="{ 'background-image': 'url(' + img + ')' }"
  >
    <h2 class="w-3/4 text-white text-center text-3xl font-black">
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
  }
}
</script>

<style></style>
