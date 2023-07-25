<script setup lang="ts">
const props = defineProps({
  target: Object as PropType<{ link: string; label: string; type: string }[]>,
  name: String,
})

const isVisible = defineModel()
const options = props.target?.map(i => ({ label: i.label, value: i })) ?? []

const currentTarget = ref(props.target?.[0] ?? {})

const info = await useAsyncData('info', async () => {
  return isVisible
    ? {}
    : {
        downloadCount: 0,
        viewCount: 0,
        lastUpdated: '',
        size: '',
      }
})
async function fetchInfo() {
  const { data } = useFetch('/api/getInfo', {
    method: 'GET',
    query: {
      type: 'cloudreve',
      link: encodeURIComponent(firstTarget.link),
    },
  })
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
  <TDrawer
    v-model:visible="isVisible"
    placement="bottom"
    size="50%"
    :show-in-attached-element="false"
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
      <TSpace v-if="target?.length !== 0" direction="vertical">
        <TSelect :options="options" :value="" value-type="object" />
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
      <TImage v-else src="/empty.svg" />
    </div>
  </TDrawer>
</template>
