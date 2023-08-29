<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const route = useRoute()
const { email } = route.query

const modelEmail = ref(email)
const code = ref('')
const newPass = ref('')
const newPassCheck = ref('')
const isSendingCode = ref(false)
const isRestting = ref(false)
let timer: any
const timing = ref(0)

async function sendCode() {
  isSendingCode.value = true
  const resp = await useApi<{ message: string }>('/api/email/send', {
    query:
       { email: modelEmail.value },
  })
  if (resp.data.value?.message === 'ok') {
    MessagePlugin.success('发送成功')
    timing.value = 60
  }
  else { MessagePlugin.error('发送失败, 检查邮箱') }
  isSendingCode.value = false
}

async function submit() {
  if (newPass.value !== newPassCheck.value) {
    MessagePlugin.error('两次密码不一致')
    return
  }
  if (newPass.value.length < 6) {
    MessagePlugin.error('密码长度不得小于6位')
    return
  }

  isRestting.value = true

  const resp = await useApi<{ message: string }>('/api/users/me/password', {
    method: 'PUT',
    body: {
      email: modelEmail.value,
      code: code.value,
      password: newPass.value,
    },
  })
  if (resp.data.value?.message === 'ok') {
    MessagePlugin.success('修改成功，请重新登陆')
    localStorage.clear()
    setTimeout(() => {
      location.href = '/auth/login'
    }, 3000)
    timing.value = 60
  }
  else { MessagePlugin.error('重置失败, 检查验证码') }
  isRestting.value = false
}

onMounted(() => {
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
            <TInput v-model="modelEmail" placeholder="填写邮件地址" />
          </TFormItem>
          <TFormItem label="邮箱验证码" class="w-full">
            <TInput v-model="code" placeholder="输入验证码" />
            <div class="pl-2">
              <TButton :disabled="timing > 0" :loading="isSendingCode" @click="sendCode">
                {{ (timing > 0) ? `${timing}s后重新发送` : '发送验证码' }}
              </TButton>
            </div>
          </TFormItem>
          <TFormItem label="输入新密码" class="w-full">
            <TInput v-model="newPass" placeholder="输入新密码" type="password" />
          </TFormItem>
          <TFormItem label="确认新密码" class="w-full">
            <TInput v-model="newPassCheck" placeholder="确认新密码" type="password" />
          </TFormItem>
          <div class="w-full">
            <TButton class="w-full" @click="submit">
              重置密码
            </TButton>
          </div>
        </TForm>
      </div>
    </TCard>
  </div>
</template>
