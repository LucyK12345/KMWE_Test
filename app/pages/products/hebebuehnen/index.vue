<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import PageHero from '~/components/PageHero.vue'
import hebebuehnen from '~/data/hebebuehnen.json'

const fitimUe = hebebuehnen.filter(p => p.brand === 'fitim-ueberflur')
const fitimU = hebebuehnen.filter(p => p.brand === 'fitim-unterflur')
const cmo   = hebebuehnen.filter(p => p.brand === 'cmo')
const galtaUe = hebebuehnen.filter(p => p.brand === 'galta-ueberflur')
const galtaU = hebebuehnen.filter(p => p.brand === 'galta-unterflur')

</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
      <PageHero
      title="Hebebühnen"
      subtitle="Wir bieten Hebebühnen von Fi.Tim, Galta und CMO an. Egal ob Überflur oder Unterflur – bei uns finden Sie die passende Lösung."
    />

    <!-- Fitim Info Block -->
     <CompanyInfoBlock id="fitim"
        logo="/images/hebebuehnen/fitim-logo.svg"
        alt="fitim"
        title="Hebebühnen von Fi.Tim"
        description="Fi.Tim steht seit über 30 Jahren für Innovation und Qualität im Bereich Karosseriebühnen und Richtsysteme. Das italienische Unternehmen entwickelt moderne Hebebühnen, die Reparaturen effizienter und komfortabler machen. Zahlreiche Patente und internationale Auszeichnungen unterstreichen die technische Präzision und Zuverlässigkeit der Fi.Tim-Produkte."
    />
   

    <!-- Produkt-Grid Fi.Tim-->
     

<section id="fitimUe" v-if="fitimUe.length" class="mb-10">
    <h2 class="width-container text-lg text-gray-900 pt-8"> Überflur Hebebühnen</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
    
      <ProductCard
        v-for="product in fitimUe"
        :key="product.slug"
        :link="`/products/hebebuehnen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />

      </div> 
    </section>

    <section id="fitimU" v-if="fitimU.length" class="mb-10">
    <h2 class="width-container text-lg text-gray-900 pt-8"> Unterflur Hebebühnen</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
    
      <ProductCard
        v-for="product in fitimU"
        :key="product.slug"
        :link="`/products/hebebuehnen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />

      </div> 
    </section>


        <h2 id="fitimZ" class="width-container text-lg text-gray-900 py-8"> Zubehör von Fi.Tim</h2>
      <div class="width-container mb-16">

       <NuxtLink to="zubehoer" >
        <button class="btn-kmwe">
          Jetzt entdecken
        </button>
      </NuxtLink>
    </div>


    <!-- CMO Info Block -->

    <CompanyInfoBlock id="cmo"
        logo="/images/hebebuehnen/cmo-logo.png"
        alt="cmo"
        title="Hebebühnen von CMO"
        description="CMO steht für langlebige, technisch präzise Produkte und beliefert führende Automobilhersteller weltweit. Mit einem zertifizierten Qualitätsmanagement nach UNI EN ISO 9001:2008 garantiert CMO höchste Zuverlässigkeit."
    />

    <!-- Produkt-Grid CMO-->
    <section v-if="cmo.length" class="mb-10">
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in cmo"
        :key="product.slug"
        :link="`/products/hebebuehnen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>

<!-- Galta Info Block -->
    <CompanyInfoBlock id="galta"
        logo="/images/hebebuehnen/cmo-logo.png"
        alt="galta"
        title="Hebebühnen von Galta"
        description="CMO steht für langlebige, technisch präzise Produkte und beliefert führende Automobilhersteller weltweit. Mit einem zertifizierten Qualitätsmanagement nach UNI EN ISO 9001:2008 garantiert CMO höchste Zuverlässigkeit."
    />

    <!-- Produkt-Grid Galta-->
    <section v-if="fitimUe.length" class="mb-10" id="galtaUe">
    <h2 class="width-container text-lg text-gray-900 pt-8"> Überflur Hebebühnen</h2>

      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10">

      <ProductCard
        v-for="product in fitimUe"
        :key="product.slug"
        :link="`/products/hebebuehnen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>
  </main>
</template>