<script setup>
const login = useLogin()
const user = useUser()

const visible = defineModel()
</script>

<template>
  <TDrawer
    v-model:visible="visible"
    placement="top"
    class="z-2!"
    size="80%"
    attach="body"
    prevent-scroll-through
  >
    <template #footer>
      <div />
    </template>
    <div class="pt-15" />
    <div class="w-full">
      <div v-if="!login.isLoggedIn">
        <h3 class="text-center">
          提交资料、保存收藏？登录吧！
        </h3>
        <div class="flex flex-col gap-4 justify-around w-full">
          <NuxtLink to="/auth/login" exact-active-class="router-link-exact-active" class="w-full">
            <TButton variant="outline" class="w-full py-3" @click="visible = false">
              登陆
            </TButton>
          </NuxtLink>
        </div>
      </div>
      <div v-else value="/archives/upload">
        <div class="py-5 flex-row flex items-center">
          <TAvatar size="70px" :image="`https://api-nuistshare.dustella.net/api/users/${user.id}/avatar`" />
          <div class="pl-5">
            <p class="text-base text-black">
              {{ user.name }}
            </p>
            <p class="text-base ">
              {{ user.email }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <NuxtLink to="/user/profile">
            <TButton class="w-full" variant="outline" @click="visible = false">
              个人设置
            </TButton>
          </NuxtLink>
          <NuxtLink to="/archives/upload">
            <TButton class="w-full" @click="visible = false">
              上传资料
            </TButton>
          </NuxtLink>
        </div>
      </div>
    </div>
    <TDivider class="mb-0!" />
    <div class="flex flex-col">
      <div value="/" class="text-base py-3" @click="visible = false">
        <NuxtLink to="/" exact-active-class="router-link-exact-active" class="no-underline">
          主页
        </NuxtLink>
      </div>
      <TDivider class="h-1 m-0!" />
      <div value="/archives/entries" class="text-base py-3" @click="visible = false">
        <NuxtLink to="/archives/entries" exact-active-class="router-link-exact-active" class="no-underline">
          资料下载
        </NuxtLink>
      </div>
      <TDivider class="h-1 m-0!" />
      <div value="/apps/entries" class="text-base py-3" @click="visible = false">
        <NuxtLink to="/apps/entries" exact-active-class="router-link-exact-active" class="no-underline">
          软件下载
        </NuxtLink>
      </div>
    </div>
  </TDrawer>
</template>

<style scoped>
:deep(.router-link-active){
  color: #252525;
  font-weight: 800;
  background-color: #ffffff;
  text-underline-offset: 7px;
  text-decoration-thickness: 2px!important;
  text-decoration-style: solid;
}
:deep(.t-menu__item){
  font-size: 0.95rem;
  text-shadow:0.3px 0.3px 0.3px black;
}

:deep(t-button__text){
  padding-top: 8px;
  padding-bottom: 8px;

}
</style>
