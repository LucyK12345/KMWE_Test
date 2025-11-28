<template>
  <nav class="text-xs text-gray-500 my-4 px-6" aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center space-x-1 md:space-x-2">
       <li class="flex items-center">
        <NuxtLink to="/" class="hover:text-[#C3B500] transition">Startseite</NuxtLink>
        <span v-if="crumbs.length" class="mx-2 text-gray-400">/</span>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center">
        <!-- Link für alles außer dem letzten -->
        <NuxtLink
          v-if="crumb.link && index < crumbs.length - 1"
          :to="crumb.link"
          class="hover:text-[#C3B500] transition"
        >
          {{ crumb.label }}
        </NuxtLink>

        <!-- Letztes Element: Nur Text -->
        <span v-else class="text-gray-700">{{ crumb.label }}</span>

        <!-- Trenner -->
        <span v-if="index < crumbs.length - 1" class="mx-2 text-gray-400">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import hebebuehnen from '~/data/hebebuehnen.json'
import absauganlagen from '~/data/absauganlagen.json'
import richtanlagen from '~/data/richtanlagen.json'
import zubehoer from '~/data/zubehoer.json'
import zugklemmen from '~/data/zugklemmen.json'

const route = useRoute()

// Mapping: URL → schöner deutscher Name
const labelMap = {
  products: 'Produkte',
  hebebuehnen: 'Hebebühnen',
  richtanlagen: 'Richtanlagen',
  absauganlagen: 'Absauganlagen',
  zugklemmen: 'Zugklemmen',
  induktionserwaermer: 'Induktionserwärmer',
  kunststoffschweissgeraet: 'Kunststoffschweißgerät',
  schweisstechnik: 'Schweißtechnik',
  infrarottrockner: 'Infrarottrockner',
  fitim: 'Fi.Tim',
  galta: 'Galta',
  cmo: 'CMO',
  unterflur: 'Unterflur',
  ueberflur: 'Überflur',
  zubehoer: 'Zubehör',
  contact: 'Kontakt',
  about: 'Über uns',
  messen: 'Messen'
}

const findProductTitle = (slug) => {
  const allProducts = [
    ...hebebuehnen,
    ...absauganlagen,
    ...richtanlagen
  ]
  const match = allProducts.find(p => p.slug === slug)
  return match ? match.title : null
}

const crumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const pathParts = []

  return segments.map((segment, index) => {
    pathParts.push(segment)

    // 1. Prüfen, ob es ein Label in labelMap gibt
    const mappedLabel = labelMap[segment]

    // 2. Sonst aus JSON holen
    const productLabel = findProductTitle(segment)

    // 3. Fallback: Capitalize
    const label = mappedLabel || productLabel || capitalize(segment)

    return {
      label,
      link: '/' + pathParts.join('/')
    }
  })
})

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)
</script>

<style scoped>
nav {
  font-family: system-ui, sans-serif;
}
</style>