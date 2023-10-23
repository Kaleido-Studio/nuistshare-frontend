<script setup lang="ts">
import type { Archive } from 'types/Archives'

defineProps<{
  archive: Archive
}>()

const visible = ref(false)
</script>

<template>
  <div
    class="bg-white p-3 px-6 rounded-xl overflow-hidden border-solid transform-gpu hover:translate-y--1 transition-transform! duration-200! cursor-pointer border-1 border-gray-300"
    @click="$router.push(`/archives/details?id=${archive.id}`)"
  >
    <div class="flex flex-row justify-between items-center">
      <div>
        <p class="sm:text-[19px] text-base  whitespace-nowrap truncate  ">
          {{ archive.name.length > 17 ? `${archive.name.slice(0, 17)}...` : archive.name }}
        </p>
        <p class="sm:text-[16px] text-sm text-gray-600">
          {{ archive.l1Class }} {{ " | " }} {{ archive.l2Class }} {{ " | " }} {{ archive.type }}
        </p>
        <!-- <p class="sm:text-[14px] text-sm text-gray ">
          {{ `浏览量 ${archive.viewCount} 下载量 ${archive.downloadCount}` }}
        </p> -->
      </div>
    </div>
  </div>
  <EntryPopup
    v-model="visible"
    :item="archive"
    size="65%"
  />
</template>

<style>
.t-drawer__header {
  justify-content: center;
}
</style>
