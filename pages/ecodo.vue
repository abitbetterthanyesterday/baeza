<template>
  <div>
    <ImageParallaxServicePage title="Détection de fuite" img="parallax2.jpg" />

    <div class="flex justify-center bg-gray-200 py-10">
      <div class="flex max-w-screen-lg bg-white p-6 shadow-md mx-6">
        <div class="flex flex-col items-center justify-center">
          <p class="md:w-3/4 w-full p-6 md:text-lg text-justify">
            Baeza Water utilise un système français connecté permettant de
            détecter les fuites d’eau. Nous intervenons sur tout le golfe
            méditerranéen Réaliser des économies de consommation et éviter les
            dégâts des eaux, les fuites imperceptibles et les inondations grâce
            à notre intervention. Pilotable à distance et connecté, notre
            système vous offre une réelle sérénité sur d’éventuelles fuite et
            vous alerte en temps réel.
          </p>
          <nuxt-link
            to="/contact"
            class="mt-4 px-4 py-2 mb-6 text-white text-sm md:text-lg font-bold bg-red-600 hover:bg-red-500 rounded shadow-md"
            >Contactez nous</nuxt-link
          >
        </div>
      </div>
    </div>

    <ImageParallaxLandingPage
      title="Réaliser des économies de consommation"
      img="parallax4.jpg"
    />

    <div class="bg-gray-200 flex justify-center pt-16">
      <div
        class="w-3/4 bg-blue-600 flex flex-col lg:m-2 my-6 p-8 text-white text-center relative rounded shadow-md items-center"
      >
        <div
          class="card__icon rounded absolute flex justify-center items-center z-20 bg-blue-600 shadow-lg"
        >
          <font-awesome-icon class="text-md" :icon="['fas', 'rss']" style="height: 30px;"/>
        </div>
        <div class="md:w-3/4 w-full text-center">
          <h3 class="text-2xl font-semibold mt-8 mb-4">{{ title }}</h3>
          <p class="text-xl font-semibold">
            Évitez les dégats des eaux, les fuites imperceptibles et les
            inondations grâce à notre intervention.
          </p>
          <p class="text-xl my-4 font-semibold">
            Pilotable à distance et connecté, notre système vous offre une
            réelle sérénité sur d'éventuelles fuites et vous alerte en temps
            réel.
          </p>
        </div>
      </div>
    </div>

    <FormQuote />
  </div>
</template>

<script>
import ImageParallaxServicePage from '@/components/ImageParallaxServicePage.vue'
import ImageParallaxLandingPage from '@/components/ImageParallaxLandingPage.vue'
import FormQuote from '@/components/FormQuote.vue'

export default {
  components: {
    ImageParallaxLandingPage,
    ImageParallaxServicePage,
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

.card__icon {
  top: -50px;
  left: calc(50% - 50px);
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
</style>
