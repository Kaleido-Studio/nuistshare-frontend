<script setup lang="ts">
import type { Archive } from 'types/Archives'

const props = defineProps<{ item: Archive }>()

const isVisible = defineModel()

const data = unref(props.item)
const metadata = data.metadata.map(item => ({
  label: item.label,
  value: item.id,
}))

const currentSource = ref(metadata[0].value)
</script>

<template>
  <TDrawer
    v-model:visible="isVisible"
    placement="bottom"
    size="50%"
    :destroy-on-close="true"
    :show-in-attached-element="false"
  >
    <template #header>
      <h1>下载文件</h1>
    </template>
    <template #footer />
    <div class="flex flex-col h-full items-center text-center justify-around">
      <div>
        <h1 class="text-black text-center text-2xl">
          {{ data?.name }}
        </h1>
        <h3>
          下载量 {{ data?.viewCount }} {{ ", " }}浏览量
          {{ data?.downloadCount }}
        </h3>
        <h3>
          上次更新 {{ (new Date(data?.uploadTime ?? 0)).toLocaleString("zh-CN", {
            hour12: false,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) }}
        </h3>
        <!-- <h3>大小 {{ data?.size }}</h3> -->
      </div>
      <TSpace v-if="data?.metadata?.length !== 0" direction="vertical">
        <h3>选择下载源</h3>
        <TSelect v-model="currentSource" :options="metadata" />
        <TButton
          size="large"
          class="w-[10rem]"
          variant="outline"
        >
          <a href="#" target="_blank">
            预览
          </a>
        </TButton>
        <TButton size="large" class="w-[10rem]">
          <a :href="`https://api-nuistshare.dustella.net/api/download?metadata_id=${currentSource}`" download rel="noreferrer">
            立即下载
          </a>
        </TButton>
      </TSpace>
      <TImage v-else src="/empty.svg" />
    </div>
  </TDrawer>
</template>
