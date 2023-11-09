<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'

const registerC = new RegisterClient()

const { formData, invokeRegister } = registerC
  .setFailureNotifier(MessagePlugin.error)
  .setSuccessNotifier(MessagePlugin.success)
  .setSuccessHook(() => navigateTo('/'))
  .build()
</script>

<template>
  <div shadow class="mx-auto max-w-[980px] sm:min-w-[300px]">
    <t-form :data="formData" :colon="true" :label-width="0" @submit="invokeRegister">
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
