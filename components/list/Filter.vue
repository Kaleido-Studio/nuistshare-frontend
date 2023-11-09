<script setup lang="ts">
import type { TreeNode } from '~/composables/types/TreeNode'

defineProps<{
  tree: TreeNode[]
}>()

const archives = useArchives()

const { l2_filter } = archives.getFilters()
</script>

<template>
  <TTree
    v-model="l2_filter"
    checkable
    size="large"
    :data="tree"
    value-mode="onlyLeaf"
    value-type="string"
  />
</template>

<style scoped>
:deep(.t-checkbox__label) {
  /* font-size: 16px; */
  line-height: 24px;
  padding: 3px 6px;
  color: rgb(0, 0, 0);
}
</style>
