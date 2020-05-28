<template>
  <div>
    <ImageParallaxServicePage title="Contact | Devis" img="invoice.jpg" />

    <div class="bg-gray-200 py-6">
      <div class="w-full bg-blue-600 flex justify-center py-12">
        <div
          class="w-3/4 flex justify-center flex-wrap items-center justify-center text-center text-white text-3xl"
        >
          <div class="md:w-1/2 w-full">
            <font-awesome-icon
              class="text-lg"
              :icon="['fas', 'phone-volume']"
            />
            <p class="text-md w-full">Portable 06.16.84.22.91</p>
            <p class="text-md w-full">Bureau 04.67.75.13.39</p>
          </div>
          <div class="md:w-1/2 w-full">
            <font-awesome-icon class="text-lg" :icon="['fas', 'map-pin']" />
            <p>100 Rue RENE PANHARD</p>
            <p>30900 NÎMES</p>
          </div>
        </div>
      </div>
    </div>
    <FormQuote />
    <CardBaeza />
  </div>
</template>

<script>
import ImageParallaxServicePage from '@/components/ImageParallaxServicePage.vue'
import FormQuote from '@/components/FormQuote.vue'
import CardBaeza from '@/components/CardBaeza.vue'

export default {
  components: {
    ImageParallaxServicePage,
    CardBaeza,
    FormQuote
  }
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
