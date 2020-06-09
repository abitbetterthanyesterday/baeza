<template>
  <div>
    <ImageParallaxServicePage
      title="Nettoyage industriel"
      img="/parallax12.jpg"
    />

    <div class="flex justify-center bg-gray-200">
      <div
        class="max-w-screen-lg flex flex-wrap items-center justify-center bg-white my-10 p-6 shadow-md mx-6 md:pb-32 pb-12 relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="waves-bg z-10"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#026ab6"
            fill-opacity="1"
            d="M0,64L40,85.3C80,107,160,149,240,181.3C320,213,400,235,480,213.3C560,192,640,128,720,101.3C800,75,880,85,960,122.7C1040,160,1120,224,1200,256C1280,288,1360,288,1400,288L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div class="md:w-1/2 sm:w-full self-start text-red-600 sm:mb-5 z-30">
          <h2 class="text-3xl font-semibold md:mx-5 mb-5">
            Quels que soient vos besoins de nettoyage nous avons la solution.
          </h2>
        </div>
        <div class="md:w-1/2 sm:w-full z-30">
          <p class="text-2xl font-semibold leading-none mb-3"></p>
          <ul>
            <li class="text-lg">
              <span class="text-red-600"
                ><font-awesome-icon
                  class="text-md mr-2"
                  :icon="['fas', 'check']"
                  style="height: 16px; display:inline-block"
                /> </span
              >Hydrocureur
            </li>
            <li class="text-lg">
              <span class="text-red-600"
                ><font-awesome-icon
                  class="text-md mr-2"
                  :icon="['fas', 'check']"
                  style="height: 16px; display:inline-block"
                /> </span
              >Assainissement
            </li>
            <li class="text-lg">
              <span class="text-red-600">
                <font-awesome-icon
                  class="text-md mr-2"
                  :icon="['fas', 'check']"
                  style="height: 16px; display:inline-block"
                /> </span
              >Débouchage
            </li>
            <li class="text-lg">
              <span class="text-red-600"
                ><font-awesome-icon
                  class="text-md mr-2"
                  :icon="['fas', 'check']"
                  style="height: 16px; display:inline-block"
                /> </span
              >Nettoyage haute pression (piscine, puits...)
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ImageParallaxLandingPage
      title="Baeza Water intervient sur tout le bassin méditerranéen"
      img="/parallax15.jpeg"
    />
    <!--     <div class="flex justify-center bg-gray-200 py-10 pt-32 md:pt-16">
      <div
        class="flex max-w-screen-lg bg-red-600 p-6 shadow-md rounded pt-24 relative mx-12"
      >
        <div class="flex flex-col items-center justify-center text-center">
          <div
            class="absolute card__icon_alt bg-white flex justify-center items-center shadow-md"
          >
            <img src="/logo.jpg" class="md:h-16 h-32 md:w-16 w-32" />
          </div>
          <p class="md:w-3/4 w-full mb-6 text-white text-xl font-semibold">
            Baeza Water intervient sur tout le bassin méditerranéen
          </p>
          <p class="md:w-3/4 w-full mb-6 text-white text-xl font-semibold"></p>
        </div>
      </div>
    </div>
 -->
    <!--     <ImageParallaxLandingPage
      title="Quels que soient vos besoins de nettoyage nous avons la solution."
      img="/parallax5.jpg"
    /> -->

    <!--     <div class="bg-gray-200 flex justify-center pt-12">
      <div class="w-3/4 flex flex-wrap md:flex-no-wrap justify-center">
        <div
          class="md:w-1/3 w-full bg-blue-600 flex justify-center items-center my-3"
        >
          <h2
            class="text-center py-12 px-6 text-white font-extrabold text-3xl uppercase h-64 flex items-center bg-cover"
            style="background-image: url(/hautepression.jpeg)"
          >
            Nettoyage haute pression eau chaude
          </h2>
        </div>
        <div
          class="md:w-1/3 w-full bg-blue-600 flex justify-center items-center md:mx-2 my-3 bg-cover"
          style="background-image: url(/broom.jpeg)"
        >
          <h2
            class="text-center py-12 px-6 text-white font-extrabold text-3xl uppercase h-64 flex items-center "
          >
            Balayage
          </h2>
        </div>
        <div
          class="md:w-1/3 w-full bg-blue-600 flex justify-center items-center md:mx-2 my-3 bg-cover"
          style="background-image: url(/green_products.jpg)"
        >
          <h2
            class="text-center py-12 px-6 text-white font-extrabold text-3xl uppercase h-64 flex items-center"
          >
            Produits nettoyants bio
          </h2>
        </div>
      </div>
    </div> -->
    <CardBaeza />
    <FormQuote />
  </div>
</template>

<script>
import ImageParallaxServicePage from '@/components/ImageParallaxServicePage.vue'
import ImageParallaxLandingPage from '@/components/ImageParallaxLandingPage.vue'
import FormQuote from '@/components/FormQuote.vue'
import CardBaeza from '@/components/CardBaeza.vue'

export default {
  components: {
    ImageParallaxLandingPage,
    ImageParallaxServicePage,
    FormQuote,
    CardBaeza
  },
  head() {
    return {
      title: 'Baeza Water - Nettoyage industriel'
    }
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
.card__icon_alt {
  overflow-x: hidden;
  top: -50px;
  left: calc(50% - 50px);
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

@media only screen and (max-width: 600px) {
  .card__icon_alt {
    top: -90px;
    left: calc(50% - 90px);
    border-radius: 50%;
    height: 180px;
    width: 180px;
  }
}

.waves-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
