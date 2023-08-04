<script setup lang="ts">
import { SearchIcon } from 'tdesign-icons-vue-next'
import type { Archive } from 'types/Archives'
import type { TreeNode } from 'types/TreeNode'
import TagList from './TagList.vue'

const isSmallScreen = useMediaQuery('(max-width: 640px)')
const pageSize = 10

const currentPage = ref(1)
const searchKeyword = ref('')
const l2_filter = ref<string[]>([])
const visible = ref(false)

const [{ data: archiveList }, { data: tree }] = await Promise.all([
  useApi<{ totalItems: number; data: Archive[]; totalPages: number }>('/api/archives/entries', {
    query: computed(() => ({
      keyword: searchKeyword.value,
      l2_class: l2_filter.value.join(','),
      limit: pageSize,
      offset: (currentPage.value - 1) * pageSize,
    })),
    watch: [currentPage, searchKeyword, l2_filter],
  }),
  useApi<TreeNode[]>('/api/archives/groups', { transform: transformData }),
])

function handleClose(e: string) {
  searchKeyword.value = e === 'search' ? '' : searchKeyword.value
  l2_filter.value = l2_filter.value.filter(a => a !== e)
}

watch(
  () => [searchKeyword.value, l2_filter.value],
  () => { currentPage.value = 1 },
)

const [DefineFilterTree, FilterTree] = createReusableTemplate()
</script>

<template>
  <DefineFilterTree>
    <TTree
      v-model="l2_filter"
      checkable
      size="large"
      :data="tree"
      value-mode="onlyLeaf"
      value-type="string"
    />
  </DefineFilterTree>

  <section id="start" class="">
    <div
      class="flex flex-row justify-center items-begin gap-10 w-full"
    >
      <div class="sm:block hidden">
        <div class="h-auto bg-white p-8 rounded-xl">
          <TSpace class="py-4 flex flex-row items-center">
            <SearchIcon />
            <TInput v-model="searchKeyword" />
          </TSpace>
          <FilterTree />
        </div>
      </div>
      <div
        class="flex flex-col gap-5 min-w-2/3 sm:max-w-2/3 bg-[#eee] sm:p-8 p-2 rounded-xl"
      >
        <div
          class="py-4  flex-row items-center justify-around p-3 xl:hidden flex"
        >
          <SearchIcon />
          <TInput v-model="searchKeyword" />
          <ClientOnly>
            <TButton @click="visible = true">
              筛选
            </TButton>
            <TDrawer v-model:visible="visible" placement="bottom" size="78%">
              <FilterTree />
            </TDrawer>
          </ClientOnly>
        </div>

        <TagList :search-keyword="searchKeyword" :l2-filter="l2_filter" @some-close="handleClose" />

        <p> 筛选后 {{ archiveList?.data.length }} 条记录</p>

        <SingleEntry
          v-for="i in archiveList?.data"
          :key="i.id"
          :archive="i"
        />

        <TPagination
          v-model="currentPage"
          :total="archiveList?.totalItems"
          :show-page-size="false"
          :theme="isSmallScreen ? 'simple' : 'default'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.t-checkbox__label) {
  font-size: 16px;
  line-height: 24px;
}
</style>
