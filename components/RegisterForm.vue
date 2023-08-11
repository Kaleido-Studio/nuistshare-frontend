<script setup lang="ts">
import { reactive } from 'vue'
import type { SubmitContext } from 'tdesign-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'

const formData = reactive({
  email: '',
  password: '',
  name: '',
  remember: false,
})

const form = ref(null)

function onReset() {
  MessagePlugin.success('重置成功')
}

async function doRegister() {
  const { email, password } = formData
  const { data } = await useApi<{ access_token: string }>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
  if (data.value?.access_token) {
    MessagePlugin.success('登录成功')
    localStorage.setItem('token', data.value.access_token)
    const router = useRouter()
    router.push('/')
  }
  else {
    MessagePlugin.error(`登录失败,${data.value}`)
  }
}

function onSubmit(context: SubmitContext) {
  const { validateResult, firstError } = context
  if (validateResult === true)
    doRegister()

  else
    MessagePlugin.warning(firstError!)
}
</script>

<template>
  <div shadow class="mx-auto max-w-[980px] sm:min-w-[300px]">
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
      <t-form-item name="email">
        <t-input v-model="formData.email" size="large" clearable placeholder="请输入你的邮件">
          <template #prefix-icon>
            <DesktopIcon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="name">
        <t-input v-model="formData.name" size="large" clearable placeholder="请输入账户名">
          <template #prefix-icon>
            <DesktopIcon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input v-model="formData.password" size="large" type="password" clearable placeholder="请输入密码">
          <template #prefix-icon>
            <LockOnIcon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item>
        <t-button size="large" theme="primary" type="submit" block>
          注册
        </t-button>
      </t-form-item>

      <t-form-item>
        <div class="w-full text-base">
          <NuxtLink to="/login">
            已经有账户了？去登陆
          </NuxtLink>
        </div>
      </t-form-item>
    </t-form>
    <TDivider>或者使用第三方账号</TDivider>
    <div>
      <TIcon size="30px" name="logo-github-filled" />
    </div>
  </div>
</template>
