import type { Archive } from './types/Archives'
import type { TreeNode } from './types/TreeNode'

const useArchives = defineStore('archives', () => {
  const pageSize = 10

  const currentPage = ref(1)
  const searchKeyword = ref('')
  const l2_filter = ref<string[]>([])

  const flushEntry = useApi<{ totalItems: number; data: Archive[]; totalPages: number }>('/api/archives/entries', {
    query: computed(() => ({
      keyword: searchKeyword.value,
      l2_class: l2_filter.value.join(','),
      limit: pageSize,
      offset: (currentPage.value - 1) * pageSize,
    })),
    watch: [currentPage, searchKeyword, l2_filter],
  })

  const flushTrees = useApi<TreeNode[]>('/api/archives/groups', { transform: transformData })

  const flushAll = async () => {
    const [archiveList, tree] = await Promise.all([flushEntry, flushTrees])

    return { archiveList: archiveList.data, tree: tree.data }
  }

  const getFilters = () => ({ searchKeyword, l2_filter })
  const getPagination = () => ({ currentPage, pageSize })

  watch(
    () => [searchKeyword.value, l2_filter.value],
    () => { currentPage.value = 1 },
  )

  return { flushAll, getFilters, getPagination }
})

export { useArchives }
