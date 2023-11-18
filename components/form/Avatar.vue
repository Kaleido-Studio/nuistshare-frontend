<script setup lang="ts">
const loading = ref(true)

const { data } = await useApi<{ uploadToken: string }>('/api/upload/token', {
  method: 'GET',
})

const uploadToken = data.value?.uploadToken

const user = useUser()

const avatar = computed(() => user.avatar)

async function change(e) {
  const formData = new FormData()
  formData.append('token', uploadToken)

  formData.append('file', e.target.files[0])
  const res = await fetch('https://upload.qiniup.com/', {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  const body = {
    avatar: data.key,
  }
  const res2 = await useApi<{ id: number }>('/api/users/me', {
    method: 'PUT',
    body,
  })
  if (res2.data.value?.id)
    MessagePlugin.success('成功修改信息')

  else
    MessagePlugin.error('修改信息失败')

  // message ok
}
</script>

<template>
  <div v-loading="loading" class="loading-container hover:contrast-45 transition-all duration-500!">
    <input type="file" @change="upload">
    <TAvatar :image="avatar" size="60px" />
  </div>
</template>
