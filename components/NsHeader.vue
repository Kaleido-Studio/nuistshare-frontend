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
        <div value="/" class="sm:block! hidden! pl-8 ">
          <NuxtLink to="/" exact-active-class="router-link-exact-active" class="no-underline">
            主页
          </NuxtLink>
        </div>
        <div value="/archives/entries" class="sm:block! hidden! pl-8 ">
          <NuxtLink to="/archives/entries" exact-active-class="router-link-exact-active" class="no-underline">
            资料下载
          </NuxtLink>
        </div>
        <div value="/apps/entries" class="sm:block! hidden! pl-8 ">
          <NuxtLink to="/apps/entries" exact-active-class="router-link-exact-active" class="no-underline">
            软件下载
          </NuxtLink>
        </div>
        <template #operations>
          <TSpace v-if="!login.lsLoggedIn" class="sm:flex! hidden!">
            <NuxtLink to="/auth/login">
              <TButton>
                登陆
              </TButton>
            </NuxtLink>
            <NuxtLink to="/auth/register">
              <TButton variant="outline">
                注册
              </TButton>
            </NuxtLink>
          </TSpace>
          <TSpace v-else align="center" class="sm:flex! hidden!">
            <NuxtLink to="/archives/upload">
              <TButton>
                上传资料
              </TButton>
            </NuxtLink>
            <HeaderDropdown />
          </TSpace>
          <MenuToggle v-model="visible" />
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
  text-underline-offset: 21px;
  text-decoration-thickness: 3px!important;
  text-decoration-style: solid;
  font-weight: 700;
}
/* {
  margin-left: 3px;
} */

:deep(.t-menu__item){
  font-size: 0.95rem;
  text-shadow:0.3px 0.3px 0.3px black;
}
</style>
