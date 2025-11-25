<template>
  <main class="pt-18">
    <Breadcrumb/>
    <!-- Titelbereich -->
    <section class="max-w-7xl mx-auto px-4 py-6">
      <h1 class="text-3xl md:text-4xl text-gray-900 mb-3 text-left">
        {{ title }}
      </h1>
      <p
        v-if="shortDescription"
        class="text-gray-700 text-base md:text-lg leading-relaxed text-left max-w-3xl"
      >
        {{ shortDescription }}
      </p>
    </section>

    <!-- Hauptinhalt -->
    <section
      class="product-detail py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
    >
      <!-- LINKER BEREICH: Bild oder Carousel -->
      <div>
        <!-- Einzelbild -->
        <div
          v-if="!carouselEnabled"
          class="bg-white rounded-xl border border-gray-100 min-h-[320px] flex items-center justify-center"
        >
          <NuxtImg
            :src="image || images[0]"
            :alt="title"
            class="max-h-[320px] w-auto object-contain"
            loading="lazy"
          />
        </div>

   <!-- Carousel -->
      <div v-else class="relative bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div v-for="(media, i) in mediaItems" :key="i">
          <!-- Wenn es ein Bild ist -->
          <NuxtImg
            v-if="!isVideo(media)"
            :src="media"
            :alt="`${title} Bild ${i + 1}`"
            v-show="currentImage === i"
            class="w-full h-[360px] object-contain bg-white p-3 transition-opacity duration-300"
            loading="lazy"
          />

          <!-- Wenn es ein Video ist -->
          <video
            v-else
            v-show="currentImage === i"
            controls
            class="w-full h-[360px] object-contain bg-white p-3"
          >
            <source :src="media" type="video/mp4" />
            Dein Browser unterstützt das Video-Tag nicht.
          </video>
        </div>

        <!-- Pfeile -->
        <button
          @click="prevImage"
          class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
          aria-label="Vorheriges Bild"
        >
          ‹
        </button>
        <button
          @click="nextImage"
          class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
          aria-label="Nächstes Bild"
        >
          ›
        </button>

        <!-- Punkte -->
        <div class="flex justify-center gap-2 py-4 bg-white">
          <button
            v-for="(media, i) in mediaItems"
            :key="i"
            @click="currentImage = i"
            :class="[
              'w-2.5 h-2.5 rounded-full',
              currentImage === i ? 'bg-[#C3B500]' : 'bg-gray-300'
            ]"
          />
        </div>
      </div>
      </div>

      <!-- RECHTER BEREICH: Specs + Hinweise -->
      <div>
        <!-- Specs -->
        <div v-if="specs && specs.length" class="mb-8">
          <h2 class="text-xl md:text-2xl text-gray-900 mb-3">
            Technische Spezifikationen
          </h2>
          <div class="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-gray-50 text-gray-600">
                <tr>
                  <th class="px-4 py-3 font-medium">Spezifikation</th>
                  <th class="px-4 py-3 font-medium">Einheit</th>
                  <th class="px-4 py-3 font-medium">Wert</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, idx) in specs" :key="idx" class="border-t">
                  <td class="px-4 py-3 text-gray-800">{{ row.name }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ row.unit || '–' }}</td>
                  <td class="px-4 py-3 text-gray-900 font-medium">{{ row.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

       <!-- Hinweise -->
        <div v-if="longDescription">
        <h2 class="text-xl md:text-2xl text-gray-900 mb-2">
            Hinweise
        </h2>

        <!-- Falls longDescription eine Liste (Array) ist -->
       <ul v-if="Array.isArray(longDescription)" class="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
        <template v-for="(item, index) in longDescription" :key="index">
            <li v-if="item !== '__BREAK__'">{{ item }}</li>
            <br v-else />
        </template>
        </ul>

        <!-- Falls longDescription ein normaler Text ist -->
        <p
            v-else
            class="text-gray-700 leading-relaxed whitespace-pre-line"
        >
            {{ longDescription }}
        </p>
        </div>

        <slot />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'


const props = defineProps({
  title: { type: String, required: true },
  shortDescription: { type: String, default: '' },
  longDescription: { type: [String, Array], default: '' },
  image: { type: String, default: '' },
  images: { type: Array, default: () => [] },
  specs: { type: Array, default: () => [] },
  useCarousel: { type: Boolean, default: undefined },
  video: { type: String, default: '' }

})

const currentImage = ref(0)

const carouselEnabled = computed(() => {
  if (props.useCarousel !== undefined) return props.useCarousel
  return props.images.length > 1
})

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % props.images.length
}
const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + props.images.length) % props.images.length
}

const mediaItems = computed(() => {
  const all = [...props.images]
  if (props.video) all.push(props.video)
  return all
})

const isVideo = (src) => {
  return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')
}
</script>