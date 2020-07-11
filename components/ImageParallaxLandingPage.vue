<template>
  <div
    class="w-100 flex flex-col justify-center items-center py-12 m-h-64 bg-blue-200 bg-fixed bg-center bg-cover overflow-x-hidden"
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
    items: Array,
    img: String
  }
}
</script>

<style>
.m-h-64 {
  min-height: 16rem;
}
</style>
