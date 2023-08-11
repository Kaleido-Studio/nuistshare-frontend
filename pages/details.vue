<script setup lang="ts">
const route = useRoute()
const id = route.query.id

const { data } = await useApi(`/api/archives/entries/${id}`)
</script>

<template>
  <div class="my-30 max-w-[980px] mx-auto">
    <NuxtLink to="entries">
      返回上一级
    </NuxtLink>
    <div>
      {{ data }}
      {{ id }}
    </div>
  </div>
</template>
