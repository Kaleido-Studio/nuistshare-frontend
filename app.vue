<script setup>
import 'tdesign-vue-next/es/style/index.css'
import './styles/theme.css'

function redirecter() {
  const { host, protocol } = location
  if (host === 'nuistshare.cn')
    location.href = 'https://www.nuistshare.cn'

  if (protocol === 'http:' && !host.includes('localhost'))
    location.href = `https://${host}`
}

onBeforeMount(async () => {
  redirecter()
  const login = useLogin()
  const user = useUser()
  login.initData()
  if (login.isLoggedIn)
    user.flushUserInfo()
})
</script>

<template>
  <BaseHeader />
  <main>
    <div class="mt-8">
      <NuxtPage />
    </div>
  </main>
  <BaseFooter />
</template>

<style>
html,
body {
  margin: 0 !important;
  padding: 0 !important;
}

html {
  font-family: "PingFang SC";
  /* background-color: #f5f5f5; */
  scroll-behavior: smooth;
}

:target {
  scroll-margin-top: 4rem;
}

a {
  color: unset;
}

.title-font {
  font-family: "YouSheBiaoTiHei";
  font-weight: 500 !important;
  text-wrap: balance;
}

::selection{
  background-color: rgb(75, 75, 75);
  color: #f5f5f5;
  border-radius: 5px;
}
</style>
