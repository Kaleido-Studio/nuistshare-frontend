<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const user = useUser()
const imageFile = ref([])

const { data } = await useApi<{ uploadToken: string }>('/api/upload/token', {
  method: 'GET',
})

const uploadToken = data.value?.uploadToken

async function change(type: string) {
  const body = {} as any
  body[type] = (user as any)[type]
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

const verifyMessage = user.verified ? '已验证' : '未验证，验证之后才可以上传'
</script>

<template>
  <div>
    <TDivider />
    <InfoCard
      title="验证" :description="verifyMessage" icon="user-unlocked" :no-button="user.verified"
      button-text="验证"
      @submit="$router.push('/auth/verify')"
    />

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
      />
    </InfoCard>
    <InfoCard title="用户名" description="请你在这里修改你的用户名" icon="personal-information" @submit="change('name')">
      <TInput v-model="user.name" size="" />
    </InfoCard>
    <InfoCard title="邮箱" description="请你在这里修改你的邮件" icon="mail" @submit="change('email')">
      <TInput v-model="user.email" size="" />
    </InfoCard>
    <InfoCard title="密码" description="请谨慎修改密码" icon="user-unlocked" button-red @submit="$router.push('/auth/reset')" />
  </div>
</template>

<style scoped>

</style>
