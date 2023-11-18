<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const user = useUser()

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
      <template #avatar>
        <FormAvatar />
      </template>
    </InfoCard>
    <InfoCard title="用户名" description="请你在这里修改你的用户名" icon="personal-information" @submit="change('name')">
      <TInput v-model="user.name" size="" class="lg:max-w-70" />
    </InfoCard>
    <InfoCard title="邮箱" description="请你在这里修改你的邮件" icon="mail" @submit="change('email')">
      <TInput v-model="user.email" size="" class="lg:max-w-70" />
    </InfoCard>
    <InfoCard title="密码" description="请谨慎修改密码" icon="user-unlocked" button-red @submit="$router.push('/auth/reset')" />
  </div>
</template>

<style scoped>
.loading-container {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px var(--component-border, #eee) solid;
}
</style>
