<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
<nav class="w-full py-4 flex items-center justify-between" :class="{ 'px-12 lg:px-24 xl:pl-[120px] xl:pr-8': true }">    
    <!-- Linke Seite: Logo + Hauptnavigation -->
      <div class="flex items-center gap-10">
        <!-- Logo -->
        <NuxtLink to="/" @click="scrollTop" class="shrink-0">
          <img src="/images/KMWE_logo_quer.png" alt="KMWE Logo" class="h-9 w-auto" />
        </NuxtLink>

        <!-- Hauptnavigation -->
        <ul class="hidden lg:flex gap-8 text-base font-medium text-gray-700">
          <li
            class="relative"
            @mouseenter="openProducts"
            @mouseleave="closeProducts"
          >
            <button
              class="cursor-pointer"
              :class="showProducts ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'"
            >
             <NuxtLink to="/products" class="hover:text-[#C3B500]">Produkte</NuxtLink>
            </button>

            <!-- 1. Banner -->
<transition name="fade">
  <div
    v-show="showProducts"
    class="absolute left-0 mt-3 bg-white shadow-lg border border-gray-200 rounded-lg flex z-50"
  >
    <!-- Linke Liste -->
    <ul class="w-64 py-3 px-3 space-y-1 border-r border-gray-100">
      <li
        v-for="cat in mainCategories"
        :key="cat.name"
        class="flex items-center justify-between rounded px-2 py-1"
        @mouseenter="onCategoryHover(cat)"
      >
        <NuxtLink
          :to="cat.link"
          class="text-sm"
          :class="activeCategory?.name === cat.name ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'"
        >
          {{ cat.name }}
        </NuxtLink>
        <span v-if="cat.showPanel" class="text-gray-300 text-sm">›</span>
      </li>
    </ul>

  <!-- 2. Banner (rechts) -->
<div
  v-if="activeCategory && activeCategory.showPanel"
  class="bg-white py-4 px-5 w-[520px] grid grid-cols-2 gap-6"
>
  <div
    v-for="col in activeCategory.columns"
    :key="col.title"
    class="min-w-[180px]"
  >
    <NuxtLink
      :to="col.link"
      class=" text-sm mb-1 block hover:text-[#C3B500] font-semibold"
    >
      {{ col.title }}
    </NuxtLink>
    <ul class="space-y-1">
      <li v-for="item in col.items" :key="item.name">
        <NuxtLink
          :to="item.link"
          class="text-sm text-gray-700 hover:text-[#C3B500]"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</div>
  </div>
</transition>
          </li>

          <li><NuxtLink to="/messen" class="hover:text-[#C3B500]">Messen</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-[#C3B500]">Über uns</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-[#C3B500]">Kontakt</NuxtLink></li>
        </ul>
      </div>

      <!-- Rechte Seite (optional: Platzhalter für später, z. B. Sprache oder Login) -->
      <div class="hidden lg:block">
        <!-- z. B. <NuxtLink to="/en" class="text-sm text-gray-500 hover:text-[#C3B500]">EN</NuxtLink> -->
      </div>

      <!-- Mobile Button -->
      <button @click="toggleMenu" class="lg:hidden text-3xl focus:outline-none">☰</button>
    </nav>

    <!-- Mobile Navigation -->
    <ul
      :class="[
        'lg:hidden bg-white shadow-md transition-all duration-200 overflow-hidden',
        isMenuOpen ? 'max-h-[500px]' : 'max-h-0'
      ]"
    >
      <li class="p-4 border-b" @click="toggleMobileProducts">
        <span :class="showMobileProducts ? 'text-[#C3B500]' : ''">Produkte</span>

      </li>

      <div v-if="showMobileProducts" class="bg-gray-50">
        <div v-for="cat in mainCategories" :key="cat.name" class="border-b">
          <div
            class="flex justify-between items-center p-4"
            @click="cat.showPanel ? toggleActiveMobile(cat.name) : goTo(cat.link)"
          >
            <span class="text-sm">{{ cat.name }}</span>
            <span v-if="cat.showPanel">{{ activeMobileCategory === cat.name ? '▲' : '▼' }}</span>
          </div>
          <div v-if="cat.showPanel && activeMobileCategory === cat.name" class="pl-6 pb-3 space-y-1">
            <div v-for="col in cat.columns" :key="col.title">
              <NuxtLink :to="col.link" class="text-sm block py-1">
                {{ col.title }}
              </NuxtLink>
              <ul class="pl-2 space-y-1 text-sm">
                <li v-for="item in col.items" :key="item.name">
                  <NuxtLink :to="item.link" class="block">{{ item.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <li class="p-4 border-b"><NuxtLink to="/fair">Messen</NuxtLink></li>
      <li class="p-4 border-b"><NuxtLink to="/about">Über uns</NuxtLink></li>
      <li class="p-4 border-b"><NuxtLink to="/contact">Kontakt</NuxtLink></li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showProducts = ref(false)
const activeCategory = ref(null)
const isMenuOpen = ref(false)
const showMobileProducts = ref(false)
const activeMobileCategory = ref(null)

const mainCategories = ref([
  {
    name: 'Hebebühnen',
    link: '/products/hebebuehnen',
    showPanel: true,
    columns: [
    
      {
        title: 'Fi.Tim',
        link: '/products/hebebuehnen#fitim',
        items: [
          { name: 'Überflur', link: '/products/hebebuehnen#fitimUe' },
          { name: 'Unterflur', link: '/products/hebebuehnen#fitimU' },
          { name: 'Zubehör', link: '/products/zubehoer' }
        ]
      },
      {
        title: 'CMO',
        link: '/products/hebebuehnen#cmo',
      },
  {
        title: 'Galta',
        link: '/products/hebebuehnen#galta',
        items: [
          { name: 'Überflur', link: '/products/hebebuehnen#galtaUe' },
          { name: 'Unterflur', link: '/products/hebebuehnen#galta' }
        ]
      },
    ]
  },
  {
    name: 'Richtanlagen',
    link: '/products/richtanlagen',
    showPanel: true,
    columns: [
      {
        items: [
          { name: 'Überflur', link: '/products/richtanlagen#fitimUe' },
          { name: 'Unterflur', link: '/products/richtanlagen#fitimU' },
          { name: 'Zubehör', link: '/products/richtanlagen#fitimZ' }
        ]
      }
    ]
  },
  {
    name: 'Absauganlagen',
    link: '/products/absauganlagen',
    showPanel: true,
    columns: [
      {
        title: 'KMWE Clair',
        link: '/products/absauganlagen',
        items: [
          { name: 'Funktionsweise', link: '/products/absauganlagen/clair' },
          { name: 'Modelle', link: '/products/absauganlagen#modelle' },
          { name: 'Zubehör', link: '/products/absauganlagen#zubehoer' }
        ]
      },
      {
        title: 'Duster3000',
        link: '/products/absauganlagen#duster',
      }
    ]
  },
  { name: 'Lackierkabinenfilter', link: '/products/zugklemmen', showPanel: false, columns: [] },
  { name: 'Zugklemmen', link: '/products/zugklemmen', showPanel: false, columns: [] },

  {
    name: 'Schweißtechnik',
    link: '/products/schweisstechnik',
    showPanel: true,
    columns: [
      {
        items: [
          { name: 'Prima', link: '/products/schweisstechnik#prima' },
          { name: 'Tecna', link: '/products/schweisstechnik#tecna' }
        ]
      }
    ]
  },
  { name: 'Lacktrocknung', link: '/products/lacktrocknung', showPanel: false, columns: [] },
  { name: 'Finishlampen', link: '/products/finishlampen', showPanel: false, columns: [] },
  {
    name: 'Diverses',
    link: '/products/diverses',
    showPanel: true,
    columns: [
      {
        items: [
          { name: 'Universelles Notrad', link: '/products/absauganlagen/duster3000/modelle' },
          { name: 'Guniwheel', link: '/products/absauganlagen/duster3000/modelle' },
          { name: 'GuniX', link: '/products/absauganlagen/duster3000/filterkits' }
        ]
      }
    ]
  }

])

const openProducts = () => {
  showProducts.value = true
  activeCategory.value = null
}
const closeProducts = () => {
  showProducts.value = false
  activeCategory.value = null
}
const onCategoryHover = (cat) => {
  activeCategory.value = cat.showPanel ? cat : null
}

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const toggleMobileProducts = () => (showMobileProducts.value = !showMobileProducts.value)
const toggleActiveMobile = (name) =>
  (activeMobileCategory.value = activeMobileCategory.value === name ? null : name)
const goTo = (link) => {
  router.push(link)
  isMenuOpen.value = false
  showMobileProducts.value = false
}
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>