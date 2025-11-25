<template>
  <section class="content-container">
    <div class="bg-white rounded-xl p-0 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img :src="logo" :alt="alt" class="h-16 w-auto object-contain" />
      </div>

      <!-- Text -->
      <div class="md:flex-1">
        <h2 class="text-xl text-gray-900 mb-2">{{ title }}</h2>
        <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  logo: string
  alt?: string
  title: string
  description: string
}>()
</script>