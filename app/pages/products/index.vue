

<template>
  <main class="pt-14">
 <PageHero
      title="Unsere Produkte"
      subtitle="Ob Hebebühnen, RIchtanlagen oder Zubehör - bei uns finden Sie hochwertige Produkte, individuelle Lösungen und umumfänglichen Service."
    />
   <section class="py-16 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  <NuxtLink
    v-for="(product, index) in products"
    :key="index"
    :to="product.link"
    class="bg-gray-100 rounded-lg p-6 flex flex-col justify-between items-center text-center transition hover:scale-[1.02] cursor-pointer"
  >
    <div>
      <h2 class="text-xl text-gray-900 mb-2">{{ product.title }}</h2>
      <p class="text-gray-700 mb-4">{{ product.description }}</p>

      <button class="btn-kmwe">
        Jetzt entdecken
      </button>
    </div>

    <img
      :src="product.image"
      :alt="product.title"
      class="mt-6 w-full h-48 object-contain rounded"
    />
  </NuxtLink>
</div>
  </section>
  </main>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'Hebebühnen',
    description: 'Verfügbar in Überflur und Unterflur sowie diverses Zubehör.',
    link: '/products/hebebuehnen',
    image: '/images/hebebuehnen/fitim1330.png'
  },
  {
    title: 'Richtanlagen',
    description: 'Für präzises Richten in Karosseriebetrieben.',
    link: '/products/richtanlagen',
    image: '/images/richtanlagen/JOLLIFT_FLEX_AT10TONFL08.png'
  },
  {
    title: 'Absauganlagen',
    description: 'Für saubere Luft – mobil und stationär.',
    link: '/products/absauganlagen',
    image: '/images/absauganlagen/clair3000.png'
  },
  {
    title: 'Zugklemmen',
    description: 'Für sicheres Fixieren von Karosserieteilen.',
    link: '/products/zugklemmen',
    image: '/images/zugklemmen/121.png'
  },
  {
    title: 'Schweißtechnik',
    description: 'Punkt- und Widerstandsschweißtechnik für Profis.',
    link: '/products/schweisstechnik',
    image: '/images/produkte/schweisstechnik.jpg'
  },
  {
    title: 'Induktionserwärmer',
    description: 'Effizientes Lösen von Klebeverbindungen.',
    link: '/products/induktionserwaermer',
    image: '/images/produkte/induktion.jpg'
  },
  {
    title: 'Kunststoffschweißgerät',
    description: 'Reparatur von Stoßstangen & Kunststoffteilen.',
    link: '/products/kunststoffschweissgeraet',
    image: '/images/produkte/kunststoff.jpg'
  },
  {
    title: 'Infrarottrockner',
    description: 'Schnelle Trocknung für Spot-Repair & mehr.',
    link: '/products/infrarottrockner',
    image: '/images/produkte/infrarottrockner.jpg'
  },
  {
    title: 'Finishlampen',
    description: 'Perfekte Ausleuchtung für Lackkontrolle.',
    link: '/products/finishlampen',
    image: '/images/produkte/finishlampen.jpg'
  },
  {
    title: 'Zubehör',
    description: 'Ergänzendes Equipment für Ihre Werkstatt.',
    link: '/products/zubehoer',
    image: '/images/produkte/zubehoer.jpg'
  }
]
</script>
