<script setup lang="ts">
const props = defineProps({
  name: String,
  target: Object as PropType<[]>,
  l1: String,
  l2: String,
})

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
            {{ name }}
          </p>
          <p class="sm:text-[16px] text-sm">
            {{ l1 }} {{ " | " }} {{ l2 }}
          </p>
        </div>
        <TButton :size="isSmallScreen ? `medium` : `large`" @click="visible = true">
          下载
        </TButton>
      </div>
    </TCard>
    <EntryPopup
      :target="target"
      :name="name"
      v-model="visible"
      ></EntryPopup>
    
  </ClientOnly>
</template>

<style>
.t-drawer__header {
  justify-content: center;
}
</style>
