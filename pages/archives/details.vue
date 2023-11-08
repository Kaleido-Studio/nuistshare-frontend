<script setup lang="ts">
import type { Archive } from 'composables/types/Archives'

const route = useRoute()
const id = route.query.id

const { data } = await useApi<Archive>(`/api/archives/entries/${id}`)
</script>

<template>
  <div class="my-30 max-w-[980px] mx-auto px-5">
    <div />
    <div>
      <InfoArchive :item="data!" />
    </div>
  </div>
</template>
