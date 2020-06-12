<template>
  <div>
    <ImageParallaxLandingPage
      title="Nettoyer et désinfecter votre réservoir est primordial pour votre santé."
      img="/parallax3.jpg"
    />
    <div class="flex justify-center bg-gray-200 py-10 px-2">
      <div
        class="services flex flex-wrap md:flex-no-wrap justify-around max-w-screen-lg"
      >
        <ServiceCard
          title="DÉSINFECTION"
          body="Nous réalisons le nettoyage et la désinfection de vos réservoirs et réseaux d’eau pour vous garantir une eau saine. Désinfection également pour le COVID-19 : véhicule, bureau et maison avec produit biocide."
          img="/desinfection.jpeg"
          topage="/desinfection/"
        />
        <ServiceCard
          title="DÉTECTION DE FUITE"
          body="Faites des économies de consommation et empêchez les dégâts des eaux et les fuites imperceptibles."
          img="/ecodo.png"
          topage="/detection-de-fuite/"
        />
        <ServiceCard
          title="NETTOYAGE INDUSTRIEL"
          body="Pour les professionnels, nous avons une solution quel que soit votre besoin de nettoyage."
          img="/nettoyage_indus.jpeg"
          topage="/nettoyage-industriel/"
        />
      </div>
    </div>
    <ImageParallaxLandingPage
      title="Nous pouvons aussi vous apporter notre
    expertise en assainissement :"
      :items="[
        { message: 'Inspection caméra de vos canalisations' },
        { message: 'Curage de vos réseaux' },
        { message: 'Débouchage de vos canalisations' }
      ]"
      img="/parallax1.jpg"
    />
    <CardBaeza />
    <ImageParallaxLandingPage
      title="Nous travaillons pour les professionnels et les particuliers."
      img="/parallax11.jpg"
    />
    <div class="flex justify-center bg-gray-200 py-10">
      <div class="max-w-screen-lg flex flex-col items-center justify-center">
        <h2
          class="mb-6 text-3xl font-black text-blue-600 mb-12 uppercase text-center"
        >
          Pourquoi nous choisir ?
        </h2>
        <div
          class="flex flex-col md:flex-row justify-around md:justify-between max-w-screen-lg md:mx-0 mx-6 md:mx-0"
        >
          <CardNousChoisir
            title="expertise"
            logo="medal"
            body="Spécialiste en assainissement depuis plus de 10 ans."
          />
          <CardNousChoisir
            title="devis gratuit"
            logo="file-invoice"
            body="Nous délivrons gratuitement un devis clair et détaillé répondant à vos besoins."
          />
          <CardNousChoisir
            title="qualité du travail"
            logo="check-circle"
            body="Votre satisfaction et votre sécurité sont nos priorités."
          />
          <CardNousChoisir
            title="conseils"
            logo="comment-alt"
            body="Nous vous conseillons au mieux pour répondre à vos besoins et à votre budget."
          />
        </div>
      </div>
    </div>
    <ImageParallaxLandingPage
      title="Parce que nos équipes sont compétentes, nous possédons : "
      :items="[
        {
          message: `Le certificat d'aptitude au travail en espace confiné (CATEC) (Détecteur tri-gaz O2, CO & H2S)`
        },
        { message: 'L’habilitation au travail en hauteur' },
        {
          message:
            'L’habilitation au travail en profondeur (plongeur scaphandrier)'
        }
      ]"
      img="/parallax6.jpg"
    />
    <CardWave />
    <FormQuote />
    <div class="bg-gray-200 justify-center flex py-6 pb-12">
      <div
        class="w-full md:w-3/4 px-6 text-gray italic text-lg text-gray-600 text-center relative"
      >
        <font-awesome-icon
          class="text-md m-2"
          :icon="['fas', 'quote-left']"
          style="height: 25px"
        />Le nettoyage et la désinfection d'un réservoir sont une obligation
        réglementaire du Code de la santé publique. Article R1321-56, modifié
        par Décret n°2010-344 du 31 mars 2010 - art. 37 Les réseaux et
        installations définis aux 1° et 2° de l'article R. 1321-43 doivent être
        nettoyés, rincés et désinfectés avant toute mise ou remise en
        service.... Les réservoirs équipant ces réseaux et installations doivent
        être vidés, nettoyés, rincés et désinfectés au moins une fois par
        an.<font-awesome-icon
          class="text-md m-2 absolute right-0"
          :icon="['fas', 'quote-right']"
          style="height: 25px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageParallaxLandingPage from '@/components/ImageParallaxLandingPage'
import ServiceCard from '@/components/ServiceCard'
import CardNousChoisir from '@/components/CardNousChoisir'
import FormQuote from '@/components/FormQuote.vue'
import CardWave from '@/components/CardWave.vue'
import CardBaeza from '@/components/CardBaeza.vue'

export default {
  components: {
    ImageParallaxLandingPage,
    ServiceCard,
    CardNousChoisir,
    FormQuote,
    CardWave,
    CardBaeza
  },
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  },
  head() {
    return {
      title: 'Baeza water - Votre expert nettoyage et désinfection'
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
