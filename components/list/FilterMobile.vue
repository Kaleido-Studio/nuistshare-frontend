<script setup lang="ts">
import type { TreeNode } from '~/composables/types/TreeNode'

defineProps<{
  tree: TreeNode[]
}>()

const archives = useArchives()

const visible = ref(false)
const { searchKeyword } = archives.getFilters()
</script>

<template>
  <SearchBar v-model="searchKeyword" class="" />
  <ClientOnly>
    <div class="sm:hidden block">
      <TButton @click="visible = true">
        筛选
      </TButton>
      <TDrawer v-model:visible="visible" placement="bottom" size="78%">
        <ListFilter :tree="tree!" />
      </TDrawer>
    </div>
  </ClientOnly>
</template>
