<template>
    <button 
      v-show="isVisible" 
      @click="scrollToTop" 
      class="fixed bottom-6 right-6 bg-[#C3B500] text-white p-3 rounded-full shadow-lg 
             hover:bg-[#4E6C19] transition cursor-pointer">
      ↑
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isVisible = ref(false)
  
  // 🔹 Sichtbarkeit je nach Scroll-Position steuern
  const handleScroll = () => {
    isVisible.value = window.scrollY > 200 // erscheint nach 200px scrollen
  }
  
  // 🔹 Nach oben scrollen
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>