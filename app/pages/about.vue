<template>
  <main class="pt-14">
 <PageHero
      title="Über KMWE – Ihr treuer Partner"
      subtitle="Wir stehen für hochwertige Produkte, individuelle Lösungen und einen Service, der keine Wünsche offenlässt."
    />

    <!-- Abschnitt 2: Counter Zahlen -->
    <section class="max-w-7xl mx-auto py-1 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20 mt-20">
  <div>
    <p class="text-5xl font-bold text-[#597B1C]" ref="c1">0</p>
    <p class="text-gray-700 mt-2">Jahre Erfahrung</p>
  </div>
  <div>
    <p class="text-5xl font-bold text-[#597B1C]" ref="c2">0</p>
    <p class="text-gray-700 mt-2">Produkte</p>
  </div>
  <div>
    <p class="text-5xl font-bold text-[#597B1C]" ref="c3">0</p>
    <p class="text-gray-700 mt-2">Kunden</p>
  </div>
  <div>
    <p class="text-5xl font-bold text-[#597B1C]" ref="c4">0</p>
    <p class="text-gray-700 mt-2">Standorte</p>
  </div>
</section>
 <!-- Abschnitt 3: Mission (dunkler Hintergrund) -->
 <section class="bg-[#597B1C] text-white py-16 px-4">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-3xl font-bold text-[#FFD700] mb-4">Unser Ziel</h2>
          <p class="leading-relaxed">
            Bei KMWE setzen wir alles daran, Ihnen die beste Lösung für Ihre Werkstatteinrichtung zu bieten. 
            Wir unterstützen unsere Kunden mit innovativen Produkten, individuellen Spezialanfertigungen und 
            einem Service, der keine Wünsche offenlässt.
          </p>
        </div>
        <div>
          <p class="leading-relaxed">
            Egal ob für Lackierhallen, Industrieabsaugungen oder Öldämpfe – wir haben die richtige Lösung 
            für Ihr Projekt. Vertrauen Sie auf über 30 Jahre Erfahrung und unser Engagement für Qualität 
            und Kundenzufriedenheit.
          </p>
        </div>
      </div>
    </section>

 <!-- Abschnitt 4: Einleitung -->
 <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4">
      <div>
        <h1 class="text-4xl font-bold mb-4">Wir sorgen für Vertrauen</h1>
        <p class="text-gray-700 leading-relaxed">
          Seit über 30 Jahren sind wir in dem Bereich Werkstatteinrichtung in ganz Deutschland, 
          Österreich und der deutschsprachigen Schweiz tätig. Unser Sortiment umfasst vor allem 
          Produkte für den Karosserie- und Lackierfachbetrieb.
        </p>
      </div>
      <div class="h-72 bg-gray-300 rounded"></div>
    </section>

    <!-- Abschnitt 5: Werte -->
    <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4">
      <div class="h-72 bg-gray-300 rounded"></div>
      <div>
        <h2 class="text-3xl font-bold mb-4">Unsere Werte</h2>
        <ul class="space-y-3 text-gray-700">
          <li>✔️ Hohe Qualität dank europäischer Lieferanten</li>
          <li>✔️ Eigene Entwicklung und Produktion von Absauganlagen</li>
          <li>✔️ Individuelle Speziallösungen für unsere Kunden</li>
          <li>✔️ Erstklassiger Service – der Kunde steht immer an erster Stelle</li>
        </ul>
      </div>
    </section>

  <!-- Abschnitt 6: Fi Tim -->
  <section class="bg-gray-100 py-16 px-4">
    <div class="max-w-7xl mx-auto">
      
      <!-- Titel -->
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Unser langjähriger Partner</h2>

      <!-- Bild + Logo -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        
        <!-- Partnerbild -->
        <div class="bg-[#C3B500] rounded-lg shadow-md w-full h-72 flex items-center justify-center text-white font-bold text-lg">
          Bildplatzhalter
        </div>

        <!-- Partnerlogo -->
        <div class="rounded-lg -md w-full h-72 flex items-center justify-center">
        <img
            src="/images/fitim-logo.png"
            alt="Fi.Tim Logo"
            class="max-h-full max-w-full object-contain p-4"
        />
</div>

      </div>

      <!-- Text -->
      <p class="text-gray-700 mb-6">
        Seit über 15 Jahren arbeiten wir erfolgreich mit unserem Partner zusammen, um innovative Lösungen 
        und hochwertige Produkte anzubieten. Diese Partnerschaft basiert auf Vertrauen, Qualität und einer 
        gemeinsamen Vision für die Zukunft.
      </p>

      <!-- Rahmendaten -->
      <ul class="space-y-2">
        <li class="flex items-start">
          <span class="text-[#C3B500] font-bold mr-2">•</span> Über 15 Jahre Zusammenarbeit
        </li>
        <li class="flex items-start">
          <span class="text-[#C3B500] font-bold mr-2">•</span> Marktführer in der Werkstatteinrichtung
        </li>
        <li class="flex items-start">
          <span class="text-[#C3B500] font-bold mr-2">•</span> Produktion in Europa
        </li>
        <li class="flex items-start">
          <span class="text-[#C3B500] font-bold mr-2">•</span> Zertifizierte Qualität nach ISO 9001
        </li>
      </ul>

    </div>
  </section>

   
</main>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const c1 = ref(null)
const c2 = ref(null)
const c3 = ref(null)
const c4 = ref(null)

const counters = [
  { el: c1, end: 30 },
  { el: c2, end: 120 },
  { el: c3, end: 500 },
  { el: c4, end: 3 }
]

onMounted(() => {
  counters.forEach(({ el, end }) => {
    let current = 0
    const increment = Math.ceil(end / 50) // Geschwindigkeit
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(interval)
      }
      if (el.value) el.value.textContent = current
    }, 40)
  })
})
</script>