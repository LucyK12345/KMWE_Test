<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <!-- Desktop Navigation -->
    <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" @click="scrollTop">
        <img src="/images/KMWE_logo_quer.png" alt="KMWE Logo" class="h-9 w-auto" />
      </NuxtLink>

      <!-- Hauptnavigation -->
      <ul class="hidden lg:flex gap-8 text-base font-medium text-gray-700">
        <li class="relative"
            @mouseenter="showProducts = true; activeMain = 'Produkte'"
            @mouseleave="keepHighlightCheck">
          <NuxtLink
            to="/products"
            :class="(activeMain === 'Produkte' || isOnProductsPage) ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'">
            Produkte
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @mouseenter="resetActiveMain"
                    :class="isActive('/about') ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'">
            Über uns
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/fair" @mouseenter="resetActiveMain"
                    :class="isActive('/fair') ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'">
            Messen
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" @mouseenter="resetActiveMain"
                    :class="isActive('/contact') ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'">
            Kontakt
          </NuxtLink>
        </li>
      </ul>

      <!-- Burger Button Mobile -->
      <button @click="toggleMenu" class="lg:hidden text-3xl focus:outline-none">☰</button>
    </nav>

    <!-- Produkt-Banner mit Hover-Bereich -->
    <div class="hidden lg:block" @mouseenter="showProducts = true" @mouseleave="resetProducts">
      <!-- Zweiter Banner -->
      <transition name="fade">
        <div v-show="showProducts" class="bg-white shadow-md border-t border-gray-200">
          <div class="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8">
            <NuxtLink v-for="(cat, i) in mainCategories" :key="i"
                      :to="cat.link"
                      class="cursor-pointer"
                      :class="activeSubCategory === cat.name || isActive(cat.link) ? 'text-[#C3B500]' : 'hover:text-[#C3B500]'"
                      @mouseenter="activeCategory = cat; activeSubCategory = cat.name">
              {{ cat.name }}
            </NuxtLink>
          </div>
        </div>
      </transition>

      <!-- Dritter Banner -->
      <transition name="fade">
        <div v-if="activeCategory" class="third-banner bg-white shadow-md border-t border-gray-200">
          <div class="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 gap-8">
            <div v-for="(col, idx) in activeCategory.columns" :key="idx">
              <!-- Spaltenüberschrift klickbar -->
              <NuxtLink :to="col.link" class="font-semibold mb-2 block hover:text-[#C3B500]">
                {{ col.title }}
              </NuxtLink>
              <ul class="space-y-1">
                <li v-for="(item, id) in col.items" :key="id">
                  <NuxtLink :to="item.link" class="hover:text-[#C3B500]">{{ item.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Mobile Navigation -->
    <ul :class="[
      'lg:hidden flex flex-col bg-white shadow-md w-full text-base font-medium transition-all duration-300',
      isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
    ]">
      <li class="p-4 border-b hover:text-[#C3B500]" @click="toggleMobileProducts">Produkte</li>

      <!-- Mobile Accordion für Produkte -->
      <ul v-if="showMobileProducts" class="bg-gray-50">
        <li v-for="(cat, i) in mainCategories" :key="i" class="p-4 border-b">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleActiveMobileCategory(cat.name)">
            <NuxtLink :to="cat.link" class="hover:text-[#C3B500]">{{ cat.name }}</NuxtLink>
            <span>{{ activeMobileCategory === cat.name ? '▲' : '▼' }}</span>
          </div>
          <div v-if="activeMobileCategory === cat.name" class="pl-4 mt-2">
            <div v-for="(col, idx) in cat.columns" :key="idx" class="mb-3">
              <NuxtLink :to="col.link" class="font-semibold block hover:text-[#C3B500]">{{ col.title }}</NuxtLink>
              <ul class="pl-2 space-y-1 text-sm">
                <li v-for="(item, id) in col.items" :key="id">
                  <NuxtLink :to="item.link" class="block hover:text-[#C3B500]">{{ item.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <!-- Weitere Mobile Links -->
      <li class="p-4 border-b"><NuxtLink to="/about" @click="resetActiveMain" :class="isActive('/about') ? 'text-[#C3B500]' : ''">Über uns</NuxtLink></li>
      <li class="p-4 border-b"><NuxtLink to="/fair" @click="resetActiveMain" :class="isActive('/fair') ? 'text-[#C3B500]' : ''">Messen</NuxtLink></li>
      <li class="p-4 border-b"><NuxtLink to="/contact" @click="resetActiveMain" :class="isActive('/contact') ? 'text-[#C3B500]' : ''">Kontakt</NuxtLink></li>
    </ul>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const showProducts = ref(false)
const activeCategory = ref(null)
const activeMain = ref(null)
const activeSubCategory = ref(null)
const isOnProductsPage = ref(false)

// Mobile States
const showMobileProducts = ref(false)
const activeMobileCategory = ref(null)

// Kategorien
const mainCategories = ref([
  { name: "Hebebühnen", link: "/products/hebebuehnen/hebebuehnen", columns: [
    { title: "Galta", link: "/products/hebebuehnen/galta/galta", items: [
      { name: "Überflur", link: "/products/hebebuehnen/galta/galta-ueberflur" },
      { name: "Unterflur", link: "/products/hebebuehnen/galta/galta-unterflur" },
    ]},
    { title: "Fi.Tim", link: "/products/hebebuehnen/fitim/fitim", items: [
      { name: "Überflur", link: "/products/hebebuehnen/fitim/ueberflur" },
      { name: "Unterflur", link: "/products/hebebuehnen/fitim/unterflur" },
      { name: "Zubehör", link: "/products/hebebuehnen/fitim/zubehoer" },
    ]},
    { title: "CMO", link: "/products/hebebuehnen/cmo/cmo", items: [
      { name: "EASYLIFT", link: "/products/hebebuehnen/cmo/easylift" }
    ]}
  ]},
  { name: "Richtanlagen", link: "/products/richtanlagen/Richtanlagen", columns: [
    { title: "Fi.Tim", link: "/products/richtanlagen/fitim/fitim", items: [
      { name: "Überflur", link: "/products/richtanlagen/fitim/ueberflur" },
      { name: "Unterflur", link: "/products/richtanlagen/fitim/unterflur" },
      { name: "Zubehör", link: "/products/richtanlagen/fitim/zubehoer" }
    ]}
  ]},
  { name: "Absauganlagen", link: "/products/absauganlagen", columns: [
    { title: "KMWE Clair", link: "/products/absauganlagen/clair/clair", items: [
      { name: "Modelle", link: "/products/absauganlagen/clair/modelle" },
      { name: "Zubehör", link: "/products/absauganlagen/clair/zubehoer" },
      { name: "Ersatzfilter", link: "/products/absauganlagen/clair/ersatzfilter" }
    ]},
    { title: "Duster3000", link: "/products/absauganlagen/duster3000/duster3000", items: [
      { name: "Modelle", link: "/products/absauganlagen/duster3000/modelle" },
      { name: "Umrüstkit Filter", link: "/products/absauganlagen/duster3000/umruestkit-filter" },
      { name: "Filterbestellliste", link: "/products/absauganlagen/duster3000/filterbestellliste" }
    ]}
  ]},
   { name: "Lackierkabinenfilter", link: "/products/lackierkabinenfilter/lackierkabinenfilter", columns: [
    { title: "Anfrageliste", link: "/products/lackierkabinenfilter/anfrageliste", items: [] }
  ]},
  { name: "Zugklemmen", link: "/products/zugklemmen/zugklemmen", columns: [
    { title: "Stanzani", link: "/products/zugklemmen/stanzani", items: [] }
  ]},
  { name: "Induktionserwärmer", link: "/products/induktionserwaermer/induktionserwaermer", columns: [
     { title: "Für Mechanik", link: "/products/induktionserwaermer/mechanik", items: [] },
     { title: "Für Karosserie", link: "/products/induktionserwaermer/karosserie", items: [] },
     { title: "Für Industrie, Busse und LKW", link: "/products/induktionserwaermer/industrie-busse-lkw", items: [] }
  ] },
  { name: "Kunststoffschweißgerät", link: "/products/kunststoffschweissgeraet/kunststoffschweissgeraet", columns: [
    { title: "AIT Ultraweld", link: "/products/kunststoffschweissgeraet/ait-ultraweld", items: [] }
  ]},
  { name: "Schweißtechnik", link: "/products/schweisstechnik/schweisstechnik", columns: [
    { title: "Prima", link: "/products/schweisstechnik/prima", items: [] },
    { title: "Tecna", link: "/products/schweisstechnik/tecna", items: [] }
  ] },
  { name: "Lacktrocknung", link: "/products/lacktrocknung/lacktrocknung", columns: [
    { title: "Asco3", link: "/products/lacktrocknung/asco3", items: [] }
  ] },
  { name: "Finishlampen", link: "/products/finishlampen/finishlampen", columns: [
    { title: "Asco3", link: "/products/finishlampen/asco3", items: [] }
  ]},
  { name: "Diverses", link: "/products/diverses/diverses", columns: [
    { title: "Universelles Notrad", link: "/products/diverses/universelles-notrad", items: [] },
    { title: "Guniwheel", link: "/products/diverses/guniwheel", items: [] },
    { title: "GuniX", link: "/products/diverses/gunix", items: [] }
  ]},
])

// Funktionen
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const toggleMobileProducts = () => { showMobileProducts.value = !showMobileProducts.value }
const toggleActiveMobileCategory = (name) => {
  activeMobileCategory.value = activeMobileCategory.value === name ? null : name
}
const resetProducts = () => { showProducts.value = false; activeCategory.value = null }
const resetActiveMain = () => { activeMain.value = null; activeSubCategory.value = null }
const keepHighlightCheck = () => {
  if (!useRoute().path.startsWith("/products")) activeMain.value = null
}
const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }
const isActive = (path) => useRoute().path.startsWith(path)

// Router Watcher
const router = useRouter()
onMounted(() => {
  router.afterEach((to) => {
    isMenuOpen.value = false
    showProducts.value = false
    activeCategory.value = null
    showMobileProducts.value = false
    activeMobileCategory.value = null
    isOnProductsPage.value = to.path.startsWith("/products")
  })
})
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.third-banner { font-family: system-ui, sans-serif; }
</style>