<script setup>
const user = useUser()

function logout() {
  window.localStorage.clear()
  navigateTo('auth/login')
}

const avatar = computed(() => {
  return user.avatar
})
</script>

<template>
  <TDropdown min-column-width="88px" max-column-width="700px">
    <TAvatar
      :image="avatar"
    />
    <TDropdownMenu placement="bottom-left" :hide-after-item-click="false" trigger="click">
      <TDropdownItem :active="false">
        <div class="py-5 flex-row flex items-center w-70">
          <TAvatar size="60px" :image="avatar" />
          <div class="pl-5">
            <p class="text-base text-black">
              {{ user.name }}
            </p>
            <p class="text-base ">
              {{ user.email }}
            </p>
          </div>
        </div>
        <TDivider />
      </TDropdownItem>
      <TDropdownItem class="my-3" @click="$router.push('/user/profile')">
        <NuxtLink to="/user/profile" class="text-base decoration-none w-full">
          我的信息
        </NuxtLink>
      </TDropdownItem>
      <TDropdownItem>
        <TButton class="w-full" @click="logout">
          登出
        </TButton>
      </TDropdownItem>
    </TDropdownMenu>
  </TDropdown>
</template>

<style scoped>
:deep(.t-dropdown){
  width: 290px;
}
:deep(.t-dropdown__item-text){
  overflow: visible;
}
</style>
