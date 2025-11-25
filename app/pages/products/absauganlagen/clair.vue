<template>
    <main class="pt-14">
    <PageHero
          title="So funktioniert Clair"
          subtitle="Die mobile Lösung der Luftreinigung in Werkstätten und Lackierbetrieben!"
    />

<!-- Einleitung -->
    <section class="mb-12 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  <!-- Linker Textbereich -->
  <div>
    <p class="text-gray-700">
      Die CLAIR Absauganlage sorgt für eine effektive Abscheidung von Farbnebel, Staub und sonstigen Schadstoffen in Werkstätten und Lackierbereichen. Sie bietet ergonomisches Arbeiten, schützt die Gesundheit der Mitarbeitenden und spart Energie.
    </p>
    <ul class="mt-6 text-left list-disc list-inside text-gray-700">
      <li>Effiziente Absaugung von Farb- und Staubpartikeln</li>
      <li>Reduzierung gesundheitsgefährdender Stoffe in der Luft</li>
      <li>Verbesserung der Arbeitsqualität und Sicherheit</li>
      <li>Energieeinsparung durch durchdachte Luftstromführung</li>
      <li>Einfache Integration in bestehende Arbeitsumgebungen</li>
    </ul>
  </div>

  <!-- Carousel mit Unterüberschriften -->
      <div class="relative bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div
          v-for="(item, i) in carouselImages"
          :key="i"
          v-show="current === i"
          class="w-full h-[380px] bg-white p-3 transition-opacity duration-300"
        >
          <img :src="item.src" :alt="item.alt" class="w-full h-[330px] object-contain mb-3" loading="lazy" />
          <h3 class="text-sm font- text-center text-gray-800">{{ item.caption }}</h3>
        </div>

        <!-- Pfeile -->
        <button @click="prev" class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-9 h-9 flex items-center justify-center shadow">‹</button>
        <button @click="next" class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-9 h-9 flex items-center justify-center shadow">›</button>

        <!-- Punkte -->
        <div class="flex justify-center gap-2 py-4 bg-white">
          <button
            v-for="(item, i) in carouselImages"
            :key="i"
            @click="current = i"
            :class="['w-2.5 h-2.5 rounded-full', current === i ? 'bg-[#C3B500]' : 'bg-gray-300']"
          />
        </div>
      </div>
</section>


<!-- Bild mit Luftstrom + Beschreibung -->
    <section class="bg-gray-100 py-16 px-4 mb-12 ">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <!--Links-->
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <img src="/images/absauganlagen/clair/Clair_Pfeile.JPG" alt="CLAIR Luftstrom" class="rounded-lg shadow-md w-150 h-full flex items-center justify-center text-white font-bold text-lg" />
      </div>
      <!--Rechts-->
      <div class="pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <h2 class="text-2xl  text-gray-900 mb-4">So funktioniert die Luftführung bei CLAIR</h2>
        <p class="text-gray-700 leading-relaxed">
          Die CLAIR Anlage nutzt eine vertikale Luftführung: Frischluft wird von unten nach oben durch den Arbeitsbereich gezogen, dabei werden Schadstoffe effizient erfasst und in mehrstufigen Filtern abgeschieden. Dies sorgt für einen sauberen Luftstrom und gleichbleibende Arbeitsbedingungen.
        </p>
      </div>
      </div>
    </section>

    <!-- Einsatzmöglichkeiten mit Bildern -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <h1 class="text-2xl  mb-4 mt-10text-gray-900 ">
  Einsatzmöglichekiten de Clair-Absauganlagen
    </h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(img, index) in usageImages" :key="index" class="text-center">
                <div class="aspect-square overflow-hidden rounded-lg shadow">
                <img
                    :src="img.src"
                    :alt="img.alt"
                    class="w-full h-full object-cover"
                />
                </div>
    <p class="mt-2 text-sm text-gray-600">{{ img.caption }}</p>
    </div>
    </div>
    </section>

    <!-- PDF Schadstoffliste -->
     
    <section class="py-16 px-4  bg-gray-100">
      <div class="max-w-7xl mx-auto">
    <h1 class="text-2xl mt-10text-gray-900 mb-4"> Schadstoffliste </h1>      <p class="text-gray-700 leading-relaxed mb-4">Die detaillierte Schadstoffliste können Sie hier als PDF einsehen:</p>
      <a
        href="/pdf/clair-schadstoffliste.pdf"
        target="_blank"
        class="inline-block bg-[#597B1C] hover:bg-[#4E6C19] text-white text-sm px-5 py-3 rounded-md transition cursor-pointer"
      >
        Schadstoffliste öffnen (PDF)
      </a>
      </div>
    </section>
   
  </main>
</template>

<script setup>
import { ref } from 'vue'

// 1. ZUERST die Daten
const carouselImages = [
  {
    src: '/images/absauganlagen/clair/produktion1.JPG',
    alt: 'Produktion',
    caption: 'Produktion der Clair'
  },
  {
    src: '/images/absauganlagen/clair/produktion2.JPG',
    alt: 'Produktion',
    caption: 'Produktion der Clair'
  },
  {
    src: '/images/absauganlagen/clair/Clair_Trichter.JPG',
    alt: 'Clair mit Trichter',
    caption: 'Einsatz der Clair mit Trichter'
  }
]

// 2. Dann die Logik
const current = ref(0)

const next = () => {
  current.value = (current.value + 1) % carouselImages.length
}

const prev = () => {
  current.value = (current.value - 1 + carouselImages.length) % carouselImages.length
}

const usageImages = [
  {
    src: '/images/absauganlagen/clair/spot-repair.jpg',
    alt: 'Spot Repair am Auto',
    caption: 'Spot Repair am Auto'
  },
  {
    src: '/images/absauganlagen/spot-repair-hubschrauber.png',
    alt: 'Spot Repair am Hubschrauber',
    caption: 'Spot Repair am Hubschrauber'
  },
  {
    src: '/images/absauganlagen/clair/tisch.jpg',
    alt: 'Absaugung eines Lackiertisches',
    caption: 'Absaugung eines Lackiertisches'
  },
  {
    src: '/images/absauganlagen/eisenbahn.png',
    alt: 'Lackierung von Eisenbahnen',
    caption: 'Lackierung von Eisenbahnen'
  },
  {
    src: '/images/absauganlagen/niedrig.png',
    alt: 'CLAIR für niedrige Räume',
    caption: 'CLAIR für niedrige Räume (2,65 m)'
  },
  {
    src: '/images/absauganlagen/hoch.png',
    alt: 'CLAIR hohe Variante',
    caption: 'CLAIR hohe Variante (3,13 m – 4,63 m)'
  }
]
</script>


<style scoped>
img {
  object-fit: cover;
}
</style>
