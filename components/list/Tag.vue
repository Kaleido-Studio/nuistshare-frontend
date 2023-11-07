<script setup lang="ts">
defineProps({
  searchKeyword: String,
  l2Filter: { type: Array as PropType<string[]>, required: true },
})

defineEmits(['someClose'])
</script>

<template>
  <TSpace
    v-if="searchKeyword !== '' || l2Filter.length !== 0"
    break-line
  >
    <TTag
      v-if="searchKeyword"
      theme="primary"
      variant="outline"
      size="large"
      closable
      @close="$emit('someClose', 'search')"
    >
      搜索：{{ searchKeyword }}
    </TTag>
    <TTag
      v-for="i in l2Filter"
      :key="i"
      theme="primary"
      variant="outline"
      size="large"
      closable
      @close="$emit('someClose', i)"
    >
      {{ i }}
    </TTag>
  </TSpace>
</template>

<style scoped>
:deep(.t-tag--outline){
  background-color: white;
  border: 0;
}
</style>
