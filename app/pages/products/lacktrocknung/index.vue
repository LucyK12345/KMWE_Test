<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import lacktrocknung from '~/data/lacktrocknung.json'
</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
    <PageHero
      title="Lacktrocknung"
      subtitle="Infrarottrockner von TECOPOINT"
    />

    <!--Info Block -->
      <CompanyInfoBlock
        logo="/images/lacktrocknung/logo_tecopoint_asco3.webp"
        alt="tecopoint"
        title="TecoPoint - Asco3"
        description="TecoPoint von Asco 3 aus Italien bietet eine innovative Produktpalette von Schweißen bis Infrarot an. Seit 2003 hat sich die Marke im Karosseriebereich etabliert."
    />
    <!-- Produkt-Grid -->
    <section
      class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10"
    >
      <ProductCard
        v-for="product in lacktrocknung"
        :key="product.slug"
        :link="`/products/lacktrocknung/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
    </section>
  </main>
</template>