<template>
  <div
    class="bg-red-600 flex flex-col lg:m-2 my-12 p-6 text-white text-center relative rounded shadow-md md:w-1/4"
  >
    <div
      class="card__icon rounded absolute flex justify-center items-center z-20 bg-red-600 shadow-lg"
    >
      <font-awesome-icon
        class="text-md"
        :icon="this.icon"
        size="2x"
        style="height: 30px"
      />
    </div>
    <h3 class="uppercase text-3xl md:text-2xl font-semibold mt-8 mb-4">
      {{ title }}
    </h3>
    <p class="text-lg md:text-md py-6">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    logo: String
  },
  data() {
    return {
      icon: ['fas', this.logo]
    }
  }
}
</script>

<style scoped>
.card__icon {
  top: -50px;
  left: calc(50% - 50px);
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
</style>
