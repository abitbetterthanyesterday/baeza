<template>
  <div>
    <ImageParallaxServicePage
      title="Nettoyage industriel"
      img="parallax12.jpg"
    />

    <div class="flex justify-center bg-gray-200 py-10 pt-32 md:pt-16">
      <div
        class="flex max-w-screen-lg bg-red-600 p-6 shadow-md rounded pt-24 relative mx-12"
      >
        <div class="flex flex-col items-center justify-center text-center">
          <div
            class="absolute card__icon bg-white flex justify-center items-center shadow-md"
          >
            <img src="LOGO.jpg" class="md:h-16 h-32 md:w-16 w-32" />
          </div>
          <p class="md:w-3/4 w-full mb-6 text-white text-xl font-semibold">
            Baeza Water intervient sur bassin méditerranéen
          </p>
          <p class="md:w-3/4 w-full mb-6 text-white text-xl font-semibold"></p>
        </div>
      </div>
    </div>

    <ImageParallaxLandingPage
      title="Quelque soit vos besoins de nettoyage nous avons la solution"
      img="parallax5.jpg"
    />

    <div class="bg-gray-200 flex justify-center pt-12">
      <div class="w-3/4 flex flex-wrap md:flex-no-wrap justify-center">
        <div
          class="md:w-1/3 w-full bg-blue-400 flex justify-center items-center my-3"
        >
          <h2
            class="text-center py-12 px-6 text-white font-extrabold text-3xl uppercase h-64 flex items-center bg-cover"
            style="background-image: url(hautepression.jpeg)"
          >
            Nettoyage haute pression eau chaude
          </h2>
        </div>
        <div
          class="md:w-1/3 w-full bg-blue-400 flex justify-center items-center md:mx-2 my-3 bg-cover"
          style="background-image: url(broom.jpeg)"
        >
          <h2
            class="text-center py-12 px-6 text-white font-extrabold text-3xl uppercase h-64 flex items-center "
          >
            Balayage
          </h2>
        </div>
        <div
          class="md:w-1/3 w-full bg-blue-400 flex justify-center items-center md:mx-2 my-3 bg-cover"
          style="background-image: url(green_products.jpg)"
        >
          <h2
            class="text-center py-12 px-6 text-white font-extrabold text-3xl uppercase h-64 flex items-center"
          >
            Produits nettoyants bio
          </h2>
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

<style scope>
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
  overflow-x: hidden;
  top: -50px;
  left: calc(50%-50%);
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

@media only screen and (max-width: 600px) {
  .card__icon {
    top: -90px;
    left: calc(50%-90px);
    border-radius: 50%;
    height: 180px;
    width: 180px;
  }
}
</style>
