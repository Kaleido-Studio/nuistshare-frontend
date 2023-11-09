<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const route = useRoute()
const { email: routeEmail } = route.query
let timer: any

const resetClient = new ResetPasswordClient()

const { formData, status, invokeReset, invokeSendCode } = resetClient
  .setFailureNotifier(MessagePlugin.error)
  .setSuccessNotifier(MessagePlugin.success)
  .setSuccessHook(() => navigateTo('/'))
  .build()

const { email, newPassword, newPasswordCheck, code } = toRefs(formData)
const { timing, isSendingCode } = toRefs(status)

onMounted(() => {
  if (routeEmail)
    email.value = routeEmail as string

  timer = setInterval(() => {
    if (!(timing.value === 0))
      timing.value--
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="max-w-[580px] mx-auto py-25">
    <TCard shadow>
      <div class="flex flex-col items-center max-w-[400px] mx-auto py-10 ">
        <h2 class="py-4">
          重置密码
        </h2>
        <TForm>
          <TFormItem label="输入账户邮箱" class="w-full">
            <TInput v-model="email" placeholder="填写邮件地址" />
          </TFormItem>
          <TFormItem label="邮箱验证码" class="w-full">
            <TInput v-model="code" placeholder="输入验证码" />
            <div class="pl-2">
              <TButton :disabled="timing > 0" :loading="isSendingCode" @click="() => invokeSendCode()">
                {{ (timing > 0) ? `${timing}s后重新发送` : '发送验证码' }}
              </TButton>
            </div>
          </TFormItem>
          <TFormItem label="输入新密码" class="w-full">
            <TInput v-model="newPassword" placeholder="输入新密码" type="password" />
          </TFormItem>
          <TFormItem label="确认新密码" class="w-full">
            <TInput v-model="newPasswordCheck" placeholder="确认新密码" type="password" />
          </TFormItem>
          <div class="w-full">
            <TButton class="w-full" @click="invokeReset">
              重置密码
            </TButton>
          </div>
        </TForm>
      </div>
    </TCard>
  </div>
</template>
