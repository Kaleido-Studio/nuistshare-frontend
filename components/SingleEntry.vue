<script setup lang="ts">
import type { Archive } from 'types/Archives'

defineProps<{
  archive: Archive
}>()

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const visible = ref(false)
</script>

<template>
  <ClientOnly>
    <TCard
      :bordered="false"
      class="drop-shadow-lg hover:translate-y--1 transition-transform! duration-200!"
    >
      <div class="flex flex-row justify-between items-center">
        <div>
          <p class="sm:text-[20px] text-base">
            {{ archive.name }}
          </p>
          <p class="sm:text-[16px] text-sm">
            {{ archive.l1Class }} {{ " | " }} {{ archive.l2Class }}
          </p>
        </div>
        <TButton :size="isSmallScreen ? `medium` : `large`" @click="visible = true">
          下载
        </TButton>
      </div>
    </TCard>
    <EntryPopup
      v-model="visible"
      :item="archive"
      size="65%"
    />
  </ClientOnly>
</template>

<style>
.t-drawer__header {
  justify-content: center;
}
</style>
