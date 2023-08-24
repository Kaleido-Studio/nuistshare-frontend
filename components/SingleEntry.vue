<script setup lang="ts">
import type { Archive } from 'types/Archives'

defineProps<{
  archive: Archive
}>()

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const visible = ref(false)
</script>

<template>
  <TCard
    :bordered="false"
    class="drop-shadow-lg hover:translate-y--1 transition-transform! duration-200!"
    @click="visible = isSmallScreen"
  >
    <div class="flex flex-row justify-between items-center">
      <div>
        <p class="sm:text-[20px] text-base leading-2  ">
          {{ archive.name.length > 17 ? `${archive.name.slice(0, 17)}...` : archive.name }}
        </p>
        <p class="sm:text-[16px] text-sm">
          {{ archive.l1Class }} {{ " | " }} {{ archive.l2Class }} {{ " | " }} {{ archive.type }}
        </p>
        <p class="sm:text-[14px] text-sm text-gray ">
          {{ `浏览量 ${archive.viewCount} 下载量 ${archive.downloadCount}` }}
        </p>
      </div>
      <TButton v-if="!isSmallScreen" :size="isSmallScreen ? `medium` : `large`" @click.stop="$router.push(`/details?id=${archive.id}`)">
        下载
      </TButton>
    </div>
  </TCard>
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
