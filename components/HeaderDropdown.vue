<script setup>
const user = useUser()
</script>

<template>
  <TDropdown>
    <TAvatar
      :image="`https://api-nuistshare.dustella.net/api/users/${user.id}/avatar`"
    />
    <TDropdownMenu :min-column-width="288">
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
        <div class="text-base decoration-none">
          登出
        </div>
      </TDropdownItem>
    </TDropdownMenu>
  </TDropdown>
</template>
