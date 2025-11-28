<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import diverses from '~/data/diverses.json'
</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
    <PageHero
      title="Diverses"
      subtitle="Weitere Produkte und Zubehör, wie universelle Noträder."
    />
  
    <!-- Produkt-Grid -->
    <section
      class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10"
    >
      <ProductCard
        v-for="product in diverses"
        :key="product.slug"
        :link="`/products/diverses/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
    </section>
  </main>
</template>