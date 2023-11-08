<script setup>
const login = useLogin()
const visible = ref(false)
</script>

<template>
  <BaseMobileDropdown v-model="visible" />
  <header
    class="z-255  border-b-gray-300
         fixed left-0 right-0
      drop-shadow bg-white  top-0 "
  >
    <div class=" flex flex-row justify-between  items-center  mx-auto container px-6">
      <div class="flex flex-row items-center">
        <h2 class="title-font text-2xl flex flex-row gap-4 justify-around ">
          <span>
            Nuistshare
          </span>
        </h2>
        <div value="/" class="xl:block! hidden! pl-8 ">
          <NuxtLink to="/" exact-active-class="router-link-exact-active" class="no-underline">
            主页
          </NuxtLink>
        </div>
        <div value="/archives/entries" class="xl:block! hidden! pl-8 ">
          <NuxtLink to="/archives/entries" exact-active-class="router-link-exact-active" class="no-underline">
            资料下载
          </NuxtLink>
        </div>
        <div value="/apps/entries" class="xl:block! hidden! pl-8 ">
          <NuxtLink to="/apps/entries" exact-active-class="router-link-exact-active" class="no-underline">
            软件下载
          </NuxtLink>
        </div>
      </div>
      <div>
        <TSpace v-if="!login.isLoggedIn" class="xl:flex! hidden!">
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
        <TSpace v-else align="center" class="xl:flex! hidden!">
          <NuxtLink to="/archives/upload">
            <TButton>
              上传资料
            </TButton>
          </NuxtLink>
          <BaseHeaderDropdown />
        </TSpace>
        <MenuToggle v-model="visible" />
      </div>
    </div>
  </header>
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
