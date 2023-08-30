<script setup>
const login = useLogin()

const visible = defineModel()
</script>

<template>
  <TDrawer
    v-model:visible="visible"
    placement="top"
    attach="main"
    show-in-attached-element
    class="z-2!"
    size="80%"
  >
    <template #footer />
    <div class="pt-15">
      <TMenu>
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
      </TMenu>
      <TDivider />
      <TMenu>
        <TMenuItem v-if="login.lsLoggedIn" value="/login">
          <TSpace>
            <NuxtLink to="/auth/login" exact-active-class="router-link-exact-active">
              <TButton>
                登陆
              </TButton>
            </NuxtLink>
            <NuxtLink to="/auth/register" exact-active-class="router-link-exact-active">
              <TButton variant="outline">
                注册
              </TButton>
            </NuxtLink>
          </TSpace>
        </TMenuItem>
        <TMenuItem v-else value="/archives/upload">
          <NuxtLink to="/archives/upload" exact-active-class="router-link-exact-active">
            上传资料
          </NuxtLink>
        </TMenuItem>
      </TMenu>
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
