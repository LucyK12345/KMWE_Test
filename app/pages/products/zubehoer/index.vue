<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import zubehoer from '~/data/zubehoer.json'

const verankerung = zubehoer.filter(p => p.brand === 'verankerung')
const zuggeraet = zubehoer.filter(p => p.brand === 'zuggeraet')
const messsystem = zubehoer.filter(p => p.brand === 'messsystem')


</script>

<template>
  <main class="pt-14">
    <!-- Hero Bereich -->
     
    <section class="bg-gray-100 py-12 mb-5">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h1 class="text-3xl md:text-4xl font-semibold mb-4">Zubehör</h1>
        <p class="text-gray-700 text-lg"> Fi.Tim bietet diverses Zubehör für Hebebühnen an        </p>
      </div>
      <div class=" flex justify-center">
       <NuxtLink to="/products/hebebuehnen" class="inline-block mt-6 cursor-pointer">
      <button class="bg-[#597B1C] hover:bg-[#4E6C19] text-white text-sm px-4 py-2 rounded-md transition whitespace-nowrap cursor-pointer"
      >
    Hebebühnen von Fi.Tim entdecken
      </button>
      </NuxtLink>
      </div>
   
    </section>
 <Breadcrumb/> 

    <!-- Produkt-Grid Fi.Tim-->
    <section v-if="verankerung.length" class="mb-10">
    <h2 class="width-container pt-8 text-lg text-gray-900"> Verankerungen</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
    
      <ProductCard
        v-for="product in verankerung"
        :key="product.slug"
        :link="`/products/zubehoer/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>


    <section v-if="zuggeraet.length" class="mb-10">
    <h2 class="width-container pt-8 text-lg text-gray-900"> Zuggeräte</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in zuggeraet"
        :key="product.slug"
        :link="`/products/zubehoer/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>

 <section v-if="messsystem.length" class="mb-10">
    <h2 class="width-container pt-8 text-lg text-gray-900"> Messysteme</h2>
      <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 mb-10"
    >
      <ProductCard
        v-for="product in messsystem"
        :key="product.slug"
        :link="`/products/zubehoer/${product.slug}`"
        :image="product.image"
        :alt="product.title"
        :title="product.title"
        :description="product.subtitle"
      />
      </div>
    </section>


  </main>
</template>