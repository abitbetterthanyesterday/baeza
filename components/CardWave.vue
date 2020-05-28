<template>
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
          fill="#0099ff"
          fill-opacity="1"
          d="M0,64L40,85.3C80,107,160,149,240,181.3C320,213,400,235,480,213.3C560,192,640,128,720,101.3C800,75,880,85,960,122.7C1040,160,1120,224,1200,256C1280,288,1360,288,1400,288L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div class="md:w-1/2 sm:w-full self-start text-red-600 sm:mb-5 z-30">
        <h2 class="text-3xl font-semibold md:mx-5 mb-5">
          Pourquoi nettoyer en profondeur les installations de distributions
          d'eau?
        </h2>
      </div>
      <div class="md:w-1/2 sm:w-full z-30">
        <p class="text-2xl font-semibold leading-none mb-3">
          Baeza waters vous offre une qualité d'eau optimale en éliminant:
        </p>
        <ul>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Les germes pathogènes
          </li>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Les sources de contaminations microbiennes
          </li>
          <li class="text-lg">
            <span class="text-red-600">
              <font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Les matières étrangères
          </li>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Désinfection covid 19
          </li>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Nettoyage locaux par brumisateur thermique ou électrique
          </li>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Vitre vitrine
          </li>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Fin de chantier
          </li>
          <li class="text-lg">
            <span class="text-red-600"
              ><font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Spécifique (décès, syndrome de diogène…)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.waves-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
