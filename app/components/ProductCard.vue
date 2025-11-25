<!-- components/ProductCard.vue -->
<template>
  <NuxtLink
    :to="link"
    class="block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition hover:scale-[1.02]"
  >
    <div class="aspect-square overflow-hidden">
      <NuxtImg
        :src="image"
        :alt="alt || title"
        class="w-full h-full object-contain p-2 sm:p-3"
        loading="lazy"
      />
    </div>
    <div class="p-2 sm:p-3 text-center">
      <h3 class="text-sm sm:text-base md:text-base font-semibold">
        {{ title }}
      </h3>
      <p v-if="description" class="text-xs sm:text-sm text-gray-600">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  link: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' }
})
</script>