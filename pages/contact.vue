<template>
  <div>
    <ImageParallaxServicePage title="Contact | Devis" img="/invoice.jpg" />

    <div class="bg-gray-200 py-12">
      <div class="w-full bg-blue-600 flex justify-center py-6 md:py-12">
        <div class="w-3/4 flex flex-wrap text-center text-white text-3xl">
          <div class="md:w-1/2 w-full flex items-center md:text-3xl text-lg">
            <font-awesome-icon
              class="text-lg mr-6"
              :icon="['fas', 'phone-volume']"
              size="2x"
              style="height: 40px; display: inline"
            />
            <div class="text-left">
              <p><a href="tel: 0616842291"> 06 16 84 22 91</a></p>
              <p><a href="tel: 0467751339">04 67 75 13 39</a></p>
            </div>
          </div>
          <div
            class="md:w-1/2 w-full flex items-center md:text-3xl text-lg mt-5 md:mt-0"
          >
            <font-awesome-icon
              class="text-lg mr-3"
              :icon="['fas', 'map-marked-alt']"
              size="2x"
              style="height: 40px; display: inline"
            />
            <div class="text-left">
              <p>40 avenue des Gardians N°7</p>
              <p>34160 Castries</p>
            </div>
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
  },
  head() {
    return {
      title: 'Baeza Water - Contact'
    }
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
