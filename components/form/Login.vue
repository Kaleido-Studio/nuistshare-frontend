<script setup lang="ts">
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'

const loginC = new LoginClient()

const { formData, invokeLogin } = loginC
  .setSuccessNotifier(() => {
    MessagePlugin.success('登录成功')
  })
  .setFailureNotifier(() => {
    MessagePlugin.error('登录失败')
  })
  .setSuccessHook(() => {
    navigateTo('/')
  })
  .build()
</script>

<template>
  <div shadow class="mx-auto max-w-[980px] sm:min-w-[300px]">
    <t-form :data="formData" :colon="true" :label-width="0" @submit="invokeLogin">
      <t-form-item name="email">
        <t-input v-model="formData.email" size="large" clearable placeholder="请输入邮箱">
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
    <div @click="MessagePlugin.error('这个功能还没做')">
      <TIcon size="30px" name="logo-github-filled" />
    </div>
  </div>
</template>
