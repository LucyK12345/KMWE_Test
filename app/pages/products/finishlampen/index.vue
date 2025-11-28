<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import finishlampen from '~/data/finishlampen.json'
</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
    <PageHero
      title="Finishlampen"
      subtitle="..."
    />

    <!--Info Block -->
      <CompanyInfoBlock
        logo="/images/lacktrocknung/logo_tecopoint_asco3.webp"
        alt="tecopoint"
        title="tecoPoint - Asco3"
        description="Hersteller mit langjähriger Erfahrung für Infrarottrockner."
    />
    <!-- Produkt-Grid -->
    <section
      class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10"
    >
      <ProductCard
        v-for="product in finishlampen"
        :key="product.slug"
        :link="`/products/finishlampen/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
    </section>
  </main>
</template>