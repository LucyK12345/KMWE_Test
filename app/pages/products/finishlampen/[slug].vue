<template>
  <ProductDetail
    v-if="product"
    :title="product.title"
    :short-description="product.subtitle"
    :long-description="product.longDescription"
    :image="product.image"
    :images="product.images"
    :specs="product.specs"
  />

  <div v-else class="pt-28 max-w-4xl mx-auto p-6">
    <p>Produkt nicht gefunden.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ProductDetail from '~/components/ProductDetail.vue'
import finishlampen from '~/data/finishlampen.json'

const route = useRoute()
const slug = route.params.slug
const product = finishlampen.find((p) => p.slug === slug)
</script>