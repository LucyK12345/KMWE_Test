<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import PageHero from '~/components/PageHero.vue'
import hebebuehnen from '~/data/richtanlagen.json'

const Ue = hebebuehnen.filter(p => p.brand === 'ueberflur')
const U = hebebuehnen.filter(p => p.brand === 'unterflur')


</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
      <PageHero
      title="Richtanlagen"
      subtitle="Wir bieten Richtanlagen von Fi.Tim an. Egal ob Überflur oder Unterflur – bei uns finden Sie die passende Lösung."
    />

    <!-- Fitim Info Block -->
     <CompanyInfoBlock
        logo="/images/hebebuehnen/fitim-logo.svg"
        alt="fitim"
        title="Richtanlagen von Fi.Tim"
        description="Fi.Tim steht seit über 30 Jahren für Innovation und Qualität im Bereich Karosseriebühnen und Richtsysteme. Das italienische Unternehmen entwickelt moderne Richtanlagen, die Reparaturen effizienter und komfortabler machen. Zahlreiche Patente und internationale Auszeichnungen unterstreichen die technische Präzision und Zuverlässigkeit der Fi.Tim-Produkte."
    />
   

    <!-- Produkt-Grid Fi.Tim-->
     
    <section v-if="Ue.length" class="mb-10">
      <h2 id="fitimUe" class="width-container text-lg text-gray-900 pt-8"> Überflur Richtanlagen</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
    
      <ProductCard
        v-for="product in Ue"
        :key="product.slug"
        :link="`/products/richtanlagen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>
        <section id="fitimU" v-if="U.length" class="mb-10">
    <h2 class="width-container text-lg text-gray-900 pt-8"> Unterflur Richtanlagen</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
    
      <ProductCard
        v-for="product in U"
        :key="product.slug"
        :link="`/products/richtanlagen/${product.slug}`"
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


  </main>
</template>