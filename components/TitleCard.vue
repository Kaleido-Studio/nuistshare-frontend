<script setup la>
defineProps({
  name: String,
  target: String,

})
</script>

<template>
  <TCard class="w-full" shadow>
    <h1 class="title-font text-3xl">
      {{ name }}
    </h1>
    <TButton @click="$router.push(target)">
      查看资料
    </TButton>
  </TCard>
</template>
