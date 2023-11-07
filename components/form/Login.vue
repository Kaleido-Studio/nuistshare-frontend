<script setup lang="ts">
import { reactive } from 'vue'
import type { SubmitContext } from 'tdesign-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'

const formData = reactive({
  email: '',
  password: '',
  remember: false,
})

const form = ref(null)

function onReset() {
  MessagePlugin.success('重置成功')
}

async function doLogin() {
  const { email, password } = formData
  const { data } = await useApi<{ access_token: string }>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
  if (data.value?.access_token) {
    MessagePlugin.success('登录成功')
    localStorage.setItem('token', data.value.access_token)
    setTimeout(() => {
      location.href = '/'
    }, 3000)
  }
  else {
    MessagePlugin.error(`登录失败,${data.value}`)
  }
}

function onSubmit(context: SubmitContext) {
  const { validateResult, firstError } = context
  if (validateResult === true)
    doLogin()

  else
    MessagePlugin.warning(firstError!)
}
</script>

<template>
  <div shadow class="mx-auto max-w-[980px] sm:min-w-[300px]">
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
      <t-form-item name="email">
        <t-input v-model="formData.email" size="large" clearable placeholder="请输入账户名">
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

      <t-form-item class="">
        <div class="flex justify-between w-full flex-row">
          <t-checkbox v-model="formData.remember" size="large">
            记住我
          </t-checkbox>
          <!-- forget password -->
          <NuxtLink class="float-right" to="/auth/reset">
            忘记密码
          </NuxtLink>
        </div>
      </t-form-item>

      <t-form-item>
        <t-button size="large" theme="primary" type="submit" block>
          登录
        </t-button>
      </t-form-item>

      <t-form-item>
        <div class="w-full text-base">
          <NuxtLink to="/auth/register">
            没有账户？去注册
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
