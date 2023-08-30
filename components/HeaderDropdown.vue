<script setup>
const user = useUser()

function logout() {
  window.localStorage.clear()
  location.href = '/auth/login'
}
</script>

<template>
  <TDropdown min-column-width="88px" max-column-width="900px">
    <TAvatar
      :image="`https://api-nuistshare.dustella.net/api/users/${user.id}/avatar`"
    />
    <TDropdownMenu placement="bottom-left" :hide-after-item-click="false" trigger="click">
      <TDropdownItem>
        <div class="py-5 flex-row flex items-center w-90">
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
      </TDropdownItem>
      <TDropdownItem>
        <TDivider />
      </TDropdownItem>
      <TDropdownItem>
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
