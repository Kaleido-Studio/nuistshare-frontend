<script setup lang="ts">
import type { Archive } from '~composables/types/Archives'
import type { TreeNode } from '~composables/types/TreeNode'

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

watch(currentPage, () => {
  window.scrollTo(0, 0)
})
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
      class="py-4 min-w-2/3 sm:max-w-[980px] mx-auto flex-row items-center justify-around p-3  flex"
    >
      <SearchBar v-model="searchKeyword" class="" />
      <ClientOnly>
        <div class="sm:hidden block">
          <TButton @click="visible = true">
            筛选
          </TButton>
          <TDrawer v-model:visible="visible" placement="bottom" size="78%">
            <FilterTree />
          </TDrawer>
        </div>
      </ClientOnly>
    </div>
    <div
      class="flex flex-row justify-center items-begin gap-10 w-full"
    >
      <div class="xl:block hidden sticky ">
        <p class="pl-8">
          筛选
        </p>
        <div class="h-auto p-8 rounded-xl w-50 bg-[white]! drop-shadow ">
          <FilterTree />
        </div>
      </div>
      <!-- this is divider -->
      <div
        class="border-gray-300 border-solid border-l-0 border-r-1 my-10 xl:block hidden"
      />
      <!-- end divider -->
      <div
        class="flex flex-col gap-5 min-w-2/3 sm:max-w-2/3 bg-[white] sm:p-8 p-2 rounded-xl"
      >
        <ListTag :search-keyword="searchKeyword" :l2-filter="l2_filter" @some-close="handleClose" />

        <p class="text-sm text-gray-600">
          筛选后 {{ archiveList?.totalItems }} 条记录, 第 {{ currentPage }} 页
        </p>

        <div class="grid  grid-cols-1 xl:grid-cols-2 gap-4">
          <ListEntry
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
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.t-checkbox__label) {
  /* font-size: 16px; */
  line-height: 24px;
  padding: 3px 6px;
  color: rgb(0, 0, 0);
}
</style>
