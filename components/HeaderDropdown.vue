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
            Email: {{ user.email }}
          </h3>
        </div>
      </TDropdownItem>
      <TDropdownItem>
        <TDivider />
      </TDropdownItem>
      <TDropdownItem>
        <NuxtLink to="/user/profile" class="text-base decoration-none">
          Info
        </NuxtLink>
      </TDropdownItem>
    </TDropdownMenu>
  </TDropdown>
</template>
