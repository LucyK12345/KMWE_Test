<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import absauganlagen from '~/data/absauganlagen.json'
import CompanyInfoBlock from '~/components/CompanyInfoBlock.vue'
import PageHero from '~/components/PageHero.vue'


const clair = absauganlagen.filter(p => p.brand === 'clair')
const clairZ = absauganlagen.filter(p => p.brand === 'clair-zubehoer')
const duster   = absauganlagen.filter(p => p.brand === 'duster')

</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
    <PageHero
      title="Absauganlagen"
      subtitle="Wir bieten Absauganlagen von unserer eigenen Linie Clair und von der Firma Duster3000 an. Mobile Lösungen der Luftreinigung in Werkstätten und Lackierbetrieben!"
    />
    
<!-- Clair Info Block -->
    <CompanyInfoBlock
        logo="/images/absauganlagen/clair-logo.jpg"
        alt="Clair"
        title="Absauganlagen Clair von KMWE"
        description="Mit den Clair-Absauganlagen erleichtern wir Ihren Arbeitsalltag, ermöglichen ein ergonomisches Arbeiten, garantieren Ihnen die Einsparung von Zeit und Energie und insbesondere bleibt die Gesundheit der Mitarbeitenden geschützt. Kämpfen Sie mit Farbnebel oder Staub? – Dann ist Clair die perfekte Lösung für Sie."
    />

    <div class="flex justify-center mb-10">
        <NuxtLink to="/products/absauganlagen/clair" class="inline-block">
        <button
            class="btn-kmwe"
        >
            Entdecken Sie die Funktionsweise von Clair
        </button>
        </NuxtLink>
    </div>


<!-- Produkt-Grid Clair-->
    <section v-if="clair.length" class="mb-10" id="modelle">
    <h2 class="width-container pt-8 text-lg text-gray-900"> Clair Modelle</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in clair"
        :key="product.slug"
        :link="`/products/absauganlagen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>

<!-- Produkt-Grid Clair Zubehör-->
    <section v-if="clairZ.length" class="mb-10" id="zubehoer">
    <h2 class="width-container pt-8 text-lg text-gray-900"> Zubehör für Clair</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in clairZ"
        :key="product.slug"
        :link="`/products/absauganlagen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>


    
<!-- Duster Info Block -->
    <CompanyInfoBlock id="duster"
        logo="/images/absauganlagen/duster-logo.png"
        alt="Duster"
        title="Absauganlage Duster 3000"
        description="Die mobile und energiesparende Umluft- Abluftabsauganlage sorgt für eine gereinigte Luft in Ihrem Betrieb. Ob beim Schleifen, Füllern oder Lackieren – der Duster 3000 Downdraft verbessert die Atemluft an Ihrem Arbeitsplatz, indem er Staub, Lösemittel, sowie andere Gift und Geruchstoffe aus der Luft filtert."
    />
    
<!-- Produkt-Grid Duster-->
    <section v-if="duster.length" class="mb-10">
    <h2 class="width-container pt-8 text-lg text-gray-900"> Duster 3000</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in duster"
        :key="product.slug"
        :link="`/products/absauganlagen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>
        
  </main>
</template>