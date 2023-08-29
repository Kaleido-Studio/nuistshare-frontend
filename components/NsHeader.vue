<script setup>
const login = useLogin()
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
        <TMenuItem value="/apps/entries">
          <NuxtLink to="/apps/entries" exact-active-class="router-link-exact-active">
            软件下载
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
