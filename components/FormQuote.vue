<template>
  <div class="flex flex-col justify-center items-center bg-gray-200 pb-12 ">
    <h2
      class="text-blue-600 text-3xl font-bold pt-6 pb-10 uppercase text-center"
    >
      Demandez un devis gratuit
    </h2>
    <div
      class="max-w-screen-lg flex items-stretch justify-center bg-white shadow-md"
    >
      <div class="w-1/2 bg-red-600 text-white p-12 hidden lg:block">
        <h3 class="text-3xl font-bold">
          Nous sommes à l'écoute et réactifs pour répondre à vos besoins.
        </h3>
        <p class="pt-12 pb-6 text-xl">
          Nous vous garantissons un travail de qualité, exécuté dans les plus
          brefs délais
        </p>
        <p class="pb-16 text-xl">
          La confiance de nos clients est primordial, il vous sera donc remis un
          rapport et diverses photos avant/après
        </p>
        <div class="flex justify-center pt-2">
          <nuxt-link
            to="/contact/"
            class="mt-4 px-6 py-4 text-red-600 text-2xl font-bold bg-white text-red-400 hover:bg-red-200 hover:text-white rounded shadow-md"
            >Contactez nous</nuxt-link
          >
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative flex justify-center">
        <h3
          class="bg-blue-600 text-center text-2xl text-white font-bold absolute top-0 w-full py-6 shadow-md z-20"
        >
          Devis | Contact
        </h3>
        <div
          class="w-full bg-gray-500 p-12 md:px-12 shadow-md pt-32 relative"
          :style="{ 'background-image': 'url(parallax1.jpg)' }"
        >
          <form>
            <div class="flex justify-center items-center py-2">
              <div
                class="w-1/3 text-white text-center bg-red-600 p-2 rounded-l"
              >
                <label>Votre nom</label>
              </div>
              <div class="w-2/3">
                <input
                  placeholder="Nom prénom"
                  class="w-full p-2 rounded-r"
                  type="text"
                />
              </div>
            </div>
            <div class="flex justify-center items-center py-2">
              <div
                class="w-1/3 text-white text-center bg-red-600 p-2 rounded-l"
              >
                <label>Téléphone</label>
              </div>
              <div class="w-2/3">
                <input
                  placeholder="Votre numéro de téléphone"
                  class="w-full p-2 rounded-r"
                  type="text"
                />
              </div>
            </div>
            <div class="flex justify-center items-center py-2">
              <div
                class="w-1/3 text-white text-center bg-red-600 p-2 rounded-l"
              >
                <label>Email</label>
              </div>
              <div class="w-2/3">
                <input
                  placeholder="Votre addresse e-mail"
                  class="w-full p-2 rounded-r"
                  type="text"
                />
              </div>
            </div>
            <div class="flex justify-center items-center py-2">
              <div class="w-full">
                <textarea
                  placeholder="Précisez votre demande"
                  class="w-full p-2 h-40 rounded"
                  rows="10"
                  cols="50"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <nuxt-link
                to="/contact/"
                class="mt-4 px-6 py-4 text-white text-2xl font-bold text-white bg-red-600 hover:bg-red-400 rounded shadow-md"
                >Envoyer</nuxt-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
