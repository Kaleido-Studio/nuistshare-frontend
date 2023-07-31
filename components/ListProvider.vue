<script setup lang="ts">
import { SearchIcon } from 'tdesign-icons-vue-next'
import TagList from './TagList.vue'

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const { data: { value } } = await useAsyncData('res', () => queryContent('/').find(), {
  transform: transformData,
})
const { treeList, fin } = value!

const currentPage = ref(1)
const searchKeyword = ref('')
const l2_filter = ref<string[]>([])
const visible = ref(false)

const fullListToRender = computed(() => {
  const key = searchKeyword.value
  return fin.filter(
    ({ title, l1_title, l2_title }) =>
      (key === '' || title.includes(key)
        || l1_title.includes(key) || l2_title.includes(key))
        && (l2_filter.value.length === 0 || l2_filter.value.includes(l2_title)),
  )
})

const total = computed(() => fullListToRender.value.length)

const currentList = computed(() => {
  const start = (currentPage.value - 1) * 10
  const end = currentPage.value * 10
  return fullListToRender.value.slice(start, end)
})

function handleClose(e: string) {
  if (e === 'search') {
    searchKeyword.value = ''
    return
  }
  l2_filter.value = l2_filter.value.filter(a => a !== e)
  currentPage.value = 1
}
watch(
  () => searchKeyword.value,
  () => {
    currentPage.value = 1
  },
)

const [DefineFilterTree, FilterTree] = createReusableTemplate()
</script>

<template>
  <DefineFilterTree>
    <TTree
      v-model="l2_filter"
      checkable
      size="large"
      :data="treeList"
      value-mode="onlyLeaf"
      value-type="string"
    />
  </DefineFilterTree>

  <section id="start" class="">
    <div
      class="flex flex-row justify-center items-begin gap-10 w-full sm:p-10 p-3"
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

        <p>总共: {{ fin.length }}, 筛选后 {{ fullListToRender.length }}</p>

        <SingleEntry
          v-for="i in currentList"
          :key="i.title"
          :name="i.title"
          :l1="i.l1_title"
          :l2="i.l2_title"
          :target="i.target"
        />

        <TPagination
          v-model="currentPage"
          :total="total"
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
