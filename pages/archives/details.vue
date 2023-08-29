<script setup lang="ts">
import type { Archive } from 'types/Archives'

const route = useRoute()
const id = route.query.id

const { data } = await useApi<Archive>(`/api/archives/entries/${id}`)
</script>

<template>
  <div class="my-30 max-w-[980px] mx-auto">
    <div />
    <div>
      <ArchiveDetail :item="data!" />
    </div>
  </div>
</template>
