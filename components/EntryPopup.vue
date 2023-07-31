<script setup lang="ts">
const props = defineProps({
  target: Object as PropType<{ link: string; label: string; type: string }[]>,
  name: String,
})

const isVisible = defineModel()
const options = props.target?.map(i => ({ label: i.label, value: i })) ?? []

const currentSource = ref(options[0])

const info = {
  downloadCount: 0,
  viewCount: 0,
  lastUpdated: '',
  size: '',
}

function preview() {
  const { link } = currentSource.value.value
  if (link)
    window.open(link)
}

async function download() {
  const { link, type } = currentSource.value.value
  const { data } = await useFetch('/api/getDownload', {
    method: 'GET',
    query: {
      link,
      type,
    },
  })
  if (data.value.data)
    window.open(data.value.data)
}
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
        <h3>选择下载源</h3>
        <TSelect :options="options" :value="currentSource" value-type="object" />
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
