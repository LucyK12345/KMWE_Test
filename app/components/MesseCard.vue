<template>
  <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4">
    <!-- Linke Seite: Bild -->
<div class="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square overflow-hidden rounded-xl shadow mx-auto">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-contain"
        v-if="image"
      />
    </div>

    <!-- Rechte Seite: Infos -->
    <div>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ title }}</h2>
      <ul class="space-y-2 text-gray-700 text-base">
        <li v-if="location"><strong>Ort:</strong> {{ location }}</li>
        <li v-if="date"><strong>Datum:</strong> {{ date }}</li>
        <li v-if="booth"><strong>Stand:</strong> {{ booth }}</li>
      </ul>
    </div>
  </section>

  
</template>

<script setup lang="ts">
defineProps<{
  title: string
  location?: string
  date?: string
  booth?: string
  image?: string
  type?: string
}>()
</script>