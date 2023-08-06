<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <TCard>
    <h1>{{ name }}</h1>
  </TCard>
</template>
