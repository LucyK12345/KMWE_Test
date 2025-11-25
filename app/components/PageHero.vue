<template>
  <section class="bg-gray-100 py-12">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h1 class="text-3xl md:text-4xl font-semibold mb-4">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-gray-700 text-base md:text-lg">
        {{ subtitle }}
      </p>
    </div>
  </section>
  <Breadcrumb />
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>