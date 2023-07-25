<script setup lang="ts">
const props = defineProps({
  name: String,
  target: Object as PropType<[]>,
  l1: String,
  l2: String,
})

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const firstTarget = props.target[0]

const visible = ref(false)

const info = reactive({
  viewCount: 0,
  downloadCount: 0,
  lastUpdated: 0,
  size: 0,
})

async function refreshInfo() {
  visible.value = true
  const { data } = await useFetch('/api/getInfo', {
    method: 'GET',
    query: {
      type: 'cloudreve',
      link: encodeURIComponent(firstTarget.link),
    },
  })
  const {
    downloads: downloadCount,
    views: viewCount,
    createDate: lastUpdated,
    source: { size },
  } = data.value.data
  info.downloadCount = downloadCount
  info.viewCount = viewCount
  info.lastUpdated = lastUpdated
  info.size = size
}

function preview() {
  window.open(firstTarget.link)
}

async function download() {
  const { data } = await useFetch('/api/getDownload', {
    method: 'GET',
    query: {
      type: 'cloudreve',
      link: encodeURIComponent(firstTarget.link),
    },
  })
  const target = data.value.data
  window.open(target)
}
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
        <TButton :size="isSmallScreen ? `medium` : `large`" @click="refreshInfo">
          下载
        </TButton>
      </div>
    </TCard>
    <TDrawer
      v-model:visible="visible"
      placement="bottom"
      size="50%"
      destroy-on-close
    >
      <template #header>
        <h1>下载文件</h1>
      </template>
      <template #footer />
      <div class="flex flex-col h-full items-center text-center justify-around">
        <div>
          <h1 class="text-black text-center text-2xl">
            {{ name }}
          </h1>
          <h3>
            下载量 {{ info.downloadCount }} {{ ", " }}浏览量
            {{ info.viewCount }}
          </h3>
          <h3>上次更新 {{ info.lastUpdated }}</h3>
          <h3>大小 {{ info.size }}</h3>
        </div>
        <TSpace direction="vertical">
          <TButton
            size="large"
            class="w-[10rem]"
            variant="outline"
            @click="preview"
          >
            预览
          </TButton>
          <TButton size="large" class="w-[10rem]" @click="download">
            现在下载
          </TButton>
        </TSpace>
      </div>
    </TDrawer>
  </ClientOnly>
</template>

<style>
.t-drawer__header {
  justify-content: center;
}
</style>
