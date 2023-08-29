<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const user = useUser()
const imageFile = ref([])

const { data: { value: { uploadToken } } } = await useApi<{ uploadToken: string }>('/api/upload/token', {
  method: 'GET',
})

async function change(type: string) {
  const body = {} as any
  body[type] = (user.value as any)[type]
  const res = await useApi<{ id: number }>('/api/users/me', {
    method: 'PUT',
    body,
  })
  if (res.data.value?.id)
    MessagePlugin.success('成功修改信息')

  else
    MessagePlugin.error('修改信息失败')

  // message ok
}
</script>

<template>
  <div class="my-16 py-10 max-w-[980px] mx-auto sm:px-20 px-5 ">
    <h1 class="text-center">
      我的信息
    </h1>
    <TDivider />
    <InfoCard no-button title="头像" description="上传以修改头像" icon="personal-information" @submit="change('name')">
      <t-upload
        v-model="imageFile"
        theme="image"
        tips="只能上传jpg/png文件，且不超过500kb"
        action="https://up-cn-east-2.qiniup.com"
        :data="{
          token: uploadToken,
        }"
        :format-response="(resp:any) => {
          const url = `https://nuistshare-cdn.dustella.net/${resp.key}`
          return { url }
        }"
        auto-upload
        accept="image/*"
        :locale="{
          triggerUploadText: {
            image: '请选择图片',
          },
        }"
        @success="async(context:any) => {
          console.log(context)
          const url = context.response.url
          await useApi('/api/users/me', {
            method: 'PUT',
            body: {
              avatar: url,
            },
          })
        }"
      >
        <!-- custom UI -->
        <!-- <template #fileListDisplay="{ files }">
          <div>{{ JSON.stringify(files) }}</div>
        </template> -->
      </t-upload>
    </InfoCard>
    <InfoCard title="用户名" description="请你在这里修改你的用户名" icon="personal-information" @submit="change('name')">
      <TInput v-model="user.name" size="" />
    </InfoCard>
    <InfoCard title="邮箱" description="请你在这里修改你的邮件" icon="mail" @submit="change('email')">
      <TInput v-model="user.email" size="" />
    </InfoCard>
    <InfoCard title="密码" description="请谨慎修改密码" icon="user-unlocked" button-red />
  </div>
</template>

<style scoped>

</style>
