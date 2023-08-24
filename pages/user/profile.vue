<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const user = useUser()

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
  <div class="my-30 py-10 max-w-[680px] mx-auto sm:px-20 px-5  ">
    <h1 class="text-center">
      我的信息
    </h1>
    <TDivider />
    <InfoCard title="用户名" description="请你在这里修改你的用户名" @submit="change('name')">
      <TInput v-model="user.name" size="" />
    </InfoCard>
    <InfoCard title="邮箱" description="请你在这里修改你的邮件" @submit="change('email')">
      <TInput v-model="user.email" size="" />
    </InfoCard>
    <InfoCard title="密码" description="请谨慎修改密码" button-red />
  </div>
</template>
