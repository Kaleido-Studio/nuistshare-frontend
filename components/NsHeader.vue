<script setup>
const login = useLogin()
const visible = ref(false)
</script>

<template>
  <ClientOnly>
    <MobileDropdown v-model="visible" />
    <header
      class="z-255 flex flex-row items-center border-b-gray-300  border-b dummy lg:justify-around justify-between px-4 fixed left-0 right-0 shadow drop-shadow bg-white backdrop-blur top-0"
    >
      <THeadMenu>
        <template #logo>
          <h2 class="title-font text-2xl flex flex-row gap-4 justify-around ">
            <span>
              Nuistshare
            </span>
          </h2>
        </template>
        <TMenuItem value="/" class="sm:block! hidden!">
          <NuxtLink to="/" exact-active-class="router-link-exact-active">
            主页
          </NuxtLink>
        </TMenuItem>
        <TMenuItem value="/archives/entries" class="sm:block! hidden!">
          <NuxtLink to="/archives/entries" exact-active-class="router-link-exact-active">
            资料下载
          </NuxtLink>
        </TMenuItem>
        <TMenuItem value="/apps/entries" class="sm:block! hidden!">
          <NuxtLink to="/apps/entries" exact-active-class="router-link-exact-active">
            软件下载
          </NuxtLink>
        </TMenuItem>
        <template #operations>
          <TSpace v-if="!login.lsLoggedIn" class="sm:block! hidden!">
            <MenuToggle v-model="visible" />

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
          <TSpace v-else align="center">
            <MenuToggle v-model="visible" />
            <NuxtLink to="/archives/upload" class="sm:block! hidden!">
              <TButton>
                上传资料
              </TButton>
            </NuxtLink>
            <HeaderDropdown class="sm:flex! hidden!" />
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
