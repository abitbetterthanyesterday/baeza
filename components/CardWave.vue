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
          fill="#006AB6"
          fill-opacity="1"
          d="M0,256L80,218.7C160,181,320,107,480,112C640,117,800,203,960,224C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div class="md:w-1/2 sm:w-full self-start text-red-600 sm:mb-5 z-30">
        <h2 class="text-3xl font-semibold md:mx-5 mb-5">
          Pourquoi nettoyer en profondeur les installations de distribution
          d'eau ?
        </h2>
      </div>
      <div class="md:w-1/2 sm:w-full z-30">
        <p class="text-2xl font-semibold leading-none mb-3">
          Baeza Water vous offre une qualité d'eau optimale en éliminant :
        </p>
        <ul>
          <li class="text-lg">
            <span class="text-red-600">
              <font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Les germes pathogènes
          </li>
          <li class="text-lg">
            <span class="text-red-600">
              <font-awesome-icon
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
            <span class="text-red-600">
              <font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Désinfection COVID-19
          </li>
          <li class="text-lg">
            <span class="text-red-600">
              <font-awesome-icon
                class="text-md mr-2"
                :icon="['fas', 'check']"
                style="height: 16px; display:inline-block"
              /> </span
            >Désinfection canalisation
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
