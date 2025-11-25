<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import zugklemmen from '~/data/zugklemmen.json'
</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
    <PageHero
      title="Zugklemmen von Stanzani"
      subtitle="Qualitativ hochwertige Profi-Produkte aus Italien für den Karosseriebau."
    />

    <!-- Stanzani Info Block -->
      <CompanyInfoBlock
        logo="/images/zugklemmen/stanzani-logo.png"
        alt="stanzani"
        title="Seit fast 50 Jahren fertigt Stanzani zuverlässige Produkte für den Karosseriebau"
        description="Das familiengeführte Unternehmen aus Italien steht für handwerkliche Präzision, langlebige Materialien und praxisnahe Lösungen. Die robusten Zugklemmen werden weltweit von Werkstätten eingesetzt und sind für ihre einfache Handhabung und hohe Belastbarkeit bekannt."
    />
    <!-- Produkt-Grid -->
    <section
      class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10"
    >
      <ProductCard
        v-for="product in zugklemmen"
        :key="product.slug"
        :link="`/products/zugklemmen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
    </section>
  </main>
</template>