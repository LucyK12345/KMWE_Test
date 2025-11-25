<script setup lang="ts">
import messen from '~/data/messen.json'
import MesseCard from '~/components/MesseCard.vue'

const upcoming = messen.filter(m => m.type === 'upcoming')
const past = messen.filter(m => m.type === 'past')

const pastIndex = ref(0)
const visibleCards = ref(3)

// Berechne das Maximum basierend auf sichtbaren Karten
const maxIndex = computed(() => Math.max(0, past.length - visibleCards.value))

const pastNext = () => {
  if (pastIndex.value < maxIndex.value) {
    pastIndex.value++
  }
}
const pastPrev = () => {
  if (pastIndex.value > 0) {
    pastIndex.value--
  }
}

// Reagiere auf Fenstergröße
const updateVisibleCards = () => {
  if (window.innerWidth < 640) {
    visibleCards.value = 1
  } else if (window.innerWidth < 1024) {
    visibleCards.value = 2
  } else {
    visibleCards.value = 3
  }
}

onMounted(() => {
  updateVisibleCards()
  window.addEventListener('resize', updateVisibleCards)
})
</script>

<template>
  <main class="pt-14">
       <!-- Hero Bereich -->
      <PageHero
      title="Messen"
      subtitle="Sie möchten uns und unsere Produkte persönlich kennenlernen? Dann besuchen Sie uns auf unserem Messestand."
    />

<!-- Kommende Messen -->
    <section class="max-w-7xl mx-auto my-12">
      <h2 class="width-container text-2xl font-semibold mb-6">Kommende Messen</h2>
      <div class="grid gap-6">
        <MesseCard
          v-for="(messe, i) in upcoming"
          :key="i"
          v-bind="messe"
        />
      </div>
    </section>
<!-- Vergangene Messen -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
  <h2 class="text-2xl font-semibold mb-6">Rückblick vergangene Messen</h2>

  <div class="relative">
    <!-- Slider Container -->
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 gap-6"
        :style="{ transform: `translateX(-${pastIndex * (100 / visibleCards)}%)` }"
        style="width: max-content"
      >
        <div
          v-for="(messe, i) in past"
          :key="i"
          class="w-[calc(100%/3)] flex-shrink-0 text-center"
        >
          <img
            :src="messe.image"
            :alt="messe.title"
            class="w-full h-48 object-cover rounded-lg shadow"
          />
          <p class="mt-2 text-sm text-gray-600">{{ messe.title }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="pastPrev"
      class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-9 h-9 flex items-center justify-center"
      :disabled="pastIndex === 0"
    >
      ‹
    </button>
    <button
      @click="pastNext"
      class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-9 h-9 flex items-center justify-center"
      :disabled="pastIndex >= maxIndex"
    >
      ›
    </button>
  </div>
</section>
  </main>
</template>