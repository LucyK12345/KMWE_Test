<script setup lang="ts">
type Produkt = {
  slug: string
  title: string
  subtitle: string
  image: string
}

import ProductCard from '~/components/ProductCard.vue'
import hebebuehnenRaw from '~/data/hebebuehnen.json'
import absauganlagenRaw from '~/data/absauganlagen.json'
import richtanlagenRaw from '~/data/richtanlagen.json'
import messen from '~/data/messen.json'

const hebebuehnen = hebebuehnenRaw as Produkt[]
const absauganlagen = absauganlagenRaw as Produkt[]
const richtanlagen = richtanlagenRaw as Produkt[]

const hebebuehne = hebebuehnen[4]
const absauganlage = absauganlagen[3]
const richtanlage = richtanlagen[0]

const upcoming = messen.filter(m => m.type === 'upcoming')
const messe1 = upcoming[0] || null
const messe2 = upcoming[1] || null

</script>


<template>
    
    <!--Welcome Banner-->
    
 <section
  class="relative w-full h-[60vh] bg-[url('/images/TESTFOTO.jpeg')] bg-cover bg-center mt-10"
>
 <div class="absolute left-6 right-6 md:left-20 md:right-20 top-1/3 z-10">
  <h1 class="text-6xl font-bold text-white mb-4">KMWE</h1>
  <p class="text-xl text-gray-100 mb-6">Ihr Partner für Maschinenbau und Technik</p>
  <NuxtLink to="/leistungen">
    <button class="btn-kmwe">
      Jetzt entdecken
    </button>
  </NuxtLink>
</div>
</section>
  <!--Welcome Text-->
 <section class="max-w-5xl mx-auto text-center py-8 px-6">
  <p class="text text-gray-800 leading-relaxed">
    Seit 1994 Jahren sind wir in dem Bereich Werkstatteinrichtung in ganz Deutschland, 
    Österreich und der deutschsprachigen Schweiz tätig. Mit den Umluft-Absauganlagen der reihe Clair Weltweit. Unser Sortiment umfasst vor allem 
    Produkte für den Karosserie- und Lackierfachbetrieb. 
  </p>
</section>
<!--Unsere Empfehlungen-->

<div class="mt-8 mb-15 px-4 bg-[#597B1C] py-8">
    <h1 class="pl-21 text-2xl font-bold text-gray-100 mb-4">
  Unsere Empfehlungen
</h1>
<section class="max-w-7xl mx-auto py-1 px-1 grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Produkt 1 -->
 <ProductCard
 v-if="hebebuehne"
      :link="`/products/hebebuehnen/${hebebuehne.slug}`"
      :image="hebebuehne.image"
      :alt="hebebuehne.title"
      :title="hebebuehne.title"
      :description="hebebuehne.subtitle"
    />

  <!-- Produkt 2 -->
 <ProductCard
 v-if="absauganlage"
      :link="`/products/absauganlagen/${absauganlage.slug}`"
      :image="absauganlage.image"
      :alt="absauganlage.title"
      :title="absauganlage.title"
      :description="absauganlage.subtitle"
    />

  <!-- Produkt 3 -->
  <ProductCard
 v-if="richtanlage"
      :link="`/products/richtanlagen/${richtanlage.slug}`"
      :image="richtanlage.image"
      :alt="richtanlage.title"
      :title="richtanlage.title"
      :description="richtanlage.subtitle"
    />
</section>
</div>

<!-- Menüpunkte -->
<section class="bg-[#f0f0f0] text-white py-1 px-4">

<div class="mt-8 mb-8">
    <h1 class="pl-21 text-2xl font-bold text-gray-900 mb-4">
  Entdecken Sie unser Angebot
</h1>
<section class="w-full  py-4 px-4 flex flex-wrap justify-center gap-10">
  <NuxtLink to="/about">
    <button class="btn-kmwe w-48">
      Über uns
    </button>
  </NuxtLink>

  <NuxtLink to="/messen">
    <button class="btn-kmwe w-48">
      Messen
    </button>
  </NuxtLink>

  <NuxtLink to="/products">
    <button class="btn-kmwe w-48">
      Produkte
    </button>
  </NuxtLink>

  <NuxtLink to="/contact">
    <button class="btn-kmwe w-48">
      Kontakt
    </button>
  </NuxtLink>
</section>
</div>
</section>

<!--Messe 1-->
<section
  v-if="messe1"
  class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4"
>
  <!-- Bild links -->
  <div class="h-72 w-full bg-white flex items-center justify-center rounded overflow-hidden shadow">
    <img
      :src="messe1.image"
      :alt="messe1.title"
      class="h-full object-contain"
    />
  </div>

  <!-- Text rechts -->
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ messe1.title }}</h2>
    <ul class="text-gray-700 text-base space-y-2 mb-6">
      <li v-if="messe1.location"><strong>Ort:</strong> {{ messe1.location }}</li>
      <li v-if="messe1.date"><strong>Datum:</strong> {{ messe1.date }}</li>
      <li v-if="messe1.booth"><strong>Stand:</strong> {{ messe1.booth }}</li>
    </ul>
    <NuxtLink to="/messen">
      <button class="btn-kmwe">Mehr erfahren</button>
    </NuxtLink>
  </div>
</section>

<!--Messe 2-->
<section
  v-if="messe2"
  class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4"
>
  <!-- Text links -->
  <div class="text-right">
    <h2 class="text-2xl font-bold mb-4">{{ messe2.title }}</h2>
    <ul class="text-gray-700 text-base space-y-2 mb-6">
      <li v-if="messe2.location"><strong>Ort:</strong> {{ messe2.location }}</li>
      <li v-if="messe2.date"><strong>Datum:</strong> {{ messe2.date }}</li>
      <li v-if="messe2.booth"><strong>Stand:</strong> {{ messe2.booth }}</li>
    </ul>
    <NuxtLink to="/messen">
      <button class="btn-kmwe">Mehr erfahren</button>
    </NuxtLink>
  </div>

  <!-- Bild rechts -->
  <div class="h-72 w-full bg-white flex items-center justify-center rounded overflow-hidden shadow">
    <img
      :src="messe2.image"
      :alt="messe2.title"
      class="h-full object-contain"
    />
  </div>
</section>



<!-- Reihe 2: Bild links (Desktop) / Bild zuerst (Mobil) -->
<section class="w-full py-12 px-4 space-y-16">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
  <div class="order-1 h-72 bg-[url('/images/TESTFOTO.jpeg')] bg-cover w-full rounded"></div>
  <div class="order-2 max-w-md">
    <h2 class="text-2xl font-bold mb-2">KMWE ihr führender Partner oder so</h2>
    <p class="text-gray-700 mb-6">
      Ein so tolles Unternehmen, das schon ewig existiert und so weiter... 
      Der Text von der Über-uns-Seite.
    </p>
    <NuxtLink to="/about">
      <button class="btn-kmwe">
        Jetzt entdecken
      </button>
    </NuxtLink>
  </div>
</div>

</section>
</template>

