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
    prevent-scroll-through
  >
    <template #footer />
    <div class="pt-15">
      <TMenu>
        <div value="/" class="py-3 text-[1rem]" @click="visible = false">
          <NuxtLink to="/" exact-active-class="router-link-exact-active" class="no-underline">
            主页
          </NuxtLink>
        </div>
        <div value="/archives/entries" class="py-3 text-[1rem]" @click="visible = false">
          <NuxtLink to="/archives/entries" exact-active-class="router-link-exact-active" class="no-underline">
            资料下载
          </NuxtLink>
        </div>
        <div value="/apps/entries" class="py-3 text-[1rem]" @click="visible = false">
          <NuxtLink to="/apps/entries" exact-active-class="router-link-exact-active" class="no-underline">
            软件下载
          </NuxtLink>
        </div>
      </TMenu>
      <TDivider />
      <div class="w-full">
        <div v-if="!login.lsLoggedIn">
          <h3 class="text-center">
            提交资料、保存收藏？登录吧！
          </h3>
          <div class="flex flex-row gap-4 justify-around w-full">
            <NuxtLink to="/auth/login" exact-active-class="router-link-exact-active" class="w-full">
              <TButton class="w-full" @click="visible = false">
                登陆
              </TButton>
            </NuxtLink>
            <NuxtLink to="/auth/register" exact-active-class="router-link-exact-active" class="w-full">
              <TButton variant="outline" class="w-full" @click="visible = false">
                注册
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
    </div>
  </TDrawer>
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
