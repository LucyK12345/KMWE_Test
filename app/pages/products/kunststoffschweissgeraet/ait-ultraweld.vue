
<template>
     <main class="pt-14">
      <!-- Hero Bereich -->
      <section class="bg-gray-100 py-12">
        <div class="max-w-4xl mx-auto text-center px-4">
         <h1 class="text-3xl font-bold mb-4">Kunststoffschweißgerät AIT Ultraweld</h1>          
         <p class="text-gray-700 text-lg">
          Ideal für die Reparatur von Kunststoffen</p>
        </div>
      </section>
</main>
 <section class="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <!-- 🔹 Linke Seite: Bilderkarussell -->
    <div class="relative">
      <div class="overflow-hidden rounded-xl shadow-md">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="`Ultraweld Bild ${index + 1}`"
          v-show="currentImage === index"
          class="w-full h-[400px] object-cover transition-opacity duration-700"
        />
      </div>

      <!-- Pfeile -->
      <button
        @click="prevImage"
        class="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
      >
        ‹
      </button>
      <button
        @click="nextImage"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
      >
        ›
      </button>

      <!-- Punkte -->
      <div class="flex justify-center mt-4 space-x-2">
        <span
          v-for="(image, index) in images"
          :key="index"
          @click="currentImage = index"
          :class="[
            'w-3 h-3 rounded-full cursor-pointer transition',
            currentImage === index ? 'bg-[#C3B500]' : 'bg-gray-300'
          ]"
        ></span>
      </div>
    </div>

    <!-- 🔹 Rechte Seite: Text -->
    <div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">ULTRAWELD</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">
        <strong>ULTRAWELD</strong> ist das Ultraschall-Kunststoffschweißsystem, mit dem sich Kunststoffe reparieren lassen –
        und zwar mit derselben Technologie, die auch bei der Herstellung von Originalteilen in der Automobilindustrie eingesetzt wird.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">Einsatzbereiche</h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-1">
        <li>Stoßfänger</li>
        <li>Stoßstangenmasken</li>
        <li>Innenverkleidungen der Türen</li>
        <li>Halterungen für Parksensoren</li>
        <li>BSD-Halterungen</li>
        <li>Scheinwerferhalterungen</li>
        <li>Kunststoffnieten</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">Stärken</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Einstellbare Schweißzeiten</li>
        <li>Touch-Bedienoberfläche</li>
        <li>Unterstützung für Zubehör</li>
        <li>1,1 m Schweißkabel</li>
        <li>1 Titan-Sonotrode, 75 mm, 12-polig</li>
        <li>1 Inbusschlüssel 2,5 mm</li>
        <li>1 Gewindestift</li>
      </ul>
    </div>
  </section>

  </template>
<script setup>
import { ref } from 'vue'

// Beispielbilder (du kannst sie ersetzen)
const images = [
  '/images/ultraweld1.jpg',
  '/images/ultraweld2.jpg',
  '/images/ultraweld3.jpg'
]

const currentImage = ref(0)

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length
}

const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length
}
</script>

<style scoped>
button {
  font-size: 1.5rem;
  line-height: 1;
}
</style>