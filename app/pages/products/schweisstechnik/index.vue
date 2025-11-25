<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import PageHero from '~/components/PageHero.vue'
import schweisstechnik from '~/data/schweisstechnik.json'

const prima = schweisstechnik.filter(p => p.brand === 'prima')
const tecna = schweisstechnik.filter(p => p.brand === 'tecna')

</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
      <PageHero
      title="Schweißtechnik"
      subtitle="Wir bieten Produkte zum Schweißen von Prima Srl unt Tecna an. Bei uns finden Sie die passende Lösung."
    />

     <CompanyInfoBlock id="prima"
        logo="/images/schweisstechnik/prima-logo.png"
        alt="prima"
        title="Schweißtechnik von Prima"
        description="Prima entwickelt seit 1993 innovative Schweißgeräte und Plasmaschneider speziell für Karosseriebetriebe, mit dem Ziel, Reparaturen effizienter und körperlich weniger belastend zu machen. Durch kontinuierliche Forschung und zuverlässigen Service bietet das Unternehmen praxisnahe Lösungen für Werkstätten weltweit."
    />
   

    <!-- Produkt-Grid Prima-->
    
<section  v-if="prima.length" class="mb-10">
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in prima"
        :key="product.slug"
        :link="`/products/schweisstechnik/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div> 
    </section>


    <CompanyInfoBlock id="tecna"
        logo="/images/schweisstechnik/tecna-logo.webp"
        alt="tecna"
        title="Schweißtechnik von Tecna"
        description="TECNA befasst sich seit den frühen 70er mit der Widerstandsschweißtechnik. Die Firma produziert Anlagen für den mobilen sowie den stationären Einsatz"
    />
    <!-- Produkt-Grid Tecna-->
    
<section  v-if="prima.length" class="mb-10">
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in tecna"
        :key="product.slug"
        :link="`/products/schweisstechnik/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div> 
    </section>
   
  </main>
</template>