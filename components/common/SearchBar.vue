<script setup lang="ts">
const text = defineModel()
</script>

<template>
  <input v-model="text" class="h-5 min-w-[10rem] rounded p-3 border-0 drop-shadow text-[0.9rem]" placeholder="搜索资料">
</template>
