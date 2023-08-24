<script setup>
// const route = useRoute()

// const color = computed(() => {
//   const isHomePage = route.path === '/'
//   return isHomePage ? 'text-white' : 'text-black'
// })

const links = [
  {
    title: '主页',
    path: '/',
  },
  {
    title: '电子书和试卷',
    path: '/entries',
  },
]

const login = useLogin()

const visable = ref(false)

const isSmallScreen = useMediaQuery('(max-width: 640px)')

function openMenu() {
  visable.value = true
}
</script>

<template>
  <ClientOnly>
    <header
      class="z-255 flex flex-row items-center border-b-gray-300  border-b dummy lg:justify-around justify-between px-4 fixed left-0 right-0 shadow drop-shadow-2xl bg-[#f0f0f099]! backdrop-blur top-0"
    >
      <!-- create a title and a search bar -->
      <TIcon v-if="isSmallScreen" size="large" name="view-list" @click="openMenu" />
      <h1 class="sm:m-3 m-1 ">
        <NuxtLink
          to="/"
          class="title-font overlay no-underline! tracking-[0.1rem]  text-black decoration-none sm:text-3xl text-2xl"
        >
          Nuistshare
        </NuxtLink>
      </h1>
      <TIcon v-if="isSmallScreen" size="large" name="user" />

      <TSpace v-if="!isSmallScreen" align="center" size="3rem">
        <NuxtLink
          v-for="i in links"
          :key="i.title"
          :to="i.path"
          class="overlay tracking-[0.1rem] title-font  text-gray-600 decoration-none sm:text-2xl text-xl transition-all duration-300 hover:text-black"
        >
          {{ i.title }}
        </NuxtLink>
        <TSpace v-if="!login.lsLoggedIn">
          <TButton
            class="text-xl"
            size="large"
            shape="round"
            @click="$router.push('login')"
          >
            登陆
          </TButton>
        </TSpace>
        <div v-else>
          <HeaderDropdown />
        </div>
      </TSpace>
    </header>
    <TDrawer v-model:visible="visable" placement="top" :destroy-on-close="true">
      <template #header>
        <h2 class="title-font">
          Nuistshare
        </h2>
      </template>
      <template #footer />

      <p v-for="i in links" :key="i.title">
        <NuxtLink
          :to="i.path"
          class="decoration-none tracking-[0.1rem] title-font text-gray-600  sm:text-2xl text-xl transition-all duration-300 hover:text-black"
        >
          {{ i.title }}
        </NuxtLink>
      </p>
      <div v-if="!login.lsLoggedIn">
        <NuxtLink
          to="login"
          class="decoration-none tracking-[0.1rem] title-font text-gray-600  sm:text-2xl text-xl transition-all duration-300 hover:text-black"
        >
          登陆
        </NuxtLink>
      </div>
      <div v-else>
        <TAvatar
          :image="`https://api-nuistshare.dustella.net/api/users/${login.userId}/avatar`"
        />
      </div>
    </TDrawer>
  </ClientOnly>
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
}

.router-link{
  font-family: '', Courier, monospace !important;
  font-weight: 600 !important;
}
</style>
