<script setup>
defineProps({
  name: String,
  target: String,
  L1: String,
  L2: String,
});
</script>

<template>
  <TCard :bordered="false" hover-shadow>
    <p class="text-[1.1rem]">
      {{ name }}
    </p>
    <p>{{ L1 }} {{ L2 }}</p>
  </TCard>
</template>
