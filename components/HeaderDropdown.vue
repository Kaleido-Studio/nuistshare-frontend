<script setup>
const user = useUser()

function logout() {
  window.localStorage.clear()
  location.href = '/auth/login'
}
</script>

<template>
  <TDropdown>
    <TAvatar
      :image="`https://api-nuistshare.dustella.net/api/users/${user.id}/avatar`"
    />
    <TDropdownMenu :min-column-width="288" :hide-after-item-click="false" trigger="click">
      <TDropdownItem>
        <div>
          <h3 class="w-70">
            Welcome!
          </h3>
        </div>
      </TDropdownItem>
      <TDropdownItem>
        <TDivider />
      </TDropdownItem>
      <TDropdownItem>
        <NuxtLink to="/user/profile" class="text-base decoration-none">
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
