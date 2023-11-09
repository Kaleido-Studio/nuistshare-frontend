<script setup lang="ts">
import type { TreeNode } from '~/composables/types/TreeNode'

defineProps<{
  tree: TreeNode[]
}>()
</script>

<template>
  <p class="pl-8">
    筛选
  </p>
  <div class="h-auto p-8 rounded-xl w-50 bg-[white]! drop-shadow ">
    <ListFilter :tree="tree!" />
  </div>
</template>
