<script setup>
// const route = useRoute()

// const color = computed(() => {
//   const isHomePage = route.path === '/'
//   return isHomePage ? 'text-white' : 'text-black'
// })
</script>

<template>
  <header
    class="z-255 flex flex-row item-center border-b-gray-300 border-b dummy lg:justify-around justify-between px-4 fixed left-0 right-0 bg-white/20 backdrop-blur top-0"
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
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
