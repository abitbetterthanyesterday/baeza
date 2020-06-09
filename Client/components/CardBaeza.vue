<template>
  <div class="flex justify-center bg-gray-200 py-10 px-6">
    <div class="flex flex-wrap max-w-screen-lg bg-white p-6 shadow-md">
      <div
        class="flex justify-center items-center sm: w-full md:w-1/3 mb-6 md:my-8"
      >
        <img src="/logo.jpg" class="h-48 w-48" />
      </div>
      <div
        class="md:w-2/3 sm:w-full flex flex-col items-center justify-center text-lg text-center"
      >
        <p>
          Baeza Water est un expert dans le nettoyage et la désinfection des
          réseaux et réservoirs d'eau pour professionnels et particuliers. Nous
          intervenons rapidement sur les départements du Gard, Hérault, Var,
          Bouches du Rhône.
        </p>
        <nuxt-link
          to="/desinfection/"
          class="mt-6 px-4 py-2 text-white font-bold bg-red-600 hover:bg-red-400 rounded shadow-md uppercase"
          >En savoir plus</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
