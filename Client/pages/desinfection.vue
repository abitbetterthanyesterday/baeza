<template>
  <div>
    <ImageParallaxServicePage title="Désinfection" img="/parallax9.jpg" />
    <CardWave />
    <div class="w-full bg-gray-200">
      <h2
        class="text-center uppercase text-blue-600 text-3xl font-extrabold mb-5"
      >
        Quand demander une intervention?
      </h2>
      <div
        class="w-full bg-fixed bg-center py-12 flex justify-center"
        style="background-image: url(/parallax8.jpg)"
      >
        <div class="w-full md:w-3/4 md:ml-32 mx-6">
          <div
            class="bg-blue-600 md:w-1/2 w-full text-white py-6 px-4 rounded shadow-md text-lg px-6"
          >
            <p>
              Le nettoyage et la désinfection d'un réservoir sont une obligation
              réglementaire du Code de la santé publique. Vous devez l’effectuer
              avant la mise en service puis une fois par an.
            </p>
            <div
              class="flex md:justify-between justify-center mt-6 items-center"
            >
              <p class="hidden md:block">
                Contactez-nous pour obtenir un contrat d'entretien
              </p>
              <nuxt-link
                to="/contact/"
                class="ml-4 px-4 py-2 text-white text-sm font-bold bg-red-600 hover:bg-red-400 rounded flex-shrink-0 shadow-md uppercase"
                >Contactez-nous</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardBaeza />
    <ImageParallaxLandingPage
      title="Nous pouvons aussi vous apporter notre expertise dans ces domaines:"
      :items="[
        { message: 'Inspection caméra de vos canalisations' },
        { message: 'Curage de vos réseaux' },
        { message: 'Débouchage de vos canalisations' }
      ]"
      img="/parallax14.jpg"
    />
    <FormQuote />
  </div>
</template>

<script>
import ImageParallaxServicePage from '@/components/ImageParallaxServicePage.vue'
import ImageParallaxLandingPage from '@/components/ImageParallaxLandingPage.vue'
import FormQuote from '@/components/FormQuote.vue'
import CardWave from '@/components/CardWave.vue'
import CardBaeza from '@/components/CardBaeza.vue'

export default {
  components: {
    ImageParallaxServicePage,
    ImageParallaxLandingPage,
    CardWave,
    FormQuote,
    CardBaeza
  },
  head() {
    return {
      title: 'Baeza Water - Désinfection'
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
