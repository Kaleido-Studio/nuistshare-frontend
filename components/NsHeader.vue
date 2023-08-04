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

const visable = ref(false)

const isSmallScreen = useMediaQuery('(max-width: 640px)')

function openMenu() {
  visable.value = true
}
</script>

<template>
  <ClientOnly>
    <header
      class="z-255 flex flex-row items-center border-b-gray-300  border-b dummy lg:justify-around justify-between px-4 fixed left-0 right-0 bg-white/20 backdrop-blur top-0"
    >
      <!-- create a title and a search bar -->
      <TIcon v-if="isSmallScreen" size="large" name="view-list" @click="openMenu" />
      <h1 class="sm:m-4 m-1 align-middle">
        <NuxtLink
          to="/"
          class="align-middle overlay no-underline! tracking-[0.1rem] title-font text-black decoration-none sm:text-3xl text-2xl"
        >
          Nuistshare
        </NuxtLink>
      </h1>
      <TIcon v-if="isSmallScreen" size="large" name="user" />

      <TSpace v-if="!isSmallScreen">
        <NuxtLink
          v-for="i in links"
          :key="i.title"
          :to="i.path"
          class="overlay no-underline! tracking-[0.1rem] title-font text-gray-600 decoration-none sm:text-2xl text-xl transition-all duration-300 hover:text-black"
        >
          {{ i.title }}
        </NuxtLink>
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
          class="overlay no-underline! tracking-[0.1rem] title-font text-gray-600 decoration-none sm:text-2xl text-xl transition-all duration-300 hover:text-black"
        >
          {{ i.title }}
        </NuxtLink>
      </p>
    </TDrawer>
  </ClientOnly>
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
