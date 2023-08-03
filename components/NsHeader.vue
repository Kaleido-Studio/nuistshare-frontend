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
</script>

<template>
  <header
    class="z-255 flex flex-row items-center border-b-gray-300 container mx-auto border-b dummy lg:justify-between justify-around px-4 fixed left-0 right-0 bg-white/20 backdrop-blur top-0"
  >
    <!-- create a title and a search bar -->
    <h1>
      <NuxtLink
        to="/"
        class="overlay no-underline! tracking-[0.1rem] title-font text-black decoration-none sm:text-3xl text-2xl"
      >
        Nuistshare
      </NuxtLink>
    </h1>
    <TSpace>
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
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
