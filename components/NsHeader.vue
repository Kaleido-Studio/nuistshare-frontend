<script setup>
// const route = useRoute()

// const color = computed(() => {
//   const isHomePage = route.path === '/'
//   return isHomePage ? 'text-white' : 'text-black'
// })

const links = [
  {
    title: '主页',
    path: '/',
  },
  {
    title: '电子书和试卷',
    path: '/archives/entries',
  },
]

const login = useLogin()

const visable = ref(false)

const isSmallScreen = useMediaQuery('(max-width: 640px)')

function openMenu() {
  visable.value = true
}
</script>

<template>
  <ClientOnly>
    <header
      class="z-255 flex flex-row items-center border-b-gray-300  border-b dummy lg:justify-around justify-between px-4 fixed left-0 right-0 shadow drop-shadow bg-white backdrop-blur top-0"
    >
      <THeadMenu>
        <template #logo>
          <h2 class="title-font text-2xl">
            Nuistshare
          </h2>
        </template>
        <TMenuItem value="/">
          <NuxtLink to="/" exact-active-class="router-link-exact-active">
            主页
          </NuxtLink>
        </TMenuItem>
        <TMenuItem value="/archives/entries">
          <NuxtLink to="/archives/entries" exact-active-class="router-link-exact-active">
            资料下载
          </NuxtLink>
        </TMenuItem>
        <template #operations>
          <TSpace v-if="!login.lsLoggedIn">
            <NuxtLink to="/login">
              <TButton>
                登陆
              </TButton>
            </NuxtLink>
            <NuxtLink to="/register">
              <TButton variant="outline">
                注册
              </TButton>
            </NuxtLink>
          </TSpace>
          <TSpace v-else>
            <NuxtLink to="/archives/upload">
              <TButton>
                上传资料
              </TButton>
            </NuxtLink>
            <HeaderDropdown />
          </TSpace>
        </template>
      </THeadMenu>
    </header>
  </ClientOnly>
</template>

<style scoped>
:deep(.router-link-active){
  color: #252525;
  background-color: #ffffff;
  text-decoration-line: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 2px!important;
  text-decoration-style: solid;
}
:deep(.t-menu__item){
  font-size: 0.95rem;
  text-shadow:0.3px 0.3px 0.3px black;
}
</style>
