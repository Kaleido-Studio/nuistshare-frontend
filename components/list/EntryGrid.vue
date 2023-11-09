<script setup lang="ts">
import type { Archive } from '~/composables/types/Archives'

defineProps<{
  archiveList: {
    totalItems: number
    data: Archive[]
    totalPages: number
  }
}>()

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const archives = useArchives()

const { currentPage } = archives.getPagination()
const { searchKeyword, l2_filter } = archives.getFilters()
function handleClose(e: string) {
  searchKeyword.value = e === 'search' ? '' : searchKeyword.value
  l2_filter.value = l2_filter.value.filter(a => a !== e)
}
</script>

<template>
  <ListTag :search-keyword="searchKeyword" :l2-filter="l2_filter" @some-close="handleClose" />

  <p class="text-sm text-gray-600">
    筛选后 {{ archiveList?.totalItems }} 条记录, 第 {{ currentPage }} 页
  </p>

  <div class="grid  grid-cols-1 xl:grid-cols-2 gap-4">
    <ListEntrySingle
      v-for="i in archiveList?.data"
      :key="i.id"
      :archive="i"
    />
  </div>

  <TPagination
    v-model="currentPage"
    :total="archiveList?.totalItems"
    :show-page-size="false"
    :theme="isSmallScreen ? 'simple' : 'default'"
  />
</template>
